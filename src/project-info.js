export const sections = {
	VIZ: "Data Visualisation",
	ANAL: "Data Analysis",
	CODE: "Technology",
	THOUGHT: "Research",
	UX: "User Experience",
	DESIGN: "Design",
	CIRCUS: "Performing Arts"
}

export const projectInfo = {
	// Data Viz
	"wingspan": {
		id: "wingspan",
		image: "/images/project-wingspan.png",
		fullTitle: "The Birds of Wingspan",
		shortTitle: "Wingspan",
		abstract: "",
		contributions: [
			"Curated a series of datasets",
			"Built the modules in d3",
			"Put it all together in React"
			],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://ivf22.netlify.app",
		additionalLinks: [
			{
				text: "Project",
				url: "https://ivf22.netlify.app"
			},
			{
				text: "Case Study",
				url: "/portfolio/wingspan"
			},
			{
				text: "Github",
				url: "https://github.com/tkcram/bird-viz"
			},
		],
		tags: ["HTML", "CSS", "JavaScript", "D3","React","Data Visualisation","Data Manipulation","Pratt"]
	},

	"bird-map": {
		id: "bird-map",
		image: "/images/project-birdmap.png",
		fullTitle: "New Zealand Bird Sighting Map",
		shortTitle: "NZ Bird Map",
		abstract: "The birds of New Zealand are both beautiful and bountiful. It’s no small wonder then that the country fosters a community centred around their observation and recording. In 2021 alone there were over a million observations logged to the New Zealand Bird ATLAS, one of the largest bird watching databases. It can be hard to visualise such a wealth of data, but this project aims to do so in a way that is easily understood by the user.",
		contributions: [
			"Wrote a Python script to parse over one million rows of raw data and create a JSON blob to be used by the front end",
			"Built an interface using D3.js to visualise the data and create and interactive user experience",
			"Conducted User Experience (UX) research sessions to improve the quality of the interface and uncover additional features to be developed"
			],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://ivs22.netlify.app/",
		additionalLinks: [
		{
			text: "Project",
			url: "https://ivs22.netlify.app/"
		},
		{
			text: "Report",
			url: "/projects/bird-map"
		},
		{
			text: "Github",
			url: "https://github.com/tkcram/ivs22"
		},
		{
			text: "Data",
			url: "https://ebird.org/science/use-ebird-data"
		}
		],
		tags: ["HTML", "CSS", "JavaScript", "D3", "Python", "Data Visualisation", "Data Manipulation", "User Research", "GIS", "Pratt"]
	},

	"bird-network": {
		id: "bird-network",
		image: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/04/test1-1.jpg?resize=768%2C811&ssl=1",
		fullTitle: "Birds Of A Feather Network Together",
		shortTitle: "Bird Diet Network",
		abstract: "New Zealand boasts an amazing array of avians, be it the Kiwi as its national icon, the beautiful songbird that is the Tui, or the cheeky parrot the Kea. That is why it is of great concern that approximately 74% of the 168 extant species are threatened or endangered. A significant contributing factor to this is habitat change due to the ongoing effects of climate change, including the degradation of food sources. Since nothing exists in a vacuum, this report seeks to examine how different species are connected by the food they eat and perhaps contribute to the effort to save the birds.",
		contributions: [
			"Developed a Python script that converted the dataset from a list of bird-food relationships into a network of bird pairs based on overlapping food sources",
			"Imported the data into Gephi and then analysed the data and explored various network shapes",
			"Coloured, resized, and labelled the network diagram by to create a final refined version"
			],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/04/test1-1.jpg?resize=768%2C811&ssl=1",
		additionalLinks: [
		{
			text: "Report",
			url: "/projects/bird-network"
		},
		{
			text: "Data",
			url: "https://catalogue.data.govt.nz/dataset/bird-plant-interactions"
		}
		],
		tags: ["Data Analysis", "Data Visualisation", "Networks", "Python", "Gephi", "Pratt"]
	},

	"nz-rent": {
		id: "nz-rent",
		image: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/03/Screen-Shot-2022-03-03-at-2.11.55-PM.png?w=1680",
		fullTitle: "Median Rental Prices in New Zealand",
		shortTitle: "Median NZ Rent",
		abstract: "With each passing day, the cost of shelter becomes increasingly expensive. Rising house prices have been discussed at length. With the median house price recently surpassing $1,000,000 NZD (Per RNZ) many Kiwis are being priced out of ever owning their own home. Facing a lifetime of renting ahead of them, it is worthwhile taking the time to look more closely at the trends in this ever growing market.",
		contributions: [
			"Utilised Tableau to create a variety of data visualisations from approximately 8000 rows of aggregated rental income data",
			"Curated a selection of visualisations and created a single dashboard that showed an overarching narrative with a consistent visual theme",
			"Designed a layer of interactive filtering using Tableau to allow the user to explore the data based on region, income bracket, and landlord type"
			],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://public.tableau.com/app/profile/tk.cram/viz/MedianNZWeeklyRent/Dashboard1",
		additionalLinks: [
			{
				text: "Project",
				url: "https://public.tableau.com/app/profile/tk.cram/viz/MedianNZWeeklyRent/Dashboard1"
			},
			{
				text: "Report",
				url: "/projects/nz-rent"
			},
			{
				text: "Data",
				url: "https://catalogue.data.govt.nz/dataset/census-rent-and-household-income"
			}
		],
		tags: ["Data Analysis", "Data Visualisation", "GIS", "Tableau", "Charts & Graphs", "Pratt"]
	},

	"colour-history": {
		id: "colour-history",
		image: "/images/project-colour.png",
		fullTitle: "A (Very Brief) History of Colour Theory",
		shortTitle: "History of Colours",
		abstract: "Ever since Grecian times philosophers such as Aristotle have pondered the nature of colour. Many have followed in their footsteps, from Ibn al-Haytham to Leonardo da Vinci. However in 1704 our conceptualisation of colour shifted dramatically with Newton’s “Opticks” and their revolutionary colour wheel. This shift inspired many to see if a model could be created to account for all the colours a human could perceive. In the 300 years since, this model has taken many shapes, and been used to explain many phenomena from the physical to the emotional, and even the spiritual. This timeline serves as an overview of a handful of the most significant developments in that time, and as a launching point into one of the world’s most colourful histories.",
		contributions: [],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=10IEKECW-7KBUyKdeAOsn2Y5Yqr9VJdEiPw2q3NabjoQ&font=Default&lang=en&initial_zoom=2&height=650",
		additionalLinks: [
			{
				text: "Project",
				url: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=10IEKECW-7KBUyKdeAOsn2Y5Yqr9VJdEiPw2q3NabjoQ&font=Default&lang=en&initial_zoom=2&height=650"
			},
			{
				text: "Report",
				url: "/projects/colour-history"
			},
			{
				text: "Data",
				url: "https://docs.google.com/spreadsheets/d/10IEKECW-7KBUyKdeAOsn2Y5Yqr9VJdEiPw2q3NabjoQ/edit#gid=0"
			},
		],
		tags: ["Data Analysis", "Data Visualisation", "GIS", "Tableau", "Charts & Graphs", "Pratt"]
	},

	// Programming

	"dnd-ui": {
		id: "dnd-ui",
		image: "images/project-dnd.png",
		fullTitle: "Cannoneers & Dragons",
		shortTitle: "Cannoneers & Dragons",
		abstract: "This project is a combination of work from both Programming for Cultural Heritage and Programming User Interfaces. The goal was to use the DnD 5e API, a database containing information about Dungeons and Dragons 5th edition, to create characters, monsters, and dungeons, and put them all together in a small browser based game.",
		contributions: [
			"Researched Dungeons and Dragons game rules in order to recreate key gameplay mechanics in JavaScript, in order to create an accurate and enjoyable game experience",
			"Built an interactive website hosted on Netlify that allowed users to generate a character and move through the dungeon",
			"Called a custom API to fetch maze and character JSON data and rendered it into the DOM"
			],
		section: sections.CODE,
		isVisible: true,
		citation: "",
		link: "https://puis22.netlify.app/",
		additionalLinks: [
			{
				text: "Project",
				url: "https://puis22.netlify.app/"
			},
			{
				text: "Github",
				url: "https://github.com/tkcram/puis22"
			},
			{
				text: "Data",
				url: "https://www.dnd5eapi.co/"
			}
		],
		tags: ["JavaScript", "HTML", "CSS", "Github", "Web Development", "Pratt"]
	},

	"dnd-api": {
		id: "dnd-api",
		image: "/images/project-dndapi.png",
		fullTitle: "Working with the Dungeons and Dragons API",
		shortTitle: "DnD API",
		abstract: "This project is a combination of work from both Programming for Cultural Heritage and Programming User Interfaces. The goal was to use the DnD 5e API, a database containing information about Dungeons and Dragons 5th edition, to create characters, monsters, and dungeons, and put them all together in a small browser based game.",
		contributions: [
			"Developed a Python script to generate a character based on the DnD5e ruleset by calling the DnD 5e API to retrieve the specific character data",
			"Generated a maze using a randomised depth first search, and then populated it with items and monsters from the API",
			"Exposed character and maze creation endpoints using Flask and hosted the API on Heroku"
			],
		section: sections.CODE,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
			{
				text: "Github",
				url: "https://github.com/tkcram/pfchs22"
			},
			{
				text: "Data",
				url: "https://www.dnd5eapi.co/"
			}
		],
		tags: ["Python", "Flask", "Heroku", "Pratt"]
	},

	"personal-site": {
		id: "personal-site",
		image: "/images/project-portfolio.png",
		fullTitle: "Personal Site",
		shortTitle: "Personal Site",
		abstract: "",
		contributions: [
			"Design",
			"React",
			"Content"
			],
		section: sections.CODE,
		isVisible: true,
		citation: "",
		link: "https://tkcram.com",
		additionalLinks: [
			{
				text: "Project",
				url: "/"
			},
			{
				text: "Github",
				url: "https://github.com/tkcram/personal-site-react"
			},
		],
		tags: ["HTML", "CSS", "JavaScript", "Pratt"]
	},

	"dog-ui": {
		id: "dog-ui",
		image: "/images/project-pascal.png",
		fullTitle: "Pascal's Borks",
		shortTitle: "Pascal's Borks",
		abstract: "Given a dog's status as man's best friend, it seemed only appropriate that I should make a website for my own. Here you'll find everything you need to know about Pascal of Selby, from his favourite food and toys, to all the amazing tricks that he can do. It also includes links of where to find not only more of him, but some of his awesome friends as well.",
		contributions: [
			"Designed a layout and theme that aligned with modern practices and best represented the client on the internet",
			"Developed a website using a variety of HTML elements in order to demonstrate knowledge and use cases",
			"Wrote all the copy and made all of the graphics, photos, and videos for the site"
			],
		section: sections.CODE,
		isVisible: true,
		citation: "",
		link: "https://scram142.neocities.org/",
		additionalLinks: [
			{
				text: "Project",
				url: "https://scram142.neocities.org/"
			},
			{
				text: "Github",
				url: "https://github.com/tkcram/itf21"
			},
		],
		tags: ["HTML", "CSS", "JavaScript", "Pratt"]
	},

	// Analysis
	"lego-colours": {
		id: "lego-colours",
		image: "/images/project-lego.png",
		fullTitle: "Following the Yellow Brick Road",
		shortTitle: "Lego Colours",
		abstract: "LEGO, produced by The LEGO Group, is a line of construction toys primarily comprising of interlocking plastic components (parts). These parts range from the ubiquitous bricks and figures through to gears and axles, all in a variety of colours. Parts are collected and sold as sets, which themselves are grouped into themes. It is these themes that this paper examines. Specifically: What factors may be involved in determining the colour palette of a LEGO theme.",
		contributions: [
			"Developed a series of research questions about LEGO to be investigating using a mix of quantitative and qualitative methodologies",
			"Transformed ~10,000 rows of data using SQL to be analysed",
			"Conducted a k-means analysis to compare and contrast the LEGO data and their related images"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "/projects/lego-colours",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/lego-colours"
			},
			{
				text: "PDF",
				url: "/documents/lego.pdf"
			},
			{
				text: "Data",
				url: "https://rebrickable.com/downloads/"
			},
		],
		tags: ["Microsoft Excel", "Apple Pages", "Adobe Illustrator", "R", "Data Analytics", "SQLite", "Statistical Analysis", "Python", "Pratt"]
	},

	"awhi-atu": {
		id: "awhi-atu",
		image: "/images/project-awhi.png",
		fullTitle: "Awhi Mai, Awhi Atu: Giving And Receiving Support During The 2020 COVID-19 Lockdown",
		shortTitle: "Awhi Mai, Awhi Atu",
		abstract: "In the first half of 2020 the importance of home was heightened as Aotearoa New Zealand moved to eliminate the community spread of COVID-19 and a pandemic-related lockdown confined most people to their household ‘bubbles’. Fifty-four people in Hawke’s Bay were interviewed about their lockdown experience: who was in their bubble, what their accommodation was like, what their lockdown concerns were, and what support they received from and provided to others.",
		contributions: [
			"Analysed the results of over 50 interviews and summarised the data into bulletins for the research team",
			"Collaborated with the team to develop draft findings and create preliminary visualisations of the results",
			"Incorporated feedback into the final design of the visualisations for the publication"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F., Cram, S., Munro, M. & Tawhai, S. (2021). Awhi mai, awhi atu: Giving and receiving support during the 2020 COVID-19 lockdown. Report for Building Better Homes, Towns and Cities, Affordable Housing for Generations, June 2021, Wellington: BBHTC.",
		link: "https://www.buildingbetter.nz/publications/homes_spaces/Cram_et_al_Jun2021_awhi_mai_awhi_atu_giving_receiving_support_covid19.pdf",
		additionalLinks: [
			{
				text: "PDF",
				url: "https://www.buildingbetter.nz/publications/homes_spaces/Cram_et_al_Jun2021_awhi_mai_awhi_atu_giving_receiving_support_covid19.pdf"
			},
		],
		tags: ["Microsoft Excel", "Adobe InDesign", "Data Analysis", "Data Visualisation", "Infographic Design", "Katoa"]
	},

	"wairoa-housing": {
		id: "wairoa-housing",
		image: "/images/project-whs.png",
		fullTitle: "Te Wairoa Housing Survey Report",
		shortTitle: "Wairoa Housing",
		abstract: "In 2020 the Wairoa District had a population of just under 9000 residents, across a land area of 413,014 hectres (.idcommunity, 2020). Two-thirds of this population identify as Māori, and half of the District’s population live in the Wairoa Township (Wairoa District Council, 2021). In May 2021 Tātau Tātau, in conjunction with other organisations and community stakeholders in Te Wairoa, asked people living in the Wairoa region or with interests in the Wairoa region to complete a housing survey.",
		contributions: [
			"Consolidated approximately 400 survey results into a consistent format for analysis",
			"Developed Tableau dashboards to showcase preliminary results for the project lead",
			"Collaborated with the rest of the team to finalise results for submission to Te Wairoa Housing Group"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Cram, S. (2021). Te Wairoa housing survey report. Prepared for Te Wairoa Housing Group. Auckland: Katoa Ltd.",
		link: "",
		additionalLinks: [],
		tags: ["Microsoft Excel", "Microsoft Word", "Tableau", "Data Analysis", "Data Visualisation", "Katoa"]
	},

	"whakapakari-ai": {
		id: "whakapakari-ai",
		image: "/images/project-whakapakari.png",
		fullTitle: "Final Evaluation Report: Whakapakari Ai Ngā Rangatahi",
		shortTitle: "Whakapakari ai",
		abstract: "This report sets out the evaluation of Whakapakari ai ngā Rangatahi, an innovative preventative service for rangatahi and whānau that is being delivered by Raukawa Charitable Trust | Te Poari Manaaki o Raukawa and funded from April 2019 to the end of June 2022 by the Ministry of Health through its Te Ao Auahatanga Hauora Māori funding programme. The evaluation walked alongside Whakapakari ai ngā Rangatahi, from its initiation to December 2021, and assessed why the service was needed, how it has been implemented, the outcomes achieved, and the lessons learned and future challenges.",
		contributions: [
			"Codified approximately 100 survey results into a single spreadsheet to improve ease of analysis",
			"Designed visualisations of the average sentiment for each available facet to provide project lead and other stakeholders with an overview of the results",
			"Composed short form research briefings of the data, including extraction of relevant quotations, that helped inform the final reporting"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Were, L. (2022). Final Evaluation Report: Whakapakari ai ngā Rangatahi, delivered by Te Poari Manaaki o Raukawa (Raukawa Charitable Trust) with Te Ao Auahatanga Hauora Māori funding from the Ministry of Health. Prepared for Te Poari Manaaki o Raukawa & the Ministry of Health. Auckland: Katoa Ltd & Te Awamutu: Tuakana Teina Evaluation Collective.",
		link: "",
		additionalLinks: [],
		tags: ["Microsoft Excel", "Data Analysis", "Data Entry", "Katoa"]
	},

	"life-renting": {
		id: "life-renting",
		image: "https://journals.sagepub.com/na101/home/literatum/publisher/sage/journals/content/alna/2020/alna_16_1/alna_16_1/20200319-01/alna_16_1.cover.png",
		fullTitle: "Life When Renting For Older Māori",
		shortTitle: "Life When Renting",
		abstract: "The proportion of older Māori (55+years) living in rental accommodation is set to rise as home ownership has become less attainable. To anticipate what the future of rental accommodation may hold for older Māori, 42 older Māori (18 men, 24 women) renters in the Hawke’s Bay region of Aotearoa New Zealand were asked about their experiences.",
		contributions: [
			"Responsible for the data entry of over 40 survey responses into a singular spreadsheet to be used for further analysis",
			"Developed a breakdown analysis of the responses to allow the research team to examine points of interest in the dataset",
			"Communicated frequently with the team to ensure their reporting stayed accurate to the data"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Munro, M. (2020). Life when renting for older Māori. AlterNative: An International Journal of Indigenous Peoples, 16(1), 64-75.",
		link: "https://www.buildingbetter.nz/reports/homes_spaces/Cram_Munro_2020_life_when_renting_for_older_maori_alternative_jrnl.pdf",
		additionalLinks: [
			{
				text: "PDF",
				url: "https://www.buildingbetter.nz/reports/homes_spaces/Cram_Munro_2020_life_when_renting_for_older_maori_alternative_jrnl.pdf"
			},
		],
		tags: ["Microsoft Excel", "Microsoft Word", "Data Analysis", "Data Entry", "Katoa"]
	},

	"mpei": {
		id: "mpei",
		image: "https://www.nzcer.org.nz/system/files/EM2020_cvr.jpg",
		fullTitle: "Māori Whānau Talk About Whānau Success: Findings From Round 1 Of Ngā Tau Tuangahuru—The Māori And Pacific Education Initiative (MPEI) Longitudinal Study",
		shortTitle: "MPEI",
		abstract: "From 2009 to 2014 Foundation North, a philanthropic trust serving Auckland and Northland, funded a Māori and Pacific Education Initiative (MPEI) designed to facilitate Māori and Pacific students’ educational achievement. The longitudinal study, Ngā Tau Tuangahuru, described here was funded in late 2014 to explore what happened next for families and students who had been involved in MPEI initiatives, with a focus on family success and student educational success.",
		contributions: [
			"Built and maintained a custom data store to collect and analyse data through the lifetime of the longtitudinal study",
			"Developed a data dictionary to provide documentation for present and future researchers who would be utilising the data store",
			"Entered initial survey results and supported other researchers' data entry to ensure the data remained clean"
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F., Samu, T., Theodore, R. & Trotman, R. (2020). Māori whānau talk about whānau success: Findings from Round 1 of Ngā Tau Tuangahuru—the Māori and Pacific Education Initiative (MPEI) longitudinal study. Evaluation Matters—He Take Tō Te Aromatawai, 6, 146-174.",
		link: "https://www.nzcer.org.nz/system/files/journals/evaluation-maters/downloads/EM2020_146.pdf",
		additionalLinks: [
			{
				text: "PDF",
				url: "https://www.nzcer.org.nz/system/files/journals/evaluation-maters/downloads/EM2020_146.pdf"
			},
		],
		tags: ["Microsoft Excel", "LaTeX", "Data Analysis", "Data Entry", "Katoa"]
	},

	// Thought PIeces

	"ids": {
		id: "ids",
		image: "/images/project-ids.png",
		fullTitle: "Indigenous Data Sovereignty & Open Data; Tensions and Resolutions",
		shortTitle: "IDS & Open Data",
		abstract: "In the age of big data an array of questions are being asked as how our data is created, controlled, and distributed. Two movements that have manifested to answer these questions are Indigenous Data Sovereignty (IDS) and the Open Data Movement (ODM). IDS examines these questions through an indigenous perspective, focusing on the reclamation of data about, with, or by indigenous peoples. ODM, on the other hand, believes that data should be freely available without restrictions. While both of these movements come with lofty ambitions, the ways they approach data may not inherently be harmonious. The goal of this paper then, is to examine what tensions exist between these two movements, as well as what steps can be taken to have them coexist and potentially bolster one another.",
		contributions: [],
		section: sections.THOUGHT,
		isVisible: true,
		citation: "",
		link: "/documents/ids.pdf",
		additionalLinks: [
			{
				text: "Case Study",
				url: "/portfolio/ids"
			},
			{
				text: "Report",
				url: "/projects/ids"
			},
			{
				text: "PDF",
				url: "/documents/ids.pdf"
			},
		],
		tags: ["Apple Pages", "Literature Review", "Zotero", "Pratt"]
	},

	"guardian-viz": {
		id: "guardian-viz",
		image: "/images/project-guardian.png",
		fullTitle: "Guardian Gay Rights Viz",
		shortTitle: "Gay Rights Viz",
		abstract: "",
		contributions: [],
		section: sections.THOUGHT,
		isVisible: true,
		citation: "",
		link: "/projects/guardian-viz",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/guardian-viz"
			},
			{
				text: "PDF",
				url: "/documents/guardian.pdf"
			},
		],
		tags: []
	},

	"vr-as": {
		id: "vr-as",
		image: "/images/project-vr.png",
		fullTitle: "VR As...",
		shortTitle: "VR As...",
		abstract: "VR is an emergent and multifaceted technology. So often the conversation revolves either around its uses in gaming or, in recent times, Facebook’s foray into the future of social media. While both of these developments are fascinating, we believe that VR has potential to be used across all facets of our society, from arts and entertainment, to new ways to educate and aid individuals, and even to help push humans forward into the final frontier. We will create a website to explore and communicate many of these potential facets.",
		contributions: [
			"Worked with WordPress's theme tools to develop an aesthetic that aligned with the team's vision for the project",
			"Researched and wrote two articles, 'Introduction to VR' and 'VR as Teleoperations'",
			"Used InDesign to synthesise the report documents that were turned in for the initial proposal and final submission"
			],
		section: sections.THOUGHT,
		isVisible: true,
		citation: "",
		link: "commons.pratt.edu/vras",
		additionalLinks: [
			{
				text: "Project",
				url: "commons.pratt.edu/vras"
			},
			{
				text: "Mirror",
				url: "https://itf21.wordpress.com/"
			},
			{
				text: "Report",
				url: "/projects/vras"
			},
			{
				text: "PDF",
				url: "/documents/vras.pdf"
			},
		],
		tags: ["Content Writing", "Research", "Wordpress", "InDesign", "Pratt"]
	},

	"ai-ip": {
		id: "ai-ip",
		image: "/images/project-ai.png",
		fullTitle: "Artificial Intellectual Property",
		shortTitle: "AI x IP",
		abstract: "",
		contributions: [],
		section: sections.THOUGHT,
		isVisible: true,
		citation: "",
		link: "/projects/ai-ip",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/ai-ip"
			},
			{
				text: "PDF",
				url: "/documents/aiip.pdf"
			},
		],
		tags: []
	},

	// UX
	"nyphil-eval": {
		id: "nyphil-eval",
		image: "/images/project-nyp.png",
		fullTitle: "NY Phil Archives",
		shortTitle: "NY Phil Archives",
		abstract: "",
		contributions: [],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/projects/nyphil-eval",
		additionalLinks: [
			{
				text: "Case Study",
				url: "/portfolio/nyphil-eval"
			},
			{
				text: "Report",
				url: "/projects/nyphil-eval"
			},
			{
				text: "PDF",
				url: "/documents/nyphil.pdf"
			},
			{
				text: "Presentation",
				url: "/documents/nyphil-presentation.pdf"
			},
			{
				text: "Website",
				url: "https://archives.nyphil.org/"
			},
		],
		tags: []
	},

	"wak-eval": {
		id: "wak-eval",
		image: "/images/project-wak.png",
		fullTitle: "WeAreKnitters.com",
		shortTitle: "WeAreKnitters.com",
		abstract: "",
		contributions: [],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/projects/wak-eval",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/wak-eval"
			},
			{
				text: "PDF",
				url: "/documents/wak.pdf"
			},
			{
				text: "Website",
				url: "https://www.weareknitters.com/"
			},
		],
		tags: []
	},

	"food-eval": {
		id: "food-eval",
		image: "/images/project-foodnetwork.png",
		fullTitle: "FoodNetwork.com",
		shortTitle: "FoodNetwork.com",
		abstract: "",
		contributions: [],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/projects/food-eval",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/food-eval"
			},
			{
				text: "PDF",
				url: "/documents/foodnetwork.pdf"
			},
			{
				text: "Website",
				url: "https://www.foodnetwork.com/"
			},
		],
		tags: []
	},	

	"bnz-eval": {
		id: "bnz-eval",
		image: "/images/project-bnz.jpg",
		fullTitle: "BNZ Mobile",
		shortTitle: "BNZ Mobile",
		abstract: "",
		contributions: [],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/projects/bnz-eval",
		additionalLinks: [
			{
				text: "Report",
				url: "/projects/bnz-eval"
			},
			{
				text: "PDF",
				url: "/documents/bnz.pdf"
			},
			{
				text: "App",
				url: "https://apps.apple.com/nz/app/bnz-mobile/id443045792"
			},
		],
		tags: []
	},

	// Design
	"nyc-parks": {
		id: "nyc-parks",
		image: "/images/project-parks.png",
		fullTitle: "nycgovparks.org",
		shortTitle: "nycgovparks.org",
		abstract: "",
		contributions: [],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202",
		additionalLinks: [
			{
				text: "Case Study",
				url: "/portfolio/nyc-parks"
			},
			{
				text: "Project (Desktop)",
				url: "https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202"
			},
			{
				text: "Project (Mobile)",
				url: "https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=67%3A14014&scaling=scale-down&page-id=1%3A110&starting-point-node-id=67%3A14014"
			},
			{
				text: "Website",
				url: "https://www.nycgovparks.org/"
			},
		],
		tags: []
	},

	"wairoa-camp": {
		id: "wairoa-camp",
		image: "/images/project-camp.png",
		fullTitle: "Hei Rangatira Mō Āpōpō: Evaluation Of Te Oho Ake, A Wānanga For The Tomorrow's Leaders Of Te Wairoa",
		shortTitle: "Te Oho Ake",
		abstract: "In January 2022, after postponements and reducing the number of rangatahi who could attend and the length of the wānanga because of Covid, Morehu and Bronson ran a six-day (five night) wānanga for around 30 rangatahi at Ruataniwha Marae in Wairoa, Hawke’s Bay. Funding for the wānanga, Te Oho Ake, was provided by the MAS Foundation.",
		contributions: [],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [],
		tags: ["Design", "InDesign", "Layout"]
	},

	"place-based": {
		id: "place-based",
		image: "/images/project-housing.png",
		fullTitle: "Place-Based Housing And Urban Development Pilot – Hastings: Reducing The Number Of Tamariki Living In Unhealthy Homes Or At Risk Of Homelessness",
		shortTitle: "Place Based Housing",
		abstract: "Declining housing affordability for Māori has seen a fall in Māori home ownership as well as the inability of many whānau to find good quality rental accommodation they can afford. In this context, whānau-owned homes have become even more of a precious taonga (treasure) that provide shelter and support for whānau. While this expression of whānaungatanga (kinship) provides a roof over people’s heads it may not necessarily provide them with their own space. If a home is crowded, common spaces may be re-purposed as sleeping spaces and whānau may not feel that their shelter is permanent or desirable.",
		contributions: [],
		section: sections.DESIGN,
		isVisible: true,
		citation: "Cram, F. & Tawhai, S. (2021). Place-Based Housing and Urban Development Pilot – Hastings: Reducing the number of tamariki living in unhealthy homes or at risk of homelessness. Evaluation report. Prepared for Hawke’s Bay District Health Board. Auckland: Katoa Ltd.",
		link: "",
		additionalLinks: [],
		tags: ["Design", "InDesign", "Layout"]
	},

	// Circus

	"your-move": {
		id: "your-move",
		image: "/images/project-move.png",
		fullTitle: "Carnaval De La Noche Presents: Your Move",
		shortTitle: "Your Move",
		abstract: "When games, come to life. It was Professor Plum, in the Conservatory, with the candlestick! Go directly to jail, do not pass go, do not collect $200! Right hand, on green! Bingo! Checkmate! Performers will create an act, inspired by their chosen board game (or similar). You may seek to transport the audience to a scene from your game, or perhaps your piece will be a looser interpretation. Monopoly. Cluedo. Battleships. Snakes n’ Ladders. Blackjack. Jenga. The choice is yours…. Are you game?",
		contributions: [],
		section: sections.CIRCUS,
		isVisible: true,
		citation: "",
		link: "https://www.youtube.com/playlist?list=PLggwqVX6zAGds1doyf9kEp3tmxeiMFa8W",
		additionalLinks: [
			{
				text: "Video",
				url: "https://www.youtube.com/playlist?list=PLggwqVX6zAGds1doyf9kEp3tmxeiMFa8W"
			},
		],
		tags: ["Circus", "Cast", "Aerials", "Trapeze", "Singles Trapeze", "Lucky Thirteen", "Carnaval de la Noche"]
	},

	"our-story": {
		id: "our-story",
		image: "/images/project-story.png",
		fullTitle: "Carnaval De La Noche Presents: Your Move",
		shortTitle: "Your Move",
		abstract: "For Silver Circle’s 10 year anniversary, we invite you to take a look behind the scenes of one of Auckland’s most prominent circus communities. OUR STORY will have you see some of New Zealand’s best circus artists performing acrobatics, aerial arts, contortion and more! Silver Circle’s philosophy of open doors has enabled ordinary people to trade shirts for sequins and live the dream of running away with the circus. Join us for three nights of laughter and fascination as you discover many typical situations that members of Silver Circle encounter during a training session, and watch them as they perform awe inspiring stunts and tricks!",
		contributions: [],
		section: sections.CIRCUS,
		isVisible: true,
		citation: "",
		link: "https://www.youtube.com/playlist?list=PLggwqVX6zAGfX_PXFe0btwtVL8CEsQJVx",
		additionalLinks: [
			{
				text: "Video",
				url: "https://www.youtube.com/playlist?list=PLggwqVX6zAGfX_PXFe0btwtVL8CEsQJVx"
			},
			{
				text: "Photos",
				url: "https://www.facebook.com/media/set/?set=a.10157853677332516"
			},
		],
		tags: ["Circus", "Cast", "Aerials", "Trapeze", "Doubles Trapeze", "Silver Circle"]
	},

	"between-worlds": {
		id: "between-worlds",
		image: "/images/project-worlds.png",
		fullTitle: "Between Worlds",
		shortTitle: "Between Worlds",
		abstract: "Welcome to Silver Circle Productions and West City Concert Band's second full length circus and live music extravaganza! 'Between Worlds' is a wondrous tale of one woman’s brave journey into a dark, mysterious world to rescue her kidnapped lover. Loosely based on the myth of Orpheus and Eurydice, it is a story of finding strength in the most unexpected of places, told through a cast of talented acrobats and dancers with accompaniment of a live concert band. After the sold out show 'Danse Carnivale'in 2014, Silver Circle Productions, Auckland’s largest community circus, and the multi-award winning West City Concert Band come together again to bring you a show of high flying acrobatics, death defying stunts, exquisite dancers and exceptional music that will appeal to all ages.",
		contributions: [],
		section: sections.CIRCUS,
		isVisible: true,
		citation: "",
		link: "https://www.youtube.com/playlist?list=PLggwqVX6zAGfItwyv-rsXQK0xfrrWXEpA",
		additionalLinks: [
			{
				text: "Video",
				url: "https://www.youtube.com/playlist?list=PLggwqVX6zAGfItwyv-rsXQK0xfrrWXEpA"
			},
			{
				text: "Photos (Jennings)",
				url: "https://www.flickr.com/photos/80568331@N04/albums/72157674574258745"
			},
			{
				text: "Photos (Marks)",
				url: "https://www.facebook.com/media/set/?set=a.1220882574694949"
			},
		],
		tags: ["Circus", "Cast", "Acrobatics", "Stunting", "Silver Circle"]
	},

	"life-toybox": {
		id: "life-toybox",
		image: "/images/project-toybox.png",
		fullTitle: "Life in the Toybox",
		shortTitle: "Life in the Toybox",
		abstract: "When we close a toybox, how much do our toys stay with us and how much of us stays with them? From dolls too precious to play with, to teddies long forgotten, Life in the Toybox explores the hidden side of the toys we cherish, abandon, and enjoy. Will you come out to play? With its unique blend of quirky humour, diverse talents, and endless energy, Silver Circle Productions has a reputation for the bizarre and wonderful. This Fringe they’re back at the Rose Centre with their sixth annual production, Life in the Toybox, inviting you to join them in a world of creativity and colour where the line blurs between who is playing with whom in this circus we call life. Our large, multi-talented, cast will bring you an assortment of acrobatic animals, dancing dolls, aerial figurines and more, and, as always, invite you to step into our world and feel part of the story.",
		contributions: [],
		section: sections.CIRCUS,
		isVisible: true,
		citation: "",
		link: "https://www.youtube.com/playlist?list=PLggwqVX6zAGffRK936pAS2OiLDuND4zIm",
		additionalLinks: [
			{
				text: "Video",
				url: "https://www.youtube.com/playlist?list=PLggwqVX6zAGffRK936pAS2OiLDuND4zIm"
			},
			{
				text: "Photos (Jennings)",
				url: "https://www.flickr.com/photos/80568331@N04/albums/72157648565762883"
			},
			{
				text: "Photos (Marks)",
				url: "https://www.facebook.com/media/set/?set=a.717167561733122"
			}
		],
		tags: ["Circus", "Crew", "Stage Manager", "Silver Circle"]
	},

	"dystopian-dreams": {
		id: "dystopian-dreams",
		image: "/images/project-dystopia.png",
		fullTitle: "Dystopian Dreams",
		shortTitle: "Dystopian Dreams",
		abstract: "Silver Circle returns to the Rose Centre in February to explore a dystopian society where oppression and dehumanisation are the norm. A splash of colour breaks the spell, creating crisis and rebellion, and the citizens struggle to decide on where they want to sit on the scale between freedom and control. Simultaneously challenging and cheeky, inspiring and entertaining, these talented performers will bring a not-so-impossible future to life in front of your eyes. Dystopian Dreams is Silver Circle’s fifth production, building on its impressively successful six year history as a community circus. From acrobats to dancers to aerialists, the skills have gone up another notch including both new performers and the usual suspects. The show embodies contemporary circus, by combining traditional trained circus techniques with dance and theatrical elements. Come prepared for a dynamic and unique production that will challenge, astonish and captivate you and your friends. Keep an open mind, join in the fun, and you won’t regret it!",
		contributions: [],
		section: sections.CIRCUS,
		isVisible: true,
		citation: "",
		link: "https://www.youtube.com/playlist?list=PLggwqVX6zAGdptZpfZtv-L2kBquEAg8M2",
		additionalLinks: [
			{
				text: "Video",
				url: "https://www.youtube.com/playlist?list=PLggwqVX6zAGdptZpfZtv-L2kBquEAg8M2"
			},
			{
				text: "Photos (Jennings)",
				url: "https://www.flickr.com/photos/80568331@N04/albums/72157641448979673"
			},
			{
				text: "Photos (Marks)",
				url: "https://www.facebook.com/media/set/?set=a.519651071484773"
			}
		],
		tags: ["Circus", "Cast", "Acrobatics", "Stunting", "Silver Circle"]
	},
};