import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'stocks',
    element: <Stocks />
  },
  {
    path: 'movies',
    element: <Movies />
  },
  {
    path: '*',
    element: <h1>Page not found.</h1>
  }
]);

const routerJsx = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='stocks' element={<Stocks />} />
      <Route path='movies' element={<Movies />} />
      <Route path='*' element={<h1>Page not found.</h1>} />
    </>
  )
)

function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <RouterProvider router={ routerJsx } />
    </div>
  );
}

export default App;
