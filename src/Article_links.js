import React, {Component} from 'react'

import Comment from './Comment'

class Article_links extends React.Component{

    fct(ev){
      ev.preventDefault()
      console.log('aba')
      document.querySelector(".cmtForm").style.display = "block"
    }

    render(){
        return(
            <div className="article-links">
              <form className ="cmtForm" >
                  <input type="text" placeholder="Write your comment here"/>Comment
              </form>
              <a className="article-link" href= "#" onClick = {this.fct.bind(this)}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
        )
    }
}

export default Article_links