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
