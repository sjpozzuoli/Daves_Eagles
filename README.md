# Daves_Eagles
Group 4 Final Project

## Natasha Log: 8/27
Working off the assumption we're going to be using some of the Zillow datasets as the basis of our analysis, I wanted to find a few sources that could help us select which cities to focus our analysis on. 

1. Source: https://worldpopulationreview.com/us-cities
Shows the most populated cities in the US for 2021 - since our goal is to explore 'up and coming' cities, we can use this to potentially drop cities that are too large in the Zillow data. 

2.Source: https://www.census.gov/data/tables/time-series/econ/mhs/month-of-shipment.html
Sale price by month in case we want to dive further into 'when to move' after doing the machine learning component. 

3. Source: US Census Bureau (looking for link!)
Population change for cities between 2018-2019, which could help narrow cities that are already on a growth trajectory.  

### Join Methodology
Starting with the Zillow Inventory by Month table as the 'base', drop the first two columns - "RegionID" and "SizeRank" as these don't add useful indexing information and could potentially confuse the model.
The next step is to add the final columns from Median_Days_Pending and Median_Sales_Prices as columns to the joined table - these tables have matching structures so additional manipulation is minimal. 
To add the effective tax data, quickly translated the "State" column of Effective_Tax_2021 to the State acronyms. Using a quick Index/Match function, we can map the tax rates onto the cities. This could also be accomplished grouping on larger datasets. 


To add the Happiest_Cities data, we can map the RegionName column to the City column using Index/Match.

Similar methodology was used to add the population data, spread across the 200 Most Populated Cities and Population Change datasets. 
