import React from 'react';
import useFetch from '../services/UseFetch';
import './Explore.css'

var date = new Date();

const Explore = () => {

    const {data: imageData, error, isPending} = useFetch('https://api.nasa.gov/planetary/apod?api_key=')

    return (
        <div className="section">
             <div className="section-title">Astronomy pic of the day</div>
            {isPending?
            <div clasName="loader">Loading...</div>:
           
        <div  className="pic-of-day">
            
            {error && <div classaName="error"></div>}

            <div className="image">
               <img src={imageData.url}></img>
               <div className="date">{imageData.date}</div>
            </div>
            <div className="info">
                <div className="title">{imageData.title}</div>
                <br/>
                <div className="description">{imageData.explanation.substring(0,600)}...<span onClick={console.log('More')} class="more">more</span></div>
            </div>
            
        </div>
}
        </div> 
        

     );
}
 
export default Explore;