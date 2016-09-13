import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {CommentBox} from './Comments';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
	<CommentBox/>, 
	document.getElementById('tutorial')
);
