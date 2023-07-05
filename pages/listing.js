import Layout from "../components/Layout"
import styles from "../styles/Listing.module.css"
import Head from "next/head";

   export default function Listing() {
      return (
         <>
         <Head>
            <title>Create Your Listing</title>
         </Head>
         <Layout />
         <div className={styles.main1}>
            <br />
            <br />
            <br />
            <br />  
            <br />
            <h1 className={styles.container}>Listing</h1>
            <h2>Listing</h2>
            <p className={styles.container1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur vel quidem, officia nam totam quam architecto reiciendis voluptas esse cupiditate odio neque blanditiis facere incidunt mollitia vero voluptatem est.</p>
         </div>
         </>
      )
   }