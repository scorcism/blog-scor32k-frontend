import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './Scenes/Admin/AdminHome'
import Login from './Scenes/Admin/Login'
import VisitorHome from './Scenes/Visitors/VisitorHome'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VisitorHome />} />
          <Route path="/admin" element={<AdminHome />} >
          </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}