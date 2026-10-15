

// import { Suspense } from 'react'

import { Suspense } from 'react';
import './App.css'
import Footer from './Footer'
import NavBar from './NavBar'
import Posts from './Posts';
import FilterableProductTable from './components/FilterableProductTable';
import products from './components/data/products';
import Bio from './components/data/Bio';
import Countries from './components/Countries/Countries';


// import Friends from './Friends'

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// // const fetchFriends = async () => {
// //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
// //   return res.json();
// }

const postsLoad = async () => {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts");
 return res.json();
}


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all") 
.then(res => res.json())

function App() {


  // const friendsPromise = fetchFriends();
  const postsPromise = postsLoad();

 
return (
    <>
    
  
    <NavBar />

    {/* <h1 className='text-center text-4xl'> <strong>React Core Concepts</strong></h1> */}
    <div className='text-4xl mt-4 bg-blue-300 p-4'>
    <h1 className='text-center text-rose-500'> Practice</h1>
    <p> Module 33: Class: 6 </p></div>

    <Suspense fallback={<p>Uploading Data...</p>}>
    <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
      

    <Bio/>
    
      <FilterableProductTable products={products} /> 

     

    {/* <Suspense fallback={<h3>friends are coming soon</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense> */}

    <Suspense fallback={<p>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
        </p>}>
      <Posts postsPromise={postsPromise}></Posts>
    </Suspense>
    
    
    <Footer /> 

    </>
  )
}


export default App
