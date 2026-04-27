import CodeBlock from "./CodeBlock";

const TopicFrame = ({ name, description, code }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div style={styles.container}>
      
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.description}>{description}</p>

      <div style={styles.codeWrapper}>
        
       
        <div style={styles.codeHeader}>
          <span>Example Code</span>
          <button style={styles.copyBtn} onClick={handleCopy}>
            Copy
          </button>
        </div>

        <CodeBlock code={code} />
      </div>

    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#fafafa",
  },
  title: {
    marginBottom: "10px",
  },
  description: {
    marginBottom: "15px",
    color: "#555",
  },
  codeWrapper: {
    borderRadius: "8px",
    overflow: "hidden",
  },
  codeHeader: {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    padding: "8px 12px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyBtn: {
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TopicFrame;