const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Nack-glitch:nack_123@cluster0.mscgqqb.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")

  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err))

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author:{type: String},
  pages:{type: Number},
});

const BookModel = mongoose.model('Book', bookSchema);

app.post('/books', async (req, res) => {
    const book = new BookModel(req.body);
    await book.save();
    res.status(200).json(book);
  
});

app.get('/books', async (req, res) => {
    const books = await BookModel.find();
    res.status(200).json(books)
});

app.get('/books/:id', async (req, res) => {
  
    const book = await BookModel.findById(req.params.id);
    res.status(200).json(book)
  
});

app.put('/books/:id', async (req, res) => {

    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(book)

 
  
});

app.delete('/books/:id', async (req, res) => {

    const book = await BookModel.deleteOne({_id:req.params.id});
    res.status(200).json(book)

});

app.listen(1000, () => console.log(" Server running at http://localhost:1000"));
