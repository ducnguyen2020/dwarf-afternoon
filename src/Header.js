import React, {Component} from 'react';

import HeaderLabel from './HeaderLabel';

class Header extends React.Component{
    render(){
        return(
        <div className="expanded row header">
          <HeaderLabel />
          <div className="headline text-center small-12 columns">
            <h1>The Dwarf Underground</h1>
            <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
          </div>
        </div>
        )
            
        
    }
}

export default Header