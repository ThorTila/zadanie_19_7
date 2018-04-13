import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      value: this.props.text
    }
  }
  handleClick() {
    this.setState({
      isEdited: !this.state.isEdited
    })
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    let changedText = this.state.value;
    this.props.editComment(this.props.id, changedText);
    this.setState({
      isEdited: !this.state.isEdited,
      value: changedText
    });
  }
  render() {
    return (
    <li>
        { this.state.isEdited === true ? 
          (<form onSubmit={(e) => this.handleSubmit(e)}>
            <input autoFocus type="text" onChange={(e) => this.handleChange(e)} value={this.state.value} placeholder="Edit comment"/>
            <button type="submit">Edit</button>
          </form>) : 
          (<p onClick={() => this.handleClick()}>{this.props.text} <span>votes: {this.props.votes}</span></p>) 
        }
        <button onClick={() => this.props.thumbUpComment(this.props.id)}>Thumb up</button>
        <button onClick={() => this.props.thumbDownComment(this.props.id)}>Thumb down</button>
        <button onClick={() => this.props.deleteComment(this.props.id)}>Delete</button>
      </li>
    )}
}

/* const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => deleteComment(id)}>Delete</button>
  </li>; */

export default Comment;