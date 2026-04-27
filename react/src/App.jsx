import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UncontrolledComponents from "./pages/uncontrolledComponents/UncontrolledComponents";
import ExplanationReactMemo from "./pages/react.memo/explanation";
import ExplanationUseMemo from "./pages/useMemo/ExplonationUseMemo";
import ExplanationUseCallback from "./pages/useCallback/Explanation";
import ExplanationLazyLoading from "./pages/lazyLoading/Explanation";
import ExplanationUseContext from "./pages/useContext/Explanation";
import Home from "./pages/Home";
import ExplanationSibilingCommunication from "./pages/sibilingCommunication/Explanation";
import ExplanationUseFetch from "./pages/useFetch_customHook/Explanation";
import ExplanationUseReducer from "./pages/useReducer/Explanation";
import ExplanationHOC from "./pages/higherOrderComponent/hoc";
import MarkdownPage from "./utils/markDownPage";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="uncontrolled-components" element={<UncontrolledComponents />} />
          <Route path="react-memo" element={<ExplanationReactMemo />} />
          <Route path="use-memo" element={<ExplanationUseMemo  />} />
          <Route path = "use-callback" element={<ExplanationUseCallback/>}/>
          <Route path="lazy-loading" element={<ExplanationLazyLoading/>}/>
          <Route path="use-context" element={<ExplanationUseContext/>}/>
          <Route path="sibiling-communication" element={<ExplanationSibilingCommunication/>}/>
          <Route path="use-fetch" element={<ExplanationUseFetch/>}/>
          <Route path="use-reducer" element={<ExplanationUseReducer/>}/>
          <Route path="higher-order-component" element={<ExplanationHOC/>}/>
          <Route path="notes" element={<MarkdownPage/>}/>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;