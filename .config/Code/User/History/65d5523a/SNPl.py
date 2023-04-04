# source : https://realpython.com/beautiful-soup-web-scraper-python/
import requests
import bs4
from bs4 import BeautifulSoup as BS

page = requests.get("https://realpython.github.io/fake-jobs/")
BS_obj = BS(page.content,"html.parser")

res = BS_obj.find(id="ResultsContainer")
print(res.prettify())

cols = res.find_all("dev", class_ = "column is-half")
res2 = cols.find("p",class_="location")
                    
content1 = res2.text
print(content1)

print(res.find_all('a')[1])