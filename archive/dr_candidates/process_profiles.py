import os
import numpy as np
import csv
import re

for subdir,dirs,files in os.walk('./'):
  for file in files:
    if file=='profiles.html':
      os.remove(os.path.join(subdir, file))
fname = []
lname = []
uni = []
depts = []
dept_map = {'Applied Math and Applied Physics':'apam',
            'Biomedical Engineering':'bme',
            'Chemical Engineering':'chem',
            'Civil Engineering and Engineering Mechanics':'ceem',
            'Computer Science':'coms',
            'Data Science Institute':'dsi',
            'Earth and Environmental Engineering': 'eaee',
            'Electrical Engineering':'elen',
            'Industrial Engineering and Operations Research':'ieor',
            'Mechanical Engineering':'mech'}
q1 = []
q2 = []
q3 = []
q1_text = 'Please describe any relevant past experience'
q2_text = 'What are your goals/vision for your committees of choice? How do you think you can contribute to them?'
q3_text = 'Any other information you would like to share'

with open('profiles.csv', 'rU') as csvfile:
     reader = csv.reader(csvfile)
     for row in reader:
          if row[5] in dept_map.keys():
               fname.append(row[1])
               lname.append(row[2])
               uni.append(row[4])
               depts.append(dept_map[row[5]])
               q1.append(row[6])
               q2.append(row[10])
               q3.append(row[11])
          else:
               print row[5]

uni_copy = [u for u in uni]

for subdir,dirs,files in os.walk('./'):
     for file in files:
          if file.split('.')[-1]=='jpg':
               uni_c = file.split('.')[0]
               dept_c = subdir.split('/')[1]
               with open('./' + dept_c + '/profiles.html', "a") as htmlfile:
                    htmlfile.write('''
<hr style="width: 100%; border-top: 1px solid #bbb;">
<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
     <div class="team-member">
          <div class="team-member-holder">
               <div class="team-member-image">
                    <img alt="" src="''')

                    htmlfile.write(uni_c + '.jpg">')

                    htmlfile.write('''
               </div>
               <div class="team-member-meta">
                    <h4 class="team-member-name">''')

                    try:
                         ind = uni.index(uni_c)
                    except:
                         ind = 0
                         print 'Not found: ' + uni_c

                    htmlfile.write(fname[ind] + ' ' + lname[ind])

                    htmlfile.write('''
               </div>
          </div>
     </div>
</div>
<div class="col-lg-9 col-md-9 col-sm-6 col-xs-6">
     <h4 class="team-member-name">''')

                    htmlfile.write(q1_text + '</h4>' + '\n')

                    htmlfile.write(q1[ind] + '\n<br><br>\n')

                    htmlfile.write('''
     <h4 class="team-member-name">''')

                    htmlfile.write(q2_text + '</h4>' + '\n')

                    htmlfile.write(q2[ind] + '\n<br><br>\n')

                    if not q3[ind] == '':
                         htmlfile.write('''
     <h4 class="team-member-name">''')
                         htmlfile.write(q3_text + '</h4>' + '\n')
                         htmlfile.write(q3[ind] + '\n<br><br>\n')


                    htmlfile.write('''
</div>
<hr style="width: 100%; border-top: 1px solid #bbb;"><br><br><br><br>
''')

                    uni_copy.remove(uni_c)


print 'Not processed: ' + str(uni_copy)
