import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {
  

  const [categories, setCategories] = useState(['caballeros del zodiaco']) /// []

//   const handelAdd = () => {

//         setCategories([...categories,'Kuroko no Basket'])
//         // setCategories( (cat) => [...cat,'Kuroko no Basket']) 
//         // puede tener un callback del primer argumento de que es el valor del estado anterior luego retorna el nuevo estado

//   }

  return (
      <>

         <h2>GifExpertApp</h2>

               <AddCategory setCategories = { setCategories }/>

         {/* <hr /> */}

         {/* <button onClick={ handelAdd }> Agregar </button> */}
         <ol>   
            {
                categories.map( category => ( 
                    //  <li key={category}> {category} </li>
                   <GifGrid 
                    key = { category }
                    category = { category }
                   />

                 ))
            }
         </ol>

     </>
  )
}
