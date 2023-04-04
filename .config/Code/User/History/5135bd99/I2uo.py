#%% imports
import pandas as pd 
import os
#%% read dataset
data = pd.read_excel("fulldata_mod.xlsx")

print(data)
data_new

# %% seprating Acc1 to Acc 26 data

data_new = data.copy()

for eq in list(data.EARTHQUAKE.unique()) :

    eq_datas = data[data.EARTHQUAKE == eq]

    for sensor in list(data.SENSOR.unique()) :

        A_temp = eq_datas[ eq_datas.SENSOR == sensor ].A
        data_new = pd.concat( [pd.DataFrame({ "A%d"%sensor : list(A_temp) }) , data_new ] , axis=1 )
#%% save new data to excel
print(data_new)
os.chdir("~/Desktop/earthquake_proj")
data_new.to_excel("full_dataset_modified.xlsx")



        


# %%
#  
# data.A[data.SENSOR==1 and data.EARTHQUAKE==1]

# %%
