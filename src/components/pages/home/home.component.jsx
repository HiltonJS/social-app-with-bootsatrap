import React, { Component } from 'react';
import axios from 'axios';
import './home.css';
import Post from '../../../components/Post/post.component';
import Profile from '../profile/profile';

export class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get('/posts')
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentPosted = this.state.posts ? (
      this.state.posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading</p>
    );
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8">{recentPosted}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
