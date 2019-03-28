import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      postBody: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.postBody
    };

    this.props.createPost(post);

    this.setState({
      title: "",
      postBody: "",
    })
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="text-primary">Add post</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br/>
            <input type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br/>
            <textarea name="postBody"
              value={this.state.postBody}
              onChange={this.onChange} />
          </div>
          <br/>
          <button className="btn btn-primary btn-xl"
            type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
