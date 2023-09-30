import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './Scenes/Admin/AdminHome'
import Login from './Scenes/Admin/Login'
import VisitorHome from './Scenes/Visitors/VisitorHome'
import PostBlog from './Scenes/PostBlog'

export default function App() {
  return (
    <div className='scor32k bg-black text-white font-Poppins' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VisitorHome />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/blog" element={<PostBlog />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}