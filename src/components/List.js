import React, { Component } from 'react';
import {Comment} from './Comment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CommentList extends Component {
	render() {
		var commentNodes = this.props.data.map(function(comment) {
	      return (
					<MuiThemeProvider>
						<Comment author={comment.author} key={comment.id}>
							{comment.text}
						</Comment>
					</MuiThemeProvider>
	      );
	    });
		return (
			<div className="commentList"> 
				{commentNodes}
			</div>
		);
	}
}

export {
	CommentList
}