// Estos hook pueden tener su estado podrian indicarle a otro componentes cuando deben de renderizrse
// porque algo cambio.

import { useEffect, useState } from "react";
import getGif from "../helpers/getGif";



export const useFetchGifs = ( category ) => {
 
    const [state, setState] = useState({
        data: [],
        loading: true
    });


     useEffect(()=>{

        getGif( category )
            .then(img => { 

                // setTimeout( ()=>{
                    
                    // console.log(img)
                    setState({
                        data:img,
                        loading:false
                    });

                // },1000)

              
         })

     },[category])


  

    return state; // data:[], loading:true }
}
