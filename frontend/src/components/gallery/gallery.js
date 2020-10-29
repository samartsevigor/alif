import React from 'react';
import './gallery.css'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import data from './data'


const Gallery = () => {
    return (
        <div className="gallery">
            {
                data.map(el => (
                    <ReactFancyBox key={el.id}
                        thumbnail={el.image}
                        image={el.image}/>
                ))
            }
        </div>
    );
};

export default Gallery;