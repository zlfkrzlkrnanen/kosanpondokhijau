import { Route, Routes, Navigate } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import PublicLayouts from "../layouts/PublicLayouts"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicLayouts/>}>
      <Route path="*" element={<PublicRoutes/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
