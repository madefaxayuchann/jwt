import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './view/Login';
function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      index: true,
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
