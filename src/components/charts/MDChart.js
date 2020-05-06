import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react';



class MDChart extends Component{


   constructor(props){

      super(props)
      this.state = {

         labels: ['Democrat', 'Republican'],
         datasets: [{
            data: [7,1],
            backgroundColor: ['blue','red']
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

            height = '250px'

         />
         <br />
         </div>
      )

   }

}


export default MDChart;
