import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Topics</h2>

        <ul >
          
          <li><Link to="/uncontrolled-components">Uncontrolled</Link></li>
          <li><Link to="/react-memo">React.memo</Link></li>
          <li><Link to="/use-memo">useMemo</Link></li>
          <li><Link to="/use-callback">useCallback</Link></li>
          <li><Link to={"/lazy-loading"}>Lazy Loading</Link></li>
          <li><Link to={"/use-context"}>Use Context</Link></li>
          <li><Link to={"/sibiling-communication"}>Sibiling Communication</Link></li>
          <li><Link to={"/use-fetch"}>Use Fetch</Link></li>
          <li><Link to={"/use-reducer"}>Use Reducer</Link></li>
          <li><Link to={"/higher-order-component"}>Higher Order Component</Link></li>
          <li><Link to={"/notes"}>Notes</Link></li>
        </ul>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <Outlet />
      </div>

    </div>
  );
};

const styles = {
  container: { display: "flex", height: "100vh", overflow: "hidden" },
  sidebar: {
    width: "200px",
    background: "#000000",
    color: "#fff",
    padding: "20px"
  },
  content: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    width: "100%",
    height: "100vh"
  }
};

export default MainLayout;