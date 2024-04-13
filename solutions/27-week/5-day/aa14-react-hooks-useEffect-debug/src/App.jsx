import { createBrowserRouter, createRoutesFromElements, RouterProvider, 
         Route } from 'react-router-dom';
import RandomUser from './RandomUser';
import Unmounted from './Unmounted';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Unmounted />} />
      <Route path='mount' element={<RandomUser /> } />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
