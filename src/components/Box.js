import React, { Component } from 'react';
import {CommentForm} from './InputForm';
import {CommentList} from './List';
import Rebase from 're-base';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var base = Rebase.createClass({
  apiKey: "AIzaSyCaX5zvPQDKUqzcg3ovw2xHoUcQdCHrJrY",
  authDomain: "react101-7b68e.firebaseapp.com",
  databaseURL: "https://react101-7b68e.firebaseio.com",
  storageBucket: "react101-7b68e.appspot.com",
});

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
			<MuiThemeProvider> 
				<div className="commentBox">
					<h1>Comments</h1>
					<CommentList data={this.state.data}/>
							
						<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
				</div>
	        </MuiThemeProvider>
			
		);
	}
}

export {
	CommentBox
}