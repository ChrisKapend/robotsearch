import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <form className='form-inline'>
            <input type='search' placeholder = 'search robots' className='form-control' onChange={searchChange}/>
        </form>
    )
};
export default SearchBox;