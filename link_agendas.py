import os
import urllib
from bs4 import BeautifulSoup as Soup

# Read in HTML and find agenda section
sourcefile = "resources.html"
raw_page = urllib.urlopen(sourcefile).read()
soup = Soup(raw_page, "html.parser")
agenda_section = soup.find('ul', class_ = "agendas_header")

# Remove existing links
for link in agenda_section.findAll(True):
    link.extract()

# Generate all links
path = "agendas/"
for filename in reversed(os.listdir(path)):
    if filename.endswith(".pdf"):
        linkname = filename.split(".pdf")[0]
        location = path + filename
        entry = soup.new_tag("li")
        link = soup.new_tag("a", href=location)
        link.string = linkname
        agenda_section.insert(1, entry)
        entry.insert(1, link)

agenda_section = soup.find('ul', class_ = "minutes_header")
path = "minutes/"
for filename in reversed(os.listdir(path)):
    if filename.endswith(".pdf"):
        linkname = filename.split(".pdf")[0]
        location = path + filename
        entry = soup.new_tag("li")
        link = soup.new_tag("a", href=location)
        link.string = linkname
        agenda_section.insert(1, entry)
        entry.insert(1, link)

html = soup.prettify("utf-8")
with open(sourcefile, "wb") as file:
    file.write(html)
