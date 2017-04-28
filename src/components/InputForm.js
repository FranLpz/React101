import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class CommentForm extends Component{
	constructor(props) {
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      author: '',
      text:''
    };
	}
	handleAuthorChange(e){
		this.setState({author:e.target.value});
	}
	handleTextChange(e){
		this.setState({text:e.target.value});
	}
	handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
      	<br /><br />
        <TextField 
        	hintText="Your name" 
        	value={this.state.author} 
        	onChange={this.handleAuthorChange}
        />
        <br />
        <TextField 
        	hintText="Say something..." 
					value={this.state.text} 
        	onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export {
	CommentForm
}