import React, { Component } from 'react';
import { mdpage } from '../data/mdpage';
import {Fade} from 'react-reveal';
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polyline, Polygon, Rectangle } from "react-leaflet";
import { Icon } from "leaflet";
import MDFlag from "../imgs/md_flag.png";
import MDDistrictMap from "../imgs/mdDistricts.png";
import MDChart from "./charts/MDChart";
import MDChartAfter from "./charts/MDChartAfter";
import data from './md.json';

const districtList = data.districts;
console.log(districtList)
const district1 = districtList[0].Polygon

for (var key in district1) {
  district1[key] = district1[key].reverse()
}

const district2 = districtList[1].Polygon

for (var key in district2) {
  district2[key] = district2[key].reverse()
}

const district3 = districtList[2].Polygon

for (var key in district3) {
  district3[key] = district3[key].reverse()
}

const district4 = districtList[3].Polygon

for (var key in district4) {
  district4[key] = district4[key].reverse()
}

const district5 = districtList[4].Polygon

for (var key in district5) {
  district5[key] = district5[key].reverse()
}

const district6 = districtList[5].Polygon

for (var key in district6) {
  district6[key] = district6[key].reverse()
}

const district7 = districtList[6].Polygon

for (var key in district7) {
  district7[key] = district7[key].reverse()
}

const district8 = districtList[7].Polygon

for (var key in district8) {
  district8[key] = district8[key].reverse()
}


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
                                 <img className="statepage__map" style= {{width:"500px", height:"250px"}} src={MDFlag}/>
                                 <div className="statepage__title" >{title}</div>
                                 <div className="statepage__captext">{captext}</div>
                                 <div className="statepage__poptext">{poptext}</div>
                                 <div className="statepage__distext">{distext}</div>
                                 <div className="statepage__landtext">{landtext}</div>
                           </div>

                        </Fade>
                    )
                })}
                <h4> Current Maryland Congressional Districts</h4>
                <img className="statepage__currentMap" style= {{width:"100%", height:"100%"}} src={MDDistrictMap}/>

                <h4 className='newMap'> New Maryland Congressional Districts</h4>

                <Map center={center} zoom={8}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polygon color="purple" fillOpacity='.7' positions={districtList[0].Polygon} />
                    <Polygon color="red" fillOpacity='.7' positions={districtList[1].Polygon} />
                    <Polygon color="green" fillOpacity='.7' positions={districtList[2].Polygon} />
                    <Polygon color="blue" fillOpacity='.7' positions={districtList[3].Polygon} />
                    <Polygon color="pink" fillOpacity='.7' positions={districtList[4].Polygon} />
                    <Polygon color="orange" fillOpacity='.7' positions={districtList[5].Polygon} />
                    <Polygon color="yellow" fillOpacity='.7' positions={districtList[6].Polygon} />
                    <Polygon color="teal" fillOpacity='.7' positions={districtList[7].Polygon} />
                </Map>
               <h1 className="chart__header">Congressional Districts By Party</h1>
               <div className= "pieCharts">
                  <MDChart />
                  <MDChartAfter />
               </div>
            </div>
        </div>
    );
};
export default MDPage;
