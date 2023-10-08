import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './Scenes/Admin/AdminHome'
import Login from './Scenes/Admin/Login'
import VisitorHome from './Scenes/Visitors/pages/VisitorHome'
import BlogPage from './Scenes/Visitors/pages/BlogPage'
import NotFound from './Scenes/Visitors/pages/NotFound'

export default function App() {
  return (
    <div className='scor32k bg-black text-white font-Poppins relative' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VisitorHome />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}