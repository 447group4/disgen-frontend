import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react';



class MDChart extends Component{


   constructor(props){

      super(props)
      this.state = {

         labels: ['Democrat', 'Republican', 'Libertarian','Green','Other'],
         datasets: [{
            data: [1677928, 943169, 79605, 35945, 44799],
            backgroundColor: ['blue','red','yellow','green','grey']
         }]
      }
   }

   render() {

      return(

         <div className="chart">

         <Pie
            data={{
               labels: this.state.labels,
               datasets: this.state.datasets
            }}

            height = '500px'

         />
         <br />
         </div>
      )

   }

}


export default MDChart;
