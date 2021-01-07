import React from 'react';
import {Img} from 'react-image';
import pizza from '../images/pizza.jpg'
const Welcome = () => {
    return ( 
        <>
        <h1 style={{textAlign: "center", margin:"15px"}}>
        Welcome
        </h1>
        <Img width="100%" src={pizza}/>

        </>
     );
}
 
export default Welcome;