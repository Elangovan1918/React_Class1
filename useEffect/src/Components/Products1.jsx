import React, { useEffect } from 'react'

const Products1 = () => {
    let getData =async()=>{
        let data=await fetch("https://fakestoreapi.com/products")
        // console.log(data);
        let originalData = await data.json();
        console.log(originalData);
        
        
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <nav>
            <input type="text" name='' id=''  />
        </nav>

        <main>
           
        </main>
    </div>
  )
}

export default Products1