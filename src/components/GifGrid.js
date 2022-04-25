import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import getGif from '../helpers/getGif';
import { GifGridItems } from './GifGridItems';


export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);
    
    const { data:images, loading } =  useFetchGifs( category );
    
    // useEffect( ()=>{
            
    //      getGif(category)
    //            .then( imgs  => setImages(imgs) );

    // },[category])
    

// getGif();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{category}</h3>
            
            { loading && <p className='animate__animated animate__flash'> Loading </p>  }

            <div className='card-grid'>
            
                {
                    images.map( img  => (
                        //   <li key={id}> {title}</li>
                        <GifGridItems 

                                key = {img.id}
                                {...img}
                                
                        /> 

                    ))
                }
           
           </div>
       </>
    )
}
