import React from 'react';
const Card = (props) => {
    const {name, email, username} = props.robots;
    return(
        <section className='card'>
            <img className= 'cardimg' src={`https://robohash.org/${username}`} alt='img'/>
            <article>
            <h4>{name}</h4>
            <p>{email}</p>
            </article>
        </section>
    )
}

export default Card;