import React from 'react'
import styles from "../styles/Listing.module.css"
import HomeItem from './HomeItem'
const HomeList = ({articles}) => {
  return (
    <>
         <div >
                {articles.map((article) => (
                 
                        //   <h3 className={styles.card} key={article.id}>{article.title}</h3>
                     
                  <HomeItem key={article.id} article={article}/>
                    
                    ))}
                
        </div>
      
    </>

  )
}

export default HomeList