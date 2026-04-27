
import CodeBlock from "../../components/CodeBlock";

const ExplanationHOC = () => {
    const code = `const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const isLoggedIn = true; // replace with real logic

    if (!isLoggedIn) {
      return <h2>Please login</h2>;
    }

    return <Component {...props} />;
  };
};

    `

    const useHOCExampleCode = `const Dashboard = () => <h1>Dashboard</h1>;

export default withAuth(Dashboard);`
return (
    <div>
        <h1>Higher Order Components (HOC)</h1>
        <p>HOCs are functions that take a component and return a new component with additional props or behavior.</p>
        <CodeBlock code={code} />
        <p>How to use the HOC: </p>
        <CodeBlock code={useHOCExampleCode} />
    </div>
)
}

export default ExplanationHOC;