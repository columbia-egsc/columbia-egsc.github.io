import collections
import csv
import io

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

mentors_dict = {}

with io.open('mentors.csv', 'r') as csvfile:
	csv_reader = csv.reader(csvfile)
	for row in csv_reader:
		curr_row = {}
		curr_row['name'] = row[1].title()
		curr_row['email'] = row[2]
		curr_row['uni'] = row[6]
		curr_row['blurb'] = [x.strip() for x in row[4].strip().split('\n') if x.strip()]  # make paragraphs
		curr_row['interests'] = row[5]
		curr_row['dept'] = row[3]
		if department_names_codes_map[row[3]] in mentors_dict:
			mentors_dict[department_names_codes_map[row[3]]].append(curr_row)
		else:
			curr_list = []
			curr_list.append(curr_row)
			mentors_dict[department_names_codes_map[row[3]]] = curr_list
	csvfile.close()

mentors_dict = collections.OrderedDict(sorted(mentors_dict.items()))

filename = 'mentors.html'
with open(filename, 'w') as mentors_file:
	mentors_file.write('<!DOCTYPE html>\n')
	mentors_file.write('<html>\n')
	mentors_file.write('<head>\n')
	mentors_file.write('	<title>Engineering Graduate Student Council, Columbia University</title>\n')
	mentors_file.write('	<meta charset="utf-8" />\n')
	mentors_file.write('	<meta name="viewport" content="width=device-width, initial-scale=1" />\n')
	mentors_file.write('	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->\n')
	mentors_file.write('	<link rel="stylesheet" href="assets/css/main.css" />\n')
	mentors_file.write('	<link rel="icon" type="image/ico" href="favicon.ico" />\n')
	mentors_file.write('	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->\n')
	mentors_file.write('	<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->\n')
	mentors_file.write('</head>\n')
	mentors_file.write('<body class="index">\n')
	mentors_file.write('	<div id="page-wrapper">\n')
	mentors_file.write('		<header id="header" class="alt">\n')
	mentors_file.write('			<div id="logo"></div>\n')
	mentors_file.write('			<nav id="nav">\n')
	mentors_file.write('				<ul>\n')
	mentors_file.write('					<li><a href="/">Home</a></li>\n')
	mentors_file.write('					<li class="submenu">\n')
	mentors_file.write('						<a href="">About</a>\n')
	mentors_file.write('						<ul>\n')
	mentors_file.write('							<li><a href="members.html">Members</a></li>\n')
	mentors_file.write('							<li><a href="studentgroups.html">Student Groups</a></li>\n')
	mentors_file.write('							<li><a href="mission.html">Mission</a></li>\n')
	mentors_file.write('							<li><a href="constitution.html">Constitution</a></li>\n')
	mentors_file.write('							<li><a href="media.html">Media</a></li>\n')
	mentors_file.write('						</ul>\n')
	mentors_file.write('					</li>\n')
	mentors_file.write('					<li><a href="resources.html">Resources</a></li>\n')
	mentors_file.write('					<li class="submenu current">\n')
	mentors_file.write('						<a href="">Opportunities</a>\n')
	mentors_file.write('						<ul>\n')
	mentors_file.write('							<li><a href="mentors.html">Mentorship</a></li>\n')
	mentors_file.write('							<li><a href="scholarship.html">Scholarship</a></li>\n')
	mentors_file.write('						</ul>\n')
	mentors_file.write('					</li>\n')
	mentors_file.write('					<li><a href="qualityoflife.html">Quality of Life</a></li>\n')
	mentors_file.write('					<li><a href="unionization.html">Unionization</a></li>\n')
	mentors_file.write('				</ul>\n')
	mentors_file.write('			</nav>\n')
	mentors_file.write('		</header>\n')
	mentors_file.write('		<section id="banner">\n')
	mentors_file.write('			<div class="inner">\n')
	mentors_file.write('				<div id="egsc">\n')
	mentors_file.write('					<img src="images/egsc.png" class="egsc" />\n')
	mentors_file.write('				</div>\n')
	mentors_file.write('				<header>\n')
	mentors_file.write('					<h2 style="border-bottom: 0;">Engineering Graduate Student Council</h2>\n')
	mentors_file.write('					<h2 style="border-top: 0;">Columbia University</h2>\n')
	mentors_file.write('				</header>\n')
	mentors_file.write('			</div>\n')
	mentors_file.write('		</section>\n')
	mentors_file.write('		<article id="main">\n')
	mentors_file.write('			<header class="special container">\n')
	mentors_file.write('				<span class="icon fa-university"></span>\n')
	mentors_file.write('				<h1>EGSC Peer Mentorship Program</h1>\n')
	mentors_file.write('			</header>\n')
	mentors_file.write('			<section class="wrapper style4 container special">\n')
	mentors_file.write('				<div class="content">\n')
	mentors_file.write('					<p>For many students, transitioning to graduate student life can be overwhelming. We, at EGSC, recognize the challenges students face during this period and understand the impact it may have on an individual\'s experience at Columbia Engineering. It is our goal to help students take full advantage of what Columbia and New York City has to offer.</p>\n')
	mentors_file.write('					<p>The mentorship program connects students with mentors who can help them navigate life as a graduate student. Our mentors have been through the challenges students face before and can offer assistance in a variety of ways to help student achieve their goals both during their time at Columbia and beyond.</p>\n')
	mentors_file.write('					<p>Below, we have compiled profiles of our mentors separated by departments. To better match you with the perfect mentor, we have created the following categories of interests:</p>\n')
	mentors_file.write('					<p><strong>Academics/Goals</strong>: Choosing which courses to take can be one of the most frustrating decisions you make as a graduate student, especially if you\'re new to Columbia. We can help identify and recommend classes that fit your interests.</p>\n')
	mentors_file.write('					<p><strong>Graduate Student Life</strong>: Many students find graduate student life daunting. We are here to help you find a balance between academics, research, and social life to take advantage of the best Columbia and NYC has to offer.</p>\n')
	mentors_file.write('					<p><strong>Getting to Know NYC</strong>: If you are new to NYC, you will find that the amount of things you can do can get overwhelming. We can make suggestions on things to do, places to visit, where to eat, and shows to watch.</p>\n')
	mentors_file.write('					<p><strong>Career (Job/Internship)</strong>: Are you looking for a full-time job or summer internship? We have been through this process and are here to help assist you in any way we can. We can critique resumes, aid in job search, and even help you prepare for interviews.</p>\n')
	mentors_file.write('					<p><strong>Student Involvement/Activities</strong>: There are plenty of things to do at Columbia University outside of academics. If you are looking for ways to get involved at any level or simply wondering what events are happening around campus, we are here to help.</p>\n')
	mentors_file.write('					<p><strong>Getting Out</strong>: There is more to the east coast than NYC. Come talk to us if you are looking for things to do outside of the city or just want to plan a getaway trip.</p>\n')
	mentors_file.write('					<p><strong>Networking</strong>: We have all heard the phrase, "Network! Network! Network!" We are here to help you put yourself out there and will try to connect you with the right people so you can achieve your goals.</p>\n')
	mentors_file.write('					<p><strong>General Advice</strong>: Ask me anything! If you have a general questions or your questions do not fit in any of the above categories, just ask us.</p>\n')
	mentors_file.write('					<p>If you are interested in becoming a mentor, please fill out <a href="http://goo.gl/forms/sxZTb0rwh0" target="_blank">this form</a>.</p>\n')
	mentors_file.write('					<p>If you are interested in becoming a mentee, please fill out this form <a href="http://goo.gl/forms/9YM6iDL2Ln" target="_blank">this form</a>.</p>\n')
	mentors_file.write('					<p>If you have any further questions, please contact the EGSC Vice President at <a href="mailto:vp@egsc.seas.columbia.edu">vp@egsc.seas.columbia.edu</a>.</p>\n')
	mentors_file.write('					<p>Below is the list of our current mentors:</p>\n')
	mentors_file.write('					<hr>\n')

	for dept in mentors_dict:
		mentors_file.write('					<h2 class="department">' + department_codes_names_map[dept] + '</h2>\n')
		for mentor_index, mentor in enumerate(mentors_dict[dept]):
			mentors_file.write('					<div class="row">\n')
			mentors_file.write('						<div class="4u 12u(narrower)">\n')
			mentors_file.write('							<div class="member">\n')
			mentors_file.write('								<img src="images/mentors/' + dept + '/' + mentor['uni'] + '.jpg">\n')
			mentors_file.write('							</div>\n')
			mentors_file.write('							<header>\n')
			mentors_file.write('								<h2>' + mentor['name'] + '</h2>\n')
			mentors_file.write('								<p class="centered"><a href="mailto:' + mentor['email'] + '">' + mentor['email'] + '</a></p>\n')
			mentors_file.write('							</header>\n')
			mentors_file.write('						</div>\n')
			mentors_file.write('						<div class="8u 12u(narrower)">\n')
			for para_index, para in enumerate(mentor['blurb']):
				mentors_file.write('							<p>')
				if para_index == 0:
					mentors_file.write('"')
				mentors_file.write(para)
				if para_index + 1 == len(mentor['blurb']):
					mentors_file.write('"')
				mentors_file.write('</p>\n')
			mentors_file.write('							<p><b>Interests:</b> ' + mentor['interests'] + '</p>\n')
			mentors_file.write('						</div>\n')
			mentors_file.write('					</div>\n')
			if mentor_index + 1 < len(mentors_dict[dept]) and len(mentors_dict[dept]) > 1:
				mentors_file.write('					<hr class="inter">\n')
		mentors_file.write('					<hr>\n')

	mentors_file.write('				</div>\n')
	mentors_file.write('			</section>\n')
	mentors_file.write('		</article>\n')
	mentors_file.write('		<footer id="footer">\n')
	mentors_file.write('			<ul class="icons centered">\n')
	mentors_file.write('				<li><a href="https://lists.columbia.edu/mailman/listinfo/egsc-announcements" class="icon circle fa-envelope" target="_blank"><span class="label">Mailing List</span></a></li>\n')
	mentors_file.write('				<li><a href="https://www.facebook.com/ColumbiaEGSC" class="icon circle fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>\n')
	mentors_file.write('				<li><a href="https://twitter.com/columbiaegsc" class="icon circle fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>\n')
	mentors_file.write('				<li><a href="https://www.instagram.com/columbiaegsc/" class="icon circle fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>\n')
	mentors_file.write('				<li><a href="https://www.facebook.com/groups/EGSC.Columbia/" class="icon circle fa-group" target="_blank"><span class="label">Facebook Group</span></a></li>\n')
	mentors_file.write('			</ul>\n')
	mentors_file.write('			<ul class="copyright centered">\n')
	mentors_file.write('				<li>&copy; 2015-<script type="text/javascript">document.write(new Date().getFullYear());</script> EGSC, Columbia University</li>\n')
	mentors_file.write('				<li>Designed by <a href="http://www.pratyushnalam.com" target="_blank">Pratyush Nalam</a></li>\n')
	mentors_file.write('			</ul>\n')
	mentors_file.write('		</footer>\n')
	mentors_file.write('	</div>\n')
	mentors_file.write('	<!-- Scripts -->\n')
	mentors_file.write('	<script src="assets/js/jquery.min.js"></script>\n')
	mentors_file.write('	<script src="assets/js/jquery.dropotron.min.js"></script>\n')
	mentors_file.write('	<script src="assets/js/jquery.scrolly.min.js"></script>\n')
	mentors_file.write('	<script src="assets/js/jquery.scrollgress.min.js"></script>\n')
	mentors_file.write('	<script src="assets/js/skel.min.js"></script>\n')
	mentors_file.write('	<script src="assets/js/util.js"></script>\n')
	mentors_file.write('	<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->\n')
	mentors_file.write('	<script src="assets/js/main.js"></script>\n')
	mentors_file.write('	<script>\n')
	mentors_file.write('		(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n')
	mentors_file.write('		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n')
	mentors_file.write('		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n')
	mentors_file.write('		})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n')
	mentors_file.write('		ga(\'create\', \'UA-75633179-1\', \'auto\');\n')
	mentors_file.write('		ga(\'send\', \'pageview\');\n')
	mentors_file.write('	</script>\n')
	mentors_file.write('</body>\n')
	mentors_file.write('</html>\n')
	mentors_file.close()
