// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hooks Demo App</h1>
        <nav>
          <ul className="home-nav">
            <li>
              <Link to="/use-state/primitives" className="home-link">useState Demo with Primitives</Link>
            </li>
            <li>
              <Link to="/use-state/objects" className="home-link">useState Demo with Objects</Link>
            </li>
            <li>
              <Link to="/use-effect" className="home-link">useEffect Demo</Link>
            </li>
            <li>
              <Link to="/use-context" className="home-link">useContext Demo</Link>
            </li>
            <li>
              <Link to="/use-reducer" className="home-link">useReducer Demo</Link>
            </li>
            <li>
              <Link to="/use-callback" className="home-link">useCallback Demo</Link>
            </li>
            <li>
              <Link to="/use-memo" className="home-link">useMemo Demo</Link>
            </li>
            <li>
              <Link to="/use-ref/mutable-values" className="home-link">useRef Mutable Values Demo</Link>
            </li>
            <li>
              <Link to="/use-ref/components" className="home-link">useRef Component Demo</Link>
            </li>
            <li>
              <Link to="/use-imperative-handle" className="home-link">useImperativeHandle Demo</Link>
            </li>
            <li>
              <Link to="/use-layout-effect" className="home-link">useLayoutEffect Demo</Link>
            </li>
            <li>
              <Link to="/use-query/basic" className="home-link">useQuery Demo</Link>
            </li>
            <li>
              <Link to="/use-query/pagination" className="home-link">useQuery Demo with Pagination</Link>
            </li>
            <li>
              <Link to="/use-query/query-keys" className="home-link">useQuery Demo for Query Keys</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
