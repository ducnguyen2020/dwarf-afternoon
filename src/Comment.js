import React, {Component} from 'react'

class Comments extends Component{
    render(){
        return <li>{this.props.comment}</li>
    }
}
class Comment extends React.Component{

    constructor(){
        super()
        this.state = {
            comments: [],
            newComment: '',
        }
        
    }


    // handleSubmit(ev){
    //     const f = ev.target.comment.value
        

    // }
    addComment(e){
        e.preventDefault();
        console.log(e)
        const f = e.target
        const cmt = document.querySelector("#comm").value
        console.log(cmt)
        const comments = [...this.state.comments];
        comments.push(cmt);
        this.setState({comments});
    }

    render(){
        return(
            <div>
                <form className ="cmtForm" onSubmit = {this.addComment.bind(this)}>
                  <input type="text" name ="comment" placeholder="Write your comment here" id="comm"/>
                  <button type="submit" id ="subBut" > Submit</button> 
              </form>
        <ul>{this.state.comments.map(comment => <Comments comment={comment} />)} </ul>
            </div>
        )
    }
    
}

export default Comment