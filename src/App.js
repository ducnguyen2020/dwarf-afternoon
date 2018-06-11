import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Article_body from './Article_body'
import Hammer_Image from './Hammer_Image';
import Article_links from './Article_links';
import Avatar from './Avatar';
import Footer from './Footer.js';
import Realm from './Realm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header />

        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Avatar />
            <Article_body />
            <Article_links />
          </div>
          <Hammer_Image />

          <Realm />
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
