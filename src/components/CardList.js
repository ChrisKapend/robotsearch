import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    return(
        <section className='row'>
            {robots.map((user, i) => {return(<Card key={i} robots={robots[i]} />)})}
        </section>
    )
}
export default CardList;