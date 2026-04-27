import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/notes.md") 
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPage;