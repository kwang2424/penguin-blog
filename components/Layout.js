import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            {children}
        </>
    )
}