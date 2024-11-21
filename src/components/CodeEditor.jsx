import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css"; // Default styling

// Import modes and themes
import "codemirror/mode/javascript/javascript"; // JavaScript mode
import "codemirror/theme/material.css"; // Material theme

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your JavaScript code here");

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <ControlledEditor
      value={code}
      options={{
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={handleChange}
    />
  );
};

export default CodeEditor;
