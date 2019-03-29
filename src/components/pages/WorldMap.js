import React, { Component } from 'react';
import MapChart from '../charts/MapChart';
import TimeSlider from '../layout/TimeSlider';
import CategoryChooser from '../layout/CategoryChooser';

//Pagina con il menù principale a mappa del mondo e i filtri per la ricerca
class WorldMap extends React.Component {

//Mantiene uno stato da fornire a tutti i sotto-componenti con i parametri per la selezione
  constructor(props) {
    super(props);
    this.state = {
      start: 1960,
      finish: 2019,
      category: 'all'
    }
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

//Metodo per cambiare la selezione del tempo,
//chiamato dal sotto-componente TimeSlider che fornisce un value[start, finish]
  onTimeChange = (value) => {
    this.setState({
      ...this.state,
      start: value[0],
      finish: value[1]
    })
  }

  //Metodo per cambiare la selezione della categoria,
  //chiamato dal sotto-componente CategoryChooser che fornisce un e.value
  onCategoryChange = (e, {value}) => {
    this.setState({
      ...this.state,
      category: value
    })
  }

//Renderizza i filtri e la mappa, tutti collegati a livello superiore dallo stato di questa classe,
//in modo che se uno modifica un parametro del padre, lo vedono anche gli altri come figli
//Ad ognuno sono passati i parametri necessari per renderizzare i dati
  render() {
    return (
      <div>
        STATE: {this.state.start} , {this.state.finish}, {this.state.category}
        <hr />
        <CategoryChooser category={this.state.category} onChange={this.onCategoryChange} />
        <TimeSlider start={this.state.start} finish={this.state.finish} onChange={this.onTimeChange} />
        <MapChart selection={this.state} />
      </div>
    )
  }
}

export default WorldMap;
