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
        data_new = pd.concat( [pd.DataFrame({ "A%d"%sensor : list(A_temp) }) , data ] , axis=1 )
        print(data_new)


        


# %%
#  
# data.A[data.SENSOR==1 and data.EARTHQUAKE==1]

# %%
