import { server } from '../../../config'
import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
const article = ({article}) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
    This is home {article.id}
    <h1>{article.title}</h1>
    <p>{article.description}</p>
    <br />
    <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async(context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()
  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id:id.toString()}}))

  return {
    paths,
    fallback: false
    // if we go to something that doesnt exist it will throw a 404 page
  }
}


// gets data at build time
// export const getStaticProps = async(context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json()
//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () =>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: {id:id.toString()}}))

//   return {
//     paths,
//     fallback: false
//     // if we go to something that doesnt exist it will throw a 404 page
//   }
// }

export default article