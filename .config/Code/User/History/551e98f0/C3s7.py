import requests
from bs4 import BeautifulSoup

import pandas as pd 
import os

#%% read file

os.chdir("/home/hadi/Downloads")
data = pd.read_excel("Keywords and ML Data Set.xlsx")

unique_Qs = data["Query"].unique()

## code below extracts the <body> tag for each query and puts that in a list (all bodies) it may be a bit long
query_bodies = []
all_bodies = []
j = 0
#%% extract body tag
for query in unique_Qs:

  for i in range(j,len(data)):

    if data.iloc[i].Query == query : 
      try : query_bodies.append( extract_body_tag(data.iloc[i].URL) )
      except : continue
      print(query)

    else : 
      all_bodies.append(query_bodies)
      query_bodies =[]
      j=i




def extract_body_tag(url):
    # Make a request to the URL and get the HTML content
    response = requests.get(url)
    html_content = response.content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the <body> tag and get its contents
    body_tag = soup.body
    body_content = body_tag.get_text()

    # Return the contents of the <body> tag as a string
    return body_content



