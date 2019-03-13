import React, {Component} from 'react';
import * as d3 from 'd3';


class BarChart extends Component{

    getAsciiSumValue(value){
        let sum = 0;
        for(let i = 0; i<value.length; i++){
            sum+=value.charCodeAt(i);

        }
       
        return sum%10;

    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    generatePoints(data) {
        let cordinates= [{
            xAxis: 0,
            yAxis: 0
        }];
 
        cordinates.xAxis = this.getAsciiSumValue(data.name);
        cordinates.yAxis = 10;
        
        return cordinates;
    }

  drawChart() {
    const data = this.props.data
    const w = this.props.width;
    const h = this.props.height;


    const xval =  140;

    const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 20)
    .style("margin-top",10)
    .attr("text-anchor", "middle");
                  
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => (this.generatePoints(d).xAxis+1)*70)
        .attr("cy", (d, i) => (i+1)*25)
        .attr("r",(d,i)=>d.freq*3)
        .attr("fill",(d,i)=> this.getRandomColor())
        .on("mouseover", function(d) {
            d3.select(this)
            .style( "fill","#90a")   
            console.log(d3.select(this));
        })
        .on("mouseout", function(d) {
            d3.select(this)
            .style( "fill","#90A345")   
        })


    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d)=>d.name)
      .attr("x",(d, i) => {
          return (this.generatePoints(d).xAxis+1)*70
      })
      .attr("y",(d, i) => (i+1)*25)
      .style('fill',"black")
      .style( "text-shadow", "1px 1px black")

     this.svg = svg;
    }

    
    componentDidMount(){
        this.drawChart();
    }

    render(){
        return <div id={"#" + this.props.id}></div>
    }

}

export default BarChart;
