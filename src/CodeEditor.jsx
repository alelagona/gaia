import React from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <Editor
      height="400px"
      defaultLanguage="javascript"
      defaultValue="// scrivi il tuo codice qui"
      theme="vs-dark"
      onChange={(value, event) => {
        console.log("contenuto editor:", value);
      }}
    />
  );
}

export default CodeEditor;