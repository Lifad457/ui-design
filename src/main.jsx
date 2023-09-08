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
import Forms from './pages/forms/Forms.jsx'
import Step2 from './pages/forms/Step2.jsx'
import Step3 from './pages/forms/Step3.jsx'
import UIAnimation from './pages/UIAnimation.jsx'
import Index from './pages/final-project/Index.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<App />} />
    <Route element={<TastyBites />} path='tasty-bites' />
    <Route element={<TeaPLace />} path='tea-place' />
    <Route element={<Gradient />} path='gradient' />
    <Route element={<Forms />} path='forms' />
    <Route element={<Step2 />} path='step2' />
    <Route element={<Step3 />} path='step3' />
    <Route element={<UIAnimation />} path='ui-animation' />
    <Route element={<Index />} path='final-project' >

    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
