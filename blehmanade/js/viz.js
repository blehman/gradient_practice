
var chart = timeSeriesChart()

d3.tsv("data/data.tsv", function(data) {
  d3.select('body')
    .append('svg')
    .append('g')
    .attr('id','chart');
  d3.select("#chart")
      .datum(data)
      .call(chart);
});


function timeSeriesChart() {
  var margin = {top: 50, right: 30, bottom: 20, left: 20},
      width = 760,
      height = 120,
      xScale = d3.time.scale(),
      yScale = d3.scale.linear(),
      dateFormat = d3.time.format("%Y%m%d").parse,
      line = d3.svg.line()
          .x(function(d){return xScale(dateFormat(d.date))})
          .y(function(d){return yScale(d.Austin)})
          .interpolate('basis');

  function chart(selection) {
    selection.each(function(data) {
      console.log(data)

      var svg = d3.select('svg');
      
      // change svg height & width
      svg.attr({
        'height': height
        , 'width': width
      })
      ;

      // Adjust scales
      xScale.domain(d3.extent(data,function(d){return dateFormat(d.date)}))
          .range([0,width-margin.right-margin.left])
          ;
      yScale.domain(d3.extent(data,function(d){return d.Austin}))
          .range([height-margin.top-margin.bottom,0])
          ;

      // Add line
      d3.select('#chart').append('path')
          .classed('line',true)
          .attr('d',line)
          ;

      // transform char
      d3.select('#chart')
          .attr('transform','translate('+margin.right+','+margin.top+')')
          ;

      // create gradient that will be referenced in css
    svg.append("linearGradient")				
        .attr("id", "line-gradient")			
        .attr("gradientUnits", "userSpaceOnUse")	
        .attr("x1", 0).attr("y1", yScale.range()[0])			
        .attr("x2", 0).attr("y2", yScale.range()[1])		
    .selectAll("stop")
        .data([
            {offset: "0%", color: "red"},		
            {offset: "40%", color: "red"},	
            {offset: "40%", color: "black"},		
            {offset: "62%", color: "black"},		
            {offset: "62%", color: "lawngreen"},	
            {offset: "100%", color: "lawngreen"}	
        ])					
    .enter().append("stop")			
        .attr("offset", function(d) { return d.offset; })	
        .attr("stop-color", function(d) { return d.color; });    });
  }

  // The x-accessor for the path generator; xScale - xValue.
  function X(d) {
    return xScale(d[0]);
  }

  // The x-accessor for the path generator; yScale - yValue.
  function Y(d) {
    return yScale(d[1]);
  }

  chart.x = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return chart;
  };

  chart.y = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return chart;
  };

  return chart;
}
