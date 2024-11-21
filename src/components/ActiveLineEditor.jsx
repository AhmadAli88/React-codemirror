import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Import necessary CodeMirror styles and addons
import 'codemirror/lib/codemirror.css'; // Base CodeMirror styles
import 'codemirror/theme/material.css'; // Material theme (you can replace with any theme you prefer)
import 'codemirror/mode/javascript/javascript'; // JavaScript syntax highlighting
import 'codemirror/addon/selection/active-line'; // Enable active line highlighting

const ActiveLineEditor = () => {
  const [code, setCode] = useState('// Write your JavaScript code here');

  const handleEditorChange = (editor, data, value) => {
    setCode(value); // Update the code state on editor content change
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Code Editor with Active Line Highlighting</h2>

      {/* ControlledEditor component */}
      <ControlledEditor
        value={code} // The value of the editor (code)
        options={{
          mode: 'javascript', // JavaScript syntax highlighting
          theme: 'material', // Material theme
          lineNumbers: true, // Display line numbers
          styleActiveLine: true, // Highlight the active line
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

export default ActiveLineEditor;
