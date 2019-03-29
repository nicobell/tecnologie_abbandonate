import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  {
    text: "Scegli categoria",
    value: "all"
  },
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

//Filtro per categoria, che prende come parametri le proprietà passate dal componente superiore
//Cambia il filtro della categoria con l'azione passata
class CategoryChooser extends Component {

  render() {
    return (
      <React.Fragment>
        <Form.Select
          label="Seleziona Categoria: "
          options={options}
          value={this.props.category}
          onChange={this.props.onChange}
        />
      </React.Fragment>
    )
  }
}

export default CategoryChooser;
