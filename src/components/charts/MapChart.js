import React, { Component } from 'react';
import { ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker } from 'react-simple-maps';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const include = [
  "ARG", "BOL", "BRA", "CHL", "COL", "ECU",
  "GUY", "PRY", "PER", "SUR", "URY", "VEN",
  "ITA", "ESP", "DEU"
]

const markers = [
  { markerOffset: -25, name: "Buenos Aires", coordinates: [-58.3816, -34.6037], start: 1990, finish: 2010, category: 'music'},
  { markerOffset: 35, name: "Brasilia", coordinates: [-47.8825, -15.7942], start: 1989, finish: 2010, category: 'video' },
  { markerOffset: 35, name: "Bogota", coordinates: [-74.0721, 4.7110], start: 2000, finish: 2019, category: 'music' },
  { markerOffset: -25, name: "Caracas", coordinates: [-66.9036, 10.4806], start: 1950, finish: 2006, category: 'photo' },
  { markerOffset: 20, name: "Rome", coordinates: [12.3959121, 41.9102415], start: 1977, finish: 2012, category: 'photo' },
  { markerOffset: 20, name: "Berlino", coordinates: [13.1445474, 52.5069312], start: 1930, finish: 1990, category: 'photo' },
  { markerOffset: 20, name: "Madrid", coordinates: [-3.8196207, 40.4378698], start: 1967, finish: 2003, category: 'music' }
]

class MapChart extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 150 }}
          width={700}
          height={400}
          style={{
            width: "90%",
            height: "auto",
          }}
          >
          <ZoomableGroup disablePanning>
            <Geographies geography="/world-50m.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#CFD8DC",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
                )
              }
            </Geographies>
            <Markers>
              {markers.map((marker, i) => (marker.start >= this.props.selection.start) &&
                 (marker.start <= this.props.selection.finish) &&
                 (this.props.selection.category === 'all' || marker.category === this.props.selection.category ) && (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#FF5722" },
                  }}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 2,
                      opacity: 0.9,
                    }}
                  />
                  <text
                    textAnchor="middle"
                    y={20}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default MapChart;
