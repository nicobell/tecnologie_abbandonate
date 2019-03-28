import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  {
    text: "Musica",
    value: "music"
  },
  {
    text: "Video",
    value: "video"
  },
  {
    text: "Fotografia",
    value: "photo"
  },
]

class CategoryChooser extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Select
          label="Select category: "
          options={options}
          value={this.props.category}
          onChange={this.props.onChange}
        />
      </React.Fragment>
    )
  }
}

export default CategoryChooser;
