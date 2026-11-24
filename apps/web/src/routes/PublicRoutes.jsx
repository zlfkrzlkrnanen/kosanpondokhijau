import { Routes,Route,Navigate } from "react-router-dom"
import Beranda from "../pages/Beranda"
import About from "../pages/About"
import Informasi from "../pages/Informasi"
import Kontak from "../pages/Kontak"

const PublicRoutes = () => {
  return (
    <Routes>
        <Route index element={<Beranda/>} />
        <Route path="about" element={<About/>} />
        <Route path="informasi" element={<Informasi/>} />
        <Route path="kontak" element={<Kontak/>} />
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>

  )
}

export default PublicRoutes
