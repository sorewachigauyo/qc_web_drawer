const urlParams = new URLSearchParams(window.location.search);
var res = urlParams.get("res");
let results = res === null ? [] : res.split(",");
if (results.length == 2) { 
    var data = [
        {
          x: ["|0>", "1>"],
          y: results,
          type: 'bar'
        }
    ];
      
    Plotly.newPlot('myDiv', data);
}

