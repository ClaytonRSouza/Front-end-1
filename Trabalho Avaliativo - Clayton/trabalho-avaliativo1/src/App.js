import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Character from './pages/Character';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/character/:id',
    element: <Character />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
