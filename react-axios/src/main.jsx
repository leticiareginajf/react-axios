import './index.css'
import App from './App.jsx'

import {creteBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

const route = creteBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
