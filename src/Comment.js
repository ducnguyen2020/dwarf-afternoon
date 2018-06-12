import React, {Component} from 'react'

class Comment extends React.Component{
    // constructor(){
    //     super()
    //     document.querySelector('form').addEventListener('submit', (ev) => {
    //         ev.preventDefault()
    //         this.handleSubmit(ev)
    //       })
    // }


    // handleSubmit(ev){
    //     const f = ev.target.comment.value
        

    // }

    render(){
        return(
            <div>
                <form className ="cmtForm" >
                  <input type="text" name ="comment" placeholder="Write your comment here" />
                  <button type="submit" id ="subBut" > Submit</button> 
              </form>
            </div>
        )
    }
    
}

export default Comment