import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import './Map.css';

function Map() {
    return (
        <div>
      
        <GoogleMap
        defaultZoom= {17}
        defaultCenter= {{ lat:25.559509,  lng:-103.425451}}
        >
            <Marker  position = {{lat:25.559509,  lng:-103.425451}}  />
        </GoogleMap>
        </div>

    );
} 
export default withScriptjs(withGoogleMap(Map))