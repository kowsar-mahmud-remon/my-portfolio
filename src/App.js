import './App.css';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';

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
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
