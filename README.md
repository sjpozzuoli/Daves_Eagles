Lucy_Green
# Daves_Eagles
Group 4 Final Project

## Third Segment Rubric
### This Week: "Plug It In"

*Connect your final database to your model, continue to train your model, and create your dashboard presentation.*

### Machine Learning Model 1 - Unsupervised Clustering with KMeans
Team members submit the working code for their machine learning model, as well as the following:

#### Connect Database to Machine Learning Model:

![supervised_connect_database](https://user-images.githubusercontent.com/36451701/133947517-3794d5d5-9102-4d35-8fef-b2b6e7ddff51.png)

![pgadmin_data](https://user-images.githubusercontent.com/36451701/133911547-c9cd318b-1659-4897-9530-9b7d6c83166a.png)

![connect_db_1](https://user-images.githubusercontent.com/36451701/133911713-5b7fb47c-b6e2-422c-a91e-73881c316591.png)

#### Description of feature engineering and the feature selection, including their decision-making process:
![unsupervised_correlations_matrix](https://user-images.githubusercontent.com/36451701/133945037-8679dd9d-98f0-46fa-b200-06a15ae75318.png)

![unsupervised_outliers](https://user-images.githubusercontent.com/36451701/133944288-f4c4ec9b-7f0f-434a-8746-9a008718c229.png)

![feature_selection](https://user-images.githubusercontent.com/36451701/133911789-b1d49421-bf6a-4041-aadb-798e91f90bfe.png)

![identify_outliers](https://user-images.githubusercontent.com/36451701/133911808-e0f488e2-9217-479b-add1-cf088731a63a.png)


#### Description of how data was split into training and testing sets:

![unsupervised_test_train](https://user-images.githubusercontent.com/36451701/133942704-4b105e2f-6b1f-4e71-afbf-ed0e709fc33e.png)

![unsupervised_thedataset](https://user-images.githubusercontent.com/36451701/133945283-1dfe6dc9-7ae6-48a9-858b-581e49dd9308.png)

![unsupervised_optimal_clusters](https://user-images.githubusercontent.com/36451701/133945162-c299c195-24e4-4faf-b064-54de8d361a07.png)

![unsupervised_elbow_method](https://user-images.githubusercontent.com/36451701/133945420-5668dd19-1b34-413f-8619-9a803a44db9c.png)

![unsupervised_training_kmeans](https://user-images.githubusercontent.com/36451701/133946080-0dfb965c-60e6-4d8b-b743-d502ad1b6945.png)

![unsupervised_cluster_matplotlib](https://user-images.githubusercontent.com/36451701/133946352-da0a72f2-f4e0-4891-a38f-cc67e413c892.png)

![unsupervised_city_clusters](https://user-images.githubusercontent.com/36451701/133946854-2ff11da0-fd42-4c43-ad1b-c9b6c857eaa7.png)

#### Explanation of model choice, including limitations and benefits:
![unsupervised_insights](https://user-images.githubusercontent.com/36451701/133947617-488362bc-7f12-476c-8d66-ee0d092a68c5.png)


### Machine Learning Model 2 - Supervised Machine Learning Simple Linear Regression to Predict Hotness Rank

#### Connect Database to Machine Learning Model:
![supervised_connect_database2](https://user-images.githubusercontent.com/36451701/133947774-b9d9c117-242d-483a-a868-fd6590b009a6.png)

#### Description of data preprocessing:
![supervised_data_processing](https://user-images.githubusercontent.com/36451701/133948211-429558bd-6065-4e41-862c-793de498e0d0.png)

#### Description of how data was split into training and testing sets:
![supervised_train_test](https://user-images.githubusercontent.com/36451701/133948767-29308282-e2b9-42d4-b822-37b410beba14.png)

#### Predicting the Test set results:
![supervised_predict_test](https://user-images.githubusercontent.com/36451701/133948951-e2b7dd79-47a0-474c-aa8a-efb4c4e3aabd.png)

#### Visualize Training Set results:
![supervised_visualize_train](https://user-images.githubusercontent.com/36451701/133949367-8867f099-9e59-4455-9de8-c82e65398bea.png)

![supervised_visualize_train_scatter](https://user-images.githubusercontent.com/36451701/133949595-78980a3f-ef4f-497a-9564-df5ecc1f84c5.png)

#### Visualize Test Set results:
![supervised_visualize_test_scatter](https://user-images.githubusercontent.com/36451701/133949892-20126f2e-f1e2-48cb-a9ba-7f88b40d07e9.png)

![supervised_visualize_test_scatter2](https://user-images.githubusercontent.com/36451701/133950015-fb5b3305-525c-4d94-a9af-f859bb138570.png)

#### Explanation of model choice, including limitations and benefits:
![supervised_model_explanation](https://user-images.githubusercontent.com/36451701/133950165-846547f4-5488-437c-bb20-ed957eb677b2.png)

#### Description of current accuracy score:
![supervised_model_accuary](https://user-images.githubusercontent.com/36451701/133950594-98e392ac-50b6-4756-b4d9-a8417555d632.png)



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

