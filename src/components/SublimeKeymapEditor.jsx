import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Import CodeMirror styles and keymap
import 'codemirror/lib/codemirror.css'; // Base CodeMirror styles
import 'codemirror/theme/material.css'; // Optional: Material theme (or use your preferred theme)
import 'codemirror/mode/javascript/javascript'; // Enable JavaScript syntax highlighting
import 'codemirror/keymap/sublime'; // Use Sublime Text key bindings

const SublimeKeymapEditor = () => {
  const [code, setCode] = useState('console.log("Hello, Sublime!");');

  const handleEditorChange = (editor, data, value) => {
    setCode(value); // Update state on editor change
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>JavaScript Editor with Sublime Key Bindings</h2>
      <ControlledEditor
        value={code} // The value of the code to display in the editor
        options={{
          mode: 'javascript', // JavaScript syntax highlighting
          theme: 'material', // Use Material theme (you can change this to any theme)
          keyMap: 'sublime', // Enable Sublime Text key bindings
          lineNumbers: true, // Display line numbers
        }}
        onBeforeChange={handleEditorChange} // Handle changes to editor content
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

export default SublimeKeymapEditor;
