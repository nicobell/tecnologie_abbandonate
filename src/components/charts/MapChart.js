import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import * as d3geop from 'd3-geo-projection';
import * as d3geo from 'd3-geo';
import * as tjson from 'topojson';
import PropTypes from 'prop-types'
import Math from 'math'

const data = [
  {
    city: 'zanzibar',
    lat: -6.13,
    lon: 39.31
  },
  {
    city: 'tokyo',
    lat: 35.68,
    lon: 139.76
  },
  {
    city: 'toronto',
    lat: 43.64,
    lon: -79.40
  }
]

class MapChart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
      this.buildGraph = this.buildGraph.bind(this);
  }

  buildGraph() {
    var svg = d3.select(".mapchart");
    var margin = {top: 30, right: 30, bottom: 30, left: 30};
    var width = +svg.attr("width") - margin.left - margin.right;
    var height = +svg.attr("height") - margin.top - margin.bottom;

    var projection = d3geo.geoMercator()
      .center([0, 5 ])
      .scale(200)
      .rotate([-180,0]);

    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var path = d3geo.geoPath()
      .projection(projection);

    console.log("here");

    d3.json('world-110m2.json', function(error, topology) {
      data.map(d => {
        console.log(d);
        g.selectAll("circle")
          .data(data)
          .enter()
          .append("a")
  				  .attr("xlink:href", function(d) {
  					  return "https://www.google.com/search?q="+d.city;}
  				  )
          .append("circle")
          .attr("cx", function(d) {
            return projection([d.lon, d.lat])[0];
          })
          .attr("cy", function(d) {
            return projection([d.lon, d.lat])[1];
          })
          .attr("r", 5)
          .style("fill", "red");
      });

      g.selectAll("path")
        .data(tjson.feature(topology, topology.objects.countries)
          .geometries)
        .enter()
        .append("path")
        .attr("d", path)

    });

  }

  componentDidMount() {
    this.buildGraph()
  }

  render() {
    return (
      <div>
        <hr />
        <svg className="mapchart" width="90%" height="500"> </svg>
        <hr />
      </div>
    )
  }
}

MapChart.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect (mapStateToProps, mapDispatchToProps)(MapChart)
