'use strict'

var graph = document.querySelector('#test'),
    testData = [
      {x: '2017-07-01', y:10},
      {x: '2017-08-01', y:20},
      {x: '2017-09-01', y:30},
      {x: '2017-10-01', y:40},
      {x: '2017-11-01', y:5000}
    ],
    option = [];
var graph2d = new vis.Graph2d(graph, testData, option);
