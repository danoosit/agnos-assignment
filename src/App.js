import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import FingerArea from './pages/FingerArea';
import AbdominalArea from './pages/AbdominalArea';
import HomePage from './pages/Home';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/finger" element={<FingerArea />} />
        <Route path="/abdominal" element={<AbdominalArea />} />
      </Routes>
    );
  }


  return (
    <RouterProvider router={router} />
  );
}

export default App;
