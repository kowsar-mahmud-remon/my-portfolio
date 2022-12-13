import './App.css';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ProjectDetails from './components/Home/MyProjects/ProjectDetails';
import ProjectsDetailsOne from './components/Home/MyProjects/ProjectsDetailsCard/ProjectsDetailsOne';
import ProjectsDetailsTwo from './components/Home/MyProjects/ProjectsDetailsCard/ProjectsDetailsTwo';
import ProjectsDetailsThree from './components/Home/MyProjects/ProjectsDetailsCard/ProjectsDetailsThree';

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
        },
      ]
    },
    {
      path: '/projects/1',
      element: <ProjectsDetailsOne></ProjectsDetailsOne>
    },
    {
      path: '/projects/2',
      element: <ProjectsDetailsTwo></ProjectsDetailsTwo>
    },
    {
      path: '/projects/3',
      element: <ProjectsDetailsThree></ProjectsDetailsThree>
    },
  ]);
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
