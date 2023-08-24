export const sections = {
	VIZ: "Data Visualisation",
	ANAL: "Research & Analysis",
	UX: "User Interface & Experience",
	DESIGN: "Graphic Design",
	CIRCUS: "Performing Arts"
}

export const projectInfo = {
	// Data Viz
	"wingspan": {
		id: "wingspan",
		image: "/images/project-wingspan.png",
		fullTitle: "The Birds of Wingspan",
		shortTitle: "Birds of Wingspan",
		abstract: "A personal favourite, Wingspan is a board game centred around amassing a diverse flock of bird species. Within the game, each bird is accompanied by several data points, including details such as diet, habitat range, and nesting tendencies. But what if we wanted deeper insights? This undertaking aims to leverage Wingspan as a launchpad for delving into the captivating world of the avian creatures that grace our surroundings and heighten our admiration for our feathered friends.",
		contributions: [
			"Aggregated, analysed, and parsed 5 distinct datasets, resulting in comprehensive and insightful displays.",
			"Developed 4 interactive D3.js visualisations that translated complex data into easily understandable visuals, enhancing project communication.",
			"Orchestrated the seamless integration of React, bringing together all project components into a cohesive and dynamic user interface."
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
		abstract: "New Zealand's birds are a true blend of beauty and abundance, so it's no surprise that the country fosters a community of observing and documenting them. In 2021 alone, the New Zealand Bird ATLAS, one of the largest birdwatching databases, recorded over a million observations – a testament to the nation's interest. Visualising such a wealth of data might seem daunting, but that's what this project aims to achieve: making it easily understandable for users.",
		contributions: [
			"Engineered a Python script to efficiently parse and transform over one million rows of raw data into a JSON blob, seamlessly integrated with the front-end.",
			"Employed D3.js to craft an intuitive interface for data visualization, fostering an interactive and engaging user journey.",
			"Led User Experience (UX) research sessions, refining the interface quality and unearthing potential enhancements through collaborative user feedback."
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
			url: "/article/bird-map"
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
		abstract: "Aotearoa proudly showcases a splendid variety of feathered wonders – from the iconic Kiwi, the melodious Tui, to the mischievous Kea parrot. However, a pressing issue looms: around 74% of the 168 extant bird species are now at risk. The relentless impact of climate change, causing habitat shifts and food source deterioration, plays a significant role in this predicament. Recognising the interdependence of ecosystems, this report delves into the intricate connections formed by various species through their dietary habits. Through this exploration, we aspire to contribute to the collective endeavour of safeguarding these remarkable birds.",
		contributions: [
			"Created a Python script that transformed a bird-food relationship dataset into a network of interconnected bird pairs, utilising shared food sources as the basis.",
			"Employed Gephi to import and analyse the data, enabling exploration of diverse network configurations and patterns.",
			"Enhanced the network diagram by meticulously applying colour, resizing, and labelling techniques, resulting in a polished and visually informative final rendition."
			],
		section: sections.VIZ,
		isVisible: true,
		citation: "",
		link: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/04/test1-1.jpg?resize=768%2C811&ssl=1",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/bird-network"
		},
		{
			text: "Data (TBD)",
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
		abstract: "As time marches on, the expense of securing permanent shelter escalates. The topic of soaring housing prices has been thoroughly debated, and with the median house price now exceeding NZD 1,000,000 (per RNZ), a considerable number of New Zealanders are finding homeownership an elusive dream. Confronted with the prospect of a prolonged renting journey, it's prudent to delve deeper into the evolving dynamics of this expanding market.",
		contributions: [
			"Leveraged Tableau to craft diverse data visualizations using around 8000 aggregated rental income data entries.",
			"Assembled a unified narrative by handpicking key visualizations and integrating them into a cohesive dashboard, maintaining a harmonious visual motif.",
			"ntegrated interactive filters into the Tableau dashboard, empowering users to delve into the data's nuances through region, income bracket, and landlord type exploration."
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
			url: "/article/nz-rent"
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
		abstract: "Since Grecian times, thinkers like Aristotle have contemplated the essence of colour. This inquiry was carried forth by subsequent luminaries, from Ibn al-Haytham to Leonardo da Vinci. However, in 1704, our comprehension of colour underwent a profound transformation with Newton's 'Opticks' and his groundbreaking colour wheel. This pivotal moment inspired a quest to construct a model that could encompass the entire spectrum of human perceptible colours. In the three centuries since, this model has taken various forms, offering insights into phenomena ranging from the physical to the emotional, even touching upon the spiritual. This timeline offers a condensed overview of some of the most remarkable milestones in this period, serving both as an introduction and a gateway into one of the most colourful chapters in human history.",
		contributions: [
			"Delved into the annals of colour theory history, distilling ten pivotal milestones that shaped the field.",
			"Systematised the data into a consolidated source, effectively transforming it into a Google Sheet.",
			"Employed Timeline JS to translate the sheet into an interactive timeline, subsequently architecting its design for a visually engaging experience."
			],
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
			url: "/article/colour-history"
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
			"Explored Dungeons and Dragons game rules extensively, enabling the accurate translation of crucial gameplay mechanics into JavaScript for an authentic and enjoyable gaming encounter.",
			"Constructed an interactive website hosted on Netlify, facilitating user character creation and seamless dungeon navigation.",
			"	Employed API calls to retrieve maze and character JSON data, effectively integrating the information into the DOM for dynamic visualization."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "https://puis22.netlify.app/",
		additionalLinks: [
		{
			text: "Case Study",
			url: "/portfolio/dnd-ui"
		},
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
			"Crafted a Python script that utilized the DnD 5e API to dynamically generate characters adhering to the DnD5e ruleset.",
			"Produced a maze through randomized depth-first search algorithms, enriched by items and monsters extracted from the API.",
			"	Established endpoints for character and maze creation using Flask, culminating in the hosting of the API on Heroku for seamless accessibility."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
		{
			text: "Case Study",
			url: "/portfolio/dnd-ui"
		},
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

	"nyc-parks": {
		id: "nyc-parks",
		image: "/images/project-parks.png",
		fullTitle: "nycgovparks.org",
		shortTitle: "nycgovparks.org",
		abstract: "",
		contributions: [
			"Executed a comprehensive competitive analysis and initial user research to discern user preferences for a park's website.",
			"Employed card sorting and tree testing UX methodologies to ascertain an ideal website structure and user flow.",
			"Fashioned a prototype website using Figma, enhancing its design through iterative testing and feedback loops."
			],
		section: sections.UX,
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

	"personal-site": {
		id: "personal-site",
		image: "/images/project-portfolio.png",
		fullTitle: "Personal Site",
		shortTitle: "Personal Site",
		abstract: "",
		contributions: [
			"Formulated a comprehensive top-down design aligning with both portfolio requirements and client's design sensibilities.",
			"Implemented the website using React, translating the design into a functional and interactive online presence.",
			"Authored all content, ensuring a consistent and compelling narrative that resonates with the intended audience."
			],
		section: sections.UX,
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
			"Conceptualized a layout and theme harmonizing with contemporary trends, effectively portraying the client's online presence at its best.",
			"	Constructed a dynamic website by skillfully integrating diverse HTML elements, showcasing proficiency across various use cases.",
			"Crafted all content components, including copy, graphics, photographs, and videos, contributing to a cohesive and engaging site."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "https://scram142.neocities.org/",
		additionalLinks: [
		{
			text: "Project (Rehost to Netlify)",
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
	"lego-history": {
		id: "lego-history",
		image: "/images/project-brick.png",
		fullTitle: "Brick x Brick",
		shortTitle: "Brick x Brick",
		abstract:"Starting as a humble carpentry shop, transitioning to plastic bricks, and ultimately ascending to the pinnacle of the global toy industry, LEGO’s journey is undeniably awe-inspiring. Anchored in data, this article navigates through this remarkable saga by centring on the story of the iconic brick itself. The exploration encompasses pivotal shifts in manufacturing methodologies and design ethos and analysis of the varied sets and themes that have underscored its remarkable adaptability. Collectively, these elements tell the tale of a company that went from a household name to the brink of bankruptcy, only to rebound triumphantly.",
		contributions: [
			"Investigated the historical evolution of LEGO through a dual approach, encompassing both comprehensive literature review and rigorous SQL analysis.",
			"Crafted an immersive 3000+ word journalistic article, presenting research findings in a captivating manner designed to captivate readers' interest.",
			"Leveraged React, Scrollama, and D3 to elevate the article's storytelling by integrating interactive elements, enriching visual components, and fostering engagement throughout the narrative."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "https://apvs23.netlify.app",
		additionalLinks: [
			],
		tags: []
	},

	"ids": {
		id: "ids",
		image: "/images/project-ids.png",
		fullTitle: "Indigenous Data Sovereignty & Open Data; Tensions and Resolutions",
		shortTitle: "IDS & Open Data",
		abstract: "In the age of big data an array of questions are being asked as how our data is created, controlled, and distributed. Two movements that have manifested to answer these questions are Indigenous Data Sovereignty (IDS) and the Open Data Movement (ODM). IDS examines these questions through an indigenous perspective, focusing on the reclamation of data about, with, or by indigenous peoples. ODM, on the other hand, believes that data should be freely available without restrictions. While both of these movements come with lofty ambitions, the ways they approach data may not inherently be harmonious. The goal of this paper then, is to examine what tensions exist between these two movements, as well as what steps can be taken to have them coexist and potentially bolster one another.",
		contributions: [
			"Conducted an exhaustive literature review encompassing Indigenous Data Sovereignty and Open Data movements, achieving a profound comprehension of both domains.",
			"Composed an in-depth 8000-word academic research report that synthesized and articulated the insights garnered from the exploration.",
			"Effectively shared research findings by presenting at multiple Pratt-hosted conferences, contributing to scholarly discourse on the intersection of Indigenous Data Sovereignty and Open Data."	
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "/documents/ids.pdf",
		additionalLinks: [
		{
			text: "Case Study",
			url: "/portfolio/ids"
		},
		{
			text: "Report (todo)",
			url: "/article/ids"
		},
		{
			text: "PDF",
			url: "/documents/ids.pdf"
		},
		],
		tags: ["Apple Pages", "Literature Review", "Zotero", "Pratt"]
	},

	"lego-colours": {
		id: "lego-colours",
		image: "/images/project-lego.png",
		fullTitle: "Following the Yellow Brick Road",
		shortTitle: "Lego Colours",
		abstract: "LEGO, produced by The LEGO Group, is a line of construction toys primarily comprising of interlocking plastic components (parts). These parts range from the ubiquitous bricks and figures through to gears and axles, all in a variety of colours. Parts are collected and sold as sets, which themselves are grouped into themes. It is these themes that this paper examines. Specifically: What factors may be involved in determining the colour palette of a LEGO theme.",
		contributions: [
			"Formulated a comprehensive set of research inquiries regarding LEGO, employing a blend of quantitative and qualitative research methodologies.",
			"Employed SQL to process and restructure approximately 10,000 data rows, preparing them for in-depth analysis.",
			"Executed a k-means analysis to discern patterns and distinctions between the LEGO data and corresponding images, contributing to a deeper understanding of their relationships."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "/article/lego-colours",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/lego-colours"
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
			"Examined outcomes from more than 50 interviews, synthesizing the data into concise bulletins for the research team's comprehensive understanding.",
			"Engaged in close collaboration with the team to formulate initial findings and generate preliminary visual representations of the research outcomes.",
			"Incorporated received feedback to refine and finalize the design of the visualizations, ensuring their alignment with the intended message for publication."
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
		{
			text: "Infographic (TBD)",
			url: ""
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
			"Unified around 400 survey responses into a standardized format, facilitating streamlined data analysis.",
			"Created Tableau dashboards to present initial findings, enabling effective communication of preliminary results to the project lead.",
			"Worked in tandem with the team to refine and finalize results, preparing them for submission to the Te Wairoa Housing Group as a comprehensive outcome."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Cram, S. (2021). Te Wairoa housing survey report. Prepared for Te Wairoa Housing Group. Auckland: Katoa Ltd.",
		link: "",
		additionalLinks: [
		{
			text: "todo",
			url: ""
		},
		],
		tags: ["Microsoft Excel", "Microsoft Word", "Tableau", "Data Analysis", "Data Visualisation", "Katoa"]
	},

	"whakapakari-ai": {
		id: "whakapakari-ai",
		image: "/images/project-whakapakari.png",
		fullTitle: "Final Evaluation Report: Whakapakari Ai Ngā Rangatahi",
		shortTitle: "Whakapakari ai",
		abstract: "This report sets out the evaluation of Whakapakari ai ngā Rangatahi, an innovative preventative service for rangatahi and whānau that is being delivered by Raukawa Charitable Trust | Te Poari Manaaki o Raukawa and funded from April 2019 to the end of June 2022 by the Ministry of Health through its Te Ao Auahatanga Hauora Māori funding programme. The evaluation walked alongside Whakapakari ai ngā Rangatahi, from its initiation to December 2021, and assessed why the service was needed, how it has been implemented, the outcomes achieved, and the lessons learned and future challenges.",
		contributions: [
			"Systematized around 100 survey outcomes into a unified spreadsheet, enhancing the efficiency of subsequent analysis.",
			"Devised visual representations illustrating average sentiment across distinct facets, offering project leads and stakeholders a comprehensive view of the results.",
			"Generated concise research briefs incorporating pertinent quotations, contributing vital insights to the final reporting process."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Were, L. (2022). Final Evaluation Report: Whakapakari ai ngā Rangatahi, delivered by Te Poari Manaaki o Raukawa (Raukawa Charitable Trust) with Te Ao Auahatanga Hauora Māori funding from the Ministry of Health. Prepared for Te Poari Manaaki o Raukawa & the Ministry of Health. Auckland: Katoa Ltd & Te Awamutu: Tuakana Teina Evaluation Collective.",
		link: "",
		additionalLinks: [
		{
			text: "todo",
			url: ""
		},
		],
		tags: ["Microsoft Excel", "Data Analysis", "Data Entry", "Katoa"]
	},

	"life-renting": {
		id: "life-renting",
		image: "https://journals.sagepub.com/na101/home/literatum/publisher/sage/journals/content/alna/2020/alna_16_1/alna_16_1/20200319-01/alna_16_1.cover.png",
		fullTitle: "Life When Renting For Older Māori",
		shortTitle: "Life When Renting",
		abstract: "The proportion of older Māori (55+years) living in rental accommodation is set to rise as home ownership has become less attainable. To anticipate what the future of rental accommodation may hold for older Māori, 42 older Māori (18 men, 24 women) renters in the Hawke’s Bay region of Aotearoa New Zealand were asked about their experiences.",
		contributions: [
			"	Executed meticulous data entry for more than 40 survey responses, consolidating them into a single spreadsheet primed for advanced analysis.",
			"Crafted a granular breakdown analysis of the responses, facilitating focused exploration of noteworthy aspects within the dataset for the research team.",
			"Maintained regular communication with the team, ensuring that their reporting remained aligned with the data's integrity throughout the analysis process."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "Cram, F. & Munro, M. (2020). Life when renting for older Māori. AlterNative: An International Journal of Indigenous Peoples, 16(1), 64-75.",
		link: "https://www.buildingbetter.nz/reports/homes_spaces/Cram_Munro_2020_life_when_renting_for_older_maori_alternative_jrnl.pdf",
		additionalLinks: [
		{
			text: "PDF",
			url: "https://www.buildingbetter.nz/publications/homes_spaces/Cram_Munro_2020_life_when_renting_for_older_maori_alternative_jrnl.pdf"
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
			"Established and sustained a tailored data repository, enabling data collection and analysis throughout the duration of the longitudinal study.",
			"Created a comprehensive data dictionary, offering clear documentation for current and future researchers utilizing the data repository.",
			"Initiated data entry for initial survey outcomes and provided assistance to fellow researchers to uphold data quality standards, preserving the integrity of the dataset."
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

	"guardian-viz": {
		id: "guardian-viz",
		image: "/images/project-guardian.png",
		fullTitle: "Guardian Gay Rights Viz",
		shortTitle: "Gay Rights Viz",
		abstract: "In the United States, gay rights have long been a contentious topic, often leaving legislation in the hands of individual states and causing confusion over rights across regions. In 2012, The Guardian created interactive radial data visualisations comparing gay rights legislation across the nation. Subsequent updates reflected evolving legislation, culminating in the 2015 US Supreme Court ruling on same-sex marriage. This design critique aims to assess the latest version of this visualisation in three parts. 1) evaluating the visualisation's effectiveness in presenting data. 2) examining design choices encompassing colour and interactivity. 3) scrutinising the chart's overall narrative role.",
		contributions: [
			"Thoroughly examined a decade-old Guardian visualization alongside its rebuilt version, dissecting the visual choices made for data representation.",
			"Critically analyzed the layout, colour scheme, typography, and interactivity of both visualizations to determine their contribution to data communication and user engagement.",
			"Assessed the narrative effectiveness of the original and rebuilt visualizations, considering how well their design and data choices conveyed the intended story and engaged the audience."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "/article/guardian-viz",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/guardian-viz"
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
		abstract: "Virtual Reality (VR) stands as a burgeoning and versatile technology. Discussions often orbit around its applications in gaming or, more recently, Facebook's venture into the realms of future social media. While these endeavours captivate attention, we hold that VR harbours the potential to permeate every corner of our society. This potential extends from arts and entertainment to innovative avenues of education, individual support, and even propelling humanity toward the uncharted territories of outer space. With this in mind, we are poised to establish a website that delves into and conveys the manifold facets of VR's potential.",
		contributions: [
			"Employed WordPress's theme tools to ensure the project's visual design aligned seamlessly with the team's vision.",
			"Conducted thorough research and authored two informative articles, namely 'Introduction to VR' and 'VR as Teleoperations,' enhancing the project's online platform.",
			"Utilized InDesign to expertly synthesize crucial report documents, which played a vital role in the initial proposal and final submission phases."
			],
		section: sections.ANAL,
		isVisible: true,
		citation: "",
		link: "commons.pratt.edu/vras",
		additionalLinks: [
		{
			text: "Project",
			url: "https://commons.pratt.edu/vras"
		},
		{
			text: "Mirror (Zip)",
			url: "/documents/vras.zip"
		},
		{
			text: "Report",
			url: "/article/vr-as"
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
		section: sections.ANAL,
		isVisible: false,
		citation: "",
		link: "/article/ai-ip",
		additionalLinks: [
		{
			text: "Report (todo)",
			url: "/article/ai-ip"
		},
		{
			text: "PDF",
			url: "/documents/aiip.pdf"
		},
		],
		tags: []
	},

	"nyphil-eval": {
		id: "nyphil-eval",
		image: "/images/project-nyp.png",
		fullTitle: "NY Phil Archives",
		shortTitle: "NY Phil Archives",
		abstract: "",
		contributions: [
			"Orchestrated and conducted moderated user testing sessions to evaluate and enhance the New York Philharmonic's Digital Archive user interface.",
			"Skillfully analyzed insights gained from 10 user tests, extracting valuable information through a Rainbow Chart approach and additional analysis tools.",
			"Formulated strategic recommendations based on user testing outcomes, spanning interface navigation improvements, homepage updates, search results enhancements, and broader user experience considerations."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/article/nyphil-eval",
		additionalLinks: [
		{
			text: "Case Study",
			url: "/portfolio/nyphil-eval"
		},
		{
			text: "Report",
			url: "/article/nyphil-eval"
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
		contributions: [
			"Designed and executed a series of unmoderated user tests on WeAreKnitters.com, encompassing task creation and follow-up question formulation.",
			"Analyzed results from 9 tests, meticulously identifying trends and insights to inform the project's direction.",
			"Produced a comprehensive report detailing findings, results, and recommended UX improvements based on the team's analysis."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/article/wak-eval",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/wak-eval"
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
		contributions: [
			"Led a heuristic UX evaluation targeting a designated flow within the Food Network website.",
			"Systematically organized and analyzed evaluation outcomes, translating them into a structured spreadsheet.",
			"Authored a comprehensive report outlining evaluation findings, coupled with actionable recommendations and documentation of proposed solutions to enhance the user experience."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/article/food-eval",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/food-eval"
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
		contributions: [
			"Evaluated and reviewed a mobile banking app through a UX design critique, carefully assessing its strengths and areas for improvement.",
			"Explored multiple aspects of the app, analyzing its functionalities, user interactions, and design choices to provide a comprehensive review.",
			"Authored a blog post summarizing the app review, highlighting its strengths, pinpointing areas for enhancement, and sharing insights to engage readers and foster discussions on UX design."
			],
		section: sections.UX,
		isVisible: true,
		citation: "",
		link: "/article/bnz-eval",
		additionalLinks: [
		{
			text: "Report",
			url: "/article/bnz-eval"
		},
		{
			text: "App",
			url: "https://apps.apple.com/nz/app/bnz-mobile/id443045792"
		},
		],
		tags: []
	},

	// Design
	"wcs-zoos": {
		id: "wcs-zoos",
		image: "",
		fullTitle: "Wildlife Conversation Society",
		shortTitle: "Zoo's of NYC",
		abstract:"",
		contributions: [
			"Revitalized the existing logo and branding elements to capture the essence of a zoo and align with the company's core values.",
			"Produced diverse collateral materials, such as webpages and banners, adhering to the newly established style guide for cohesive visual representation.",
			"Developed multiple multimedia campaign strategies designed to promote the brand and showcase the updated designs, effectively enhancing brand recognition and engagement."
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
			],
		tags: []
	},

	"lego-typeface": {
		id: "lego-typeface",
		image: "",
		fullTitle: "",
		shortTitle: "LEGO Font",
		abstract:"",
		contributions: [
			"Employed a range of LEGO bricks to explore creative possibilities for constructing alphabet characters, experimenting with diverse design approaches.",
			"Utilized a specific LEGO piece to create a preliminary mock-up of the entire alphabet, laying the foundation for the font's structure.",
			"Transferred the LEGO-generated alphabet images into Adobe Illustrator, leveraging the platform to refine, enhance, and meticulously craft a complete font through drawing and adjustments."
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
			],
		tags: []
	},

	"caribou-coffee": {
		id: "caribou-coffee",
		image: "",
		fullTitle: "",
		shortTitle: "Caribou Coffee",
		abstract:"",
		contributions: [
			"Crafted a fresh logo and captivating slogan for a coffee house, effectively encapsulating its unique essence and identity.",
			"Skillfully integrated the new logo onto various collateral items, such as mugs and roast bags, using Photoshop to ensure consistent branding.",
			"Devised a series of dynamic marketing campaigns aimed at highlighting the coffee house's distinctive brand identity, while also outlining potential future directions to enhance its market presence."
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
			],
		tags: []
	},

	"jaguar-menu": {
		id: "jaguar-menu",
		image: "",
		fullTitle: "",
		shortTitle: "Casa de Jaguar",
		abstract:"",
		contributions: [
			"Conducted a comprehensive review of the existing menu, encompassing both design aesthetics and menu offerings, to gain a thorough understanding of the restaurant's identity.",
			"Restructured the menu layout to establish improved ontology and typographic hierarchy, enhancing the user experience and readability.",
			"Infused design elements into the menu, effectively capturing and expressing the unique ambiance and vibe of the restaurant, contributing to a cohesive and visually engaging dining experience."
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
			],
		tags: []
	},

	"wairoa-camp": {
		id: "wairoa-camp",
		image: "/images/project-camp.png",
		fullTitle: "Hei Rangatira Mō Āpōpō: Evaluation Of Te Oho Ake, A Wānanga For The Tomorrow's Leaders Of Te Wairoa",
		shortTitle: "Te Oho Ake",
		abstract: "In January 2022, after postponements and reducing the number of rangatahi who could attend and the length of the wānanga because of Covid, Morehu and Bronson ran a six-day (five night) wānanga for around 30 rangatahi at Ruataniwha Marae in Wairoa, Hawke’s Bay. Funding for the wānanga, Te Oho Ake, was provided by the MAS Foundation.",
		contributions: [
			"Collaborated closely with the client to define the overarching visual aesthetics and design approach for the report.",
			"Developed comprehensive font books, design elements, and styles, ensuring consistency and coherence across the entire report.",
			"Expertly arranged textual content and graphic elements within InDesign, culminating in the production of the final report that accurately reflected the agreed-upon design concept,"
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "",
		link: "",
		additionalLinks: [
		{
			text: "todo",
			url: ""
		},
		],
		tags: ["Design", "InDesign", "Layout"]
	},

	"place-based": {
		id: "place-based",
		image: "/images/project-housing.png",
		fullTitle: "Place-Based Housing And Urban Development Pilot – Hastings: Reducing The Number Of Tamariki Living In Unhealthy Homes Or At Risk Of Homelessness",
		shortTitle: "Place Based Housing",
		abstract: "Declining housing affordability for Māori has seen a fall in Māori home ownership as well as the inability of many whānau to find good quality rental accommodation they can afford. In this context, whānau-owned homes have become even more of a precious taonga (treasure) that provide shelter and support for whānau. While this expression of whānaungatanga (kinship) provides a roof over people’s heads it may not necessarily provide them with their own space. If a home is crowded, common spaces may be re-purposed as sleeping spaces and whānau may not feel that their shelter is permanent or desirable.",
		contributions: [
			"Collaborated directly with the client to conceptualize and establish the overall visual identity and design concept for the report.",
			"Orchestrated the creation of font selections, design elements, and styles, harmonizing them for consistent application throughout the report.",
			"Skillfully arranged text and graphics using InDesign, seamlessly combining them to produce the polished final report, aligned with the envisioned design."
			],
		section: sections.DESIGN,
		isVisible: true,
		citation: "Cram, F. & Tawhai, S. (2021). Place-Based Housing and Urban Development Pilot – Hastings: Reducing the number of tamariki living in unhealthy homes or at risk of homelessness. Evaluation report. Prepared for Hawke’s Bay District Health Board. Auckland: Katoa Ltd.",
		link: "",
		additionalLinks: [
		{
			text: "todo",
			url: ""
		},
		],
		tags: ["Design", "InDesign", "Layout"]
	},

	// Circus
	"your-move": {
		id: "your-move",
		image: "/images/project-move.png",
		fullTitle: "Carnaval De La Noche Presents: Your Move",
		shortTitle: "Your Move",
		abstract: "When games, come to life. It was Professor Plum, in the Conservatory, with the candlestick! Go directly to jail, do not pass go, do not collect $200! Right hand, on green! Bingo! Checkmate! Performers will create an act, inspired by their chosen board game (or similar). You may seek to transport the audience to a scene from your game, or perhaps your piece will be a looser interpretation. Monopoly. Cluedo. Battleships. Snakes n’ Ladders. Blackjack. Jenga. The choice is yours…. Are you game?",
		contributions: [
			"Collaborated with show organizers to conceive a cohesive theme and motifs for the performance that seamlessly integrated with the entire show.",
			"Crafted and choreographed a captivating solo trapeze act aligned with the established theme.",
			"Dazzled a sold-out audience with a mesmerizing performance, showcasing the choreographed trapeze act and contributing to the show's success.",
			],
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
		fullTitle: "Your Move",
		shortTitle: "Your Move",
		abstract: "For Silver Circle’s 10 year anniversary, we invite you to take a look behind the scenes of one of Auckland’s most prominent circus communities. OUR STORY will have you see some of New Zealand’s best circus artists performing acrobatics, aerial arts, contortion and more! Silver Circle’s philosophy of open doors has enabled ordinary people to trade shirts for sequins and live the dream of running away with the circus. Join us for three nights of laughter and fascination as you discover many typical situations that members of Silver Circle encounter during a training session, and watch them as they perform awe inspiring stunts and tricks!",
		contributions: [
			"Collaborated closely with the director to develop intricate character nuances and performance notes, enriching the showcase's overall storytelling.",
			"Teamed up with my trapeze partner to conceive and execute a captivating opening performance, effectively setting the tone for the entire show.",
			"Engaged in three consecutive nights of live performances, enchanting an enthusiastic audience with a remarkable display of artistry and skill."
			],
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
		contributions: [
			"Collaborated with a diverse ensemble of circus performers and musicians to orchestrate a spectacular fusion of acrobatics and dance in a grand performance.",
			"Executed comprehensive promotional efforts for the show, which encompassed dynamic busking performances and the design and distribution of promotional materials.",
			"Engaged in two consecutive nights of electrifying live performances, complemented by a live band, delivering an enthralling experience to the audience."
			],
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
		contributions: [
			"Collaborated closely with the director from the show's conceptual stage, offering a blend of creative insight and logistical expertise to shape its foundation.",
			"Orchestrated seamless coordination among performers, meticulously managing schedules and aligning acts to ensure a cohesive and harmonious show experience.",
			"Skillfully assumed the role of stage manager throughout the entire four-night run, meticulously overseeing all elements to ensure flawless execution, including impeccable timing of cues and a smooth flow of the entire performance."
			],
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
		contributions: [
			"Collaborated with a team of three fellow acrobats to craft a captivating and awe-inspiring circus act.",
			"Seamlessly integrated within the larger ensemble cast, contributing to the collective success of the entire show.",
			"Engaged in dynamic performances across four consecutive nights, captivating an enthusiastic audience with an unforgettable showcase of skill and artistry."
			],
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