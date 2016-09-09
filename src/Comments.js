import React, { Component } from 'react';
import $ from "jquery";

class HelloMessage extends Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>);
  }
}

class CommentBox extends Component {
	constructor(props) {
	    super(props);
	    this.state = {data: []};
	}
	componentDidMount() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	}
	render() {
		return (
			<div className="commentBox">
		    	<h1>Comments</h1>
		       	<CommentList data={this.props.data}/>
		        <CommentForm />
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
  render() {
    return (
      <div className="commentForm">
        <br></br>Ahoy! I am a CommentForm.
      </div>
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
	HelloMessage,
}