import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modules, setModules] = useState('');
  const [srsDocument, setSrsDocument] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/generate-srs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, modules })
    });
    const data = await response.json();
    setSrsDocument(data.srs);
  };

  return (
    <div className="App">
      <h1>SRS Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Project Modules (comma separated)"
          value={modules}
          onChange={(e) => setModules(e.target.value)}
        />
        <button type="submit">Generate SRS</button>
      </form>
      {srsDocument && (
        <div>
          <h2>Generated SRS Document</h2>
          <pre>{srsDocument}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
