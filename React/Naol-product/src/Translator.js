import React, { useState } from "react";
import axios from "axios";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const res = await axios.post("https://libretranslate.de/translate", {
        q: text,
        source: "en",
        target: "es", // translate to Spanish for example
        format: "text",
      });
      setTranslated(res.data.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslated("Error translating text.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Translator</h1>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <h2>Translated Text:</h2>
      {loading ? <p>Translating...</p> : <p>{translated}</p>}
    </div>
  );
}
