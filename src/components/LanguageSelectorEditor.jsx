import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Import CodeMirror styles and modes
import 'codemirror/lib/codemirror.css'; // Base CodeMirror styles
import 'codemirror/theme/material.css'; // Material theme
import 'codemirror/mode/javascript/javascript'; // JavaScript mode
import 'codemirror/mode/python/python'; // Python mode
import 'codemirror/mode/markdown/markdown'; // Markdown mode

const LanguageSelectorEditor = () => {
  const [language, setLanguage] = useState('javascript'); // Default language is JavaScript
  const [code, setCode] = useState('// Write your code here');

  const handleEditorChange = (editor, data, value) => {
    setCode(value); // Update state when the editor content changes
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Code Editor with Language Selection</h2>

      {/* Language selection dropdown */}
      <select onChange={(e) => setLanguage(e.target.value)} value={language} style={{ marginBottom: '20px' }}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="markdown">Markdown</option>
      </select>

      {/* ControlledEditor component */}
      <ControlledEditor
        value={code} // The value of the editor (code)
        options={{
          mode: language, // Set the mode based on the selected language
          theme: 'material', // Theme for the editor
          lineNumbers: true, // Show line numbers
        }}
        onBeforeChange={handleEditorChange} // Handle content changes in the editor
      />

      {/* Display the code content */}
      <div style={{ marginTop: '20px' }}>
        <h3>Code Output</h3>
        <pre
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9',
          }}
        >
          {code}
        </pre>
      </div>
    </div>
  );
};

export default LanguageSelectorEditor;
