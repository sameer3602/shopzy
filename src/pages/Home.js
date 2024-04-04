import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Items from '../components/Items';

const Home = () => {
  const API_URL="https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("nahii chalraa kyaa!!!")
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return (
    <div className='homediv'>
      {
        loading ?(<Spinner className="Spinnerdiv"/>):
        posts.length>0?
        (<div className='postdiv'>
            {posts.map((post) =>(
              <Items key={post.id} post={post}/>
            ))}
        </div>):
        (<div>
          <p>No Data Found</p>
        </div>)

      }
    </div>
  )
}

export default Home