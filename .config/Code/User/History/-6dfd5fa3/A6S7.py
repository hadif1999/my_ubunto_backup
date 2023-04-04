#%%
import pandas as pd
import os 

os.chdir("/home/hadi/Desktop/projects/ranking_project_with_bert") 
data = pd.read_excel("dataset_modified_V2.0.xlsx")
data

# %%
gr = data.groupby("Query")
# %%
gr.get_group("virtual writing tutor")

#%% 
gr2 = data.groupby(["Query" , "Is Safe – Google Safe Browsing : URL"])
# %%
