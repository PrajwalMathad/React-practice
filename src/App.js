import { lazy, Suspense } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import MainContainer from './components/MainContainer';
import Users, { usersLoader } from './components/Users';
import ErrorPage from './components/ErrorPage';


// lazy loading the posts component
const Posts = lazy(() => import('./components/Posts'));


const router = createBrowserRouter([
  {
    path: '',
    element: <MainContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/users',
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: '/posts',
        element: <Suspense fallback={<p>Loading...</p>}><Posts /></Suspense>,
        loader: () => import('./components/Posts').then(module => module.postsLoader())
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
