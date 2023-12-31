import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card from './Component/Card.js';
import CardDetails from './pages/CardDetails.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Card></Card>
      },
      {
        path: 'show/:id',
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/lookup/shows?imdb=${params.id}`)
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

