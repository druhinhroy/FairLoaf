import requests
from bs4 import BeautifulSoup
from datetime import date

f = open("allergies.txt", "a")

todaysdate = "\n"
todaysdate += str(date.today())
todaysdate += "\n"

f.write(todaysdate)

dic = {}

URL = "https://www.kvue.com/article/weather/allergy-forecast/allergy-report-austin-allergies/269-44055429"

page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find_all("div", class_="article__section article__section_type_text utility__text")

results = str(results)

index1 = results.find("<p>")
index2 = results.find("</p>")

results = results[index1+3:index2].split(", ")

for i in results:
    indexSpace = i.find(" ")
    if i[:indexSpace] not in dic:
        dic[i[:indexSpace]] = i[indexSpace+1:]                      

if "Cedar" not in dic:
    dic["Cedar"] = "0 gr/m3 None"                       # Cedar only for December through March, for all other months, is zero
                                                        # Missing Ash and Elm, which are sometimes present in a "Trees" category

for key in dic:
    output = ""
    output += key
    output += ": "
    output += dic[key]
    output += "\n"
    f.write(output)

f.close()