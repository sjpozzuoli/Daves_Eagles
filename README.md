Lucy_Green
# Daves_Eagles
Group 4 Final Project
Dave_Supple
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

#### Datasets/Features for model (Lucy, Andrew, Nat, David)
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


=======

With the goal of discovering and finalizing data sets, I chose the following three datasets and story lines that I thought might lead us to our goal of discovering 'The Best Place to Move (Live?) in 2022'. 

Added three data sets with three visual explanations (a screenshot of a graph from the rental dataset below). Four commits… I threw the rental and single family dataset into Tableau and got the following graphs. 

The following graph from the Metro_ZORI_AllHomesPlusMultifamily_SSA.csv dataset shows the highest rental prices per city and also the most variation of rental prices (the thicker the line, the more variation in rental prices). Analysis: the largest change in rental price = the more desirable the city currently. (but are the cities with more stable prices more attractive because there is less current competition?)

<img width="1422" alt="Metro_ZORI_AllHomesPlusMultifamily_SSA" src="https://user-images.githubusercontent.com/14239715/130970780-743408cd-8aa9-4c0f-a9bf-258871067635.png">



I made the following graph out of the data set mentioned below: my thinking is that ‘the best city to move to’ would not be any of the top (10?) that the average family unit is jumping sky high. San Jose is the highest but this graph will show any lines we hover over when looked at in Tableau after transposing the data in Excel so that the dates were rows and the cities were columns. 

<img width="1218" alt="Metro_zhvi_uc_sfr_tier_0 33_0 67_sm_sa_month" src="https://user-images.githubusercontent.com/14239715/130970644-7d2eb5d2-d56e-4943-85b5-9de161d20e3e.png">


Finally, I thought it would be interesting to see how long each house is on the market before it sells, per state over time. This would potentially be an indicator of the LEAST desireable places to a purchase home currently. I also transposed this data in Excel to get the time line.  
<img width="1192" alt="Metro_mean_doz_pending_uc_sfcondo_sm_month" src="https://user-images.githubusercontent.com/14239715/130982358-a2011336-03f1-4ca0-b7af-87b926eede8a.png">


All thee graphs are on Tableau and ready for further investigation. 






=======
main

main
