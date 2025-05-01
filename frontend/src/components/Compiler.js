import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function Compiler() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [sourceLang, setSourceLang] = useState("Python");
  const [targetLang, setTargetLang] = useState("Java");

  const handleOptimize = async () => {
    try {
      const res = await axios.post("http://localhost:5000/optimize-code", {
        code,
        language: sourceLang,
      });
      setOutput(res.data.optimized_code);
    } catch (err) {
      console.error(err);
      setOutput("❌ Error optimizing code.");
    }
  };

  const handleConvert = async () => {
    try {
      const res = await axios.post("http://localhost:5000/convert-code", {
        code,
        target_language: targetLang,
      });
      setOutput(res.data.converted_code);
    } catch (err) {
      console.error(err);
      setOutput("❌ Error converting code.");
    }
  };

  return (
    <div className="code-assistant-container">
      <h2>🧠 Code Assistant</h2>

      <label><strong>Source Language:</strong></label>
      <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
      </select>

      <br /><br />
      <textarea
        rows="12"
        cols="100"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <button className="inline-btn" onClick={handleOptimize}>Optimize Code</button>

      <label><strong>Convert to:</strong></label>
      <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
      </select>

      <button className="inline-btn" onClick={handleConvert}>Convert Code</button>

      <br /><br />
      <h3>🧾 Output</h3>
      <textarea rows="12" cols="100" value={output} readOnly />
    </div>
  );
}

export default Compiler;
