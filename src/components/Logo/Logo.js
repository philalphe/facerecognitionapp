import React from 'react';
import Tilt from 'react-tilt';
import iconbrain from './iconbrain.png';
import './Logo.css';

const Logo = () =>{
    return (
        <div className='ma4 mat0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style= {{paddingTop: '5px'}} src={iconbrain} alt='Logo'/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;