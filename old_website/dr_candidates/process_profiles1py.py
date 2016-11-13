import os
import numpy as np
import csv
import re

fname = []
lname = []
uni = []
with open('profiles.csv', 'rU') as csvfile:
     reader = csv.reader(csvfile)
     for row in reader:
          fname.append(row[1])
          lname.append(row[2])
          uni.append(row[4])

uni_copy = [u for u in uni]

ldept = ''
for subdir,dirs,files in os.walk('./'):
     for file in files:
          if file.split('.')[-1]=='jpg':
               uni_c = file.split('.')[0]
               dept_c = subdir.split('/')[1]
               if not ldept == dept_c:
                    print "\n\n\n" + dept_c + "\n"
               try:
                    ind = uni.index(uni_c)
               except:
                    ind = 0
                    print 'Not found: ' + uni_c

               print fname[ind] + ' ' + lname[ind]
               ldept = dept_c