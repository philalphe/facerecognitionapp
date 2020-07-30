import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return (
        <div>
            <p className='f3'>
                {'Insert your picture-link here & see the magic face detection'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange= {onInputChange} ></input>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'onClick={onButtonSubmit}>Detect</button>
                </div>
                
            </div>
        </div>
    );
}

export default ImageLinkForm;