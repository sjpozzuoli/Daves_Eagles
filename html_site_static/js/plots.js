//this piece of code brings in the data and reshapes it to numberic from string. Runs great. 
function init() {

    var selector = d3.select("#selDataset");
    d3.csv("https://raw.githubusercontent.com/sjpozzuoli/Daves_Eagles/main/Data_Main/data_clusters_latlong_ready.csv").then(function(data) {
      //console.log("data_pre", data);
      
      
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
          d.latitude =+ d.latitude;
          d.longitude =+ d.longitude;
          d.class =+ d.class;
      
        //console.log(d);
        //console.log(d.city);
        var city_state = d.city + ", " + d.state;
           //console.log(city_state);
       
        
        

        //pulls user selection of city from splash page has never worked
        //selector
        //    .append("optionChanged")
        //    .text(city_state)
        //    .property("value", city_state)
    

      });

    }); 
   
  };

  init();



  
 //this piece of code should update the page when a selection is made 
 // function optionChanged(newSample) {
 //   //buildMetadata(newSample);
 //   buildCharts(newSample);
 // }
  
