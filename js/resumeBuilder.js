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

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	$("#topContacts").append(formattedLocation);
	var formattedImage = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedImage);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
	$("#header").append(formattedMessage);
	$("#header").append(HTMLskillsStart);
	if (bio["skills"]) {
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); 
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDate);
		for (detail in work.jobs[job].description) {
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description[detail]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
	$("#workExperience").append(HTMLbackToTop);
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	$("#projects").append(HTMLbackToTop);
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDate + formattedLocation);
		$(".education-entry:last").append(formattedMajor + formattedDegree);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
	$("#education").append(HTMLbackToTop);
}

education.display();

publications.display = function() {
	for (paper in publications.papers) {
		$("#publications").append(HTMLpublicationStart);
		var formattedTitle = HTMLpublicationTitle.replace("%data%", publications.papers[paper].title);
		formattedTitle = formattedTitle.replace("#", publications.papers[paper].url);
		var formattedDate = HTMLpublicationDate.replace("%data%", publications.papers[paper].date);
		var formattedAuthors = HTMLpublicationAuthors.replace("%data%", publications.papers[paper].authors);
		var formattedJournal = HTMLpublicationJournal.replace("%data%", publications.papers[paper].journal);
		$(".publications-entry:last").append(formattedTitle);
		$(".publications-entry:last").append(formattedDate);
		$(".publications-entry:last").append(formattedAuthors);
		$(".publications-entry:last").append(formattedJournal);
	}
	$("#publications").append(HTMLbackToTop);
}

publications.display();

function footerContacts() {
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

footerContacts();

function inName(name) {
	var nameArray = (name.trim()).split(" ");
	nameArray[0] = (nameArray[0].slice(0,1)).toUpperCase() + (nameArray[0].slice(1)).toLowerCase();
	nameArray[1] = (nameArray[1]).toUpperCase();
	return nameArray.join(" ")
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

/* Appends a back to top link underneath the map */
$("#mapDiv").append(HTMLbackToTop);

/* Script for the drawer functionality */
var drawerButton = document.querySelector(".drawer-button");
drawerButton.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
