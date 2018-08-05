import React, { Component } from 'react';

import { countLike } from '../actions/entities';



class Stats extends Component {
  constructor() {
    super()

    this.state = {
        "data": []
    }
  }

  componentWillMount() {
    let data = countLike();
    this.setState({
        "data": data
    })
  }

  componentDidMount () {
      
    // set the dimensions of the canvas
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

    var data = this.state.data;
    // set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

    // define the axis
    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);


    // add the SVG element
    var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function(d) {
        d.name = d.name;
        d.likes = +d.likes;
    });

    // scale the range of the data
    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.likes; })]);

    // add axis
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "3em")
    .attr("dy", "1.45em")
    .attr("transform", "rotate(0)" );

    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 5)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");


    // Add bar chart
    svg.selectAll("bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.name); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.likes); })
    .attr("height", function(d) { return height - y(d.likes); });


  }

  render() {
    return (
        <div>
            <h3>Stats Portal</h3>
            <svg></svg>
        </div>
    )
  }

}


export default Stats;
