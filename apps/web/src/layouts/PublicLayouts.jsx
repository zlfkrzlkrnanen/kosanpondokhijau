import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const PublicLayouts = () => {
  return (
 <div className="flex min-h-screen flex-col bg-white">
    <Navbar/>
    <main className='flex-1'>
    <Outlet/>
    </main>
 </div>
  )
}

export default PublicLayouts

