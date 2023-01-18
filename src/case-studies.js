import css from './Study.module.css'
import Diet from './WingspanDiet'
import Lifecycle from './WingspanLifecycle'
import Range from './WingspanRange'
import Wingspan from './WingspanWingspan'


export const caseStudies = {
	"wingspan": {
		id: "wingspan",
		nav: "Wingspan",
		title: "Wingspan",
		blurb: "This is a short blurb about this project",
		image:"/images/study-wingspan-banner.jpg",
		link: "https://shiny-mandazi-9bf1d7.netlify.app",
		isVisible: true,
		markup: (
			<>
			<img src="/images/study-wingspan-banner.jpg" className={css.banner} alt=""></img>
			<h1 id="introduction">Creating an Avian Information Dashboard Based on the Wingspan Boardgame</h1>
			<a className="button" target="_blank" href="https://shiny-mandazi-9bf1d7.netlify.app" rel="noreferrer">View the Dashboard</a>
			<p>Intro intro intro</p>
			
			<h2 id="background">Background</h2>
			<h3>The Project</h3>
			<p>This project was originally created for INFO 616: Programming Interactive Visualization. The goal of the project was to use D3.js to create a web-based data visualisation with an interactive component. Specifically, I opted to create an online dashboard where you could learn more about a specific bird species. This allowed me to bring together multiple disparate datasets, including aviandietdb and cornell ebird, demostrate a range of technical skills, and discuss a topic I personally enjoy. In order to tie it all together, I drew upon the boardgame Wingspan - this provided an entry point for users as well as a framing device for how the dashboard should be laid out</p>
			<p>For inclusion in this portfolio, the project was later expanded upon in three key ways. The first was to generalise the datasets to include a siginificantly wider selection of bird species. The second was to create modals for each module, allowing for more in depth exploration and drawing on previous work from INFO 658: Information Visualization. Thirdly, additional polish has been done to improve both the interface and the code that belies it.</p>
			
			<h3>Wingspan</h3>
			<p>Wingspan is a "competitive, medium-weight, card-driven, engine-building board game" designed by Elizabeth Hargrave and published by Stonemaier Games. The aim of the game is to collect a vairety of bird species and combine their unique abilities to create powerful effects. Each bird is represented on a card, which includes its biographical information, gameplay statistics and abilities, and a beautiful illustration by Natalia Rojas & Ana Maria Martinez Jaramillo. In game characteristics are designed to facsimile the real world attributes of the species, such as diet and habitat.</p>

			<figure className={css.figure}>
				<img className={css.figureImage} src="/images/study-wingspan-cards.jpg" alt="https://www.birdcollective.com/products/wingspan-board-game"/>
				<figcaption className={css.caption}>Example of a wingspan bird cards</figcaption>
			</figure>
			
			<h2 id="methodology">Methodology</h2>
			<h3>Design: Wingspan</h3>
			<div className={css.textLogo}>
				<img alt="" className={css.logo} src="https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph/img/d5aVUcak3R6QOHz5y-fvQdc8pwU=/fit-in/1200x630/filters:strip_icc()/pic4458123.jpg"/>
				<p>As the cards create a facsimile to the birds, so too does this visualisation create a facsimile to the cards. The visualisation is designed as a dashboard, with each module roughly correlating to a mechanical/graphical aspect of the card. This allows users to get a wide overview of the information, even at a glance, as they orient themselves based on the game pieces. The interactive elements allow the user to dig deeper into the information, learning more about specific parts of the data, or create additional insights. </p>
			</div>

			<h3>Base Case: D3</h3>
			<div className={css.textLogo}>
				<img alt="" className={css.logo} src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png"/>
				<p>Each module was built using D3.js, which allowed for easier creation of the visualisations. Sometimes it could be hard to write things in a D3 way though [...]</p>
			</div>

			<h3>Generalisation: React</h3>
			<div className={css.textLogo}>
				<img alt="" className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
				<p>Once all the modules had been completed, and were shown to work with the sample data, the next step was to generalise it for any bird species. To accomplish this, the code was split out using the React JavaScript Library. This allowed me to create a template page that could be populated by filtering the data for the specific bird species. Doing so also helped solved the issue with searching, as users could be directed to the appropriate page based on their input, or receive error handling.</p>
			</div>

			
			<h2 id="results">Results</h2>

			<figure className={css.figure}>
				<img alt="" className={css.figureImage} src="/images/study-wingspan-dashboard.png" alt="Luke, I am your caption..."/>
				<figcaption className={css.caption}>Screen capture of the dashboard for a Bald Eagle</figcaption>
			</figure>
			<p>Once you look up a specific bird you’re greeted with five unique modules: Biography; Diet; Lifecycle; Range; Wingspan. Each one representing a different aspect of the card, and including the iconography as an indicator. Each module is designed to stand alone, with basic information on the topic at a glance and a pop-up modal for a more detailed view.</p>
			
			<h3>Module 1: Biography</h3>
{/*			<figure className={css.figure}>
				<div className={css.d3module}>Biography Module: Live!</div>
				<figcaption className={css.caption}>Try me!</figcaption>
			</figure>*/}
			<h4>The Data</h4>
			<p>(Wingspan) Most of the top banner is pulled from a wingspan dataset that a fan created. It’s missing a few key pieces of information, but does a better job than trying to compile it myself. Would want to amend a few things if I continue to work on this project though, notably some missing data points around game actions.</p>
			<p>(Biography)</p>
			<h4>The Viz</h4> 
			<p>There were two references I used when trying to decide how to display this information. The first comes from the book “Celebrating birds” which is a companion guide to the game itself. The second is All About Birds by Cornell</p>

			<h3>Module 2: Diet</h3>
			<figure className={css.figure}>
				<div className={css.d3module}>
					<Diet/>
				</div>
				<figcaption className={css.caption}>Try me!</figcaption>
			</figure>
			<h4>The Data</h4> 
			<p>(Source: Avian Diet Database) The data lacks any sort of consistency however, with some birds listing prey only by weight, others by item, others both. And sometimes the taxonomy was either listed at the wrong level (species in the class level) or simply not useful (“Unidentified Animalia”).</p>
			<h4>The Viz</h4>
			<p></p>	
			<p>TBD what the pop-up is gonna look like</p>	
			
			<h3>Module 3: Lifecycle</h3>
			<figure className={css.figure}>
				<div className={css.d3module}>
					<Lifecycle/>
				</div>
				<figcaption className={css.caption}>Try me!</figcaption>
			</figure>			
			<h4>The Data</h4>
			<p>I was unable to find a single dataset with all the information that this module needed publically available. For prototyping purposes, data was sourced manually and entered into a spreadsheet. Early stages of development were found at AllAboutBirds, but they didn't codify later stages such as mating or lifespan, which had to be sought out on google. I was serendipitously gifted an encyclopaedia on birds, which provided all the information the module needed. The book itself is slightly dated, as taxonomies are ever shifting, but it provides good enough information for this project. Unfortunately, it being a paper book meant a significant amout of manual data entry.</p>
			<p>Should probably write something about the tooltip info</p>
			<h4>The Viz</h4>
			<p>This module is the one that was changed most frequently during development. The first attempt involved using a tree diagram and pruning it until it resembled a timeline. The second involved using a newtwork graph, which proved completely off base. The final approach was to use a one-dimensional scatterplot. The dates are scaled on a log, as early stages in development are measured in weeks, whereas later stages can take decades, and a log allowed them to be draw with less space in between</p>	
			<p>I wonder what the pop-up for this one will look like. Probably rolling the tooltips into it</p>		

			<h3>Module 4: Range</h3>
			<figure className={css.figure}>
				<div className={css.d3module}><Range/></div>
				<figcaption className={css.caption}>Try me!</figcaption>
			</figure>
			<h4>The Data</h4>
			<p>A Cornell Lab of Ornithology project, eBird allows users to document bird sightings, which are then collected for use by registered users. [something something more about the data].</p>
			<p>During prototyping I manually downloaded the sightings for ~20 birds over 2021. Aggregating the data was all done using a python script that would loop through all the files, and sum up the number of sighting instances for a given county code. Unfortunately the location data included isn't an exact match to standard FIPS encoding, e.g. instead of 01143 it uses AZ-143. This had to be changed in order to properly reference the positioning on the map.</p>
			<p>However when trying to generalise the project, it became apparent that pre-processing the entire dataset wouldn't be suitable. If nothing else, even when narrowing the raw data to only the USA for a single year, it was over 100gb in size. Instead I switched to using the eBird API. The upside of this was that it allowed for lightweight access to the dataset. The downside was that a) it required more processing on the dashboard itself, lowering performance and b) it only provides the last 30 days worth of sighting, making it incomplete for migratory species</p>
			<h4>The Viz</h4>
			<p>The initial plan for this module involved converting all the points into a single shape file to represent the range, and overlaying it atop the map. Although possible, the amount of manual work meant the approach was unsuitable for generalisation. Instead, upon consultation with a classmate, I instead opted to aggregate the data into regions, and use D3's built in mapping functionality to create a chloropleth. Some discussion was had about whether to aggregate to the county or state level, but the former felt better suited. Scale was also much debated, as the data ranged from single sightings to tens of thousands, and so a log scale was chosen to show that granularity.</p>
			<p>The map used for the base layer was 10m</p>
			<p>The addition of a pop-up modal provided the opportunity for significantly more user interaction, such as the ability to zoom and filter by time. This also provided the ability to switch between aggregate and descrete points (that the data provided). With that, i integrated work from [a previous project] to not only display the points, but also allow the user to view them in a sped up real time (???)</p>
			
			<h3>Module 5: Wingspan</h3>
			<figure className={css.figure}>
				<div className={css.d3module}><Wingspan/></div>
				<figcaption className={css.caption}>Try me!</figcaption>
			</figure>			
			<h4>The Data</h4>
			<p>The Wingspan Dataset used through the project contains datapoints for the literal wingspan of each species, which was piped directly into the viz.</p>
			<h4>The Viz</h4>
			<p>This module provided the most hands on work with SVGs. The basic shape is courtesy of Jennifer Cahalane, and was manipulated through various transform effects. Although it may not be readily apparent, the width of the svg is a 1-to-1 match between the cm measurement of the wingspan to the pixel width of the SVG. In order to provide a relative size reference, the California Condor and Hummingbird, the largest and smallest birds in the dataset, were overlaid in the module. This had the added benefit of not having to worry about SVGs overlapping in strange ways, as they would always fall between those two points.</p>
			 <p>The idea of relative size was expanded upon in the pop-up modal, providing references against [other species] </p>
			
			<h2 id="reflections">Reflections</h2>
			<p></p>
			
			<h2 id="future">Future Work</h2>
			<h3>AR</h3>
			<p>Being able to pipe in the actual cards to land on a page would be fun</p>
			
			<h2 id="references">References</h2>
			<ol className={css.refList}>
				<li>Ref one</li>
				<li>Ref two</li>
				<li>Ref three</li>
			</ol>				
			</>
		),
		headings: [
			{	
				text: "Introduction",
				ref: "#introduction"
			},
			{	
				text: "Background",
				ref: "#background"
			},
			{	
				text: "Methodology",
				ref: "#methodology"
			},
			{	
				text: "Results",
				ref: "#results"
			},
			{	
				text: "Reflections",
				ref: "#reflections"
			},
			{	
				text: "Future Work",
				ref: "#future"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
	"dnd-ui": {
		id: "dnd-ui",
		nav: "D&D API",
		markup: (
			<>
			<img alt="" id="banner"></img>
			<h1 id="introduction">DnD API</h1>
			<p></p>
			<h2 id="background">Background</h2>
			<h3>The Team (Me)</h3>
			<p></p>
			<h3>The Client (DnD)</h3>
			<p></p>
			<h2 id="back-end">Back-end</h2>
			<h3>Create a Character</h3>
			<p></p>
			<h3>Create a Maze</h3>
			<p></p>
			<h3>Flask</h3>
			<p></p>
			<h2 id="front-end">Front-end</h2>
			<h3>Javascript</h3>
			<p></p>
			<h3>Assets</h3>
			<p></p>
			<h2 id="reflections">Reflections</h2>
			<p></p>
			<h2 id="future">Future Work</h2>
			<p></p>
			<h2 id="references">References</h2>
			</>
			),
		headings: [
			{	
				text: "Introduction",
				ref: "#introduction"
			},
			{	
				text: "Background",
				ref: "#background"
			},
			{	
				text: "Back-end",
				ref: "#back-end"
			},
			{	
				text: "Front-end",
				ref: "#front-end"
			},
			{	
				text: "Reflections",
				ref: "#reflections"
			},
			{	
				text: "Future Work",
				ref: "#future"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
	"ids": {
		id: "ids",
		nav: "Data Sovereignty",
		markup: (
			<>
			<img alt="" id="banner"></img>
			<h1 id="introduction">IDS vs OMD</h1>
			<p></p>

			<h2 id="background">Background</h2>
			<h3>The Project</h3>
			<p></p>

			<h3>IDS</h3>
			<p></p>

			<h3>ODM</h3>
			<p></p>

			<h2 id="tensions">Tensions</h2>
			<h3>About Openness</h3>
			<p></p>

			<h3>About Data</h3>
			<p></p>

			<h2 id="resolutions">Resolutions</h2>
			<h3>IDS</h3>
			<p></p>

			<h3>ODM</h3>
			<p></p>

			<h2 id="reflections">Reflections</h2>
			<p></p>

			<h2 id="future">Future Work</h2>
			<p></p>

			<h2 id="references">References</h2>
			<ol></ol>
			</>
			),
		headings: [
			{	
				text: "Introduction",
				ref: "#introduction"
			},
			{	
				text: "Background",
				ref: "#background"
			},
			{	
				text: "Tensions",
				ref: "#tensions"
			},
			{	
				text: "Resolutions",
				ref: "#resolutions"
			},
			{	
				text: "Reflections",
				ref: "#reflections"
			},
			{	
				text: "Future Work",
				ref: "#future"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
	"nyphil-eval": {
		id: "nyphil-eval",
		nav: "NY Philharmonic",
		markup: (
			<>
			<img id="banner" alt=""></img>
			<h1 id="introduction">NY PHIL</h1>
			<p>The New York Philharmonic is one of the city’s most prestigious institutions, and its archive represents over 180 years of cultural heritage. In 2011, the Philharmonic founded the Shelby White & Leon Levy Digital Archive to undertake the herculean effort of digitising the contents, including thousands of scores, programs, and photographs, and making them publicly accessible. 10 years on, the Digital Archive contains over six million pages of material. The interface, however, remains the same. This project works with users to explore both what makes the Digital Archives interface wonderful, and also to identify ways that it can be improved, as they seek to revitalise the entire site.</p>
			<a className="button" href="https://shiny-mandazi-9bf1d7.netlify.app">Read the Report</a>

			<h2 id="background">Background</h2>
			<h3>The Project</h3>
			<p></p>

			<h3>The Client (NYP)</h3>
			<p></p>
			<p>The team at the New York Philharmonic Digital Archives contacted the Pratt Center for Digital Experiences (Pratt dx) in the fall of 2022. As part of a National Endowment for the Humanities grant, the Digital Archives was to undergo a redesign, and they wanted user testing done to inform where they should best direct their efforts. The project was passed along to our team, a group of graduate students at the Pratt School of Information currently studying Usability Theory and Practice.</p>

			<h2 id="testing">User Testing</h2>	
			<h3>Initial Consultation</h3>
			<p>An initial meeting was set up to discuss its scope and goals. From this meeting, we established the following two ideas.</p>
			<p>The first was that Moderated Remote User Testing would be best suited to their needs. This is a form of lab experiment that involves users as participants, is conducted in a controlled environment, and is actively moderated by a usability expert. This is widely considered the gold standard for user testing research, as it gives the evaluator more control of the test, such as asking follow up questions or directing participants through pain points. It also provides richer information, as evaluators can observe actions and body language and engage in follow up discussion. Although it is a time intensive approach, it is balanced by the quality of the results.</p>
			<p>The second point was that the scope of the project was incredibly broad. While it would all be contained within the Digital Archives interface, there was a want to explore all the features the Digital Archive had to offer. The same was true for their users - although a couple of distinct user groups were identified (see below), the only limiting factor for our participants was that they could access the site. Some key pieces of information were gleaned from the meeting, such as a focus on both accessibility and discoverability of content.</p>		

			<h3>Preparation</h3>
			<p>After our initial meeting with the Digital Archives, the team got to work. We decided the efficient use of our time would be to divide out the initial tasks between us, and reconvene periodically to review each other’s work. While my teammates got to work on creating the communications, surveys, and testing material, I began formulating the user profiles.</p>
			<p>As mentioned, the Digital Archives wanted to test their interface on as broad a user group as possible, meaning that we didn’t need to account for demographics or psychographics. However, in our initial consultation they did state how they wanted it to be intuitive for new users, but powerful enough for established ones. Amateur Alice and Professor Polly were the first two user profiles created, looking to capture those two user groups. A third profile, Explorer Ethan, was was made to cover those that existed between the two groups. However during testing, we determined that the key factor was whether they were experienced with archives, and so the distinction between Ethan and Alice became less relevant.</p>
			<p>After a few rounds of edits on everyone’s material, to get it to a place that we were all satisfied with, we moved on to the next stage of preparation. I paired with the author of the tasks to develop the testing script. We decided on using a reasonably strict script, to ensure minimal variance across evaluators due to confidence, language proficiency, or simply our own natural cadence. However this style of script also required a significant amount more testing and refinement for the tests to go smoothly when read entirely verbatim. We did this by running a series of pilots, initially by ourselves and then with family members, revising and tightening the language at every step. We also touched based with the Digital Archives to ensure we were capturing the data they were looking for, and wound up adding an additional task to our script.</p>
			<p>During this same period, the other two members of our group had been working on recruitment. They had created both the communication templates, as well as the screening questionnaires for participants to express interest. These were circulated initially on the Pratt internal mailing list, and later by members of the Digital Archives team. Once participants had signed up and met our current recruitment needs, they were sent an invite with a link to schedule a testing time.</p>

			<h3>Testing</h3>
			<p>In total 10 moderated user tests were performed, with three matching the “Professor Polly” profile, and seven matching a combination of the others. All team members both moderated and spectated an equal amount. Tests typically took the expected amount of time, approximately 30-45 minutes, with our highly proficient users taking the least amount of time.</p>
			<p>Abridged versions of the tasks are listed below. Initially we had considered modifying the tasks based on which user profile the participant matched, but ultimately decided that we would receive better data noting how novice vs expert users solved the same tasks. Each task also featured two follow ups - “How difficult was this task to complete” and “How successful do you feel you were in completing this task”.</p>
			<p>At the completion of the five tasks, participants were asked to complete a post-test questionnaire based on the System Usability Scale. Users were also asked about their emotional response to the interface, but due to an error in the initial survey this data is incomplete.</p>

			<h3>Analysis</h3>
			<p>after all participants completed testing, the team reconvened to discuss our findings. Our participants had provided us with a wealth of information, and after some initial discussion we decided on using a Rainbow Chart to analyse the information. This involved each of us reviewing our notes and listing any issues the participants encountered, before pulling the list into a single spreadsheet. We then consolidated the items, combining any that were functionally the same and which participants encountered it. </p>
			<p>We used several other tools to help inform our recommendations. The System Usability Scale data from the questionnaires was analysed, for a benchmark score of 60.3/100 ("okay"). Myself and another teammate also sat down with an accessibility domain expert to run an ad-hoc audit on the Digital Archives website, giving us insight into specific accessibility issues that could be remedied.</p>

			<h2 id="recommendations">Recommendations</h2>
			<p>There were a few pages a lot of people visited, and a lot of pages a few people visited. This set out the narrative for our report, targeting the areas that were most commonly visited while also keeping notes on all other potential improvements. In particular, we found users spent the majority of their time on either the main landing page or on the search results page.</p>

			<h3>Homepage</h3>
			<p>The first recommendation involved updates to the homepage. While initially only presented as one recommendation, we soon discovered that the two main areas of improvement, the navigation and the carousel, had little commonality between them. This led to us splitting the recommendation into two seperate items.</p>
			<p>Recommendation 1 focused on the navigation menu, and was mostly intended to be small, actionable items. This included several accessibility minded updates, including increasing colour contrast and adding hover states, and renaming some labels that our participants found confusing - such as changing ‘features’ to ‘exhibits’.</p>
			<p>Recommendation 2 involved the carousel, which the Digital Archives had indicated was an area of interest. Again we opted for simple solutions mainly focused around usability. However compared to the navigation bar, we were surprised when the client requested grander changes on how the carousel could be resigned from scratch. This led to us updating our report to include other examples of carousels and alternate ways of displaying this information.</p>

			<h3>Search Results Page</h3>
			<p>Much like the main landing, it was evident that the findings from the search results page warranted being two seperate recommendations, one about the overall layout, and one specifically targeting the filter modal.</p>
			<p>Recommendation 3 was about making sure the search results page better matched the users' mental model. The most substantive change was to create a consolidated results page, rather than the current version where it is pre-filtered. Several visual changes were made to help create consistency between the different filters, namely grouping all the filters together in a single place, as well as formatting all results in the same style.</p>
			<p>Recommendation 4, the filter modal, was the screen that was displayed when selecting filters. The team was aware this was a problem area, as users were consistently overwhelmed by the sheer volume of filters (sometimes over 200 pages), but didn't know how to best resolve it. Options included changing the pagination to a scroll function, reordering the results, and creating different modals for few vs many results. In the end we decided that the simplest option was to allow users to search through the filters to find the one they were looking for. We also moved this view to the sidebar, to help create the consistency that we mentioned in recommendation 3.</p>

			<h3>Everything Else</h3>
			<p>While I personally was involved in the discussion around the other recommendations, my main task was focused on how to convey the miscellany of other insights we gleaned from our user testing. While many narrative structures were attempted, a tabular format proved to be the most efficient. None of these recommendations alone have much depth nor a mockup. 5 broad categories were created:</p>
			<p>Accessibility: This was something that was important to the Digital Archives per our meetings. We aimed to incorporate as much as possible into our other recommendations, but we wanted to state that these were items that should be updated site wide</p>
			<p>Metadata: With Google being such a feature of modern life, novice users typically ran into roadblocks with stricter search queries. Terms like “ballet” or “image” weren’t indexed, and there was no fallback state for the user.</p>
			<p>User Interface: Some items we described were intentional design choices, this category was for the rest. Object overflows, loading times, etc.</p>
			<p>Links and Labels: Naming things is difficult. This section also gave us the chance to offer further testing opportunities through A/B testing.</p>
			<p>Knowledge organisation: Again, structuring information is a hard problem to solve. This again offered future testing opportunities, for instance a Tree Test</p>

			<h2 id="handoff">Client Handoff</h2>
			<p>After a significant number of revisions, we had our report in hand. The next step was to present it to the client.  We tried to showcase our work in the nicest format, but refining the content of the report took longer than anticipated, leading us to run out of time for slide formatting. However we tried our best to present the intense amount of information in a concise and understandable manner.</p>
			<p>We each presented a section, with myself doing the introductions and methods, followed by a discussion session. Although the sentiment in the room was positive, it was obvious that there was a significant amount of information for the client to digest. One surprise, as mentioned when discussing recommendation 2, was how much interest they had in 'Blue Sky' approaches. As they were actively in the middle of a redesign, the Digital Archives was also interested in larger improvements that could be made to the overall design, in addition to smaller, easy to implement fixes. While we added some items to the appendix of the report, this remains a topic for future work.</p>

			<h2 id="reflections">Reflections</h2>
			<p>I'm eternally thankful to have worked with such an amazing team throughout this project, and wouldn't hesitate to collaborate with them again. I learnt a lot about how to trust the work of others, and knowing when to let them handle the work. Time management was an issue on the project, as even with the best of coordination, working with teammates, participants, and clients all requires a lot of moving parts. But being aware of it, I've learnt how to build in more time for unexpected delays in the future.</p>

			<h2 id="future">Future Work</h2>
			<p>The Digital Archives has walked away with a lot of information, and a report totalling almost 50 pages. But even with that, there's still more testing to be done. A/B testing on the labels, Tree testing the sitemap, and completing an official accessibility audit should all be on their roadmap. Once the changes outlined in our report are implemented, they should themselves be testing to ensure they achieved the desired effect.</p>

			<h2 id="references">References</h2>
			<ol></ol>
			</>
			),
		headings: [
			{	
				text: "Introduction",
				ref: "#introduction"
			},
			{	
				text: "Background",
				ref: "#background"
			},
			{	
				text: "User Testing",
				ref: "#testing"
			},
			{	
				text: "Recommendations",
				ref: "#recommendations"
			},
			{	
				text: "Client Handoff",
				ref: "#handoff"
			},
			{	
				text: "Reflections",
				ref: "#reflections"
			},
			{	
				text: "Future Work",
				ref: "#future"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
	"nyc-parks": {		
		id: "nyc-parks",
		nav: "NYC Parks",
		markup: (
			<>
			<img alt="" id="banner"></img>
			<h1 id="introduction">NYC Parks</h1>
			<p></p>
			<h2 id="background">Background</h2>
			<h3>The Team</h3>
			<p></p>
			<h3>The Client (NYCP)</h3>
			<p></p>
			<h2 id="profiles">Step 1: User Profiles</h2>
			<h3>Methodology</h3>
			<p></p>
			<h3>Results</h3>
			<p></p>
			<h2 id="sitemap">Step 2: Sitemap</h2>
			<h3>Methodology</h3>
			<p></p>
			<h3>Results</h3>
			<p></p>
			<h2 id="wireframes">Step 3: Wireframes</h2>
			<h3>Methodology</h3>
			<p></p>
			<h3>Results</h3>
			<p></p>
			<h2 id="prototype">Step 4: Final Prototype</h2>
			<h3>Methodology</h3>
			<p></p>
			<h3>Results</h3>
			<p></p>
			<h2 id="reflections">Reflections</h2>
			<p></p>
			<h2 id="future">Future Work</h2>
			<p></p>
			<h2 id="references">References</h2>
			</>
			),
		headings: [
			{	
				text: "Introduction",
				ref: "#introduction"
			},
			{	
				text: "Background",
				ref: "#background"
			},
			{	
				text: "Step 1: User Profiles",
				ref: "#profiles"
			},
			{	
				text: "Step 2: Sitemap",
				ref: "#sitemap"
			},
			{	
				text: "Step 3: Wireframes",
				ref: "#wireframes"
			},
			{	
				text: "Step 4: Final Prototype",
				ref: "#prototype"
			},
			{	
				text: "Reflections",
				ref: "#reflections"
			},
			{	
				text: "Future Work",
				ref: "#future"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
}