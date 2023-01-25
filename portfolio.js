import emoji from "react-easy-emoji";

export const greetings = {
	name: "Patrice Pavico",
	image: "/img/icons/common/coding.png",
	title: "Hello, My name is Patrice. Welcome to my Portfolio!",
	description:
		"I'm a driven Full Stack Web Developer with a background in medical laboratory. I have experience building web applications with Javascript, NodeJS, Express, React.js, Postgres, and much more!",
	resumeLink:
		"https://resume.creddle.io/resume/gvdpcovwyzl",
};

export const openSource = {
	githubUserName: "patriceandrea",
};

export const contact = {};

export const socialLinks = {
	//TODO: add your portfolio url 
	// url: "https://1hanzla100.github.io/",s
	linkedin: "https://www.linkedin.com/in/patrice-pavico-59012a163/",
	github: "https://github.com/patriceandrea"
};

export const skillsSection = {
	title: "Skills",
	subTitle:
		"READY TO LEARN AND EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Programming Languages",
			// lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File

			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "Ruby",
					fontAwesomeClassname: "logos:ruby",
				}
			],
		},
		{
			title: "Frameworks, Libraries & Environments",
			// lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			lottieAnimationFile: "/lottie/laptop-girl-2.json",
			softwareSkills: [

				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Material-UI",
					fontAwesomeClassname: "logos:material-ui",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Express",
					fontAwesomeClassname: "logos:express",
				},
				{
					skillName: "JQuery",
					fontAwesomeClassname: "logos:jquery",
				},
				{
					skillName: "Boostrap",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "Rails",
					fontAwesomeClassname: "logos:rails",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
			],
		},
		{
			title: "Database & Systems",
			// lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File

			softwareSkills: [
				{
					skillName: "SQL",
					fontAwesomeClassname: "mdi:sql-query",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "vscode-icons:file-type-pgsql",
				},
				{
					skillName: "Oracle",
					fontAwesomeClassname: "logos:oracle",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "logos:git",
				},
				{
					skillName: "Tableau",
					fontAwesomeClassname: "logos:tableau-icon"
				}
			],
		},
		{
			title: "Testing",
			// Path of Lottie Animation JSON File
			lottieAnimationFile: "/lottie/monitor.json",
			softwareSkills: [
				{
					skillName: "Mocha",
					fontAwesomeClassname: "logos:mocha",
				},
				{
					skillName: "Chai",
					fontAwesomeClassname: "logos:chai",
				},
				{
					skillName: "Jest",
					fontAwesomeClassname: "logos:jest",
				},
				{
					skillName: "Cypress",
					fontAwesomeClassname: "logos:cypress",
				},
				{
					skillName: "Rspec",
					fontAwesomeClassname: "vscode-icons:file-type-rspec",
				},
				{
					skillName: "Storybook",
					fontAwesomeClassname: "vscode-icons:file-type-storybook"
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Lighthouse Labs",
		subHeader: "Diploma in Web Development",
		duration: "March 2022 - May 2022",
		descBullets: [
			" An immersive coding bootcamp specialized in web development",
		],
	},
	{
		schoolName: "Dawson College",
		subHeader: "DEC in Biomedical Laboratory Technology",
		duration: "August 2015 - May 2018",
		descBullets: [],
	},
];

export const experience = [
	{
		role: "Medical Technologist",
		company: "Jewish General Hospital",
		companylogo: "/img/icons/common/jgh.jpg",
		date: "December 2018 – March 2022",
		desc: "I worked closely with the Laboratory Information Systems team to develop analytic programs using Oracle Database and Tableau Data Visualization in the Pathology & Cytology Department.",
	},
	{
		role: "Medical Technologist/Phlebotomist",
		company: "Mcgill University of Montreal",
		companylogo: "/img/icons/common/muhc.png",
		date: "June 2018 – December 2018",
		desc: "I worked as a Medical Technologist at the test center where I drew blood from patients.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	}
];

export const projects = [
	{
		name: "Funko'd Store",
		desc: "E-commerce store that sells popular Funko Pop figurines with NextJS. Checkout payments are used with Stripe (testing only).\nTech Stack: NextJs, Stripe, Sanity.io.",
		display: "/gif/funko_1.gif",
		github: "https://github.com/patriceandrea/Funko-d-store",
		link: "https://funko-d-store.vercel.app/",
	},
	{
		name: "Deliverr",
		desc: "A Deliverro-clone Food Pick-Up mobile application using React Native. Tech Stack: React Native, Redux Toolkit, TailwindCSS, Expo, Sanity.io.",
		displayPhone: "/gif/adds-to-basket.gif",
		github: "https://github.com/patriceandrea/deliverr",
		link: "https://expo.dev/@patriceandrea/deliverr?serviceType=classic&distribution=expo-go"
	},
	{
		name: "yelpCamp",
		desc: "An application where users can share and review campgrounds. An interactive map to view each campground using MapBox. Tech Stack: Node, Express, MapBox, Mongoose.",
		display: "/gif/yelpcamp-homepage.gif",
		github: "https://github.com/patriceandrea/yelpCamp",
	},
	{
		name: "TinyApp 2.0",
		desc: "React Application that shortens long URLs. Tech Stack: React, Node, Express, Postgres, TypeScript, Material-UI. ",
		display: "/gif/tinyapp-2.0.gif",
		github: "https://github.com/patriceandrea/tinyapp-2.0",
	},
	{
		name: "Thera-Match",
		desc: "React Application where you can view and book an appointment with a therapist of your choosing using a swiping feature (similar to Tinder). User-friendly way to search for a therapist. Tech Stack: React, Node, Express, Postgres, Material-UI. ",
		display: "/gif/Thera-match.gif",
		github: "https://github.com/patriceandrea/Thera-match",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Patrice Pavico",
	description:
		"A passionate and dedicated Junior Full Stack Web Developer looking for her next opportunity in software development.",
	author: "Patrice Pavico",
	image: "/img/icons/common/profile.jpg",
	url: "https://patricepavico-portfolio.vercel.app/",
	keywords: [
		"Patrice",
		"Patrice Pavico",
		"@patriceandrea",
		"patriceandrea",
		"Portfolio",
		"Patrice's Portfolio ",
		"Patrice Pavico's Portfolio",
	],
}
