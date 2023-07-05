import React from 'react'
import Link from 'next/link'
import articleStyles from '../styles/Listing.module.css'
const HomeItem = ({article}) => {
  return (
    <>
    <Link legacyBehavior href="/article/[id]" as={`/article/${article.id}`}>
        <a href="" className={articleStyles.carde}>
     
            <h3>{article.title}&rarr;</h3>
            <p>{article.description}</p>
        
        </a>
   
    </Link>
    </>
  )
}

export default HomeItem