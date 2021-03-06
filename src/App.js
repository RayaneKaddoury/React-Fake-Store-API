import Product from "./Product"
import Filter from "./Filter";
import Total from "./Total";


import React, {useState, useEffect} from 'react'
import axios from 'axios'

// TO DO :
// ADD REACT ROUTER
// USE REACT MUI
// SORT BY PRICE


function App() {
  
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (category.length == 0) {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
          setPosts(res.data)
      })
      .catch(err => {
          console.log(err)
      });
      
  } else {
    axios.get('https://fakestoreapi.com/products/category/' + category)
  .then(res => {
      setPosts(res.data)
      console.log(posts)
  })
  .catch(err => {
      console.log(err)
  })
}}, [category])


  // Attempt to display several categories at once

  //   useEffect(() => {
  //     if (category.length == 0) {
  //       axios.get('https://fakestoreapi.com/products')
  //       .then(res => {
  //           setPosts(res.data)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       });
        
  //   } else for (let index = 0; index < category.length; index++) {
  //     const element = category[index]; {
  //     axios.get('https://fakestoreapi.com/products/category/' + element)
  //   .then(res => {
  //       setPosts(res.data)
  //       console.log(posts)
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })}
  // }}, [category])



  return (
    <div className="App ">
      <header className="App-header bg-blue-200 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3">
          Fake Store
        </p>
        <Total cart={cart} />



      </header>

      <div className="flex">
        <Filter className='' category={category} setCategory={setCategory}/>
        <Product className="" posts={posts} setCart={setCart} cart={cart}/>
      </div>
      
    </div>
  );
}

export default App;