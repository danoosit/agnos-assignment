import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import FingerArea from './pages/FingerArea';

function App() {

  const LandingPage = <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>;

  const router = createBrowserRouter([
    {
      path: "*", element: <Root />
    },
  ]);

  function Root() {
    return (
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/finger" element={<FingerArea />} />
      </Routes>
    );
  }


  return (
    <RouterProvider router={router} />
  );
}

export default App;
