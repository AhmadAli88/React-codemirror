import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Import CodeMirror styles
import 'codemirror/lib/codemirror.css'; // Base CodeMirror styles
import 'codemirror/theme/material.css'; // Optional: Add a theme like Material
import 'codemirror/mode/javascript/javascript'; // Enable JavaScript syntax highlighting

const JavaScriptEditor = () => {
  const [code] = useState("console.log('Hello World!');");

  return (
    <div style={{ margin: '20px' }}>
      <h2>Read-Only JavaScript Editor</h2>
      <ControlledEditor
        value={code} // The code displayed in the editor
        options={{
          mode: 'javascript', // Set syntax highlighting mode to JavaScript
          theme: 'material', // Optional: Set theme to Material (you can change this)
          lineNumbers: true, // Display line numbers
          readOnly: true, // Set editor to read-only mode
        }}
      />
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

export default JavaScriptEditor;
