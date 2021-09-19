Lucy_Green
# Daves_Eagles
Group 4 Final Project

## Third Segment Rubric
### This Week: "Plug It In"

*Connect your final database to your model, continue to train your model, and create your dashboard presentation.*

### Machine Learning Model 1 - Unsupervised Clustering with KMeans
Team members submit the working code for their machine learning model, as well as the following:

#### Description of data preprocessing:

#### Connect Database to Machine Learning Model:
![pgadmin_data](https://user-images.githubusercontent.com/36451701/133911547-c9cd318b-1659-4897-9530-9b7d6c83166a.png)

![unsupervised_db_connection](https://user-images.githubusercontent.com/36451701/133943107-44397901-6da6-4813-bc32-ac9502a9d26d.png)

![connect_db_1](https://user-images.githubusercontent.com/36451701/133911713-5b7fb47c-b6e2-422c-a91e-73881c316591.png)

#### Description of feature engineering and the feature selection, including their decision-making process:

![feature_selection](https://user-images.githubusercontent.com/36451701/133911789-b1d49421-bf6a-4041-aadb-798e91f90bfe.png)

![identify_outliers](https://user-images.githubusercontent.com/36451701/133911808-e0f488e2-9217-479b-add1-cf088731a63a.png)


#### Description of how data was split into training and testing sets:

![unsupervised_test_train](https://user-images.githubusercontent.com/36451701/133942704-4b105e2f-6b1f-4e71-afbf-ed0e709fc33e.png)

![unsupervised_split](https://user-images.githubusercontent.com/36451701/133912167-620caaef-a839-4f03-a6d3-c27c883eb175.png)

![unsupervised_elbow](https://user-images.githubusercontent.com/36451701/133912237-0b6c0a80-32b3-4da2-aa12-d579e70d2d5d.png)

![unsupervised_training2](https://user-images.githubusercontent.com/36451701/133941295-5c3f77cc-09b9-47de-95b2-b8c743e49f38.png)

![unsupervised_cluster](https://user-images.githubusercontent.com/36451701/133912332-c99982dc-850f-477e-8b59-5f55f65dc01d.png)

![unsupervised_pivot](https://user-images.githubusercontent.com/36451701/133912486-8d363805-e7fa-4061-b3cc-fa5b924e5b88.png)

![unsupervised_add_class](https://user-images.githubusercontent.com/36451701/133912360-972ad71e-e373-4c4e-a320-4d27553e2d52.png)

#### Description of how they have trained the model thus far, and any additional training that will take place:

#### Explanation of model choice, including limitations and benefits:

![unsupervised_explanations](https://user-images.githubusercontent.com/36451701/133940803-db86d055-0090-4f57-bf00-46699dfd3507.png)



##### Description of current accuracy score:

## SECOND SEGMENT RUBRIC

### This Week: “Build The Pieces”

*Train your model and build out the database you’ll use for your final presentation.*

By the end of this segment, you’ll will have: 
- Connected your machine learning model into the project
- Integrated and Optimized the database into the project
- Have all necessary GitHub branches merged
- Iterated on your dashboard

### Choose Your Machine Learning Model:

#### *You have the data, what do you hope to get out of it?*
- Step 1: Analyze the input data.
- Step 2: Analyze the output data.
- Step 3: Choose your algorithm - Clustering Algos
- Step 4: Analyze the results and review accuracy

#### What are we looking for in the data?
- Looking for unexpected things to pop up like structures, clusters and groupings we would have never thought of otherwise. 
- Simplifying the process of buying a home by pinpointing the most important features

### Second Segment Grading Criteria:
- 01 - Presentation outlines the project (15 points)
- 02 - All code in main GitHub repo branch is production ready
- 03 - Code is submitted for the machine learning model (30 points)
- 04 - Presentation of a fully integrated database (30 points)
- 05 - A blueprint for the dashboard is created (15 points)


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

