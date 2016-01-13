var params = {
  top:0.1
, bottom:0.1
, left:0.1
, right:0.1
, pheight:0.99
, pwidth:0.99
, height:500
, width:500}
var svg = d3.select('body').append('svg');
svg.attr({height:params.height,width:params.width})
svg.attr('viewbox','20 20 100 100')
var rect = svg.append('rect').attr({
  x:0
  ,y:0
  , width:params.width * params.pwidth
  , height:params.height * params.pheight
})
.classed('rect',true)
.style({stroke:'#000','stroke-width':3})
;

var gradient = svg.append("defs")
  .append("linearGradient")
    .attr("id", "rect-gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#0c0")
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#c00")
    .attr("stop-opacity", 1);


//var gradient = d3.select('body').append('linearGradient')
//    .attr("id", "rect-gradient")
//    .attr("gradientUnits", "userSpaceOnUse")
//    .attr("x1", 0).attr("y1", params.width * params.pwidth)
//    .attr("x2", 0).attr("y2", params.height * params.pheight)
//.selectAll("stop")
//    .data([
//        {offset: "0%", color: "red"},
//        {offset: "40%", color: "red"},
//        {offset: "40%", color: "black"},
//        {offset: "62%", color: "black"},
//        {offset: "62%", color: "lawngreen"},
//        {offset: "100%", color: "lawngreen"}
//    ])
//.enter().append("stop")
//    .attr("offset", function(d) { return d.offset; })
//    .attr("stop-color", function(d) { return d.color; })
//    ;




