import React, { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

// Import CodeMirror styles and addons
import "codemirror/lib/codemirror.css"; // Base styles
import "codemirror/theme/material.css"; // Material theme
import "codemirror/mode/javascript/javascript"; // JavaScript mode
import "codemirror/addon/lint/lint"; // Core linting addon
import "codemirror/addon/lint/javascript-lint"; // JavaScript linting
import "codemirror/addon/lint/lint.css"; // Lint styles

const LintingEditor = () => {
  const [code, setCode] = useState("// Write your JavaScript code here");

  const handleEditorChange = (editor, data, value) => {
    setCode(value);
  };

  const eslintConfig = {
    rules: {
      "no-unused-vars": "error", // Highlight unused variables
      "no-undef": "error", // Highlight undefined variables
      "no-console": "warn", // Warn about console statements
      "no-constant-condition": "error", // Prevent invalid constant declarations
    },
    env: {
      browser: true,
      es6: true,
    },
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>JavaScript Code Editor with Linting</h2>
      <ControlledEditor
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lint: {
            eslintConfig,
          },
          gutters: ["CodeMirror-lint-markers"],
        }}
        onBeforeChange={handleEditorChange}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Output</h3>
        <pre
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {code}
        </pre>
      </div>
    </div>
  );
};

export default LintingEditor;
