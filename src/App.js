import './App.css';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      // errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
