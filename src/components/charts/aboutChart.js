import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react';



class AboutChart extends Component{


   constructor(props){

      super(props)
      this.state = {

         labels: ['Democratic Favored Gerrymander','Republican Favored Gerrymander','No Gerrymander'],
         datasets: [{
            data: [7,19,24],
            backgroundColor: ['blue', 'red', 'purple']
         }]
      }
   }

   render() {

      return(

         <div className="aboutChart">
         <Pie
            data={{
               labels: this.state.labels,
               datasets: this.state.datasets
            }}

            height = '100px'
         />
         <br />
         </div>
      )

   }

}


export default AboutChart;
