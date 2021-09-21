# Daves_Eagles
Group 4 Final Project
## Andrew
Task - Merge data_clusters_ready.csv and us_cities.csv in order to add cities coordinates for mapping in HTML.
1. Load files to Jupyter Notebook
<img width="1250" alt="load_files" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/load_files.png>
     
2. Join city and state into one column for both datasets, in order to get unique index for merging. 
<img width="1250" alt="join" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/join_city_state.png>
<img width="1250" alt="join2" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/join_city_state_clusters.png>     

3. Change city_state column to "all lower case letters" to match during merging. Also drop duplicates.
<img width="1250" alt="lower_case" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/lower_case.png>  
     
4. Merge two datasets  
<img width="1250" alt="merge" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/merge_data.png>
     
5. Filter result by latest month (July 2021)
<img width="1250" alt="merge" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/filter_july.png>

6. Drop N/As and duplicates, create local files based on resulted data.
<img width="1250" alt="merge" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/504427c50ac3044f45537c0c09a324e6f9cbd373/Resource_Main/map/drop_na_dupl.png>

          


HTML version of the map
<img width="1250" alt="map" 
     src=https://github.com/sjpozzuoli/Daves_Eagles/blob/8658275fc86d45587897bbf8e04eea5981120978/Resource_Main/map.png>
I decided do add some data with indirect or minor impact on choice of location to live. 
Tax rates differ between satates and may play decisive role in the assesment. The following dataset consist effective tax rate for all states.
<img width="1250" alt="effective_tax_rate" src="https://github.com/andgerashchenko/test/blob/2e4b15ba41eb6ab3e32153af3c8d5a5e62ba213d/resources/effective_tax_rate.png">
Here is also Cost of living index data set by city. The index is constructed such that the average U.S. cost of living is normalized to 100. The cost of living was determined based on six major categories of expenses: food, housing, utilities, transportation, healthcare, and consumer discretionary spending.

<img width="450" alt="cost_of_living" 
src="https://github.com/andgerashchenko/test/blob/95d52b11e588a882c5032b2b960c274b98a404dd/resources/cost_of_living.png">

Another dataset reflect happiness score among more than 180 of the largest U.S. cities. The score calculated across three key dimensions: 1) Emotional & Physical Well-Being, 2) Income & Employment and 3) Community & Environment.
<img width="550" alt="happiest_cities" 
src="https://github.com/andgerashchenko/test/blob/3d3af8a24a005bf004bc9d69b96fb294d7e5fe68/resources/happiest_cities.png">
