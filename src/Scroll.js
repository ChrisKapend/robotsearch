import React from 'react';

const Scroll = (props) =>{
    return  <div className='scrollbar'>
                {props.children}
            </div>;
}
export default Scroll;