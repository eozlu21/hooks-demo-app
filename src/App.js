// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UseStateDemo from "./components/useState/UseStateDemo";
import UseEffectDemo from "./components/useEffect/UseEffectDemo";
import ParentComponent from "./components/useContext/ParentComponent";
import UseReducerDemo from "./components/useReducer/UseReducerDemo";
import UseCallbackDemo from "./components/useCallback/UseCallbackDemo";
import UseMemoDemo from "./components/useMemo/UseMemoDemo";
import UseRefDemoMutableValue from "./components/useRef/UseRefDemoMutableValue";
import UseRefDemoComponent from "./components/useRef/UseRefDemoComponent";
import UseImperativeHandleDemo from "./components/useImperativeHandle/UseImperativeHandleDemo";
import UseLayoutEffectDemo from "./components/useLayoutEffect/UseLayoutEffectDemo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseStateDemo />} />
        <Route path="/use-effect" element={<UseEffectDemo />} />
        <Route path="/use-context" element={<ParentComponent />} />
        <Route path="/use-reducer" element={<UseReducerDemo />} />
        <Route path="/use-callback" element={<UseCallbackDemo />} />
        <Route path="/use-memo" element={<UseMemoDemo />} />
        <Route
          path="/use-ref/mutable-values"
          element={<UseRefDemoMutableValue />}
        />
        <Route path="/use-ref/components" element={<UseRefDemoComponent />} />
        <Route
          path="/use-imperative-handle"
          element={<UseImperativeHandleDemo />}
        />
        <Route path="/use-layout-effect" element={<UseLayoutEffectDemo />} />
      </Routes>
    </Router>
  );
};

export default App;
