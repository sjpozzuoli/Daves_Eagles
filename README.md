# Daves_Eagles
Group 4 Final Project

## Second Segment Rubric
Hi team! I needed to get this done this morning so I can not worry about Sun night's deadline (just in case our river running today leaves us wanting more). Please edit this however you like to make it correspond with the Rubric setup. I believe Dave is going to build the setup to match what Steve did for the first segement. 

### Visualization Iteration

We've used visualizations throught out this process to 
  a) understand our data and lay the ground work of our study. 
  b) to get the data sets in motion; test them and make sure that we have all of the infomation we'll need, in a format that is useful 
  c) to start to understand the scope of our inquiry. While there are endless parameters that would be fun to study, understanding the what is in scope for a cohesive project and what is out of scope has been crutial to deliver a comprehensive analysis and 
  d) as a tool for discussion, to make sure that we're understanding one another and speaking the same language. 


While working in Tableau to quickly see the data and understand the potential of our analysis, we're working on a parallel track in Javascript as that would be our aspirational delivery tool. 

The screen shots below show the evolution of our data visualization work... from sketch to code. 

Below is the fifth Tableau iteration showing the choice to show a limited number of specific cities to analyse. We have crossreferenced our own data sets to the city choices from the US News and World report list of '150 Best Places to Live'. In our finally analysis, we will chose our own top cities rather than the US News and World report's list with regards to the results of our Machine Learning model. 
<img width="1393" alt="Screen Shot 2021-09-06 at 3 54 51 PM" src="https://user-images.githubusercontent.com/14239715/132949550-79c28f92-8057-454f-9551-9e7179c16909.png">

Below is the integration of the Machine Learning model build by the team. We are now integrating the learnings of the model with the prior viz sketchs to hone in on a discrete and specific story. 
<img width="1412" alt="Screen Shot 2021-09-10 at 7 09 47 PM" src="https://user-images.githubusercontent.com/14239715/132949555-5e477900-7ece-47e5-bf4e-7d2a1aef6895.png">

Finally, the code in progress of a potential Javascript/HTML site for potential final delivery.
<img width="1686" alt="Screen Shot 2021-09-10 at 8 14 53 PM" src="https://user-images.githubusercontent.com/14239715/132949573-676407f2-2da1-4840-b807-5fd747c9e60f.png">







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


main
