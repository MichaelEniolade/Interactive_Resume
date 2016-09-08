var bio = {
	"name": "Eniolade Michael",
	"role": "Software Developer",
	"contacts": {
		"email": "wisdomeniolade@gmail.com",
		"github": "https://github.com/MichaelEniolade",
		"twitter": "@Wisdommyke",
		"location": "Surulere, Lagos, Nigeria"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently working as a freelance Software Developer and an informattion assurance analyst in Surulere, Lagos, Nigeria.  Thanks for stopping by!",
	"skills": ["Java", "C-Sharp", "python", "ACL", "Software Development", "Data Product Development", "Facilitation"]
};

var work = {
	"jobs": [
		{
			"employer": "Rhythex Consulting",
			"title": "Lead Information Assurance Analyst",
			"location": "Ilupeju, Lagos, Nigeria",
			"datesWorked": "March 2015 - June 2016",
			"description": "Trained ACL to staffs of organizations like telecoms, Banks, Micro finance Banks, Manufacturing industries etc. "+
				"Created ACL scripts to implement controls in Banks and Telecoms for the purpose of revenue assurance and fraud detection. "+
				"Project lead in Automating processes for organizations in form of ACL scripts for the purpose of continuous auditing and monitoring. "+
				"Saved company 50 million naira by ACL analysis conducted on pension fund administration payment and remittances. "+
				"Setting up pearson vue testing center for Rhythex consulting Nigeria ltd "+
				"All these include the use of expert information technology knowledge and skills ranging from programming to data management involving"+
				"tools and skills like ACL, Oracle, Advanced SQL, Advanced Excel, Flex-Cube Application, T-24, IES data store etc"
		},
		{
			"employer": "Etisalat Nigeria",
			"title": "Revenue Assurance Consultant Analyst",
			"location": "Victoria Island, Lagos, Nigeria",
			"datesWorked": "September 2013 - December 2014",
			"description": "Provided root cause analysis on identified revenue assurance issues and follow through to resolution. " +
				"Monitored system owners to ensure proper set up of system in order to minimize leakages e.g. Telarix. " +
				"Facilitated cross-departmental co-ordination of RA (revenue assurance) activities and prompt escalation of material incidents. " +
				"Performed reviews of service nodes (Mediation, MSC, IN, etc.) to proactively identify and mitigate revenue leakages. "+
				"Demonstrated expertise in ACL, SQL, Oracle, AX3, Informatica, Connectiva telecoms system, Telarix interconnect system etc " 
		},
		{
			"employer": "Romflex Networks Ltd",
			"title": "Junior PHP Developer",
			"location": "Wuse 2, Abuja, Nigeria",
			"datesWorked": "November 2012 - February 2013",
			"description": "Converted data from various formats (Excel, ACCESS etc.) into developed databases. " +
			"Maintained existing codebase, to include troubleshooting bugs and adding new features. " +
			"Participated in a team-oriented environment to develop complex web-based applications using the zend framework. "+
			"learned Zend framework for PHP, MySQL etc"
		},
		{
			"employer": "Freelance Developer",
			"title": "Software Developer",
			"location": "Osogbo, Osun State, Nigeria",
			"datesWorked": "April 2009 - November 2012",
			"description": "Devveloped Applications for clients using C# and Java programming language. "+
			"Developed applications with Javascript, MySQL, MSSql Server, WAMP server etc. "+
			"Trained clients on how to be professional IT personnels in java programming. "+
			"Developed Programs with Pascal, C and C++ languages"
		}
	]
};

var education = {
	"schools": [
		{ "name": "Ladoke Akintola University of Technology",
			"datesAttended": "December 2005 - December 2010",
			"location": "Ogbomoso, Oyo State, Nigeria",
			"degree": "B.Tech.(Hon) Computer Science",
			"major": "Computer Science",
			"url": "lautech.edu.ng"
		},
		{ "name": "University of Nicosia",
			"datesAttended": "December 2014 - Present",
			"location": "Nicosia, Cyprus",
			"degree": "Masters in Business Administration",
			"major": "MBA",
			"url": "www.unic.ac.cy"
		}			
	],
	"onlineCourses": [
		{ "school": "Udacity Nanodegree",
			"title": "Programming Foundations with Python",
			"completed": "January 2016",
			"url": "https://www.udacity.com/course/ud036"
		},
		{ "school": "Udacity Nanodegree",
			"title": "Responsive Web Design Fundamentals",
			"completed": "April 2016",
			"url": "https://www.udacity.com/course/ud893"
		},
		{ "school": "Udacity Nanodegree",
			"title": "Introduction to Backend",
			"completed": "June 2016",
			"url": "https://www.udacity.com/course/ud171"
		},
		{ "school": "Udacity Nanodegree",
			"title": "Intro to Relational Databases",
			"completed": "February 2016",
			"url": "https://www.udacity.com/course/ud197"
		},	
		{ "school": "Udacity Nanodegree",
			"title": "Authentication & Authorization: OAuth",
			"completed": "May 2016",
			"url": "https://www.udacity.com/course/ud330"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Item Catalog",
			"datesWorked": "April 2016 - May 2016",
			"description": "Developed an application that provides a list of items within a variety of categories as well as provide a user registration and authentication system. "+
			"Registered users will have the ability to post, edit and delete their own items. ",
			"images": ["images/catalog.jpg"],
			"url": "https://github.com/MichaelEniolade/Catalogue"
		},
		{
			"title": "Blog Site",
			"datesWorked": "June 2016",
			"description": "This project is a multi user blog (along the lines of medium) where users can sign in and post blog posts ",
			"images": ["images/blog.jpg"],
			"url": "http://blogsite-1332.appspot.com"
		},
		{
			"title": "Tournament Game",
			"datesWorked": "February 2016",
			"description": "The project have a database schema for data storage necessary to run a simple Swiss pairing tournament.",
			"images": ["images/tournament.jpg"],
			"url": "https://github.com/MichaelEniolade/Tournament_Udacity"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2016, 6]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2012, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2012, 2], [2006, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2007, 12], [2006, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2007, 12], [2006, 6]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2014, 5], [2012, 3], [2008, 4]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2016, 6],[2015,12],[2014,2]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2016, 2.5]]
			},
			{
				name: 'C#',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2016, 3], [2009, 12]]
			}]
	});
});


$("#mapDiv").append(googleMap);


