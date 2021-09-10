function init() {
    var selector = d3.select("#selDataset");
    d3.json("https://raw.githubusercontent.com/sjpozzuoli/Daves_Eagles/lucy_green/SQL%20Data%20Join/realtor_mortgage.json").then((data) => {
      console.log(data);
      var cityNames = data.city_name;
      console.log("cityNames", cityNames);
      cityNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      }); 
   
  })}
  
 // function buildMetadata(city_name) {
 //   d3.json("https://raw.githubusercontent.com/sjpozzuoli/Daves_Eagles/lucy_green/SQL%20Data%20Join/realtor_mortgage.json").then((data) => {
 //     var metadata = data.metadata;
 //     var resultArray = metadata.filter(sampleObj => sampleObj.id == city_name);
 //     var result = resultArray[0];
 //     var PANEL = d3.select("#sample-metadata");
 //     PANEL.html("");Object.entries(result).forEach(([key, value]) => {
 //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
 //     });
 //   });
 // }
  
  function optionChanged(newSample) {
    //buildMetadata(newSample);
    buildCharts(newSample);
  }
  
  init();