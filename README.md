# Daves_Eagles
Group 4 Final Project

## First Segment Rubric

### A) Presentation

1. Selected topic
- We chose to examine historical real estate and city data to predict the next city that will see a real estate "boom"
2. Reason why the topic was selected
- The topic was selected because we thought it was a relevant piece of information in the current age, with many people moving out of big cities and to the "suburbs". 
3. Description of their source of data
- We have begun to source data from multiple places like Zillow and the newly reprted Census data to build a picture of the historical information about these cities. From there we will attempt to determine which factors are most important when implementing the unsupervised machine learning aspect of the project.
4. Questions we hope to answer with the data
- We hope to answer the question of which city will see an increase in real estate prices due to an influx of new residents. We will also attempt to determine which cities would be ideal for investing in real estate prior to this rush.

#### In order to communicate for this project, we have used class time, office hours, a slack channel with all members and video chats outside of class time in order to coordinate roles and let others know when data was being uploaded to branches. 

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

![Proof_of_Concept_Screenshot](https://user-images.githubusercontent.com/81929616/131272996-e258b6d8-f039-42c7-93a7-017b11bbf6c1.PNG)

### D) Database Ingestion - (Nat)
Present a provisional db that stands in for the final db that accomplishes the following:
  - Sample data that mimics the expected final db structure or scheme
  - Draft machine learning model is connected to the provisional db

![ERD_v1](https://user-images.githubusercontent.com/81929616/131272834-a278bad3-973c-4ead-9ce7-e6030b3d397d.png)


### Join Methodology
#### Starting with the Zillow Inventory by Month table as the 'base', drop the first two columns - "RegionID" and "SizeRank" as these don't add useful indexing information and could potentially confuse the model.
#### The next step is to add the final columns from Median_Days_Pending and Median_Sales_Prices as columns to the joined table - these tables have matching structures so additional manipulation is minimal. 
#### To add the effective tax data, quickly translated the "State" column of Effective_Tax_2021 to the State acronyms. Using a quick Index/Match function, we can map the tax rates onto the cities. This could also be accomplished grouping on larger datasets. 


#### To add the Happiest_Cities data, we can map the RegionName column to the City column using Index/Match.

#### Similar methodology was used to add the population data, spread across the 200 Most Populated Cities and Population Change datasets. 



