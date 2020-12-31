import React from 'react';
import './Map.css';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { showDataOnMap} from "./util";


function MapContainer ({countries, casesType,center, zoom}) {
    return (
        <div className="map">
           <LeafletMap center={center} zoom={zoom}>
               <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy;
                <a href="https://osm.org/copyright"> OpenStreet </a> contributors'
               />
               {showDataOnMap(countries, casesType)}
                </LeafletMap>
        </div>
    );
}

export default MapContainer;
