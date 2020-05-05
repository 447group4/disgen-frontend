import React, { Component } from 'react';
import { mdpage } from '../data/mdpage';
import {Fade} from 'react-reveal';
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polyline, Polygon, Rectangle } from "react-leaflet";
import { Icon } from "leaflet";

const center = [39.2904,-77.5]

const polyline = [
  [39.29,-76.61],
  [39.29,-76.63],
  [39.29,-76.65],
]

const multiPolyline = [
  [
    [39.3, -76.6],
    [39.3, -76.58],
    [39.32, -76.58],
  ],
  [
    [39.3, -76.65],
    [39.3, -76.67],
    [39.32, -76.67],
  ],
]

const polygon = [
  [39.35,-76.55],
  [39.34,-76.56],
  [39.34,-76.56],
]

const multiPolygon = [
  [
    [39,-76.55],
    [39.34,-77.57],
    [39.4,-77.58],
    [39.1,-76.1],
    [38.30,-76.52],
  ],
  [
    [39.35,-76.52],
    [39.355,-76.51],
    [39.355,-76.51],
  ],
]

const rectangle = [
  [39.34,-76.61],
  [39.35,-76.62],
]

const MDPage = () => {
    return (
        <div className="wrapper">
            <div className="statepage">
                {mdpage.map((item, i) => {
                    const {section, title, captext, poptext, distext, landtext} = item;
                    return (
                        <Fade key={i}>
                            <div className="statepage__item">
                                <div className="statepage__section">{section}</div>
                                <div className="statepage__title">{title}</div>
                                <div className="statepage__captext">{captext}</div>
                                <div className="statepage__poptext">{poptext}</div>
                                <div className="statepage__distext">{distext}</div>
                                <div className="statepage__landtext">{landtext}</div>
                            </div>
                        </Fade>
                    )
                })}
                <h4>Old Congressional Districts</h4>
                <h5>New Congressional Districts</h5>
                <Map center={center} zoom={7.1}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={center} fillColor="blue" radius={200} />
                    <CircleMarker center={[39.35, -76.6]} color="red" radius={20}>
                    <Popup>Popup in CircleMarker</Popup>
                    </CircleMarker>
                    <Polygon color="purple" positions={polygon} />
                    <Polygon color="red" positions={multiPolygon} />
                    <Rectangle bounds={rectangle} color="black" />
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </Map>
                <Map center={center} zoom={7.1}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={center} fillColor="blue" radius={200} />
                    <CircleMarker center={[39.35, -76.6]} color="red" radius={20}>
                    <Popup>Popup in CircleMarker</Popup>
                    </CircleMarker>
                    <Polygon color="purple" positions={polygon} />
                    <Polygon color="red" positions={multiPolygon} />
                    <Rectangle bounds={rectangle} color="black" />
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </Map>
            </div>
        </div>
    );
};
export default MDPage;