import React, { Component } from 'react';
import Rebase from 're-base';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';

var base = Rebase.createClass({
  apiKey: "AIzaSyCaX5zvPQDKUqzcg3ovw2xHoUcQdCHrJrY",
  authDomain: "react101-7b68e.firebaseapp.com",
  databaseURL: "https://react101-7b68e.firebaseio.com",
  storageBucket: "react101-7b68e.appspot.com",
});

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

class CommentBox extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}
	handleCommentSubmit(comment) {
    //updates Firebase and the local state
		this.setState({ 
			data: this.state.data.concat([comment])
		});

  }
	componentDidMount() {
    //Load messages from firebase
		base.syncState('comments', {
      context: this,
      state: 'data',
      asArray: true
    });
	}
	render() {
		return (
			<div className="commentBox">
		    	<h1>Comments</h1>
		       	<CommentList data={this.state.data}/>
		       	<MuiThemeProvider>
		        	<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
		        </MuiThemeProvider>
			</div>
		);
	}
}

class CommentList extends Component {
	render() {
		var commentNodes = this.props.data.map(function(comment) {
	      return (
	        <Comment author={comment.author} key={comment.id}>
	          {comment.text}
	        </Comment>
	      );
	    });
		return (
			<div className="commentList"> 
				{commentNodes}
			</div>
		);
	}
}

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

class Comment extends Component{
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
};

export {
	CommentBox,
	HelloMessage
}