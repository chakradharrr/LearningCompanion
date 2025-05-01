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
      const res = await axios.post("http://127.0.0.1:5000/optimize-code", {
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
      const res = await axios.post("http://127.0.0.1:5000/convert-code", {
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
    <div className="code-assistant-container ms-5 mt-5">
      <h2>🧠 Code Assistant</h2>
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="sourceLang" className="form-label"><strong><h3>Source Language:</h3></strong></label>
        <select
          className="form-select w-25 fs-3"
          id="sourceLang"
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
        </select>
      </div>


      <br /><br />
      <textarea
        rows="12"
        cols="100"
        className="mb-5 fs-3"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

    
      <div className="d-flex gap-5 m-4 " w-50>
        <div className="d-flex  align-items-center justify-content-center">
          <button className="inline-btn h-50" onClick={handleOptimize}>Optimize Code</button>
        </div>
        <div className="d-flex flex-column">
          <label><strong><h3>Convert to:</h3></strong></label>
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} className="form-select fs-3">
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
          </select>

          <button className="inline-btn" onClick={handleConvert}>Convert Code</button>
        </div>
      </div>
      <br /><br />
      <h3>🧾 Output</h3>
      <textarea rows="12" cols="100" value={output} readOnly className="mb-5 fs-3"/>

    </div>
  );
}

export default Compiler;
