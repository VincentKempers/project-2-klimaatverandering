var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/co2-data.csv", function(error, data) {
  if (error) throw error;
  
  data.forEach(function(d) {
    d.kilo = +d.kilo;
    return d;
  });

  data.sort(function (a,b) {return b.kilo - a.kilo;} );
  x.domain(data.map(function(d) { return d.product; }));
  y.domain([0, d3.max(data, function(d) { return d.kilo; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(null))
    .append("text")
      .attr("x", 100)
      .attr("y", 1)
      .attr("dy", "0.35em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Kilo in CO2");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("y", function(d) { return y(d.kilo); })
      .attr("x", function(d) { return x(d.product); })
      .attr("height", 1)
      .transition()
        .delay(2000)
        .duration(750)
        .attr("width", x.bandwidth(10))
        .attr("height", function(d) { return height - y(d.kilo); })
        .ease("ease");
});