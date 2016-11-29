import csv
import os

department_names_codes_map = {'Applied Physics and Applied Mathematics': 'apam',
							  'Biomedical Engineering': 'bmen',
							  'Civil Engineering and Engineering Mechanics': 'ceem',
							  'Chemical Engineering': 'chen',
							  'Computer Science': 'coms',
							  'Data Science Institute': 'dsi',
							  'Earth and Environmental Engineering': 'eaee',
							  'Electrical Engineering': 'elen',
							  'Industrial Engineering and Operations Research': 'ieor',
							  'Mechanical Engineering': 'mece'}

department_codes_names_map = {'apam': 'Applied Physics and Applied Mathematics',
							  'bmen': 'Biomedical Engineering',
							  'ceem': 'Civil Engineering and Engineering Mechanics',
							  'chen': 'Chemical Engineering',
							  'coms': 'Computer Science',
							  'dsi': 'Data Science Institute',
							  'eaee': 'Earth and Environmental Engineering',
							  'elen': 'Electrical Engineering',
							  'ieor': 'Industrial Engineering and Operations Research',
							  'mece': 'Mechanical Engineering'}

dept_counter_map = {'apam': 0,
					'bmen': 0,
					'ceem': 0,
					'chen': 0,
					'coms': 0,
					'dsi': 0,
					'eaee': 0,
					'elen': 0,
					'ieor': 0,
					'mece': 0}

for dept in dept_counter_map:
	try:
		os.makedirs(dept)
	except OSError as exception:
		if not os.path.isdir(dept):
			raise
	filename = dept + '/index.html'
	with open(filename, 'w') as deptfile:
		deptfile.write('<!DOCTYPE html>\n')
		deptfile.write('<html>\n')
		deptfile.write('<head>\n')
		deptfile.write('    <title>Engineering Graduate Student Council, Columbia University</title>\n')
		deptfile.write('    <meta charset="utf-8" />\n')
		deptfile.write('    <meta name="viewport" content="width=device-width, initial-scale=1" />\n')
		deptfile.write('    <!--[if lte IE 8]><script src="/assets/js/ie/html5shiv.js"></script><![endif]-->\n')
		deptfile.write('    <link rel="stylesheet" href="/assets/css/main.css" />\n')
		deptfile.write('    <link rel="icon" type="image/ico" href="/favicon.ico" />\n')
		deptfile.write('    <!--[if lte IE 8]><link rel="stylesheet" href="/assets/css/ie8.css" /><![endif]-->\n')
		deptfile.write('    <!--[if lte IE 9]><link rel="stylesheet" href="/assets/css/ie9.css" /><![endif]-->\n')
		deptfile.write('    <script src="/assets/js/jquery.min.js"></script>\n')
		deptfile.write('    <script src="/assets/js/jquery.dropotron.min.js"></script>\n')
		deptfile.write('    <script src="/assets/js/jquery.scrolly.min.js"></script>\n')
		deptfile.write('    <script src="/assets/js/jquery.scrollgress.min.js"></script>\n')
		deptfile.write('    <script src="/assets/js/skel.min.js"></script>\n')
		deptfile.write('    <script src="/assets/js/util.js"></script>\n')
		deptfile.write('    <!--[if lte IE 8]><script src="/assets/js/ie/respond.min.js"></script><![endif]-->\n')
		deptfile.write('    <script src="/assets/js/main.js"></script>\n')
		deptfile.write('    <script>\n')
		deptfile.write('        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n')
		deptfile.write('        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n')
		deptfile.write('        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n')
		deptfile.write('        })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n')
		deptfile.write('\n')
		deptfile.write('        ga(\'create\', \'UA-75633179-1\', \'auto\');\n')
		deptfile.write('        ga(\'send\', \'pageview\');\n')
		deptfile.write('    </script>\n')
		deptfile.write('</head>\n')
		deptfile.write('<body class="index">\n')
		deptfile.write('    <div id="page-wrapper">\n')
		deptfile.write('\n')
		deptfile.write('        <header id="header" class="alt">\n')
		deptfile.write('            <div id="logo"></div>\n')
		deptfile.write('            <nav id="nav">\n')
		deptfile.write('                <ul>\n')
		deptfile.write('                    <li><a href="/dr_candidates">Candidates Home</a></li>\n')
		deptfile.write('                    <li class="submenu current">\n')
		deptfile.write('                        <a href="">Departments</a>\n')
		deptfile.write('                        <ul>\n')
		deptfile.write('                            <li><a href="/dr_candidates/apam/">APAM</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/bmen/">BMEN</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/ceem/">CEEM</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/chen/">CHEN</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/coms/">COMS</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/dsi/">DSI</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/eaee/">EAEE</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/elen/">ELEN</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/ieor/">IEOR</a></li>\n')
		deptfile.write('                            <li><a href="/dr_candidates/mece/">MECE</a></li>\n')
		deptfile.write('                        </ul>\n')
		deptfile.write('                    </li>\n')
		deptfile.write('                    <li><a href="/">Back to EGSC</a></li>\n')
		deptfile.write('                </ul>\n')
		deptfile.write('            </nav>\n')
		deptfile.write('        </header>\n')
		deptfile.write('        <section id="banner">\n')
		deptfile.write('            <div class="inner">\n')
		deptfile.write('                <div id="egsc">\n')
		deptfile.write('                    <img src="/images/egsc.png" class="egsc" />\n')
		deptfile.write('                </div>\n')
		deptfile.write('                <header>\n')
		deptfile.write('                    <h2 style="border-bottom: 0;">Engineering Graduate Student Council</h2>\n')
		deptfile.write('                    <h2 style="border-top: 0;">Columbia University</h2>\n')
		deptfile.write('                </header>\n')
		deptfile.write('            </div>\n')
		deptfile.write('        </section>\n')
		deptfile.write('        <article id="main">\n')
		deptfile.write('            <header class="special container">\n')
		deptfile.write('                <span class="icon fa-university"></span>\n')
		deptfile.write('                <h1>' + department_codes_names_map[dept] + '</h1>\n')
		deptfile.write('            </header>\n')
		deptfile.write('            <section class="wrapper style4 container special">\n')
		deptfile.write('                <div class="content">\n')
		deptfile.close()

with open('dr-applications.csv', 'r') as csvfile:
	dr_reader = csv.reader(csvfile)
	for row in dr_reader:
		if row[5] in department_names_codes_map:
			filename = department_names_codes_map[row[5]] + '/index.html'
			with open(filename, 'a') as deptfile:
				deptfile.write('                    <hr class="inter">\n')
				deptfile.write('                    <div class="row">\n')
				deptfile.write('                        <div class="4u 12u(narrower)">\n')
				deptfile.write('                            <div class="member">\n')
				deptfile.write('                                <img src="' + row[13] + '">\n')
				deptfile.write('                            </div>\n')
				deptfile.write('                            <header>\n')
				deptfile.write('                                <h2>' + row[1] + ' ' + row[2] + '</h2>\n')
				deptfile.write('                                <p class="centered"><a href="' + row[3] +'">' + row[3] + '</a></p>\n')
				deptfile.write('                            </header>\n')
				deptfile.write('                        </div>\n')
				deptfile.write('                        <div class="8u 12u(narrower)">\n')
				deptfile.write('                            <h3>Please describe any relevant past experience</h3>\n')
				deptfile.write('                            <p style="text-align: justify;">' + row[6] + '</p>\n')
				deptfile.write('                            <h3>What are your goals/vision for your committees of choice? How do you think you can contribute to them?</h3>\n')
				deptfile.write('                            <p style="text-align: justify;">' + row[10] + '</p>\n')
				if row[11]:
					deptfile.write('                            <h3>Any other relevant information you would like to share</h3>\n')
					deptfile.write('                            <p style="text-align: justify;">' + row[11] + '</p>\n')
				deptfile.write('                        </div>\n')
				deptfile.write('                    </div>\n')
				deptfile.close()
			dept_counter_map[department_names_codes_map[row[5]]] += 1

	print dept_counter_map
	csvfile.close()

for dept in dept_counter_map:
	filename = dept + '/index.html'
	with open(filename, 'a') as deptfile:
		deptfile.write('                    <hr class="inter">\n')
		deptfile.write('                </div>\n')
		deptfile.write('            </section>\n')
		deptfile.write('        </article>\n')
		deptfile.write('        <footer id="footer">\n')
		deptfile.write('\n')
		deptfile.write('            <ul class="icons">\n')
		deptfile.write('                <li><a href="https://lists.columbia.edu/mailman/listinfo/egsc-announcements" class="icon circle fa-envelope" target="_blank"><span class="label">Mailing List</span></a></li>\n')
		deptfile.write('                <li><a href="https://www.facebook.com/ColumbiaEGSC" class="icon circle fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>\n')
		deptfile.write('                <li><a href="https://twitter.com/columbiaegsc" class="icon circle fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>\n')
		deptfile.write('                <li><a href="https://www.instagram.com/columbiaegsc/" class="icon circle fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>\n')
		deptfile.write('                <li><a href="https://www.facebook.com/groups/EGSC.Columbia/" class="icon circle fa-group" target="_blank"><span class="label">Facebook Group</span></a></li>\n')
		deptfile.write('            </ul>\n')
		deptfile.write('\n')
		deptfile.write('            <ul class="copyright">\n')
		deptfile.write('                <li>&copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> EGSC, Columbia University</li>\n')
		deptfile.write('                <li>Designed by <a href="http://www.pratyushnalam.com" target="_blank">Pratyush Nalam</a></li>\n')
		deptfile.write('            </ul>\n')
		deptfile.write('\n')
		deptfile.write('        </footer>\n')
		deptfile.write('    </div>\n')
		deptfile.write('</body>\n')
		deptfile.write('</html>\n')
		deptfile.close()
