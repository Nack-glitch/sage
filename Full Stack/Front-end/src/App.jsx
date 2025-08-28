import { useState,useEffect } from "react";
import "./App.css";
export default function App(){

const [laptops,setLaptops]=useState("");
const[form,setForm]=useState({id:null,name:"",madeIn:"",establishedYear:""});
const [isEditing,setIsEditing]=useState(false);

const API_URL = "http://localhost:5000/api/laptops";

const fetchLaptops = async ()=> {
    const res = await fetch(API_URL);
    const data = await res.json();
    setLaptops(data);
};
useEffect(()=>{
    fetchLaptops();
});

const handleChange =  (e)=>{
setForm({...form,[e.target.name]:e.target.value})
};

// post
const handleAdd =async ()=>{
     if (!form.name || !form.madeIn || !form.establishedYear) return alert("All fields required");
    const res = await fetch (API_URL,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(form),
    });
    const newLaptops= await res.json();
    setLaptops([...laptops,newLaptops]);
    setForm({id:null,name:"",madeIn:"",establishedYear:""});
};
const handleUpdate = async ()=>{
    const res = await fetch(API_URL + "/" + form.id,{
        method:"PUT",
        header:{"content-Type":"application/json"},
        body: JSON.stringify(form),
    })
const updateLaptops = await res.json();
setLaptops(laptops.map((l)=>(l.id===updateLaptops.id ? updateLaptops: l)));
setIsEditing(false);
setForm({id:null,name:"",madeIn:"",establishedYear:""});
 // Delete laptop
  const handleDelete = async (id) => {
    await fetch(API_URL + "/" + id, {method: "DELETE"});
    setLaptops(laptops.filter((l) => l.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Laptop CRUD App</h1>
      </header>

      {/* Form */}
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Laptop Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="madeIn"
          placeholder="Made In"
          value={form.madeIn}
          onChange={handleChange}
        />
        <input
          type="number"
          name="establishedYear"
          placeholder="Year"
          value={form.establishedYear}
          onChange={handleChange}
        />
        <div className="add-button" >
        {isEditing ? (
          <button onClick={handleUpdate}>Update Laptop</button>
        ) : (
         <button onClick={handleAdd}>Add Laptop</button>
        )}
        </div>
      </div>

      {/* Laptop Cards */}
      <div className="laptop-list">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="card">
            <h3>{laptop.name}</h3> {/* ID hidden from frontend */}
            <p>Made in: {laptop.madeIn}</p>
            <p>Established: {laptop.establishedYear}</p>
            <button onClick={() => handleChange(laptop)}>Edit</button>
            <button onClick={() => handleDelete(laptop.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
}

