import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import Layout from './pages/Layout.jsx'
import App from './pages/App.jsx'
import NotFound from './pages/NotFound.jsx'
import TastyBites from './pages/TastyBites.jsx'
import TeaPLace from './pages/TeaPlace.jsx'
import Gradient from './pages/Gradient.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<App />} />
    <Route element={<TastyBites />} path='tasty-bites' />
    <Route element={<TeaPLace />} path='tea-place' />
    <Route element={<Gradient />} path='gradient' />

    <Route path="*" element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
