Lucy_Green
# Daves_Eagles
Group 4 Final Project
Steve_Pozzuoli

Presentation

1. Selected topic
- We chose to examine historical real estate and city data to predict the next city that will see a real estate "boom"
2. Reason why the topic was selected
- The topic was selected because we thought it was a relevant piece of information in the current age, with many people moving out of big cities and to the "suburbs". 
3. Description of their source of data
- We have begun to source data from multiple places like Zillow and the newly reprted Census data to build a picture of the historical information about these cities. From there we will attempt to determine which factors are most important when implementing the unsupervised machine learning aspect of the project.
4. Questions we hope to answer with the data
- We hope to answer the question of which city will see an increase in real estate prices due to an influx of new residents. We will also attempt to determine which cities would be ideal for investing in real estate prior to this rush.
=======
Natasha_Nelson

## Natasha Log: 8/27
Working off the assumption we're going to be using some of the Zillow datasets as the basis of our analysis, I wanted to find a few sources that could help us select which cities to focus our analysis on. 

1. Source: https://worldpopulationreview.com/us-cities
Shows the most populated cities in the US for 2021 - since our goal is to explore 'up and coming' cities, we can use this to potentially drop cities that are too large in the Zillow data. 

2.Source: https://www.census.gov/data/tables/time-series/econ/mhs/month-of-shipment.html
Sale price by month in case we want to dive further into 'when to move' after doing the machine learning component. 

3. Source: US Census Bureau (looking for link!)
Population change for cities between 2018-2019, which could help narrow cities that are already on a growth trajectory.  

### Join Methodology
#### Starting with the Zillow Inventory by Month table as the 'base', drop the first two columns - "RegionID" and "SizeRank" as these don't add useful indexing information and could potentially confuse the model.
#### The next step is to add the final columns from Median_Days_Pending and Median_Sales_Prices as columns to the joined table - these tables have matching structures so additional manipulation is minimal. 
#### To add the effective tax data, quickly translated the "State" column of Effective_Tax_2021 to the State acronyms. Using a quick Index/Match function, we can map the tax rates onto the cities. This could also be accomplished grouping on larger datasets. 


#### To add the Happiest_Cities data, we can map the RegionName column to the City column using Index/Match.

#### Similar methodology was used to add the population data, spread across the 200 Most Populated Cities and Population Change datasets. 

## David

## First Segment Rubric

### A) Presentation

### B) Github Repository - (Steve)
Main Branch
  - Readme
  - Individual Branches (Lucy, Nate, Andrew, Steve, David)

### C) Machine Learning Model - (David, Andrew, Nat, Lucy, Steve)
Present a provisional machine learning model:
  - Takes in data from the provisional database
  - Output labels for input data

Main Objective/Problem/What are we trying to predict? 
- Predicing housing sale prices
- Does something(feature) affect housing prices in a certain location?

What model are we going to use?
- Unsupervised ML Model
- Binary classification or clustering?

How are you training your model? - 

How does this model work? - 

#### Datasets/Features for model (Lucy, Andrew, Nat, David, Steve)
- Inventory by month - inventory_by_month.csv
- Median sale price by city - median_sales_prices.csv
- Median days to pending by city - median_days_pending.csv
- Zillow Rankings - bedrooms_ready.csv
- Tax Rates - effective_tax_rate_2021.xlsx
- Cost of Living - advisorsmith_cost_of_living_index.csv
- Happiest Cities - happiest_cities.xlsx
- Mortgage Rates (Freddie Mac 15-yr fixed) - mortgage_long.csv

### D) Database Ingestion - (Nat)
Present a provisional db that stands in for the final db that accomplishes the following:
  - Sample data that mimics the expected final db structure or scheme
  - Draft machine learning model is connected to the provisional db

