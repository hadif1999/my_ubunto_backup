import requests
from bs4 import BeautifulSoup

import pandas as pd 
import os


os.chdir("/home/hadi/Downloads")
data = pd.read_excel("Keywords and ML Data Set.xlsx")
unique_Qs = data["Query"].unique()





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



