import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Filter() {
  const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
  return (
    <div className='Filter p-10 pr-0'>
        <p className='mb-3'>Categories</p>
        <hr></hr>
        <ul>
        {posts.map(post =>
         <li className='p-3 flex' key={post.id}>
          <input type="checkbox"></input>
          <h3 className='ml-3'>{post}</h3>
        </li>)}
        </ul>
    </div>
  )
}


// affichage
// onClick catégorie
// ça le met dans le state de Filter
// 2e fetch dans les produits avec la catégorie séléction