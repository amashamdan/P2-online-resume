/* In the resumeBuilder.js, multiple JSONs are built each representing a section of the resume,
Then these JSONs are used to populate the page. */

/* The first JSON is bio, it contains basic personal information: name, role, contact info,
a personal photo, a message and location. */
var bio = {
	'name' : 'Amer Hamdan',
	'role' : 'Front End Web Developer',
	'contacts' : {
		'email' : 'amashamdan@gmail.com',
		'mobile' : '+962777881987',
		'github' : 'amashamdan',
		'twitter' : '@amashamdan',
		'location' : 'Seattle WA'
	},
	'picture' : 'images/biopic.jpg',
	'message' : 'Hello there! Welcome to my Resume. You will find what you want to know about me!',
	'skills' : ['Web developement: HTML, CSS, JS, jQuery, Bootstrap',
				'Interactive programming with Python and MATLAB',
				'Coding with MATLAB']
}

/* The second JSON contains employment history. An array of objects wach representing a job,
each object contains the following information: employer, position, working dates and a description
of the responsibilities. */ 
var work = {
	'jobs' : [
		{
			'employer' : 'Al-Zaytoonah University of Jordan',
			'title' : 'Assistant Professor',
			'location' : 'Amman-Jordan',
			'dates' : 'Jun 2012 - current',
			'description' : ['Courses taught include: Statics, Dynamics, HVAC, Thermodynamics, Fluid Mechanics,'
							+ 'Mechanics of Materials, Thermal Power Systems, Solar energy, MATLAB,'
							+ 'C++ Programming, and Engineering Drawing.',
							'Students’ guidance towards completion of their degree requirements.'] 
		},
		{
			'employer' : 'Washington State University',
			'title' : 'Research Assistant',
			'location' : 'Pullman WA',
			'dates' : 'Jan 2007 - Dec 2011',
			'description' : ['Research focused on the fabrication and characterization of thermal interface materials'+
							' at the micro-scale, Sample thermal interface materials are fabricated in a class 1000 clean room.',
							'Materials studied included: Vertically aligned carbon nanotubes, Liquid-metal micro droplets'
							+', Dielectric micro droplets']
		},
		{
			'employer' : 'Washington State University',
			'title' : 'Teaching Assistant',
			'location' : 'Pullman WA',
			'dates' : 'Jan 2007 - Dec 2011',
			'description' : ['Teaching Assistant for undergraduate Mechanical Engineering classes']
		},
		{
			'employer' : 'Washington State University',
			'title' : 'Research Assistant - Programming',
			'location' : 'Pullman WA',
			'dates' : 'May 2011 - Sep 2011',
			'description' : ['Write a MATLAB program using MATLAB GUIDE to fit data generated using AFM from biological samples']
		},
		{
			'employer' : 'National Company for Mechanical and Electrical Works',
			'title' : 'Instrumentation and control engineer',
			'location' : 'Kuwait',
			'dates' : 'Apr 2006 - Dec 2006',
			'description' : ['Assigned to the project Facility Upgrade and Relocation of Underground Process Piping for GC '
							+ '3, 4, 6, 7, 8, 21, BS 140 and BS 150 in Burgan Oil Field - South Kuwait']
		},
		{
			'employer' : 'National Company for Mechanical and Electrical Works',
			'title' : 'Internship - Instrumentation and control engineer',
			'location' : 'Kuwait',
			'dates' : 'Jul 2005 - Sep 2005',
			'description' : ['Assigned to the project Sulaibiya Wastewater Reclamation']
		},
	]
}

/* Next is a JSON containing projects experience, each project has the following info:
title, date, description and images.*/
var projects = {
	'projects' : [
		{
			'title' : 'Portfolio Page',
			'date' : '2015',
			'description' : 'This is my portfolio page built as part of my Front End Web Developer Nanodegree. In this '
							+ 'project I learned about HTML, CSS, responsive web desing and responsive images.',
			'images' : ['images/portfolio1.jpg',
			'images/portfolio2.jpg']
		},
		{
			'title' : 'Online Resume',
			'date' : '2015',
			'description' : 'Well, it is this page!',
			'images' : ['images/resume1.jpg',
			'images/resume2.jpg']
		},
		{
			'title' : 'RiceRocks',
			'date' : '2015',
			'description' : 'It is a clone of the classic game Asteroids. Done as a part of the Introduction '
							+ 'to Interactive Programming Using Python course.',
			'images' : ['images/rice1.jpg',
			'images/rice2.jpg']
		},
		{
			'title' : 'BlackJack',
			'date' : '2015',
			'description' : 'The popular BlackJack game. Done as a part of the Introduction to Interactive'
			+ ' Programming Using Python course.',
			'images' : ['images/blackjack1.jpg',
			'images/blackjack2.jpg']
		},
		{
			'title' : 'Pong',
			'date' : '2015',
			'description' : 'The classic pong game. Done as a part of the Introduction to Interactive'
			+ ' Programming Using Python course.',
			'images' : ['images/pong.jpg']
		},
	]
}

/* The education JSON has two objects, schools and onlineCourses. The schools contains the degrees
earned and lists the following information: The name of the school, its location, the degree earned,
the major, the date the degree was earned and a URL to the scool. 
Online courses contains all completed online courses, The object includes: Title of the course,
the online school, the date of completion and the URL of the online course. */
var education = {
	'schools' : [
		{
			'name' : 'Washington State University',
			'location' : 'Pullman WA',
			'degree' : 'PhD',
			'majors' : 'Mechanical Engineering',
			'date' : '2011',
			'url' : 'http://www.wsu.edu'
		},
		{
			'name' : 'University of Jordan',
			'location' : 'Amman Jordan',
			'degree' : 'Bsc',
			'majors' : 'Mechatronics Engineering',
			'date' : '2006',
			'url' : 'http://www.ju.edu.jo'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Front End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			'title' : 'Introduction to Interactive Programming in Python I',
			'school' : 'Coursera',
			'date' : '2015',
			'url' : 'https://www.coursera.org/course/interactivepython1'
		},
		{
			'title' : 'Introduction to Interactive Programming in Python II',
			'school' : 'Coursera',
			'date' : '2015',
			'url' : 'https://www.coursera.org/course/interactivepython2'
		},
		{
			'title' : 'Complete Web Developer Course',
			'school' : 'Udemy',
			'date' : '2015',
			'url' : 'https://www.udemy.com/complete-web-developer-course'
		},
		{
			'title' : 'Python',
			'school' : 'Codecademy',
			'date' : '2015',
			'url' : 'https://www.codecademy.com/tracks/python'
		}
	]
}

/* Finally the publication JSON lists all the publications, detailed information are: the title
of the publication, date of publication, authors, the journal and the URL to publication page. */
var publications = {
	'papers' : [
		{
			'title' : 'Heat Transfer Analysis of a Flat-Plate Solar Air Collector by Using an Artificial Neural Network',
			'date' : '2014',
			'authors' : 'Hamdan M., Abdelhafez E., <strong>Hamdan A.</strong>, Khalil R.',
			'journal' : 'Journal of Infrastructure Systems',
			'url' : 'http://ascelibrary.org/doi/abs/10.1061/(ASCE)IS.1943-555X.0000213'
		},
		{
			'title' : 'Characterization of a dielectric micro droplet thermal interface material with dispersed nanoparticles',
			'date' : '2012',
			'authors' : '<strong>Hamdan A.</strong>, Sahli F., Richards R., Richards C.',
			'journal' : 'Journal of Nanoparticles Research',
			'url' : 'http://link.springer.com/article/10.1007%2Fs11051-012-1111-2'
		},
		{
			'title' : 'Characterization of a liquid-metal micro droplet thermal interface material',
			'date' : '2011',
			'authors' : '<strong>Hamdan A.</strong>, McLanahan A., Richards R., Richards C.',
			'journal' : 'Experimental thermal and fluid science',
			'url' : 'http://www.sciencedirect.com/science/article/pii/S089417771100080X' 
		},
		{
			'title' : 'Evaluation of a thermal interface material fabricated using thermocompression bonding of carbon nanotube turf',
			'date' : '2010',
			'authors' : '<strong>Hamdan A.</strong>, Cho J., Johnson R., Jiao J., Bahr D., Richards R., Richards C.',
			'journal' : 'Nanotechnology',
			'url' : 'http://www.ncbi.nlm.nih.gov/pubmed/19946149'
		}
	]
}

/* The method display of the bio object is defined below, this method modifies the HTML to
display all the information in the bio JSON. */
*/
bio.display = function() {
	/* HTMLheaderRole is defined in the file helper.js, it contains the HTML to be prepended to the
	header section of the HTML. before it's assigned to the variable formattedRole some of its text
	is replaced with the appropriate info from bio.role. */
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	/* The HTML in formattedRole is added to the header section of the HTML. */
	$("#header").prepend(formattedRole);
	/* formattedName is created and its assigned the HTML in HTMLheaderName after its %data% is replaced
	with the name from the bio JSON. */
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	/* The HTML in formattedName is added to the header section of the HTML. */
	$("#header").prepend(formattedName);
	/* formattedMoile is created and its assigned the HTML in HTMLmobile after its %data% is replaced
	with the mobile number from contacts in the bio JSON. */
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	/* The HTML in formattedMobile is added to the topContacts section of the HTML. */
	$("#topContacts").append(formattedMobile);
	/* formattedEmail is created and its assigned the HTML in HTMLemail after its %data% is replaced
	with the email address from contacts in the bio JSON. */
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	/* The HTML in formattedEmail is added to the topContacts section of the HTML. */
	$("#topContacts").append(formattedEmail);
	/* formattedGithub is created and its assigned the HTML in HTMLgithub after its %data% is replaced
	with the github name from contacts in the bio JSON. */
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	/* The HTML in formattedGithub is added to the topContacts section of the HTML. */
	$("#topContacts").append(formattedGithub);
	/* formattedTwitter is created and its assigned the HTML in HTMLtwitter after its %data% is replaced
	with the twitter name from contacts in the bio JSON. */
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	/* The HTML in formattedtwitter is added to the topContacts section of the HTML. */
	$("#topContacts").append(formattedTwitter);
	/* formattedLocation is created and its assigned the HTML in HTMLlocation after its %data% is replaced
	with the location from contacts in the bio JSON. */
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	/* The HTML in formattedLocation is added to the topContacts section of the HTML. */
	$("#topContacts").append(formattedLocation);
	/* formattedImage is created and its assigned the HTML in HTMLbioPic after its %data% is replaced
	with the link to the personal photo from the bio JSON. */
	var formattedImage = HTMLbioPic.replace("%data%", bio.picture);
	/* The HTML in formattedImage is added to the header section of the HTML. */
	$("#header").append(formattedImage);
	/* formattedMessage is created and its assigned the HTML in HTMLwelcomeMsg after its %data% is replaced
	with the message from the bio JSON. */
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
	/* The HTML in formattedMessage is added to the header section of the HTML. */
	$("#header").append(formattedMessage);
	/* The HTML in HTMLskillsStart is added to the header section of the HTML. */
	$("#header").append(HTMLskillsStart);
	/* The following if statements checks if the bio JSON has a skills property. */
	if (bio["skills"]) {
		/* If the skills property is found, each skill is added to the skills section in the HTML using the HTMLskills
		variable found in helper.js file. */
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

// A call to the display method of the bio object to display all information in the bio JSON on the page.
bio.display();

/* The method display of the work object is defined below, this method modifies the HTML to
display all the information in the work JSON. */
work.display = function() {
	/* A for loop loops through every job listed in the work JSON and displays its contents on the page. */
	for (job in work.jobs) {
		/* A new work experience entry is added to the HTML using the HTMLworkStart variable from helper.js */
		$("#workExperience").append(HTMLworkStart);
		/* In the following four lines, the variables containing the HTML to be added to the page are created using
		the predefined variables found in helper.js after their contents have been modified using information from
		the work JSON. */
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); 
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		/* The following three lines append the formatted HTML with the job information to the work experience 
		section of the resume. */
		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDate);
		/* The following for loop adds bullet-points description of the job to the job entry. A for loop is used
		since each job can have more than one point of description. */
		for (detail in work.jobs[job].description) {
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description[detail]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
	/* A back to top link is added at the end of the work experience section. */
	$("#workExperience").append(HTMLbackToTop);
}

// A call to the display method of the work object to display all information in the work JSON on the page.
work.display();

/* The method display of the projects object is defined below, this method modifies the HTML to
display all the information in the projects JSON. */
projects.display = function() {
	/* A for loop loops through every project listed in the projects JSON and displays its contents on the page. */
	for (project in projects.projects) {
		/* A new project entry is added to the HTML using the HTMLprojectStart variable from helper.js */
		$("#projects").append(HTMLprojectStart);
		/* In the following three lines, the variables containing the HTML to be added to the page are created using
		the predefined variables found in helper.js after their contents have been modified using information from
		the projects JSON. */
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		/* The following three lines append the formatted HTML with the project information to the projects 
		section of the resume. */
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		/* The following for loop adds snapshots of the project to the project entry. A for loop is used
		since each project can have more than one snapshot. */
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	/* A back to top link is added at the end of the projects section. */
	$("#projects").append(HTMLbackToTop);
}

// A call to the display method of the projects object to display all information in the projects JSON on the page.
projects.display();

/* The method display of the education object is defined below, this method modifies the HTML to
display all the information in the education JSON. */
education.display = function() {
	/* A for loop loops through every degree listed in schools of the education JSON and displays its
	contents on the page. */
	for (school in education.schools) {
		/* A new degree entry is added to the HTML using the HTMLschoolStart variable from helper.js */
		$("#education").append(HTMLschoolStart);
		/* In the following six lines, the variables containing the HTML to be added to the page are created using
		the predefined variables found in helper.js after their contents have been modified using information from
		the education JSON. */
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		/* The following three lines append the formatted HTML with the degree information to the education 
		section of the resume. */
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDate + formattedLocation);
		$(".education-entry:last").append(formattedMajor + formattedDegree);
	}
	/* A header for the online courses section is added to the HTML. */
	$(".education-entry:last").append(HTMLonlineClasses);
	/* A for loop loops through every course listed in onlineCourse of the education JSON and displays its
	contents on the page. */
	for (course in education.onlineCourses) {
		/* A new online course entry is added to the HTML using the HTMLonlineStart variable from helper.js */
		$("#education").append(HTMLonlineStart);
		/* In the following five lines, the variables containing the HTML to be added to the page are created using
		the predefined variables found in helper.js after their contents have been modified using information from
		the education JSON. */
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
		/* The following three lines append the formatted HTML with the online course information to the education 
		section of the resume. */
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
	/* A back to top link is added at the end of the education section. */
	$("#education").append(HTMLbackToTop);
}

// A call to the display method of the education object to display all information in the education JSON on the page.
education.display();

/* The method display of the publications object is defined below, this method modifies the HTML to
display all the information in the publications JSON. */
publications.display = function() {
	/* A for loop loops through every paper listed in the publications JSON and displays its contents on the page. */
	for (paper in publications.papers) {
		/* A new paper entry is added to the HTML using the HTMLpublicationStart variable from helper.js */
		$("#publications").append(HTMLpublicationStart);
		/* In the following five lines, the variables containing the HTML to be added to the page are created using
		the predefined variables found in helper.js after their contents have been modified using information from
		the publications JSON. */
		var formattedTitle = HTMLpublicationTitle.replace("%data%", publications.papers[paper].title);
		formattedTitle = formattedTitle.replace("#", publications.papers[paper].url);
		var formattedDate = HTMLpublicationDate.replace("%data%", publications.papers[paper].date);
		var formattedAuthors = HTMLpublicationAuthors.replace("%data%", publications.papers[paper].authors);
		var formattedJournal = HTMLpublicationJournal.replace("%data%", publications.papers[paper].journal);
		/* The following four lines append the formatted HTML with the paper information to the publications 
		section of the resume. */
		$(".publications-entry:last").append(formattedTitle);
		$(".publications-entry:last").append(formattedDate);
		$(".publications-entry:last").append(formattedAuthors);
		$(".publications-entry:last").append(formattedJournal);
	}
	/* A back to top link is added at the end of the education section. */
	$("#publications").append(HTMLbackToTop);
}

// A call to the display method of the education object to display all information in the education JSON on the page.
publications.display();

/* The following function adds contacts information to the footer of the page. */
function footerContacts() {
	/* Each pair of lines below uses a predefined variable from helper.js to create a new variable containing the 
	formatted HTML to be appended to the footer of the page. All information are taken from the bio JSON. */
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	$("#footerContacts").append(formattedLocation);
}

// A call to the footerContacts function to display contact information in the footer.
footerContacts();

/* The inName changes the format of the name displayed at the top of the page, The first letter of the first name is
capitalized while all the letters of the last name are capitalized. */
function inName(name) {
	/* the method trim is called on the name string to remove all white spaces, and then the split method seperates
	the first and last names and places them in the nameArray. */
	var nameArray = (name.trim()).split(" ");
	/* The first letter of the first name is capitalized while the remaining letters are forced to lower case */
	nameArray[0] = (nameArray[0].slice(0,1)).toUpperCase() + (nameArray[0].slice(1)).toLowerCase();
	/* Th last name is completely capitalized. */
	nameArray[1] = (nameArray[1]).toUpperCase();
	/* The first and last names are joined the result is returned by the function. */
	return nameArray.join(" ")
}

/* The internationalize button which changes the format of the displayed name is appended to the page. */
$("#main").append(internationalizeButton);

/* A google map showing all places in the resume is added to mapDiv. */
$("#mapDiv").append(googleMap);

/* Appends a back to top link underneath the map */
$("#mapDiv").append(HTMLbackToTop);

/* Script for the drawer functionality which appears in small displays. The function toggles the "Navigate to"
drawer menu. */
var drawerButton = document.querySelector(".drawer-button");
drawerButton.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
