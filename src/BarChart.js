import React, {Component} from 'react';
import * as d3 from 'd3';


class BarChart extends Component{

    getAsciiSumValue(value){
        let sum = 0;
        for(let i = 0; i<value.length; i++){
            sum+=value.charCodeAt(i);

        }
       
        return sum;

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
        console.log("xAxis: "+cordinates.xAxis);
        cordinates.yAxis = 10;
        
        return cordinates;
    }
    
    handleMouseOver(svg,d,i){
        console.log(d);
    }

  drawChart() {
    const data = this.props.data
    const w = this.props.width;
    const h = this.props.height;


    const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 20)
    .style("margin-top",10);
                  
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => this.generatePoints(d).xAxis)
      .attr("cy", (d, i) => (i+1)*25)
      .attr("r",(d,i)=>d.freq*3)
      .attr("fill",(d,i)=> this.getRandomColor())
      .style("stroke","black")
      .on("mouseover",(d,i)=>this.handleMouseOver(svg,d,i));

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d)=>d.name)
      .attr("x",(d, i) => this.generatePoints(d).xAxis)
      .attr("y",(d, i) => (i+1)*25)
      .style('fill',"red")
      .style( "text-shadow", "1px 1px black")
     
    }


    componentDidMount(){
        this.drawChart();
    }

    render(){
        return <div id={"#" + this.props.id}></div>
    }

}

export default BarChart;
