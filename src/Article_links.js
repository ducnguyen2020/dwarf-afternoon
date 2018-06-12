import React, {Component} from 'react'

import Comment from './Comment'

class Article_links extends React.Component{

    constructor(){
      super()
      this.state ={
        isVisible : "inline",
        comments : [],
        newComment : null,
      }

    }


    makeVisible(ev){
      ev.preventDefault()
      if (this.state.isVisible === "inline"){
            this.setState({
              isVisible : "none" 
            })
          }
      else {
        this.setState({
          isVisible : "inline" 
        })
      }
      document.querySelector('.cmtForm').style.display = this.state.isVisible
    }


    render(){
        return(
            <div className="article-links">
              <Comment />
              <a className="article-link" href= "#" onClick = {this.makeVisible.bind(this)}>
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