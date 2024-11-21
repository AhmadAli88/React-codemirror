/*eslint-disable*/
import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css"; // Default CodeMirror styles
import "codemirror/theme/material.css"; // Material theme
import "codemirror/mode/markdown/markdown"; // Markdown mode

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Markdown Preview");

  const handleChange = (editor, data, value) => {
    setMarkdown(value);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Markdown Editor</h2>
      <ControlledEditor
        value={markdown}
        options={{
          mode: "markdown",
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={handleChange}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Preview</h3>
        <div
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
          dangerouslySetInnerHTML={{ __html: markdownToHTML(markdown) }}
        />
      </div>
    </div>
  );
};

// Markdown parser to convert Markdown to HTML
const markdownToHTML = (markdown) => {
  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>") // Convert ### headers
    .replace(/^## (.*$)/gim, "<h2>$1</h2>") // Convert ## headers
    .replace(/^# (.*$)/gim, "<h1>$1</h1>") // Convert # headers
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>") // Convert blockquotes
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // Convert bold text
    .replace(/\*(.*)\*/gim, "<i>$1</i>") // Convert italic text
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />") // Convert images
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>") // Convert links
    .replace(/\n$/gim, "<br>"); // Convert line breaks
};

export default MarkdownEditor;
