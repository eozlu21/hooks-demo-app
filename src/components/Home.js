// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hooks Demo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/use-state">useState Demo</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect Demo</Link>
          </li>
          <li>
            <Link to="/use-context">useContext Demo</Link>
          </li>
          <li>
            <Link to="/use-reducer">useReducer Demo</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback Demo</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo Demo</Link>
          </li>
          <li>
            <Link to="/use-ref/mutable-values">useRef Mutable Values Demo</Link>
          </li>
          <li>
            <Link to="/use-ref/components">useRef Component Demo</Link>
          </li>
          <li>
            <Link to="/use-imperative-handle">useImperativeHandle Demo</Link>
          </li>
          <li>
            <Link to="/use-layout-effect">useLayoutEffect Demo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
