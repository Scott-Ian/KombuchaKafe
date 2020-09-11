import React from 'react';
import SearchForm from './SearchForm';
import NavButtons from './NavButtons';

function Navbar () {
  return(
    <React.Fragment>
      <nav className="navbar navbar-inverse" backgroundColor="black">
        <NavButtons />
        <h2>Kombucha Kafe</h2>
        <SearchForm/>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;