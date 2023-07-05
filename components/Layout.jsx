import Navbar from "./Navbar"
import styles from "../styles/Layout.module.css"
import Homepage from "../pages/homepage"
import Footer from "../pages/footer"
export default function Layout ({children}) {
    return (
        <>
            
    <Navbar />
  

   <Footer />
        </>
    )
}import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
     

    </div>
  )
}