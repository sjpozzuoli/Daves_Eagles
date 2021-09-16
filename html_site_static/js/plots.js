function init() {
    var selector = d3.select("#selDataset");
    d3.csv("https://raw.githubusercontent.com/sjpozzuoli/Daves_Eagles/main/Data_Main/data_clusters_ready.csv").then(function(data) {
      console.log("data_pre", data);
      data.forEach(function(d){
          //create number values from strings
          d.demand_score = +d.demand_score;
          d.hotness_rank = +d.hotness_rank;
          d.hotness_rank_yy = +d.hotness_rank_yy;
          d.unique_viewers_per_property_yy =+ d.unique_viewers_per_property_yy;
          d.median_days_on_market_yy =+ d.median_days_on_market_yy ;
          d.median_listing_price_yy =+ d.median_listing_price_yy;
          d.mortgage_rate =+ d.mortgage_rate;
          d.supply_score =+ d.supply_score;
          d.date = new Date(d.date);
          
      
        console.log(d);
        console.log(d.city);
        var city_state = d.city + ", " + d.state;
           console.log(city_state);

        //pulls user selection of city from splash page
        selector
            .append("optionChanged")
            .text(city_state)
            .property("value", city_state)
    

      });

    }); 
   
  }
  
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