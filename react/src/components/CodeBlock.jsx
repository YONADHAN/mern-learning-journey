import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({code}) {


  return (
    <SyntaxHighlighter language="javascript" style={darcula}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;