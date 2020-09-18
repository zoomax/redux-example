import React, { Component } from "react";
import { connect } from "react-redux";
import {getPosts} from  "../actions/postActions"
class Posts extends Component {
  componentWillMount() {
    getPosts()(this.props.dispatch)
  }
  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state){ 
    return  { 
        posts  : state.postsReducer.posts
    }
}

export default connect(mapStateToProps)(Posts);
