import React, { Component } from 'react';
//import Avatar from 'material-ui/Avatar';
//import Chip from 'material-ui/Chip';

/*const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};*/

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
	Comment
}