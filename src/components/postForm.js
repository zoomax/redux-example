import React, { Component } from "react";
import {connect }from  "react-redux" ; 
import {createPost} from "../actions/postActions" ; 

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      body: "",
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }
  submitForm(e) { 
    e.preventDefault() ; 
    console.log( "form submited")
 ; 
let post  =   { 
  title:  this.state.title , 
  body : this.state.body 
} 
createPost(post)(this.props.dispatch)
 
}
  render() {
    return (
      <div>
        <h1>post form</h1>
        <div>
          <form onSubmit={this.submitForm}>
            <div>
              <label htmlFor="title"> Title: </label>
              <br />
              <input
                value={this.state.title}
                type="text"
                name="title"
                id="title"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="body"> Body: </label>
              <br />
              <textarea
                value={this.state.body}
                id="body"
                name="body"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              ></textarea>
            </div>
            <div>
              <button type="submit">add post</button>
            </div>
          </form>
        </div>
        <div> 
          <h3>
            {this.props.post.title}
          </h3>
          <p>
            {
              this.props.post.body}
          </p>
          </div> 
      </div>
    );
  }
}
function mapStateToProps( state ) { 
  return  { 
    posts : state.postsReducer.posts.concat(this.post) , 
    post : state.postsReducer.post 
  }
}
export default connect(mapStateToProps)(PostForm);
