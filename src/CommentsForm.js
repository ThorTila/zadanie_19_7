import React from 'react';

class CommentsForm extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
  }
  handleChange(e) {
    let value = e.target.value;
    this.setState({
      value: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.value) {
      let text = this.state.value;
      this.props.addComment(text);
      this.setState({
        value: ''
      });
    }
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="submitComment" placeholder="Write a comment!" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
        <button type="submit">Submit comment</button>
      </form>
    )
  }
}
  

export default CommentsForm;