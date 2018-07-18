import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const mapStyles = [
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "68"
          },
          {
              "lightness": "-12"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "100"
          },
          {
              "lightness": "-29"
          },
          {
              "hue": "#ffea00"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "all",
      "stylers": [
          {
              "hue": "#95ff00"
          },
          {
              "saturation": "-30"
          },
          {
              "lightness": "-44"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "lightness": "-55"
          },
          {
              "saturation": "-45"
          },
          {
              "gamma": "0.93"
          },
          {
              "hue": "#5cff00"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-31"
          },
          {
              "hue": "#47ff00"
          },
          {
              "lightness": "-49"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-23"
          },
          {
              "lightness": "-42"
          },
          {
              "hue": "#ff9c00"
          }
      ]
  }
];

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8z66cBJMYOtR0wrMrlGE8iesigeIXz5o",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    options={{ styles: mapStyles }}
    defaultCenter={{ lat: 54.910626, lng: 23.919251 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 54.910626, lng: 23.919251 }} />}
  </GoogleMap>
);

export default MyMapComponent;