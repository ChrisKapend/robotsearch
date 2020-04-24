import React from 'react';
import SearchBox from './SearchBox';

const Header = ({searchChange}) => {
    return(
        <header className="jumbotron center">
            <h1 className='title'>Robot Friend</h1>
            <SearchBox searchChange={searchChange} />
        </header>
    )
}
export default Header;