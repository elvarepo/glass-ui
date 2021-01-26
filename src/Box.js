import React from 'react';
import './Box.css';

function Box({blur, borderRadius, color}) {
    return (
        <div className='boxContainer'>
            <div 
            className="boxContainer__box"
            style={{backdropFilter: `blur(${blur}px)`, 
            WebkitBackdropFilter:`blur(${blur}px)`, 
            borderRadius: borderRadius,
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
            }}
            >
            </div>
        </div>
    )
}

export default Box;
