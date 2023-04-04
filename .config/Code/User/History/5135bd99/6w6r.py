#%% imports
import pandas as pd 
import os
#%% read dataset
data = pd.read_excel("fulldata_mod.xlsx")

print(data)

# %% seprating Acc1 to Acc 26 data

for eq in list(data.EARTHQUAKE.unique()) :

    eq_datas = data[data.EARTHQUAKE == eq]

    for sensor in list(data.SENSOR.unique()) :

        A_temp = eq_datas[ eq_datas.SENSOR == sensor ].A
        data_new = pd.concat( [data , A_temp] , axis=1 ,  )

        for sen_val in A_temp.iteritems(): 

            data_new = pd.concat( [sen_val, A_temp ] )
            print(data_new)

        

# %%
#  
# data.A[data.SENSOR==1 and data.EARTHQUAKE==1]

# %%
