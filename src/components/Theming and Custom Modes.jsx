import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// Import necessary CodeMirror styles and modes
import 'codemirror/lib/codemirror.css'; // Base styles for CodeMirror
import 'codemirror/theme/dracula.css'; // Dracula theme
import 'codemirror/mode/python/python'; // Python syntax highlighting

const PythonEditor = () => {
  const [code, setCode] = useState('# Write your Python code here');

  const handleEditorChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Python Code Editor</h2>
      <ControlledEditor
        value={code}
        options={{
          mode: 'python', // Enable Python syntax highlighting
          theme: 'dracula', // Set the theme to Dracula
          lineNumbers: true, // Display line numbers
        }}
        onBeforeChange={handleEditorChange} // Handle changes to the editor's content
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

export default PythonEditor;
