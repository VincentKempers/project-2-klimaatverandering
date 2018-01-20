var svg = d3.select("svg"),
    margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.05)
        .align(0.2);

var y = d3.scaleLinear().rangeRound([height,0]);
var z = d3.scaleLinear().range(["#98abc5", "#8a89a6", "#7b6888"]);



d3.csv("data/water-data.csv", function(d, i, columns) {
   for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
}, function(error,data) {
  if (error) throw error;

  var keys = data.columns.slice(1);

  data.sort(function(a,b){ return b.total - a. total; });
  x.domain(data.map(function (d) { return d.product }));
  y.domain([0, d3.max(data, function(d) {console.log(d.total)})]).nice();
  z.domain(keys);

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter()
      .append("g")
})