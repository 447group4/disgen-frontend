import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react';



class CAChart extends Component{


   constructor(props){

      super(props)
      this.state = {

         labels: ['Democrat', 'Republican', 'Libertarian', 'Green', 'Independent', 'Peace & Freedom'],
         datasets: [{
            data: [8753788, 4483810, 478500, 278657, 120739, 66101],
            backgroundColor: ['blue','red', 'yellow', 'green', 'grey', '#83F944']
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


export default CAChart;
