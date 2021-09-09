function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("https://raw.githubusercontent.com/Luegreen/plotly-javascript-module12/master/docs/samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      }); 
   
  })}
  
  function buildMetadata(sample) {
    d3.json("https://raw.githubusercontent.com/Luegreen/plotly-javascript-module12/master/docs/samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }
  
  init();