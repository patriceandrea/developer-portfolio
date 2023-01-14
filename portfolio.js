import emoji from "react-easy-emoji";

export const greetings = {
	name: "Patrice Pavico",
	title: "Hello, My name is Patrice. Welcome to my Portfolio!",
	description:
		"I'm passionate Full Stack web developer with a background in medical laboratory.I have experience with web applications with Javascript, NodeJS, Express, React.js, and SQL.",
	resumeLink:
		"https://resume.creddle.io/resume/gvdpcovwyzl",
};

export const openSource = {
	githubUserName: "patriceandrea",
};

export const contact = {};

export const socialLinks = {
	//TODO: add your portfolio url 
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/1hanzla100/",
	github: "https://github.com/1hanzla100"
};

export const skillsSection = {
	title: "Skills",
	subTitle:
		"JUNIOR FULL STACK DEVELOPER WHO WANTS TO LEARN AND EXPLORE EVERY TECH STACK",
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
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File

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
			"A 3-month coding bootcamp specialized in web development",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/1hanzla100/Django-ecommerce",
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
	title: "Hanzla Tauqeer",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Hanzla Tauqeer",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Hanzla",
		"Hanzla Tauqeer",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
}
