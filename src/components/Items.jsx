import React from 'react'
import './Items.css'
const Items = ({post}) => {
    const selected=true;
  return (
    <div className='Itemsdiv'>
        <div className='itemtitle'>
            <p>{post.title}</p>
        </div>
        <div className='itemdesc'>
            <p>{post.description}</p>
        </div>
        <div className='itemimage'>
            <img src={post.image} className='productimage'/>
        </div>
        <div className='itemlastdiv'>
            <p className='itemprice'><span>$</span>{post.price}</p>
            <button>
                {
                    true? <p className='removeitem'>Remove item</p>:<p className='additem'>Add to Cart</p>
                }
            </button>
        </div>
    </div>
  )
}

export default Items