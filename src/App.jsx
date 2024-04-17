import './App.css';
import Layout from './layouts/layout';
import HomePage from './pages/homePage/homePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListingPage from './pages/listing/listingPage';
import DetailPage from './pages/detailPage/detailPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Layout />
      ),
      children: [
        {
          path: "/",
          element: (
            <HomePage />
          )
        },
        {
          path: "/list",
          element: (
            <ListingPage />
          )
        },
        {
          path: "/details",
          element: (
            <DetailPage />
          )
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
