import styles from "../styles/Homepage.module.css"
import Layout from "../components/Layout"
import Footer from "../styles/Footer.module.css"
import Navbar from "../components/Navbar"
import HomeList from "../components/HomeList"

export default function  Homepage ({articles}){
 
    return (
        <>
            <Layout />
            <br />
            <br />
            <br />
            <br />  
            <br />
            <div className={styles.carousel}>
                <h1>Kejani Homes Carousel</h1>
      
            
            </div>
            <HomeList articles={articles}/>
        </>
    )
}
