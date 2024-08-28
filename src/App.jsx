import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Views
import Home from "./views/Home.jsx"
import InsertionSort from './views/InsertionSort.jsx';
import QuickSort from './views/QuickSort.jsx';
import SelectionSort from './views/SelectionSort.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/insertion-sort',
    element: <InsertionSort />,
  },
  {
    path: '/quick-sort',
    element: <QuickSort />,
  },
  {
    path: '/selection-sort',
    element: <SelectionSort />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
