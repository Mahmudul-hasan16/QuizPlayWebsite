import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Header />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: 'topics',
        element: <Topics></Topics>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: '/topic/:topicId',
        loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
        element: <Quiz />
      },
      {
        path: 'statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={1000} />
    </>

  );
}

export default App;
