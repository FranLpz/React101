import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HelloMessage, CommentBox} from './Comments';
import './index.css';

var data = [
  {id: 1, author: "Bob Marley", text: "This is one love comment"},
  {id: 2, author: "Edward Snowden", text: "This is *another* insecure comment"},
  {id: 3, author: "Servando", text: "Lodash no sirve"}
];

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
	<CommentBox data={data}/>, 
	document.getElementById('tutorial')
);
/*ReactDOM.render(
	React.createElement(CommentBox,null), document.getElementById('tutorial')
);*/
