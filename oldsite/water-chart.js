// date DL:  http://statline.cbs.nl/Statweb/publication/?DM=SLNL&PA=80393ned&D1=10%2c12-13%2c16-18&D2=4%2c7&D3=a&HDR=G1%2cT&STB=G2&VW=D
// bar using: https://github.com/liufly/Dual-scale-D3-Bar-Chart

var margin = {
  top: 40,
  right: 30,
  bottom: 20,
  left: 70
};

var width = 800 - margin.left - margin.right,
 height = 550 - margin.top - margin.bottom;


var svg = d3.select('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('class', 'graph')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var y0 = d3.scaleLinear().domain([300,9000]).range([height, 0]);
var y1 = d3.scaleLinear().domain([0, 30]).range([height, 0]);


var xAxis = d3.axisBottom(x);
var yAxisLeft = d3.axisLeft(y0);
var yAxisRight = d3.axisRight(y1);

var group = svg.append('g')
    .attr('transform', 'translate(0,0)');

var fullData = 'data';

var dynamicData = fullData;

d3.csv('data/water-data.csv', onload);


function onload(err, data) {
  if (err) throw err;

  x.domain(data.map(function(d) { return d.product;}  ));
  y0.domain([0, d3.max(data, function(d) { return d.nederlands;} )]);


  svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,'+height+')')
  .call(xAxis);


  svg.append('g')
  .attr('class','y axis axisLeft')
  .attr('transform','translate(0,0)')
  .call(yAxisLeft.ticks(10))
  .append('text')
  .style('fill','#00bdff')
  .attr('y', 10)
  .attr('x', 25)
  .attr("dy", "-2.35em")
  .style('text-anchor', 'end')
  .text('Waterverbuik in liters');


 svg.append('g')
    .attr('class', 'y axis axisRight')
    .attr('transform', 'translate(' + (width) + ',0)')
    .call(yAxisRight.ticks(15))
  .append('text')
    .attr('y', 6)
    .attr('dy', '-2em')
    .attr('dx', '2em')
    .style('fill', '#ffb72a')
    .style('text-anchor', 'end')
    .text('Co2 uitstoot in kg');

  bars = group;
  bars.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar1')
    .attr('fill', '#00bdff')
    .attr('x', function(d) {
      return x(d.product);
    })
    .attr('y', function(d) {
      return y0(d.nederlands);
    })
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('width', x.bandwidth()/2)
    .attr('height', function(d,i,j) {
      return height - y0(d.nederlands)
    });


    bars.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar2')
    .attr('fill', '#ffb72a')
    .attr('x', function(d) {
      return x(d.product);
    })
    .attr('y', function(d) {
      return y1(d.uitstoot);
    })
    .attr('rx',10)
    .attr('ry',10)
    .attr('width', x.bandwidth()/4)
    .attr('height', function(d,i,j) {
      return height - y1(d.uitstoot)
    });


    function update() {
      var selectBars = bars.selectAll('.bar')
      .data(data).enter().selectAll('.bar1').style('fill','#00bdff')
      .attr('x', function(d) {
      return x(d.product);
    }).attr('y', function(d) {
      return y0(d.seventywater);
    }).attr('width', x.bandwidth() / 2)
    .attr('height', function(d,i,j) {
      return height - y0(d.seventywater)
    });

    var selectOtherBars = bars.selectAll('.bar')
    .data(data).enter().selectAll('.bar2').style('fill','#ffb72a')
    .attr('x', function(d) {
    return x(d.product);
  }).attr('y', function(d) {
    return y1(d.seventyuitstoot);
  }).attr('width', x.bandwidth() / 4)
  .attr('height', function(d,i,j) {
    return height - y1(d.seventyuitstoot)
  });


    selectBars.enter()
    .on('click', function(e, i){
      update();
    });

    selectOtherBars.enter().on('click', function(e,i) {
      update();
    })

    selectBars.exit().remove();
    selectOtherBars.exit().remove();
    };

   d3.select('#fivedays').on('click', function(e){
  update();
});

    function newUpdate() {

      var selectBars = bars.selectAll('.bar')
      .data(data).enter().selectAll('.bar1').style('fill','#00bdff')
      .attr('x', function(d) {
      return x(d.product);
    }).attr('y', function(d) {
      return y0(d.thirtywater);
    }).attr('width', x.bandwidth() / 2)
    .attr('height', function(d,i,j) {
      return height - y0(d.thirtywater)
    });

    var selectOtherBars = bars.selectAll('.bar')
    .data(data).enter().selectAll('.bar2').style('fill','#ffb72a')
    .attr('x', function(d) {
    return x(d.product);
    }).attr('y', function(d) {
    return y1(d.thirtyuitstoot);

  }).attr('width', x.bandwidth() / 4)
    .attr('height', function(d,i,j) {
    return height - y1(d.thirtyuitstoot)
    });

    selectBars.enter()
    .on('click', function(e, i){
      update();
    });

    selectOtherBars.enter().on('click', function(e,i) {
      update();
    })

    selectBars.exit().remove();
    selectOtherBars.exit().remove();
    };

   d3.select('#twodays').on('click', function(e){
  newUpdate();
});

function newUpdate() {

  var selectBars = bars.selectAll('.bar')
  .data(data).enter().selectAll('.bar1').style('fill','#00bdff')
  .attr('x', function(d) {
  return x(d.product);
}).attr('y', function(d) {
  return y0(d.thirtywater);
}).attr('width', x.bandwidth() / 2)
.attr('height', function(d,i,j) {
  return height - y0(d.thirtywater)
});

var selectOtherBars = bars.selectAll('.bar')
.data(data).enter().selectAll('.bar2').style('fill','#ffb72a')
.attr('x', function(d) {
return x(d.product);
}).attr('y', function(d) {
return y1(d.thirtyuitstoot);
}).attr('width', x.bandwidth() / 4)
.attr('height', function(d,i,j) {
return height - y1(d.thirtyuitstoot)
});


selectBars.enter()
.on('click', function(e, i){
  update();
});

selectOtherBars.enter().on('click', function(e,i) {
  update();
})

selectBars.exit().remove();
selectOtherBars.exit().remove();
};

d3.select('#twodays').on('click', function(e){
  newUpdate();
});

function sevenDaysUpdate() {

  var selectBars = bars.selectAll('.bar')
  .data(data).enter().selectAll('.bar1').style('fill','#00bdff')
  .attr('x', function(d) {
  return x(d.product);
}).attr('y', function(d) {
  return y0(d.nederlands);
}).attr('width', x.bandwidth() / 2)
.attr('height', function(d,i,j) {
  return height - y0(d.nederlands)
});

var selectOtherBars = bars.selectAll('.bar')
.data(data).enter().selectAll('.bar2').style('fill','#ffb72a')
.attr('x', function(d) {
return x(d.product);
}).attr('y', function(d) {
return y1(d.uitstoot);
}).attr('width', x.bandwidth() / 4)
.attr('height', function(d,i,j) {
return height - y1(d.uitstoot)
});

selectBars.enter()
.on('click', function(e, i){
  update();
});

selectOtherBars.enter().on('click', function(e,i) {
  update();
})

  selectBars.exit().remove();
  selectOtherBars.exit().remove();
};

  d3.select('#sevendays').on('click', function(e){
    sevenDaysUpdate();
  });

};