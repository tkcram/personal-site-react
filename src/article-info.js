import classnames from 'classnames' 
import css from './Study.module.css'

export const articles = { 
	"bird-map":{ 
		id:"bird-map", 
		markup: ( 
			<>
				<img src="https://i0.wp.com/images.fineartamerica.com/images-medium-large-5/bird-watchers-spot-a-bird-wearing-a-thong-mike-twohy.jpg?w=840&amp;ssl=1" className={css.banner} alt="Bird Watchers Spot A Bird Wearing A Thong. Drawing by Mike Twohy"/>
				<h1 className={css.title} id="introduction">Mapping Bird Sightings in New Zealand</h1>
				<p className={css.byline}>Originally published on <a href="https://studentwork.prattsi.org/infovis/visualization/mapping-bird-sightings-in-new-zealand//">Information Visualization</a> on May 10, 2022</p>
				<p>The birds of New Zealand are both beautiful and bountiful. It’s no small wonder then that the country fosters a community centred around their observation and recording. In 2021 alone there were over a million observations logged to the New Zealand Bird ATLAS, one of the largest bird watching databases. Such a wealth of data can be difficult to visualise, which is exactly what this project aims to do.</p>
				<a className="button" href="https://ivs22.netlify.app/" target="_blank" rel="noreferrer">View Project</a>

				<h2 id="background">Background</h2>
				<p>	This project is an extension of previous lab work, <a href="/projects/bird-network">available here</a>, which involved mapping bird observations in New Zealand. The thought was that adding in an animated element would make the data more digestible so the user would be able to get a better view of the trends. It was also hoped that the project could be scaled up to include global data, not only the New Zealand subset. Overall there were three key goals:</p>
				<ol>
					<li>To produce a visualisation that could show all recorded bird observations</li>
					<li>To provide a launching point to further learn about the bird population</li>
					<li>To create something that was visually interesting even beyond the context of the data</li>
				</ol>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-birdmap-tableau.webp" alt=""/>
					<figcaption className={css.caption}>Lab 4 – Bird Sightings in NZ. Available at <a href="https://public.tableau.com/app/profile/tk.cram/viz/BirdSightingsinNewZealand2021/Sheet1">Tableau Public</a></figcaption>
				</figure>

				<h3>An embarrassment of riches</h3>
				<p>As mentioned above, the amount of bird data available is sizeable, with the global dataset measuring ~137GB for decades’ worth of information. Even by limiting the scope to a single country for a single year, the over one million data points would be incomprehensible if mapped directly. During a previous lab, the data was separated into one month increments, and although that did help make it easier to visualise there were still several concerns. For one, users had to switch through the various maps in order to get a feel for how it changed over time, which proved cumbersome. For another, displaying all the points at once put more emphasis on where people were watching birds, rather than where the birds themselves were at any particular moment. For example it was impossible to distinguish observations between multiple unique birds vs. a single bird travelling.</p>
				<p>Some thought was given to aggregating the birds themselves. eBirds provides examples of how this can be done by using density maps to display abundances. The decision was made that, while this is useful when discussing a single bird species, trying to place multiple density maps onto a single visualisation would lower legibility.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/is-ebird-wordpress-prod-s3.s3.amazonaws.com/wp-content/uploads/sites/55/2021/11/barswa-abundance-map-weekly-2021-en-1024.gif?w=840&ssl=1" alt=""/>
					<figcaption className={css.caption}>Abundance animations from <a href="https://ebird.org/science/status-and-trends/abundance-animations">eBird Online</a></figcaption>
				</figure>

				<h3>It’s a bird! It’s a plane! No… it’s definitely a bird</h3>
				<p>	Birds display a wide variety of characteristics. Some birds prefer coastal areas, others mountainous ones. Some prefer to flock together, while others prefer solitude. This project aims to provide insight into some of these characteristics, and give users the ability to learn more about them. Mapping the data over time allows users to explore these characteristics for themselves. They can watch the birds locations change over time, note what types of birds are seen in what locations, and examine how large a flock of birds may be. Resources were also to be provided should the user wish to gain more information.</p>
				<p>	Inspiration came from the density maps seen above that show migratory patterns. Maps of shipping routes were also drawn upon, as they allow the user to explore characteristics such as ports, coast lines, and canals in a similar way.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-birdmap-shipping.webp" alt=""/>
					<figcaption className={css.caption}>Global shipping routes from <a href="https://www.shipmap.org/">https://www.shipmap.org</a></figcaption>
				</figure>

				<h3>Birdy night</h3>
				<p>	Although the primary demographic of the project was people who already had an interest in ornithology, it was also designed to be visually interesting beyond the context of the data. The idea was for there to be a sense of wonderment as the data moved in front of them, akin to stars twinkling in the sky. The hope is that if the visualisation can draw in a user in who might not otherwise be interested, then it might inspire them to learn.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/c.tenor.com/0WtO3Sy6mtEAAAAM/aesthetic-stars.gif?w=840&ssl=1" alt=""/>
				</figure>

				<h2 id="methodology">Methodology</h2>
				<h3>Data</h3>
				<p>	The data used for this project comes from Cornell Ornithology Lab’s eBird project. It consists of bird sighting data uploaded by hobbyist, academics, and government works alike. It contains a wide array of fields, ranging from time and coordinates of the observation, to observed behaviours and available media.</p>
				<p>	The dataset was then processed by a custom script written in Python (available on <a href="https://github.com/tkcram/ivs22">github</a>) which did several things:</p>
				<ul>
					<li>Limited the information contained in each entry to a select few rows</li>
					<li>Converted each observation time to UTC (this functionality was later removed)</li>
					<li>Associated each observation species with it’s order (taxonomical data found <a href="https://ebird.org/science/use-ebird-data/the-ebird-taxonomy">here</a>)</li>
					<li>Associated each observation with the date/hour it took place, allowing the data to be read in sequence. Transformed the information into JSON</li>
					<li>In addition to making the data more directly readable, it also reduced the total file size by about 50%</li>
				</ul>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figTriple)}>
						<img className={css.figureObject} src="/images/article-birdmap-python-1.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-birdmap-python-2.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-birdmap-python-3.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>Input, processing, and output of the data manipulation</figcaption>
				</figure>

				<h3>D3</h3>
				<p>	The next step was to represent the data visually, for which the <a href="https://d3js.org/">D3.js</a> framework was used. This allowed the project to be animated programmatically, as well as uploaded to the web for users to interact with. Fortunately a <a href="https://techblog.assignar.com/plotting-data-points-on-interactive-map-visualisation-using-d3js/">tutorial</a> was available that demonstrated how to plot points on a map. A map of New Zealand was downloaded from <a href="https://geojson-maps.ash.ms/">GEOJSON</a>, and a working prototype was created.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/techblog.assignar.com/assets/images/interactive_map-9d99c22b45cac441e6ad02db008ee0cb.webp?w=840&ssl=1" alt=""/>
					<figcaption className={css.caption}>Plotting point […] by <a href="https://techblog.assignar.com/plotting-data-points-on-interactive-map-visualisation-using-d3js/">Nikita Sharman</a></figcaption>
				</figure>
				<p>	The key functionality that was added beyond the tutorial was to read the data sequentially to allow the points to appear in time. This was done by nesting the svg generation inside of a for loop with a delay. With the data ordered hour by hour, a 1000ms delay on the loop would cause the data to show one hour every second. Initially all the points of that hour appeared at once, which lead to a strange pulsing effect. Instead each point was given a delay based on the minute of the observation, and a duration set to match the length of the observation.</p>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figDouble)}>
						<img className={css.figureObject} src="/images/article-birdmap-d3-1.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-birdmap-d3-2.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>Code snippet for animating the points on a map</figcaption>
				</figure>

				<h3>Interface</h3>
				<p>	With the map and the points now working, additional features were added to the interface. A clock was placed at the top of the screen to give the user feedback on where they were in the data, and play/pause/fast forward buttons were added to give the user additional control. It is worth nothing that the pause functionality has some odd behaviour, including latency and different speed settings, due to D3 working with CSS transitions rather than CSS animations.</p>
				<p>	An advanced controls module was also added, which allowed the user to filter what birds appeared by their order. Given that there are some 40 different orders, it seemed futile to give each one a unique and meaningful colour, so instead users were given the option to colour the orders as they saw fit. A colour shuffle button was also added if specific colouring wasn’t important. The controls also include a link to an external resource for more information about each of the orders.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-birdmap-interface.webp" alt=""/>
					<figcaption className={css.caption}>Final project interface</figcaption>
				</figure>

				<h3>UX</h3>
				<p>	Once the basic functionality and layout was implemented several bird enthusiasts were contacted to participate in user experience (UX) testing, with two selected to participate. The testing consisted of a 30 minute zoom call in which participants were sent a live build of the project, and was roughly divided into three main parts. First, they were asked to share their screen and interact with the project naturally, with minimal interruption from the researcher. Secondly the researcher asked participants to perform a variety of predetermined tasks to test various functions/flows. Lastly, the researcher asked participants to set aside the project and posed questions around what they had just seen. Participants were also invited to provide general feedback. Each session was recorded with the participants’ permission, and the results summarised below.</p>
				<ul>
					<li>Upon landing on the page participants varied on whether they began the animation before exploring. In both cases, received positive reactions when they started the animation.</li>
					<li>Participants were eager to click around the project, but were disappointed by the lack of interaction. Both suggested being able to click on points to see more information and being able to move the map.</li>
					<ul>
						<li>Tooltips have been added when the user hovers over the point, and clicking now takes you to a species specific webpage.</li>
						<li>An interactive map would be future work.</li>
					</ul>
					<li>Participant 1 found the colour contrast too low. This was changed for participant 2, who quite admired the colours.</li>
					<li>Both participants noted a lack of familiarity with New Zealand, and wondered if more detail would help. Suggestions included topographical details, information on food/nesting sources, and points of interest such as sanctuaries or parks. Participant 2 noted that this would be less of an issue if they were looking at their home territory.</li>
					<ul>
						<li>Topographic features were investigated but were deemed to be too noisy with the point overlay</li>
						<li>Points of interest has been left to future work</li>
					</ul>
					<li>Facets were generally understood by participants, with placement being the most obvious, followed by colour and size, and time ranking the lowest.</li>
					<li>Participants generally overestimated the scale of time in the animation, estimating it at about 1 day/second (vs. the actual 1 hour/second) at the lowest speed. This led to one participant being uncertain as to why the density of points would drop dramatically, which was due to the day night cycle.</li>
					<ul>
						<li>The clock has since been made more overt. Consideration was given to using day/night colour schemes to exaggerate the point, but was shelved due to time constraints.</li>
					</ul>
					<li>Participants tended towards the highest speed setting. In part this was due to wanting to see if trends were noticeable, but also due to a lack of feedback from the filtering controls. The highest speed allowed them to see their changes quickest.</li>
					<ul>
						<li>The speeds have been adjusted, with the much higher top speed to help see those macro level trends</li>
						<li>Feedback is still an issue.</li>
					</ul>
					<li>One participant reached the end of the data and had to refresh the page.</li>
					<ul>
						<li>This has since been fixed so a refresh is no longer necessary.</li>
					</ul>
					<li>Participants generally had no issue accessing and using the advanced/filtering controls The use of scientific names was confusing, and participants quickly looked for a way to switch to common names.</li>
					<ul>
						<li>Common names are now the default</li>
					</ul>
					<li>There was some confusion as the context of the visualisation, as the legend contained global information such as a complete taxonomy and links to general resources while only showing a New Zealand map.</li>
					<ul>
						<li>The decision was made to focus only on the New Zealand context. Non-New Zealand bird orders have been removed and all data now points to <a href="https://nzbirdsonline.org.nz/">NZbirdsonline</a></li>
					</ul>
					<li>Participants wanted to be able to stay on the page while also viewing information about the birds. Participants were able to filter birds without issue, but wanted more ways to sort them such as alphabetical by scientific vs common name, number of species, frequency in data etc.</li>
					<li>There was uncertainty about what specifically the colour shuffle button did, but was obvious when they clicked it. This function was preferred over selecting their own unique colours for the legend. There was some uncertainty as to how to reset the colours to a single one.</li>
					<ul>
						<li>Need to make the “all orders” more obvious</li>
					</ul>
					<li>Participants wanted more information in the ‘about’ section, including mission statement and information about the data source</li><ul>
						<li>This has since been added</li>
					</ul>
				</ul>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-birdmap-zoom.webp" alt=""/>
					<figcaption className={css.caption}>A UX Interview over zoom</figcaption>
				</figure>
				<p>	Overall, participants enjoyed the visualisation. The layout was well received and the controls were generally intuitive. The initial impact of the birds appearing on the screen was one of the key goals for the project and seems to have been achieved. The biggest surprise was the participants want for additional information, as the initial design was intentionally minimal in order to avoid overwhelming the user. However, this didn’t seem to be a concern as the participants were able to control how much data they were being presented with at any given time. The overall design also shifted from a proof-of-concept for a world map to committing to only New Zealand, which while allowing for more specific data about the avian population, requires additional context for those not from the region.</p>

				<h2 id="reflections"> Reflections</h2>
				<p>	One of the primary goals for the project was to give people a moment of awe as the visualisation began to play, and in that it was a success. Even without knowing the nature of the data the visual itself proved to be mesmerising. When digging deeper, both the facets of the individual points and flow of the controls are intuitive enough to require minimal explanation. The project also provided valuable experience working with D3, and allowed for a significant mass of data to be well put together. With the addition of tooltips and links to resources this is a fascinating exploration of all the birds that New Zealand has to offer.</p>
				<p>	Although everything worked as intended when building the New Zealand portion of the project, it didn’t scale successfully. When including the Australian birds, which increased the amount of data sixfold, performance took a major hit. There are several ways around this problem, such as pre-rendering the layers that display or transforming the entire project into a pre-rendered animation, it was clear that the original vision would not work as intended. Thankfully the UX testing demonstrated that a narrower focus on just New Zealand would be a viable project worth pursuing.</p>
				<p>	That same UX testing showed that there is plenty of room for the project to grow in the future. Specifically, that both the interactivity and the data density of the project could be increased. For the former, this would involve building the project on a map that could be zoomed/panned, increasing the amount of filtering options, and creating additional modules to display information. As for the latter, it would involve the collection of other data sources to display the information on the visualisation itself, such as via an API, rather than linking out to other websites. There’s also a litany of smaller features that would benefit from additional testing, such as the speed of the animations and the information architecture of the tooltips.</p>
			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Background",
				ref: "#background" 
			},
			{	text: "Methodology",
				ref: "#methodology" 
			},
			{	text: "Reflections",
				ref: "#reflections"
			},
		] 
	},

	"bird-network":{ 
		id:"bird-network", 
		markup: ( 
			<>
				<img src="/images/article-network-banner.webp" className={css.banner} alt="Birds of New Zealand by Emma Kate"/>
				<h1 className={css.title} id="introduction">Birds of a Feather Network Together</h1>
				<p className={css.byline}>Originally published on <a href="https://studentwork.prattsi.org/infovis/visualization/birds-of-a-feather-are-connected-together/">Information Visualization</a> on April 7, 2022</p>
				<p>New Zealand boasts an amazing array of avians, be it the Kiwi as it’s national icon, the beautiful songbird that is the Tui, or the cheeky parrot the Kea. That is why it is of great concern that approximately 74% of the 168 extant species are threatened or endangered. A significant contributing factor to this is habitat change due to the ongoing effects of climate change, including the degradation of food sources. As with anything in nature nothing exists in a vacuum, and this report seeks to examine how different species are connected by the food they eat, and perhaps contribute to the effort to save the birds. [<a href="https://www.nzherald.co.nz/nz/why-nzs-native-birds-are-closer-to-extinction-than-40-years-ago/TXF6RKUF2NTVSOSZ34INI2VVSA/">1</a>][<a href="https://www.stats.govt.nz/indicators/conservation-status-of-indigenous-land-species">2</a>][<a href="https://www.sciencedirect.com/science/article/abs/pii/S0006320720307886#!">3</a>]</p>

				<h2 id="data">Data</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/besjournals.onlinelibrary.wiley.com/cms/asset/1317874c-9c70-41e3-ab9a-8ebcaf0c37db/fec12773-fig-0002-m.jpg" alt=""/>
					<figcaption className={css.caption}>Wood et al. “Interaction network for native bird (top) and plant (bottom) families, South Island, New Zealand</figcaption>
				</figure>
				<p><a href="https://catalogue.data.govt.nz/dataset/bird-plant-interactions">The data</a> was sourced from data.govt.nz, created by <a href="https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2435.12773">Wood et al.</a> to study the relationship between birds (including several extinct species) and the plants they consume. The dataset contains a list of 34 bird species (and family) found in New Zealand’s South Island, along with each plant species (and family) they consume. This data was imported into Excel and three subsets were created (1) listed plants by species (2) listed plants by family and (3) listed plants by family with duplicate plant/bird pairs removed.</p>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figDouble)}>
						<img className={css.figureObject} src="/images/article-network-data.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-python.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>Raw Data (left) Python code snippet to used to transform the dataset (Right)</figcaption>
				</figure>
				<p>Each was then transformed using a custom python script to transform the data from “bird-plant” to “bird-plant-bird”, and then count each distinct bird pairing. The script exported two CSV files, one containing each unique bird to serve as the vertices, the other containing weighted bird pairs to serve as our edges, both with header rows that could be recognised by Gephi. Lastly, common names were added to the list of vertices for ease of labelling.</p>

				<h2 id="create">Creating the Network</h2>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figTriple)}>
						<img className={css.figureObject} src="/images/article-network-test-species.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-test-family.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-test-family-reduced.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>Bird network data for the three datasets (Species, Family, Family (No duplicates)) displayed using Fruchterman Reingold layout, coloured by modularity.</figcaption>
				</figure>
				<p>Once each of the three subsets of the data had been transformed, they were then imported into Gephi to transformed into network diagrams. Several statistics were also generated for each graph, including degree, density, and modularity (seen above as a colour facet), and each graph was set to a Fruchterman Reingold layout for comparison. Given all of the above, it was decided that the plant species subset would be the sole focus of future efforts as it created the richest data and network.</p>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figTriple)}>
						<img className={css.figureObject} src="/images/article-network-layout-ord.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-layout-atlas.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-layout-yifan.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>Alternate layouts: Open Ord, Force Atlas 2, Yifan Hu</figcaption>
				</figure>
				<p>Other experimentation was done in Gephi. This included alternate layouts (see below), different resolution for the modularity, and colouring different aspects. Ultimately, however, the initial build seemed to offer the best insight into the network.</p>
				<figure className={css.figure}>
					<div className={classnames(css.figMulti, css.figDouble)}>
						<img className={css.figureObject} src="/images/article-network-example-drozd.webp" alt=""/>
						<img className={css.figureObject} src="/images/article-network-example-gooden.webp" alt=""/>
					</div>
					<figcaption className={css.caption}>(Left) Exploring the Dynamic Network of Harry Potter Characters by <a href="https://studentwork.prattsi.org/infovis/author/jdrozd25/">Jessica Drozd</a></figcaption>
					<figcaption className={css.caption}>(Right) Networking the New York Times Bestseller List by <a href="https://studentwork.prattsi.org/infovis/author/lgooden/">Lillian Gooden</a></figcaption>
				</figure>
				<p>Lastly was the process of building the network out into something exportable. Following the example of several peers, a dark background was chosen to allow the colours of the edges to be more readily apparent. A white text with black border was chosen for readability, and vertices were given a black border to help them stand out from the edges. The final image was then exported.</p>

				<h2 id="results">Results</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-network-result.webp" alt=""/>
					<figcaption className={css.caption}>Final Output</figcaption>
				</figure>
				<p>Poor Blue Duck is out on their lonesome as they consume only a single food source and it’s unique to them. This could likely be explained by incomplete data, and an educated guess would put them in the Blue modularity class, which also contains the Black Duck and Black Swan. Although that same class also contains the Brown Kiwi and two species of now extinct <a href="https://en.wikipedia.org/wiki/Moa">Moa</a> so the exact definition is uncertain. Our other four classes are comprised of smaller birds such as Robins and Pippits (Yellow) that prey mostly on berries, omnivorous small birds such as the Fantail (Green), Medium sized birds such as the Kereru and Kokako (Red), and two parrots and a swamp hen which seem to eat pretty much anything (Pink).</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-network-vertex.webp" alt=""/>
					<figcaption className={css.caption}>Vertex Data</figcaption>
				</figure>
				<p>A key limitation of the data is that it is limited only to plant based food sources. Many birds within New Zealand consume bugs, and some (such as the falcon) consume other birds or fish. This additional information would likely delineate the Blue group. It would also be worth exploring the effect range and population has on the weighting of the nodes, as birds such as Tui or Kereru are significantly more populous than the Kiwi. One final factor might be due to the size of the country as a whole, allowing for much more homogeneity amongst the bird population.</p>

				<h2 id="discussion">Discussion</h2>
				<p>Let’s first turn our attention to the Moa in the room: the connectedness of this graph. The graph has a density of 55% which is decidedly high. It also had a diameter of 3 and average degree of 18.2, meaning that it wasn’t only a few central vertices pulling them together. Even when trying other layouts the problem would shift rather than be solved. For instance a Force Atlas layout better spacing of the vertices, but lowered visual acuity of the edges (and also required significantly more user input to achieve something legible). Additional research, and possibly additional data, may be required.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-network-final.webp" alt=""/>
				</figure>
				<p>Some time was spent outside of Gephi attempting to format the diagram and provide additional context, but in the end it didn’t seem to add anything of value. If this lab were to be started again from scratch, a different, less connected dataset would be chosen. Perhaps instead a family tree. However, I’m still satisfied with the overall methodology.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/www.researchgate.net/profile/Corey-Callaghan/publication/330363427/figure/fig3/AS:902973089673217@1592296969257/Reproduced-phylogenetic-tree-Jetz-et-al-2012-of-our-477-species-Supplementary.png?resize=589%2C577&ssl=1" alt=""/>
					<figcaption className={css.caption}>Reproduced phylogenetic tree by <a href="https://www.researchgate.net/figure/profile/Corey-Callaghan">Corey T. Callaghan</a></figcaption>
				</figure>
				<p>Update: Post class discussion, the following insights have been made: Force Atlas is perhaps a better view for this particular network, and part of the difficulty in rendering it previously was due to the unconnected vertex being flung far from the main network. Due to the relative density of the network, opting instead for an interactive approach may be preferable, allowing users to explore the data and highlight specific nodes and edges for easier viewing.</p>
			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Data",
				ref: "#data" 
			},
			{	text: "Creating the Network",
				ref: "#create" 
			},
			{	text: "Results",
				ref: "#results"
			},
			{	text: "Discussion",
				ref: "#discussion"
			},
		] 
	},

	"bnz-eval":{ 		
		id:"bnz-eval", 
		markup: ( 
			<>
				<img src="/images/article-bnz-banner.png" className={css.banner} alt=""/>
				<h1 className={css.title} id="introduction">Design Critique: BNZ (IPhone App)</h1>
				<p className={css.byline}>Originally published on <a href="http://ixd.prattsi.org/2022/09/design-critique-bnz-iphone-app/">IXD@Pratt</a> on Septermber 13, 2022</p>
				<p>For over 150 years, Bank of New Zealand has served its customer’s wide variety of fiscal needs. In the modern age, this includes being available to customers as a digital/mobile experience. Their online banking app, available on the iPhone and currently in version 15.1.0, is the focus of this critique.</p>
				<p>The following assumes that user has already established themselves both with the bank, and on the app.</p>
				
				<h2 id="login">Log-in screen</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-bnz-login.jpg" alt=""/>
				</figure>
				<p>Upon loading the app, the user is presented with a heavily constrained login screen. The majority is taken up by a number pad, which presents familiar signifiers to both the physical (an ATM) and digital (a phones lock screen) worlds.</p>
				<p>As the user inputs their passcode, the circles become filled, providing feedback. The code is automatically attempted once the correct number of characters has been input, and provides further input depending on whether the code was correct (proceeding to another screen) or incorrect (screen shake and the circles become unfilled).</p>
				<p>A button titled “forget?” Is presented within the numberpad, which sends the user on the flow to reset their passcode. It relies on the its proximity to the number pad, and cultural knowledge of similar flows, to signify what it affords.</p>
				<p>Two additional buttons, located at the top of the screen, allow the user to locate and contact the bank, respectively. Although these can be intuited based on cultural knowledge, being purely symbolic leads to ambiguity. For instance the left marker might attempt to locate you via GPS, while the right may initiate a phone call. Additional text beneath the icons, reading ‘locations’ and ‘contact’ for example, might help alleviate this issue.</p>
			
				<h2 id="landing">Landing Screen</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-bnz-landing.png" alt=""/>
				</figure>
				<p>Once the user has logged in, the main landing presents a minimal amount of information. Perhaps user testing has revealed the primary activity on the app is reviewing the users accounts, which are presented with a brief summary (name and amounts). This layout is also to a iconographic interface found on an iPhone, signifying that the icons afford interaction. The users mental model would suggest that this would present additional information about the account.</p>
				<p>Like the app overall, actions are highly constrained. Other signifiers include a quick link to transfer money, a hamburger style icon signifying additional menu items, a bell with an alert icon signifying notifications, and an ellipsis signifying more options. Much like the symbols on the login page, these latter three are familiar to those who have experience with other digital apps. All links immediately bring up either a modal or another screen, giving the user feedback. It is also possible that a new user may be presented with a tutorial flow, demonstrating what the icons signify. This would allow the app to forgo text with the icons, but was unable to be tested at this point.</p>

				<h2 id="landing">Activity Screen</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-bnz-activity.jpg" alt=""/>
				</figure>
				<p>Another signifier on the landing page, the blue line beneath “accounts”, suggest that it is the tab the user is currently on. This also signifies that “activity” affords interaction. Some confusion might arise in the users mental model at this point, as “activity” and “notifications” are sometimes used interchangeably. But if the user sees the bell as representing notifications, it becomes unclear what “activity” might represent. Much like the icons, effective labelling is a difficult task. Alternative terms may be used, such as “your activity” and “recent notifications”.</p>
				<p>Once the user switches to the “activity” tab, they are presented with 2.5 items (the third being cut off suggests that the user is able to scroll down for additional items). Even at this point the uncertainty may persist, as the brevity of the descriptions presents little knowledge in the world that the user can utilise. Perhaps they’re articles on managing your money, or tips on how to track spending. In reality, each leads to a small dashboard with information about the users spending habits. The app however does a good job of immediately showing the user what exists on each page, and allowing them to quickly step back, meaning that a trial and error approach to investigating content has minimal pain points.</p>
			
				<h2 id="hamburger">Hamburger Menu</h2>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-bnz-menu.png" alt=""/>
				</figure>
				<p>Those are the obviously afforded options available to the user from the home screen, but it theory a bank offers many more. This leads to a discoverability problem. The application enabled a streamlined experience by obfuscating many of its features. These features are hidden in the menu accessed by the hamburger symbol, which assumes a certain amount of digital literacy.</p>
				<p>However once the menu is accessed, the discoverability concerns abate. Each menu item contains both a symbolic representation as well as a label. This includes card management, transferring funds internally and externally, and providing statements. While this critique won’t dive into them all, they each follow the highly constrained design philosophy seen throughout the rest of the app. Although, in rare instances, they instead open a browser window pointing to the much more comprehensive web portal.</p>
			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Log-in Screen",
				ref: "#login" 
			},
			{	text: "Landing Screen",
				ref: "#landing" 
			},
			{	text: "Activity Screen",
				ref: "#activity"
			},
			{	text: "Hamburger Menu",
				ref: "#hamburger"
			},
		] 
	},

	"colour-history":{ 
		id:"colour-history", 
		markup: ( 
			<>
				<img src="/images/article-timeline-banner.webp" className={css.banner} alt="Mayer’s colour triangle"/>
				<h1 className={css.title} id="introduction">A (Very Brief) History of Modern Colour Models</h1>
				<p className={css.byline}>Originally published on <a href="https://studentwork.prattsi.org/infovis/labs/a-brief-history-of-modern-colour-models/">Information Visualization</a> on February 3, 2022</p>
				<p>Ever since Grecian times philosophers such as Aristotle have pondered the nature of colour. Many have followed in their footsteps, from Ibn al-Haytham to Leonardo da Vinci. However in 1704 our conceptualisation of colour shifted dramatically with Newton’s “Opticks” and their revolutionary colour wheel. This shift inspired many to see if a model could be created to account for all the colours a human could perceive. In the 300 years since, this model has taken many shapes, and been used to explain many phenomena from the physical to the emotional, and even the spiritual. This timeline serves as an overview of a handful of the most significant developments in that time, and as a launching point into one of the world’s most colourful histories.</p>			
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-timeline-result.png" alt=""/>
					<figcaption className={css.caption}>To view the timeline, click <a href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=10IEKECW-7KBUyKdeAOsn2Y5Yqr9VJdEiPw2q3NabjoQ&font=Default&lang=en&initial_zoom=2&height=650">here</a>.</figcaption>
				</figure>

				<h2 id="methods">Methods</h2>
				<p>For this project a timeline was constructed using TimelineJS, which allowed for automatic generation of the graphic from a Google Sheets template. The dataset for the project was created by hand based on readings around colour theory. These readings include <a href="https://library.si.edu/exhibition/color-in-a-new-light/science">The Smithsonian</a>, <a href="https://programmingdesignsystems.com/color/a-short-history-of-color-theory/#fn6">Programming Design Systems</a>, <a href="https://en.wikipedia.org/wiki/Color_theory">Wikipedia</a>, and <a href="https://pigment-pool.com/the-history-of-color-theory-must-know-facts-for-creatives/#_ftn26">Pigment Pool</a>. A list of possible entries was compiled and then shortlisted down to ten, based on criteria such as contribution to the field, historic impact, and creating an overarching narrative. Once the shortlist was completed, it was entered into the TimelineJS template, along with an appropriate image and a brief blurb as to it’s relevance. Lastly, aesthetic decisions were made as to the timeline itself, including fonts and colours, in order to create a more appealing visual.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-timeline-data.png" alt=""/>
					<figcaption className={css.caption}>To view the raw data, click. <a href="https://docs.google.com/spreadsheets/d/10IEKECW-7KBUyKdeAOsn2Y5Yqr9VJdEiPw2q3NabjoQ/edit#gid=0">here</a>.</figcaption>
				</figure>

				<h2 id="discussion">Discussion</h2>
				<p>Attempting to distill a topic as large as colour theory down to a few key moments is no small feat, so several decisions were made to help limit the scope of the project. Firstly, Newton was chosen as the starting point for the timeline, which informed the focus on the colour wheel/model itself rather than colour theory as a whole. Secondly, the list was created using singular publications, as condensing someone’s life work to a single slide seemed disingenuous, and also allowed for posthumous works. Lastly, some consideration was given to the distance in time between each item in order to better tell a continuous story, although several large gaps still appear.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/images-na.ssl-images-amazon.com/images/I/41-Qiyia9IL._SY485_BO1,204,203,200_.jpg?w=840&ssl=1" alt=""/>
					<figcaption className={css.caption}>The Art of Color by Johannes Itten.</figcaption>
				</figure>
				<p>In some cases the choice of image to accompany each slide was obvious, such as Newton or Goethe. However for others it was less so. The depiction of Munsell’s colour model comes from a much later edition than was initially published, but better articulates the point they were trying to make. Albers was a prolific artist, so while their colour triangle may not be their most prominent work, it better fits the theme of the timeline.</p>
				<p>For the timeline itself the decision was made to stick largely to the default aesthetic. Early drafts had a much more colourful layout to match the theme, but as images were being inserted it became increasingly noisy. TimelineJS also automatically changes the font colour when changing the background which limited the options i.e. grey backgrounds with white text decreased legibility.</p>

				<h2 id="reflections">Reflections</h2>
				<p>While this is a fascinating topic, the breadth of it combined with the practical limitations (e.g. time and space constraints) left the project trying to strike a difficult balance of brevity and accuracy. While the project was able to present a brief overview on the topic, the majority of information collected was not included in the final version. This is only amplified by the authors inexperience with the topic at hand, meaning more time needed to be dedicated to sourcing information. Being able to dedicate more time to the project to better understand and explain the topic, including diving into the primary sources, would be a boon.</p>
				<p>TimelineJS is a wonderful tool hindered by two key factors. The first is that what it gains in ease of use it loses in functionality. Often times changing a single thing, such as background colour, would trigger unintended consequences. Some custom CSS was injected, such as for line breaks, to help alleviate the issue. The second is that due to it’s online nature latency can become an issue. Often times changes would be made but would take a noticeable amount of time to appear, leading to some frustrations.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="https://i0.wp.com/www.colorsystem.com/wp-content/uploads/17che/01che.jpg?w=840&ssl=1" alt=""/>
					<figcaption className={css.caption}>The Art of Color by Johannes Itten.</figcaption>
				</figure>

			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Methods",
				ref: "#methods" 
			},
			{	text: "Discussion",
				ref: "#discussion" 
			},
			{	text: "Reflections",
				ref: "#reflections"
			},
		] 
	},

	"food-eval":{ 		
		id:"food-eval", 
		markup: ( 
			<>
				<img src="/images/article-food-banner.png" className={css.banner} alt=""/>
				<h1 className={css.title}>FoodNetwork.com: Heuristic Evaluation Report</h1>
				{/*<p className={css.byline}>Originally published on <a href="http://ixd.prattsi.org/2022/09/design-critique-bnz-iphone-app/">IXD@Pratt</a> on Septermber 13, 2022</p>*/}
				
				<h2 id="summary">Summary</h2>
				<p>The Food Network website, foodnetwork.com, is the second most highly trafficked cooking website on the internet. Boasting thousands of recipes from hundreds of chefs, it provides an invaluable resource to cooks around the world. However, this wellspring of information can make finding exactly what you’re looking for a difficult task. What’s more, a recipe is only good if you’re able to use it. This evaluation is aimed at improving what is already a wonderful reason.</p>
				<p>The heuristic evaluation was undertaken by following a loosely guided user flow. Specifically, the three evaluators were tasked with landing on the foodnetwork.com homepage, navigating to Alton Brown’s “The Chewy” cookie, reviewing the ingredients they had available to them, and substitution/purchasing those that they did not. Along their journey, evaluators noted anything that violated Neilsen’s “Ten Usability Heuristics”. Notes from all three evaluators were then compiled, consulted, and analysed, and the following key recommendations were extracted:</p>
				<ol>
					<li><p>Allow users to directly link to the list of chefs from the Navigation bar </p></li>
					<li><p>Improve the users ability to make ingredient substitutions</p></li>
					<li><p>Better integrate the “Buy ingredients online” widget onto the page</p></li>
				</ol>
				<p>What follows in this report is a breakdown of how the problem areas were identified, details on the specific issues, as well as proposals and mock-ups for potential solutions.				</p>
				
				<h2 id="introduction">Introduction</h2>
				<p>The Food Network website, foodnetwork.com, is the second most highly trafficked cooking website on the internet. Boasting thousands of recipes from hundreds of chefs, it provides an invaluable resource to cooks around the world. However, this wellspring of information can make finding exactly what you’re looking for a difficult task. What’s more, a recipe is only good if you’re able to use it. This evaluation is aimed at improving what is already a wonderful reason.</p>

				<h2 id="methodology">Methodology</h2>
				<h3>Heuristic Evaluation</h3>
				<p>In order to identify areas for improvement on the FoodNetwork.com website, a heuristic evaluation was undertaken. This is a type of usability inspection method wherein a small group of experts examine the interface while consulting a list of ‘heuristics’, or rules of thumb, of good interface design. Specifically, this test uses Jakob’s Ten Heuristics for User Interface (See appendix), a widely used set of heuristics designed specifically for this type of testing.</p>
				<p>By using a formal list of heuristics, evaluators are able to quickly and easily identify problem areas, as well as consolidate their notes. This method also requires a small number of expert evaluators, typically 3-5, allowing the testing to be done quickly and at minimal cost. One drawback of this method however is that while the heuristics are broad, they are not all encompassing, and some issues may be missed due to poor or no matching.</p>

				<h3>Tasks</h3>
				<p>Three evaluators were given three tasks to complete on the FoodNetwork.com website. As tasks were completed, evaluators took note of any violations of as well as their severity, with 1 being inconvenient, and 4 being severe. Tasks were completed with no restrictions other restrictions such as time or number of clicks:</p>
				<figure className={css.figure}>
					<p>You're hungry and have decided that the only thing that can fill you up is freshly baked cookies, and you know exactly the recipe: The Chewy by Alton Brown. You saw him make it on his show and now is the time to try it yourself. Go to foodnetwork.com and, without using the search functionality, try to accomplish the following</p>
					<ol>
						<li><p>Navigate to Alton Brown's chef page</p></li>
						<li><p>Navigate to The Chewy recipe (Hint: it's his second highest rated recipe)</p></li>
						<li><p>How much is it going to cost to get all the ingredients?</p></li>
						<li><p>Wait, you have a dairy allergy. What can we substitute for the Milk and Butter? How much? 5) (Optional) Make the cookies</p></li>
					</ol>
				</figure>

				<h3>Analysis</h3>
				<p>After all three evaluators had completed their testing, their notes on heuristic violations and severity were submitted to the lead researcher. The notes were then consolidated into a single table (see appendix) where problem areas were grouped, and their overall severity was determined by inspection. Once potential areas for improvement were identified, domain knowledge was used to create a series of three recommendations. These recommendations suggest ways in which the interface can be changed in order to no longer violate the heuristics identified in testing.</p>

				<h2 id="insights">Insights & Recommendations</h2>
				<h3>1. Differentiate between hubs and “see all” in the navigation bar</h3>
				<h4>The Issue:</h4>
				<p>Within the navigation bar, the “See all x” within the dropdown menu categories currently links to the hub page for the category. For example, “See all chefs” directs the user to the “Chefs and Hosts” page. This is not what the user may expect, and requires users to recall specific user flows rather than recognise them, a violation of heuristic 6. Additionally, the links to the true “See all” pages are often buried towards the bottom of the hub pages, and written in a small, low contrast font. This can be problematic for both the same reason as the previous issue (heuristic 6), but also becomes an aesthetic issue (heuristic 8)</p>
				<h4>Quick Fix:</h4>
				<p>Create an additional button within the dropdown linking to the hub pages, and link the “See all x” to the associated page (see figures below).</p>
				<h4>Long term:</h4>
				<p>A reorganisation of the hub pages should be considered. There is a high amount of overlap between “Chefs” and “Shows” in the top half of the pages, that might better serve as standalone content, and redesigning the pages with more specific content.</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-food-1a.png" alt=""/>
					<figcaption className={css.caption}>Current Navigation Dropdown. “See all chefs” button (1a) doesn’t lead to expected result.</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-food-1b.png" alt=""/>
					<figcaption className={css.caption}>Proposed Navigation Dropdown. Added a “chef’s homepage” button (1b). “See all chefs” skips to chef index.</figcaption>
				</figure>

				<h3>2. Restyle the “Ingredient Substitution” flow</h3>
				<h4>The Issue:</h4>
				<p>The current “Ingredient Substitutions” button links to a generic page about what substitutions can be made. However given that it’s linked to from a specific recipe, and that it is in the style as the “Add to shopping list” button, this doesn’t meet user expectations of knowing what/how much to substitute in the recipe. This is a violation of heuristic 6 (recognition rather than recall), and can also lead users into an error state, a violation of heuristic 5.</p>
				<h4>Quick Fix:</h4>
				<p>Restyle the button so that it is less similar to the “Add to shopping list” button. Rewrite the body test of the ingredient substitution guide to ensure all items are presented uniformly.</p>
				<h4>Long term:</h4>
				<p>It may be worth implementing an ingredient substitution calculator. Such a thing could load in recipes or custom ingredients, and allow direct conversions of the ingredients, and export the new recipe.</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-food-2a.png" alt=""/>
					<figcaption className={css.caption}>Current Substitutions Button. “Ingredient Substitutions” (2a) is identical to other buttons, suggesting identical function</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-food-2b.png" alt=""/>
					<figcaption className={css.caption}>Proposed Substitutions Button. “Ingredient Substitutions” (2b) is not distinguished from other buttons Current Substitutions Button. “Ingredient Substitutions” (2a) is identical to other buttons, suggesting identical function</figcaption>
				</figure>

				<h3>3. Reconsider the use of the “Buy Ingredients Online” widget</h3>
				<h4>The Issue:</h4>
				<p>During the evaluation, using the “Buy Ingredients Online” widget was consistently the highest pain point. Reasons included ambiguous wording of “per serve” (Heuristic 2, match between system and real world), the fact it was unusable within the page itself as all links/buttons opened a new window (heuristic 4, consistency and standards), and the general confusion about if it was part of the website or an ad (heuristic 5, error prevention).</p>
				<h4>Quick Fix:</h4>
				<p>Until such a time as the widget can be significantly improved, it may be worth considering removing it from the recipes page. This may be different from the shopping list page however.</p>
				<h4>Long term:</h4>
				<p>The widget would better serve the user if it was usable entirely within the page, either as a sidebar or a modal. While the final checkout can be done via an external site, all steps leading up to that should be done locally. In addition, better signifiers as to what the widget done should be implemented, as should a better way to display the “price”</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-food-3.png" alt=""/>
					<figcaption className={css.caption}>Current Substitutions Button. “Ingredient Substitutions” (2a) is identical to other buttons, suggesting identical function</figcaption>
				</figure>

				<h2 id="conclusion">Conclusion</h2>
				<p>FoodNetwork.com is a wonderful repository of recipes from some of the best chefs in the world, and is used by millions of people of all walks of life. In order to best serve this multitude of users, a team of domain experts came together to undertake a Heuristic evaluation - completing a series of tasks while noting any items that violated Jakob’s Ten Usability Heuristics. All notes were then collated, and an analysis was undertaken to examine key areas for improvement. Three recommendations were provided based on this analysis:</p>
				<ol>
					<li><p>Differentiate between hubs and “see all” in the navigation bar </p></li>
					<li><p>Restyle the “Ingredient Substitution” flow</p></li>
					<li><p>Reconsider the use of the “Buy Ingredients Online” widget</p></li>
				</ol>
				<p>All three of these recommendations aim primarily at reducing violations of Heuristic 6: Recognition rather than Recall. This will allow users to better navigate the site, and prepare many more delicious meals.</p>
			
				<h2 id="appendix">Appendix</h2>
				<figure className={css.figure}>
					<table>
						<tr><th>Problem Description Heuristic</th><th>E1 </th><th>E2 </th><th>E3</th><th>Severity</th></tr>
						<tr><td>“All chefs and hosts” nav link does not direct the user to all chefs and hosts page</td><td>H6, H10</td><td>4</td><td>4</td><td>4</td><td>4</td></tr>
						<tr><td>Link to list of all chefs/hosts highly obfuscated</td><td>H6</td><td>4</td><td>4</td><td></td><td>4</td></tr>
						<tr><td>Substitutions cannot be made on the recipe page/ related to specific recipe</td><td>H6, H7, H9</td><td>2</td><td>3</td><td>3</td><td>3</td></tr>
						<tr><td>Substitution amounts cannot be calculated</td><td>H7, H8, H10</td><td>3</td><td>2</td><td>4</td><td>3</td></tr>
						<tr><td>Substitutions do not account for allergens (e.g. milk is subbed with yoghurt or sour cream)</td><td>H6</td><td>2</td><td></td><td>2</td></tr>
						<tr><td>Ingredient cost calculator takes the user to an external service</td><td>H7, H8</td><td>4</td><td>3</td><td>2</td><td>3</td></tr>
						<tr><td>Ingredient cost calculator calculates per portion, unclear what that means</td><td>H2, H6</td><td>2</td><td></td><td></td><td>2</td></tr>
					</table>
					<figcaption className={css.caption}>Final Heuristic Violations</figcaption>
				</figure>
			</>
		), 
		headings: [
			{	 
				text: "Summary", 
				ref: "#summary" 
			},
			{	text: "Introduction",
				ref: "#introduction" 
			},
			{	text: "Methodlogy",
				ref: "#methodolgy" 
			},
			{	text: "Insights & Recommendations",
				ref: "#insights"
			},
			{	text: "Conclusion",
				ref: "#conclusion"
			},
			{	
				text: "Appendix",
				ref: "#appendix"
			},
		] 
	},

	"guardian-viz":{ 
		id:"guardian-viz", 
		markup: ( 
			<>
				<h1 className={css.title} id="introduction">Visualisation Critique: The Guardian Gay Rights Radial Chart</h1>
				<p className={css.byline}>Originally published on <a href="https://studentwork.prattsi.org/infovis/labs/a-brief-history-of-modern-colour-models/">Information Visualization</a> on February 3, 2022</p>
				<p>Within the United States gay rights have been a contentious issue. Often, legislation about said rights is left to the discretion of the individual state, making it difficult to understand who can do what, where. In 2012, The Guardian produced a series of interactive radial data visualisations comparing seven key gay rights across the country.[<a href="https://www.theguardian.com/world/interactive/2012/may/08/gay-rights-united-states">1</a>][<a href="https://www.theguardian.com/news/datablog/2012/may/10/data-visualisation-us-gay-rights">2</a>] In the following years, as legislation changed, the visualisations. The last of these updates was in 2015, when the US Supreme Court ruled that the constitution guarantees a right to same-sex marriage.[<a href="https://www.nytimes.com/2015/06/27/us/supreme-court-same-sex-marriage.html">3</a>]</p>
				<p>This critique is intended to examine the most recent version of this data visualisation with a critical eye, and will be broken down into three parts. Part 1 will examine the type of visualisation used and its efficacy at displaying the data. Part 2 will explore the design decisions that were made, including colour and interactivity. Finally part 3 will discuss the overall narrative function of the chart, and the ways it tells that story. All parts will draw on current expertise on the subject, as well as by comparing it to Kerry Rodden’s 2021 D3 redux of the visualisation.[<a href="https://observablehq.com/@kerryrodden/equal-area-radial-matrix-of-lgbt-rights">4</a>]</p>

				<h2 id="visualisation">Visualisation</h2>
				<p>Radial graphs are a category of data visualisations that represent data in circular form. Common types include radial trees and sunburst diagrams. Specifically, this visualisation uses a matrix style chart, with heat map style categorical data. These types of visualisations offer several advantages[<a href="https://observablehq.com/@observablehq/why-use-a-radial-data-visualization">5</a>], including being compact and suggesting the each slice is part of a whole.</p>
				<p>If we deconstruct it further, this visualisation is fundamentally a chart warped around a point. But in doing so, and compacting the chart, it allows for the reader to better perceive the whole without the need to either scroll or zoom out to such a point that the data becomes illegible. It also allows for the key and explanation tooltip to exist closer to the chart itself. Unfortunately this warping creates a skew in the individual cells, with the innermost ones seeming smaller, and thus potentially less significant, than the outermost. Kerry Rodden attempts to fix this issue by using a “radial scale”, which ensures that each cell has an equal total area with the inner cells being tall/skinny and the outer flat/wide. While this seems to be a batter approach, it may not solve the issue entirely.</p>
				<p>There is some question over the efficacy of heat map categories. Beyond the design issues (see next section), it may be unclear how to interpret the marks without closer examination of the data. While it does provide a tooltip to explain itself, it may still be better to only have a binary categorisation. Alternatively, it may be possible to use colour categories across all rungs of the chart (e.g. a traffic light system), but that may end up causing further issue.</p>

				<h2 id="design">Design</h2>
				<h3>Colour</h3>
				<p>The colours themselves only play an aesthetic role in the visualisation, and are in no way signifiers of what they represent. The Guardian uses something akin to a CAT10 colour scheme, which does its job of making each rung feel distinct, but is otherwise uninspired. Rodden uses the lack of colour signifier to their advantage, and instead opts for a rainbow scheme to tie into the LGBT theme. The lack of reliance on colour signifiers is also good from an accessibility standpoint, as a reader with colour deficiency would be able to extract all the same information from the visualisation. This is also bolstered by the key, which is curved to match the shape of the visualisation and make the association more overt.</p>
				<p>On the topic of accessibility, contrast is an issue that plagues visualisation. When viewing the “Partial” cells against the grey background the colours can be difficult to distinguish, failing a “squint test”. With the “Partial” and “Maximum” cells, the change in saturation can be distinguished when the cells abut, but is not always obvious when they’re separated by a grey square. Some sort of additional markings on the “Partial” cells would help this issue. Other minor contrast issues include the grey text on the white background, and the “Banned” symbols on the observable viz.</p>
				
				<h3>Ordering</h3>
				<p>From a purely design perspective, the regional groupings for the columns feels strange. This may be due to a non-americas perspective, but when trying to find a particular state it can be somewhat ambiguous where to find it. This is exasperated by the lack of coherent sorting within the regions. Perhaps the ability to sort the columns alphabetically would be of use. However, the groupings do seem to track from a narrative perspective (see next section), and the rotation/ordering of the regions to match the cardinal points is a good choice.</p>
				<p>Turning now to the rungs, it’s not entirely clear how they’re ordered. Given “Marriage” is on the outermost ring, with it being legal in all states, it suggests that they’re ordered by number of states wherein its legal, but adoption seems to be legal in more places than hospital visits. If there is some sort of weighting (due to adoption being banned in some places) it isn’t apparent. It is possible that this is an artefact of the dataset that was used when the visualisation was initially created.</p>
				
				<h3>Interactivity</h3>
				<p>The visualisation relies heavily on the interactivity to both provide context to the individual markings, and to allow the user to highlight a specific state, which can be otherwise difficult to read vertically. When hovering over a state, sidebar provides additional context on the cells (e.g. hate crimes are only addressed when relating to sexual orientation and not gender). Rodden’s version instead opts to provide tooltips for each individual cell. This direct association with the data allows the user to see what the cell contains (e.g. Minnesota: Adoption, maximum) even if other facets can be hard to distinguish. This could also provide useful to users using a screen reader, allowing them to navigate the visualisation the same way they might navigate a table.</p>
				<p>Both the Guardian’s and Rodden’s versions provide ways to manipulate the visualisation, although these are mostly novel. The Guardian allows users to resize columns proportional to state population, providing a truly horrifying visage that also reinforces the narrative. Rodden provides a rotational slider for the visualisation, which is a boon to all radial charts, as well as the ability to reverse the category order.</p>
				
				<h3>Narrative</h3>
				<p>There are two key narratives provided by the visualisation. Firstly, it provides context for how much more progress is still to be made in the fight for equality. While many of the cells are now filled in, especially compared to previous versions, it is the use of negative space provides just as much information. Secondly the grouping by regions demonstrates the disparity of rights across the country. This likely would have been less overt if the states were listed in a simple alphabetical order. Overall the visualisation is compelling, and gets across the messages it’s trying to convey.</p>

				<h2 id="appendix">Appendix</h2>
				<h3>Guardian Verion</h3>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-guardian-guardian-1.png" alt=""/>
					<figcaption className={css.caption}>Default View (Equal Scale)</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-guardian-guardian-2.png" alt=""/>
					<figcaption className={css.caption}>States scaled proportionally</figcaption>
				</figure>

				<h3>Kerry Rodden Version</h3>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-guardian-rodden-1.png" alt=""/>
					<figcaption className={css.caption}>Default View</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-guardian-rodden-2.png" alt=""/>
					<figcaption className={css.caption}>Inverted Colour View</figcaption>
				</figure>

			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Visualisation",
				ref: "#visualisation" 
			},
			{	text: "Design",
				ref: "#design" 
			},
			{	text: "Appendix",
				ref: "#appendix"
			},
		] 
	},

	"lego-colours":{ 
		id:"lego-colours", 
		markup: ( 
			<>	
				{/*does not include footnotes*/}
				<h1 className={css.title}>Following the Yellow Brick Road: How LEGO Uses Colour to cCtegorise and Communicate Themes</h1>
				<p className={css.byline}>Originally submitted as a PDF on December 9, 2021</p>
				<a className="button" href="/documents/lego.pdf" target="_blank" rel="noreferrer">Download PDF</a>
				
				<h2 id="introduction">Introduction</h2>
				<p>LEGO, produced by The LEGO Group, is a line of construction toys primarily comprising of interlocking plastic components (parts). These parts range from the ubiquitous bricks and figures through to gears and axles, all in a variety of colours. Parts are collected and sold as sets, which themselves are grouped into themes. It is these themes that this paper examines. Specifically:</p>
				<p>What factors may be involved in determining the colour palette of a LEGO theme.</p>
				<p>Given the importance of colour identity in branding (Zhang et el, 2020), it is beneficial to examine what lessons can be learned from one of the largest toy manufacturers in the world (The LEGO Group, n.d.). While a variety of research has been done on the practical applications of LEGO beyond its intended scope, little research is publicly available on the LEGO parts themselves. This paper is intended help fill this gap in the research.</p>
				<p>Rebrickable, a third party LEGO database, will serve as the primary dataset for this analysis. A count of parts will be taken for each theme, and will be sorted by colour value. This information will be used to examine the prevailing colours of each theme, why they might have been chosen, and how they compare to other LEGO themes. As several themes tie in to third party franchises, additional data will be collected from those franchises for comparison.</p>
				
				<h2 id="background">Background</h2>
				<p>In 1932, Danish Carpenter Ole Kirk Kristiansen found The LEGO Group, the term coming from “leg godt” meaning “play well”. Originally selling wooden toys, in 1958 they launched the original LEGO brick. Designed on  “The interlocking principle”, the bricks were able to be combined in any combination and offered “unlimited building possibilities.” Since then, The LEGO Group has expanded to become one of the largest toy manufacturers and named “Toy of the Century” twice.” (The LEGO Group, n.d.).</p>
				<p>The majority of academic research involving LEGO is done with it rather than about it. That is to say, LEGO is used as a tool in construction (Chen, 2021), psychology (Sayis, 2021), or medicine (Yuan-Pin et al. (2021). Little could be found about LEGO itself.</p>
				<p>Beyond academia, articles can be found written from a fan perspective such as “Working with the LEGO Color Palette” (Thita, 2020), “The Curious Case of LEGO Colors” (Bartneck, 2016), and “Understanding the LEGO Color Palette” (Alphin, 2016) These articles examine the history of the colours as well as an overview of what colours are used, suggesting there is work to be done on the topic, but none provide a data driven analysis.</p>
				<p>An assumption can be made that the LEGO group has an internal research team. However, as of the time of writing the company does not allow their employees to discuss matters with students.</p>
				
				<h2 id="methodolgy">Methodology</h2>
				<h3>Exploratory Analysis</h3>
				<h4>Lego Dataset</h4>
				<p>The data for the LEGO parts is available from the Rebrickable database. Rebrickable is a website whose primary purpose is to “show you which LEGO sets you can build from the sets and parts you already own.” (Rebrickable, n.d.) It contains an extensive list of parts, sets, and other details from LEGO’s catalogue (Fig. 1).</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-schema.png" alt=""/>
					<figcaption className={css.caption}>Fig. 1 - Rebrickable Schema</figcaption>
				</figure>
				<p>The most recently available snapshot of the database was downloaded on the 3rd of November, 2021. The inventory, inventory_parts, colors, sets, and themes tables were joined together using SQLite, producing 903,791 rows of data. A filter was added to only display sets released in the previous five years in order to mitigate the impact of historical changes in production or design philosophy. This period accounts for approximately 25% of all sets available in the database. The data was then grouped by both colour and theme (sub-themes were rolled into their parent theme), and summed for the total number of parts for each combination. The final result was 2,397 rows of data (Fig. 2).</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-output.png" alt=""/>
					<figcaption className={css.caption}>Fig. 2 - Database Output</figcaption>
				</figure>
				<p>The outputted SQLite data was imported into Microsoft Excel and the table pivoted to create a square data frame with 68 colour rows and 61 theme columns. These were compared against what themes were listed by LEGO.com, and retired themes were filtered out. Additional filtering was applied to themes and colours with minimal entries. The result was 56 colours and 20 themes. (Fig. 3)</p>
				<p>On average, each theme contained 34631 parts, with a minimum of 2355 (Trolls: World Tour), a maximum of 99012 (Star Wars). For colours, the average number of parts was 12509, with a minimum of 245 (Yellowish Green) and a maximum of 131124 (Black). On average, each theme used 44 different colours. 14 colours appeared at least once in every theme, with another 7 appearing in all but one. 4 colours appeared in only 9 themes, which was the lowest incidence.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-sample.png" alt=""/>
					<figcaption className={css.caption}>Fig. 3 - Initial results sample</figcaption>
				</figure>
				<p>In order to determine the average saturation and lightness of a theme, the data set was imported and summarised R and the results noted. The average saturation of a LEGO theme was 47%, with a range from 32% - 60%. The average lightness was 51%, with a range from 35% - 64% (Fig. 4).</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-averages.png" alt=""/>
					<figcaption className={css.caption}>Fig. 4 average saturation and light of LEGO themes</figcaption>
				</figure>

				<h4>Franchise dataset</h4>
				<p>Once the list of themes was finalised, they were separated into those developed in-house and those that cross-promoted with an external franchise. In all, 11 out of the 20 themes were labelled as a franchise theme (e.g. Star Wars, Minecraft), with the remaining 9 being being created by The LEGO Group (e.g. City, Friends).</p>
				<p>In order to compare the franchise themes against the source material, posters were manually collected from IMDB. For consistency, promotional posters were selected where available (e.g. movies from the Marvel Cinematic Universe were selected to represent the Marvel LEGO theme). An average of 7.5 images were chosen per franchise, with a maximum of 13 (Disney Princess, Marvel) and a minimum of 3 (Minecraft, Minions).</p>
				<p>A k-means algorithm (Chauhan, 2019) was chosen to extract the colour data from the franchise images. Specifically, the Image Color Summarizer by Martin Krzywinski (2006). Each image was parsed in turn, with a k value of 5, and the HSL data was collected.</p>
				<p>To better match the franchise data to that of the LEGO, the decision was made to map each colour from the outputted k-means data to its closest match amongst the available LEGO colours. This was done by treating the HSL values as a 3D co-ordinate system and searching for the minimum distance. The average distance was 25, with a minimum of 0.4 and a maximum of 55.3.</p>
				
				<h3>Methods</h3>
				<p>In order to examine what factors may be involved in determining the colour palette of a LEGO theme, this paper took a mixed methods approach. That is to say, quantitative methods were used to summarise the data and create statistics relevant to the topic of this paper. This data was then examined through a qualitative lens to determine the final results.</p>
				<p>To answer the research question, three datasets were extracted from the raw data: Colours, SL, and Franchise. The colours dataset originally contained the 10 colours for each theme with the highest part count, in addition to what proportion of a themes total parts those colours represented. The 10 colours was later split to be the proportion of ‘‘Black’, ‘Dark Bluish Gray’, ʻLight Bluish Gray’ and ‘White’ (called the monochrome group), and the listing of 5 colours and their proportion of total parts exclusive of that group.</p>
				<p>The SL dataset contained the average saturation and lightness for each theme.</p>
				<p>The Franchise dataset contained a binary indicator of whether a theme was connected to a franchise or not, and the franchise media’s colours, saturation, and lightness statistics relative to its associated theme. The list of all colours present for each themes franchise media was collected and compared with the list of ten most frequent colours of said theme, and the number of matches was noted. Saturation and lightness averages were also taken across each franchise’s media, and the difference between it and the theme’s saturation and lightness levels was noted.  In all, this resulted in a 10x20 table.</p>
				<p>The remainder of the analysis was done by hand. 4 categories were selected to examine more closely, gender and age demographics, if the theme was based on a franchise, and comparing the theme to the franchise itself. While demographic data isn’t explicit in the dataset, the author relied on both outside reading and personal experience to select appropriate themes that fit each category. Both demographic categories, as well as in-house vs franchise were examined by averaging the figures for each theme within a category, and performing a close reading.</p>
				<p>Comparing the theme to its associated franchise was done by plotting the proportion of colour matches and saturation/lightness difference for each theme onto visualisations (included below). Additional information was gathered about which specific colours were being matched in both the theme and the franchise media.</p>
				
				<h2 id="results">Results & Discussion</h2>
				<p>A summary of results is presented in Table. 1. What follows is a definition of terms in addition to the summary statistics.</p>
				
				<figure className={css.figure}>
					<table>
						<tr><th>Theme</th><th>F</th><th>5 Colours</th><th>5C%</th><th>M%</th><th>O%</th><th>CF%</th><th>S%</th><th>ΔS</th><th>L%</th><th>ΔL</th></tr>
						<tr><th>Architecture</th><td>N</td><td>Tan; D. Green; S. Green; Red; T.L. Blue</td><td>31.6</td><td>50.2</td><td>18.2</td><td>n/a</td><td>33.3</td><td>n/a</td><td>64.0</td><td>n/a</td></tr>
						<tr><th>Batman</th><td>Y</td><td>Red; Yellow; R. Brown; Blue; Tan</td><td>13.6</td><td>72.9</td><td>13.5</td><td>50</td><td>46.5</td><td>9.7</td><td>34.8</td><td>2.0</td></tr>
						<tr><th>City</th><td>N</td><td>Red; Blue; Yellow; Tan; Orange</td><td>23.4</td><td>56.7</td><td>19.9</td><td>n/a</td><td>45.6</td><td>n/a</td><td>50.3</td><td>n/a</td></tr>
						<tr><th>Classic</th><td>N</td><td>D. Red; Red; Yellow; Blue; R. Brown</td><td>30.0</td><td>26.6</td><td>43.4</td><td>n/a</td><td>53.9</td><td>n/a</td><td>55.4</td><td>n/a</td></tr>
						<tr><th>Creator</th><td>N</td><td>Tan; Red; R. Brown; Blue; D. Tan</td><td>29.0</td><td>52.1</td><td>18.8</td><td>n/a</td><td>41.7</td><td>n/a</td><td>55.6</td><td>n/a</td></tr>
						<tr><th>DC</th><td>Y</td><td>D. Red; Red; Flat Silver; Yellow; Blue</td><td>25.7</td><td>56.7</td><td>17.6</td><td>40</td><td>42.3</td><td>2.1</td><td>59.0</td><td>7.9</td></tr>
						<tr><th>D. Princess</th><td>Y</td><td>Pearl Gold; R. Brown; Tan; B. Pink; Magenta</td><td>32.1</td><td>28.5</td><td>39.5</td><td>70</td><td>44.8</td><td>5.6</td><td>60.1</td><td>16.9</td></tr>
						<tr><th>Disney</th><td>Y</td><td>Red; T.L. Blue; R. Brown; Tan; M. Azure</td><td>26.9</td><td>41.3</td><td>31.8</td><td>50</td><td>45.3</td><td>1.2</td><td>60.6</td><td>2.9</td></tr>
						<tr><th>Duplo</th><td>N</td><td>Red; M. Azure; Yellow; Lime; Orange</td><td>40.3</td><td>30.1</td><td>29.6</td><td>n/a</td><td>56.0</td><td>n/a</td><td>60.7</td><td>n/a</td></tr>
						<tr><th>Friends</th><td>N</td><td>Tan; M. Azure; R. Brown; D. Pink; Yellow</td><td>20.7</td><td>35.0</td><td>44.3</td><td>n/a</td><td>45.2</td><td>n/a</td><td>48.2</td><td>n/a</td></tr>
						<tr><th>Harry Potter</th><td>Y</td><td>Tan; R. Brown; D. Tan; Red; Pearl Gold</td><td>40.7</td><td>45.2</td><td>14.1</td><td>60</td><td>42.6</td><td>14.2</td><td>46.9</td><td>16.0</td></tr>
						<tr><th>Marvel</th><td>Y</td><td>Red; Orange; D. Blue; Blue; Tan</td><td>18.9</td><td>56.1</td><td>25.0</td><td>50</td><td>42.1</td><td>4.7</td><td>48.2</td><td>10.2</td></tr>
						<tr><th>Minecraft</th><td>Y</td><td>R. Brown; Green; M. D. Flesh; Tan; Red</td><td>31.9</td><td>38.6</td><td>29.5</td><td>10</td><td>45.9</td><td>6.0</td><td>47.9</td><td>6.8</td></tr>
						<tr><th>Minions</th><td>Y</td><td>Yellow; Blue; D. Red; Red; R. Brown</td><td>51.5</td><td>34.2</td><td>14.2</td><td>10</td><td>59.9</td><td>18.9</td><td>43.0</td><td>16.2</td></tr>
						<tr><th>Monkie Kid</th><td>N</td><td>Red; Yellow; D. Red; D. Purple; R. Brown</td><td>22.6</td><td>51.7</td><td>25.7</td><td>n/a</td><td>45.7</td><td>n/a</td><td>50.2</td><td>n/a</td></tr>
						<tr><th>Ninjago</th><td>N</td><td>Red; R. Brown; Pearl Gold; Tan; Blue</td><td>23.6</td><td>53.1</td><td>23.3</td><td>n/a</td><td>46.5</td><td>n/a</td><td>44.4</td><td>n/a</td></tr>
						<tr><th>Star Wars</th><td>Y</td><td>Tan; Red; Blue; D. Tan; R. Brown</td><td>18.7</td><td>73.5</td><td>7.8</td><td>40</td><td>31.6</td><td>2.8</td><td>47.2</td><td>13.6</td></tr>
						<tr><th>Super Mario</th><td>Y</td><td>Yellow; R. Brown; Red; Tan; Green</td><td>29.1</td><td>45.7</td><td>25.2</td><td>40</td><td>50.1</td><td>4.2</td><td>48.0</td><td>1.3</td></tr>
						<tr><th>Technic</th><td>N</td><td>Blue; Red; Yellow; Tan; Orange</td><td>30.9</td><td>63.7</td><td>5.4</td><td>n/a</td><td>58.2</td><td>n/a</td><td>35.8</td><td>n/a</td></tr>
						<tr><th>Trolls</th><td>Y</td><td>Lime; Yellow; M. Lav.; M. Azure; D. Turq.</td><td>27.4</td><td>24.6</td><td>47.9</td><td>10</td><td>54.8</td><td>16.1</td><td>54.2</td><td>12.4</td></tr>
					</table>
					<figcaption className={css.caption}>Table 1 - Summary of result</figcaption>
				</figure>

				<h4>Franchise</h4>
				<p>A Yes/No binary on whether the theme was developed to cross promote an external franchise (Y) or developed internally by LEGO (N). Y: 11; N: 9.</p>
				
				<h4>5 Colours</h4>
				<p>The five colours that appear most frequently in a theme, exclusive of the monochrome group. Across all 5 colour groups, ‘Red’ appeared in 17 themes, the highest of any colour, followed by ‘Tan’ (14), 'Reddish Brown’ (13), ’Yellow’ (11), and ‘Blue’ (10). 11 colours are unique to a single themes 5 colour list.</p>
				
				<h4>5C%</h4>
				<p>The percentage of parts in a theme which are accounted for by its five most common colours. Average: 28.4%, Minimum 13.6% (Batman); Maximum 51.5% (Minions).</p>
				
				<h4>Mono%</h4>
				<p>The percentage of parts in a theme which fall into the monochrome group (Black; Dark Bluish Gray; Light Bluish Gray; White). Average: 46.8%, Minimum 24.6% (Trolls: World Tour); Maximum 73.5% (Star Wars).</p>
				
				<h4>Other%</h4>
				<p>The percentage of parts in the theme which fall into neither the monochrome nor 5C grouping. Average: 24.7%, Minimum 5.4% (Technic); Maximum 47.9% (Tolls: World Tour).</p>
				
				<h4>CF%</h4>
				<p>The Colour-Franchise percentage is a measure of the proportion of colours that were in both the ten most common colours for the LEGO theme, as well as the list of total colours for the franchise media.</p>
				
				<h4>S%</h4>
				<p>The average saturation of the theme. Average: 46.6%, Minimum 31.6% (Star Wars); Maximum 59.9% (Minions) (Fig. 4).</p>
				
				<h4>ΔS</h4>
				<p>The absolute difference between the average saturation of the theme and the average saturation of the franchise media. Average: 7.8, Minimum 1.2 (Disney); Maximum 18.9 (Minions).</p>
				
				<h4>L%</h4>
				<p>The average lightness of the theme. Average: 50.7%, Minimum 34.8% (Batman); Maximum 64% (Architecture) (Fig. 4)</p>
				
				<h4>ΔL</h4>
				<p>The absolute difference between the average lightness of the theme and the average lightness of the franchise media. Average: 9.7, Minimum 1.3 (Marvel); Maximum 16.9 (Disney Princess)</p>
			

				<h3>Discussion</h3>
				<h4>Overall</h4>
				<p>During the analysis, an observation was made that a certain subset of colours were present across all themes, which were dubbed the ‘monochrome group’. This grouping consists of four colours: ‘Black’, ‘Dark Bluish Gray’, ʻLight Bluish Gray’ and ‘White’. Combined, these four colours accounted for 52.7% of all LEGO parts in the data set (Fig. 5). Some thought went into whether to exclude this data due to its universality, but upon further inspection themes such as ‘Star Wars’ (73.5% monochrome) and ‘Batman’ (72.9 monochrome) leaned heavily on these colours for their identity. The decision was made to keep the data in, but to delineate it from the most common colours.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-pie.png" alt=""/>
					<figcaption className={css.caption}>Fig. 5 - Total proportion of all LEGO colours</figcaption>
				</figure>
				<p>In addition to the monochrome group, the 5 most frequently occurring colours were selected for each theme (5C). (Fig. 6). Five colours (Red; Tan; Reddish Brown; Yellow; Blue) appeared in >50% of all 5C lists, while all other colours (19 in total) appeared in {'<'}25%, and 11 appearing in only 1. ’Architecture’, ‘Disney’, and ‘Trolls: World Tour’ each had two colours that appeared in no other list.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-colours.png" alt=""/>
					<figcaption className={css.caption}>Fig. 6 - The monochrome group + colours amongst the 5 most common for a theme</figcaption>
				</figure>
				<p>On average, the monochrome group and a theme’s 5C group accounted for 75.3% of the total parts in a theme, suggesting that this was largely representative of what was available in the theme. However in four cases (‘Trolls: World Tour”; ‘Friends’; ‘Classic’; ‘Disney Princess’) the proportion of parts in the 5C and monochrome groups were each lower than the the proportion of all other parts. In no case was the proportion of all other parts >50%.</p>
				<p>Across all themes the average saturation is 46.6% (SD = 7.3) and lightness  is 50.7% (SD = 8). (Fig. 7) No outliers were detected and all but one result fell within 2∂ of the mean (‘Star Wars' was marginally lower on saturation).</p>
				<p>Four factors were chosen for further analysis, with multiple themes chosen to represent each. These were the Gender (Young Male/Young Female), Age (Infant/Middle/Adult), if it was based on a franchise (Yes/No), and relationship to franchise media (LEGO/Media).</p>
				
				<h4>Gender</h4>
				<p>The LEGO Group no longer indicates a specific gender for its themes. However, such inferences can still be made. For example by examining the gender representation amongst its characters, reviewing old press releases, or examining any related media.  While many sets remained gender neutral, for this analysis ‘Ninjago’, and the super hero themes (‘DC’, ‘Marvel’) were considered targeted at a young male (YM) demographic, while ‘Friends’ and ‘Disney Princess’ were targeted at a young female (YF) one.</p>
				<p>Minimal difference was noted in regards to the 5C%, S%, or L% between the sets targeting YM vs. YF ({'<'}5%). However a large (23.6%) difference was noted in the amount of parts used from the monochrome group, with YM at 55.3% and YM at 31.7%. This difference was made up for in other%, with an average of 22% for YM and 41.9% for YF. This demonstrates that the themes targeted towards the YF demographic use a much wider pool of colours.</p>
				<p>In regards to the colours themselves, the YM targeted themes all have 'Red’ and ‘Blue’ in their top colours, with ‘Yellow’, ‘Tan’, and ‘Reddish Brown’ also featuring. These colours make up the bulk of colours across all themes (Excl. the monochrome group). For the YF themes, ‘Reddish Brown’ and ‘Tan’ appear in both, and ‘Yellow’ is the only other colour appearing amongst the most common colours overall. This suggests that The LEGO Group is taking steps to create themes explicitly tailored to the YF demographic, whereas the YM demographic is encapsulated by LEGO’s more general design philosophy.</p>
							
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-sat.png" alt=""/>
					<figcaption className={css.caption}>Fig. 7 - Representation of saturation (top) and lightness (bottom) distribution with static hue</figcaption>
				</figure>

				<h4>Age</h4>
				<p>LEGO sets only provide a minimum suggested age, and often different sets within the same theme will have different ages. A future analysis can be undertaken to provide more granular results. However for the purposes of this paper several themes were selected to represent broad age demographics. ‘Duplo’ for the youngest age demographic (Infant), ‘Creator’ and ‘City’ for the middle demographic (Middle), and ‘Architecture’ for the oldest demographic (Adult).</p>
				<p>The most striking result of this comparison is the rapid decrease of saturation with age. While lightness maintained a similar range, saturation fell from 56% for Infant, to 43.7% for Middle, to 33.3% for Adult. This suggests that, like the YF demographic discussed above, that The LEGO Group has a design approach specifically tailored to this demographic seperate from its generic philosophy.</p>
				<p>There is little that stands out for the specific colours. The Middle demographic uses colours with the highest population amongst all parts, whereas both the Infant and Adult demographics deviate from this.</p>
				
				<h4>Internal/External</h4>
				<p>Unlike the previous two sections, there is little subjectivity as to which themes are designed in-house vs those that partner with a franchise. However upon examination of the results, no differences were noted between the two categories, with an ~1 point difference in all measures.</p>
				
				<h4>Franchises</h4>
				<p>Three metrics were considered when comparing the franchise media with its respective LEGO theme: the difference in average saturation (ΔS), in average lightness (ΔL), and the number of colour matches (CF%).</p>
				<p>The average ΔS for across all franchised themes was 7.8, and the ΔL slightly higher at 9.7. When factoring direction of change, the results become -6.7 (ranging from -18.8 to 2.8) and -4.7 (range -16.9 to 16.1) respectively. i.e. the franchise media was, on average, less saturated and less light than its LEGO counterpart. 8/11 themes had franchise media with a lower saturation, 7/11 for lightness. From this we can say that LEGO uses more saturated colours than found in the franchise media, with the same assertion being made in a weaker form regarding lightness.</p>
				<p>Examining individual themes, ‘Disney’ and ‘Super Mario’ had a {'<'}5 point difference in both saturation and lightness compared to their franchise media. ‘Batman’, ‘Star Wars’, ‘DC’, and ‘Marvel’ each had either saturation OR lightness with {'<'}5 points difference. ‘Minions’ fared the worst, with >15 points on both categories. ’Disney Princess’, ‘Harry Potter’, and ‘Trolls’ each had only one category >15 points. (Fig. 8)</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-ksat.png" alt=""/>
					<figcaption className={css.caption}>Fig. 8 - Difference in Saturation and Lightness: K-means vs LEGO</figcaption>
				</figure>
				<p>When comparing the list of colours sampled from the franchise media to those that appear in the LEGO themes (5C + monochrome), themes averaged a 39.1% match. ’Minecraft’, ‘Minions’, and ‘Trolls’ only had a single colour match, whereas ‘Disney Princess’ and ‘Harry Potter’ had >5. (Fig. 9).</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-lego-kcolour.png" alt=""/>
					<figcaption className={css.caption}>Fig. 9 - Colour Matching k-means vs LEGO</figcaption>
				</figure>
				<p>The initial assumption was that colours associated with a franchise would be equally as prominent in the franchise media as they would be in a LEGO theme. While this may be the case, this analysis is unable to speak to the veracity of the claim. Upon examining all themes to see what colours were being matched, ‘Light Bluish Gray’ was matched 8 times, ‘Tan’ 6,  ‘Reddish Brown’ 4, and ‘Red’/‘Dark Tan’/‘Black’ 3 each. The only notable exception to this is the ‘Disney Princess’ theme that, excluding the colours mentioned above, matched with additional 4 colours. Overall, it can not be concluded that the colour matching between these two datasets is significant.</p>
				
				<h2 id="conclusion">Conclusion</h2>
				<p>This paper examined what factors may be involved in determining the colour palette of a LEGO theme. It used LEGO data downloaded from Rebrickable, as well as a k-means sampling of media related to franchises that a number of LEGO themes represent. This data was collated, sorted, and summarised to provide information on the most common colours in a theme, the average saturation and lightness of its parts, and the differences and similarities with its respective franchise media.</p>
				<p>Four broad categories were examined further based on the data that was collected: Gender, Age, In-House vs. Franchised, and Relationship to Franchise Media. While no evidence of significant difference was found based on whether a theme was franchised or not, some relationships were found for the other three categories.</p>
				<p>Within Gender and Age, LEGO maintains the status quo of its overall trends when creating themes for males in the middle age demographic, using a large proportion of ‘monochrome’ colours (>50% of all parts) and colours most commonly found across all LEGO themes (e.g. ‘Red’, ‘Tan’, ‘Blue’). This suggests that this group is their primary demographic. Infant, adult, and female targeted themes were each found to have colour palettes significantly different to the ‘standard’ LEGO themes, presumably in an effort to reach these demographics.</p>
				<p>There was a notable decrease in saturation in relation to the age demographic of the theme, dropping from 56% average for the youngest group to 33.3% for the oldest. No trends were noted for lightness.</p>
				<p>Saturation differences were also present when comparing LEGO themes to the franchises they represent. On average, saturation was 6.7 points higher in the LEGO than in the media, and of the three themes that had a lower saturation, none exceeded a 3 point difference. A similar, albeit less significant, result was seen regarding lightness.</p>
				<p>The direct matching of colours between LEGO and the franchise media yielded some results, but none that matched the assumptions. The theme-franchise pairs that best matched were those where both contained a high amount of grey, black, or tan, rather than a more unique set of colours. This is likely due to decisions that both the theme and the franchise made independently of one another, rather than an intentional decision when translating between mediums. This comparison was also the most fraught with challenges (See below)</p>
				
				<h3>Limitations</h3>
				<h4>Spherical LEGO in a Vacuum</h4>
				<p>Ultimately, this paper makes the assumption that all LEGO parts are equal. Two keys facts challenge this assumption.</p>
				<p>The first is that LEGO parts come in a wide variety of shapes and sizes, ranging from as small as 8mm across for a 1x1 brick through to 380mm for a standard baseplate. The available data makes no effort to quantify a universal measure for the size of a LEGO part, and the creation of one was deemed beyond the scope of this paper.</p>
				<p>The second is the visibility of the parts. Many LEGO parts, especially in black, are designed solely as connectors and are not typically seen on a finished model. On the other hand, other parts exist as one sided plates whose purpose is to be attached externally to the model. While such cases might be easily quantified, many parts exist somewhere in between. Potential lies in an analysis of LEGO instruction manuals but that would be a project unto itself.</p>
				
				<h4>Franchise, Colour, & k-Means</h4>
				<p>Due to the limits of available computing power, only a small number of materials were selected and sampled to represent each franchise. However many of the limitations this analysis are unlikely to be solved by expanding the breadth of material collected.</p>
				<p>Movie posters are not always the best representation of the key colours of a franchise. For example the posters available for the ‘Minions’, which do feature the titular yellow characters, feature a large amount of white space that skews the algorithm. Another is ’Trolls’ which leans heavily on rainbow motifs which are difficult for k-means to parse. If the sampling was expanded to the entire film a better grasp might be made as to the overall saturation and lightness, but colour itself remains complex.</p>
				<p>A better approach would be to more directly relate the sets within a theme to the parts of the franchise they represent as often sets are designed with key characters, object, or events. For example, the colours for a LEGO Death Star would be better compared to its representation in the movie than to the franchise as a whole. Unfortunately such an analysis would be considerably time consuming.</p>
				<p>Ultimately, this process is not recommended for future research.</p>

				<h3>Future Work</h3>
				<h4>Past, Present, Future</h4>
				<p>For as much as LEGO has stayed the same since its inception, a lot has changed. Colours go in and out of production, themes come and go, and styles change. This is why this paper chose to focus on the last five years. With some refining of the model, it would be possible to see not only the way colours have been throughout the history of LEGO, but also how they’ve changed.</p>
				
				<h4>Prescriptive, not Descriptive</h4>
				<p>The work done in this paper has mostly worked to describe LEGO in its current state. However, an interesting approach would be to examine it from the opposite direction, and see what rules might be determining the colour choices. While doing so for the in-house themes might be challenging, there is potential to create a model for how a franchise might represent itself in LEGO form.</p>
				
				<h2 id="bibliography">Bibliography</h2>
				<p>Alphin, T. (2016, November 21). Understanding the lego color palette. BRICK ARCHITECT. Retrieved December 18, 2021, from https://brickarchitect.com/color/</p>
				<p>Bartneck, C. (2017, December 20). The curious case of lego colors. Christoph Bartneck, Ph.D. Retrieved December 18, 2021, from https://www.bartneck.de/2016/09/09/the-curious-case-of-lego-colors/</p>
				<p>Chauhan, N. S. (2019, August). Introduction to image segmentation with K-means clustering. KDnuggets. Retrieved December 18, 2021, from https://www.kdnuggets.com/2019/08/introduction-image-segmentation-k-means-clustering.html</p>
				<p>Chen, D., Wang, G., & Chen, G. (2021). Lego architecture: Research on a temporary building design method for post-disaster emergency. Frontiers of Architectural Research, 10(4), 758–770. https://doi-org.ezproxy.pratt.edu/10.1016/j.foar.2021.08.001</p>
				<p>Google. (2021, January 13). K-means advantages and disadvantages  |  clustering in machine learning  |  google developers. Google. Retrieved December 18, 2021, from https://developers.google.com/machine-learning/clustering/algorithm/advantages-disadvantages</p>
				<p>Krzywinski, M. (2006). Image color summarizer. Image Color Summarizer - RGB and HSV Image Statistics. Retrieved December 18, 2021, from http://mkweb.bcgsc.ca/color-summarizer/</p>
				<p>Lin, Y.-P., Liang, H.-Y., Chen, Y.-S., Lu, C.-H., Wu, Y.-R., Chang, Y.-Y., & Lin, W.-C. (2021). Objective assessment of impulse control disorder in patients with Parkinson’s disease using a low-cost LEGO-like EEG headset: a feasibility study. Journal of NeuroEngineering and Rehabilitation, 18(1). https://doi-org.ezproxy.pratt.edu/10.1186/s12984-021-00897-1</p>
				<p>Rebrickable. (n.d.). Lego database downloads. Rebrickable. Retrieved December 18, 2021, from https://rebrickable.com/downloads/</p>
				<p>Sayis, B., Ramirez, R., & Pares, N. (2021). Mixed reality or LEGO game play? Fostering social interaction in children with Autism. Virtual Reality, 1. https://doi-org.ezproxy.pratt.edu/10.1007/s10055-021-00580-9</p>
				<p>The LEGO Group. (n.d.). The Lego Group history. The LEGO Group History. Retrieved December 18, 2021, from https://www.lego.com/en-us/aboutus/lego-group/the-lego-group-history/</p>
				<p>Thita. (2020, July 27). Working with the lego color palette. The Brick Blogger. Retrieved December 18, 2021, from http://thebrickblogger.com/2020/07/working-with-the-lego-color-palette/</p>
				<p>Zhang, X., Yang, M., Su, J., Yang, W., & Qiu, K. (2020). Research on product color design decision driven by brand image. Color Research & Application, 45(6), 1202–1216. https://doi-org.ezproxy.pratt.edu/10.1002/col.22540</p>
			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Background",
				ref: "#background" 
			},
			{	text: "Methodology",
				ref: "#methodolgy" 
			},
			{	text: "Results & Discussion",
				ref: "#results"
			},
			{	text: "Conclusion",
				ref: "#conclusion"
			},
			{	text: "Bibliography",
				ref: "#bibliography"
			},
		] 
	},

	"nyphil-eval":{ 
		id:"nyphil-eval", 
		markup: ( 
			<>
				<img src="/images/article-nyp-banner.png" className={css.banner} alt=""/>
				<h1 className={css.title}>The New York Philharmonic Shelby White & Leon Levy Digital Archives: Moderated User Testing</h1>
				<p>By Tk Cram, Anna Feldman, Sayali Nikumbh, Tess Porter</p>
				<p className={css.byline}>Originally submitted as a PDF and Presentation on December 13, 2022</p>
				<a className="button" href="/documents/nyphil.pdf" target="_blank" rel="noreferrer">PDF</a>
				<a className="button" href="/documents/nyphil-presentation.pdf" target="_blank" rel="noreferrer">Slide Deck</a>

				<h2 id="summary">Executive Summary</h2>
				<p>The New York Philharmonic is one of the city's most prestigious cultural institutions, with a history spanning over 180 years. In 2011, they began their digital archiving project to catalog and digitize over 6 million pages of material, making their Shelby White & Leon Levy Digital Archives the “oldest and most comprehensive collection of any symphony orchestra” (New York Philharmonic Digital Archives, n.d.).</p>
				<p>In 2020, the Digital Archives received a grant from the National Endowment for the Humanities to optimize, expand, and ensure the sustainability of their website to better serve their users. As part of this work, the Digital Archives partnered with the Pratt Institute Center for Digital Experiences to improve the discoverability and accessibility of their archival materials for a broad audience. This audience includes researchers, music students, musicologists, historians, genealogists, and casual visitors (“the general public”). The Pratt team’s goal:</p>
				<ol>
					<li><p>Improve the exploratory experience for new users landing on the site, and</p></li>
					<li><p>Evaluate and improve the experience for experts/researchers seeking out specific archival information.</p></li>
				</ol>
				<p>In total, 10 moderated user tests were performed. Based on an analysis of these tests, this report presents five major findings and recommendations for the Digital Archives’ consideration:</p>
				<ol>
					<li><p>Recommendation 1: Improve navigation usability and accessibility by updating styling, spacing, and text.</p></li>
					<li><p>Recommendation 2: Update style and navigation elements on the carousel to make it more intuitive and accessible.</p></li>
					<li><p>Recommendation 3: Streamline search results page with consolidated sort and filter options and highlighted search results.</p></li>
					<li><p>Recommendation 4: Move pop-up modal underneath each filter and introduce a search bar for the filter options when opened.</p></li>
					<li><p>Recommendation 5: Minor findings and recommendations</p></li>
				</ol>

				<h2 id="introduction">Introduction</h2>
				<p>In the fall of 2022, the Pratt Institute Center for Digital Experiences partnered with the New York Philharmonic's Shelby White & Leon Levy Digital Archives to perform a usability study of their website. The study will inform website redesign decisions to be made as part of the Digital Archives’ larger five-year grant project funded by the National Endowment for the Humanities.</p>
				<p>The Pratt team met with the Digital Archives at the beginning of the project to confirm the usability study’s scope and goals, and understand their mission, target audiences, and main usability questions. These goals, which framed subsequent research are as follows:</p>
				<ol>
					<li><p>Improve the exploratory experience for new users landing on the site, and</p></li>
					<li><p>Evaluate and improve the experience for experts/researchers seeking out specific archival information.</p></li>
				</ol>
				<p>Our team of four UX experts conducted a total of 10 moderated user tests on Zoom over the course of two weeks. The usability study included a diverse set of participants, ranging from those with expertise with the Digital Archives to users with little to no familiarity with the Philharmonic or its archives. This report presents findings pulled from the robust quantity of data we collected from these users alongside five recommendations for addressing major issue areas.</p>

				<h2 id="methodology">Methodology</h2>
				<h3>Test Plan</h3>
				<p>Our team selected a moderated user test methodology to conduct this usability study. Moderated user tests are a form of lab experiment that involves users as participants, is conducted in a controlled environment, and is actively moderated by a usability expert (Bierlein, 2022). We asked users to follow a “think-aloud” method and share their screens with us as they navigated a series of five tasks that tested user workflows that the Digital Archives’ team was most interested in understanding. We paired a moderator and notetaker together to facilitate each session, with the moderator prompting each user via a script to complete all tasks and the notetaker writing detailed observations for later analysis. Overall, this technique enabled our team to directly observe and share observations with each other about how participants navigated key areas of the site: what they enjoyed, and where they ran into trouble.</p>
				<p>Once the team met with our client to confirm the study’s scope and goals, we further defined our moderated user test strategy. This included targeting specific user groups, the equipment needed to complete the tests, the format of the test sessions and tasks, and metrics collected, such as pre- and post-test questionnaires and post-task assessment questions. In order to streamline scheduling and recording of the tests, the team opted to schedule remote interviews over in-person moderated tests on Pratt’s campus. Remote moderated user testing allowed for our team to pair up moderators and note-takers based on time available, while also offering greater flexibility in recruitment, scheduling, and completing the 30-to-60 minute user tests over a two-week time period.</p>
				<p>The overview of our remote moderated user testing strategy is included below; the full procedure and materials can be found in Appendix A: User Profiles (page 28), Appendix B: Testing Script (pages 29–31), Appendix D: System Usability Scale (SUS) & Calculations (pages 28–40), and Appendix E: Consent and Pre-test Forms (pages 41–42).</p>

				<h3>Users</h3>
				<p>The Digital Archives team took us through an overview of the site’s history and reasons for a redesign: optimizing usability and accessibility for potential and existing users. We learned that existing users are thought to be a combination of researchers regularly performing investigative searches, and non-scholarly users performing casual research — for instance, seeking records on a relative, a specific performance they attended, or a piece of music they enjoy.</p>
				<p>With this context in mind, we identified the following three key user groups, which we named “Amateurs,” “Explorers,” and “Professors”:</p>
				<ul>
					<li><p>Amateurs: Students and other first time visitors to the digital archives site who are highly familiar with the internet and search tools. They may be looking for a specific resource, such as a piece of music or a photograph of a relative.</p></li>
					<li><p>Explorers: Young professionals with some exposure to the New York Philharmonic who are exploring what the archives have to offer.</p></li>
					<li><p>Professors: Researchers highly familiar with online archives and the Digital Archives site; specifically, those who want to do deep dive research into a subject or person.</p></li>
				</ul>
				<p>Our team focused primarily on Amateurs (first time users) and Professors (those with site familiarity and longtime expert researchers). Explorers, while slightly more familiar with the Philharmonic, but not the archives specifically, were a secondary target group that we identified as able to potentially provide us with unique user experience insights. In recruiting across these three groups, we aimed for purposive sampling that would yield a group of test participants who were representative of all of the Digital Archives’ intended audiences (Rubin Chisnell, 2008). For moderated user testing to result in valid and useful insights, best practice is to aim for at least five user tests, but with our target user groups in mind, we aimed for roughly twice that amount in order to obtain the most robust feedback in the time we had (<a href="http://www.nngroup.com/articles/ten-usability-heuristics/">Nielsen, 2012</a>). Our final user profiles can be found in Appendix A (page 28).</p>

				<h3>Recruitment</h3>
				<p>Our goal was to test between six and ten participants in total, including two to three from each target user group, especially focusing on Amateurs and Professors. To reach this goal, our recruitment strategy involved broadly calling for participants from Pratt Institute via listservs and from student groups that visited the New York Philharmonic during the recruitment period. Our call for participants included a brief description of the purpose for the study as well as the incentive of a $10 Amazon gift card for participating. Our interest form collected basic contact information and career/study fields, as well as gauged expertise generally with the internet, research, digital exhibitions, the New York Philharmonic, and specifically with their Digital Archives site. Once the team reviewed responses and classified each respondent by target user group, we followed up with those who met our criteria in order to schedule their tests and ensure they completed our consent to participate and a pre-test questionnaire. These pre-test materials can be found in Appendix E (page 41–42).</p>

				<h3>Participants</h3>
				<p>Ten participants were recruited in total, three of which were “Experts” and seven of which were “Amateurs” or “Explorers” with varying levels of familiarity with the NY Phil. Experts included those with frequent experience working with both archives in general and the Digital Archives in particular.</p>
				<p>Participants came from a range of industries, evenly split between Art & Design, Humanities, Education, Technology, and Business & Finance. All participants both used the internet and search engines daily, and used the internet to conduct research regularly, either on a daily or weekly basis. Four were monthly New York Philharmonic visitors, eight visited the Philharmonic website weekly or monthly, and four visited the Digital Archives site weekly or monthly. All but one participant used the internet to visit digital exhibitions regularly (daily, weekly, or monthly).</p>

				<h3>Tasks</h3>
				<p>Tasks were designed to cover the major areas identified by the client and team as important to the site’s user experience. We paired each task with a relevant “user goal,” such as the ability to do genealogical and other research, find a piece of music to play, find top news and exhibitions, and generally explore the site with ease as a new visitor. These user goals, paired with the “think aloud” method and open-ended post-task questions, allowed the team to study each user’s thought process as they navigated the site, how well the most important features and sections of the site worked for different users, and how successful users felt they had been with each task (Shade, 2017).</p>

				<figure className={css.figure}>
					<div>
						<p>All tasks begin on the NY Philharmonic Digital Archives homepage: <a href="https://archives.nyphil.org/">https://archives.nyphil.org/</a>.</p>
						<p>Task 0: Once you land on the home page, tell us any first impressions, thoughts, or anything else that comes to mind.</p>

						<p>Task 1:</p>
						<p>(a) Find a program that includes William Lincer, a member of the New York Philharmonic orchestra in the mid 1900s.</p>
						<p>(b) Once you have found a program, find an image of William Lincer that is not included in this program.</p>
						<p>User goal: I want to find a resource connected to my family member who I know was a member of the orchestra.</p>

						<p>Task 2:</p>
						<p>(a) Find the music for Tchaikovsky’s Nutcracker Ballet.</p>
						<p>(b) Find the sheet music for a clarinet.</p>
						<p>User goal: I want to find sheet music of a piece I want to play.</p>

						<p>Task 3:</p>
						<p>(a) Find the New York Philharmonic Archives’ digital exhibition about its first female musician.</p>
						<p>(b) Once you have found the exhibition, find out where she was born.</p>
						<p>User goal: I want to understand what types of resources are available through the NY Phil Archives website and find something that’s interesting to me.</p>
						 
						<p>Task 4:</p>
						<p>(a) Find the New York Philharmonic Archives’ newly digitized set of press clipping scrapbooks, which are featured on their homepage.</p>
						<p>(b) Once you have found the set, locate a press clipping scrapbook that documents one of the New York Philharmonic’s park concert series.</p>
						<p>User goal: I want to explore newly digitized resources that are relevant to my research interests.</p>

						<p>Task 5:</p>
						<p>(a) Now, imagine you’re researching how orchestras like the New York Philharmonic reached audiences during the COVID-19 pandemic, which began around March of 2020. Find a recording of one of the virtual performances offered by the Philharmonic in the first few months of the pandemic.</p>
						<p>(b) Going back to your search results, which soloist performed the most times during the first few months of the pandemic?</p>
						<p>User goal: I want to find contemporary musical recordings and records for research.</p>

						<p>Post-task questions: (open-ended and posed after each task)</p>
						<p>How difficult was this task to complete?</p>
						<p>How successful do you feel you were in completing this task?</p>
					</div>
				</figure>

				<h3>Post-test</h3>
				<p>At the end of each test session, users were asked to stay on Zoom and complete a quick System Usability Scale (SUS) survey through Google forms. The SUS survey is a nonproprietary, quick, and easy way to assess usability broadly across user interfaces using ten questions asking users to rate their responses on a five-point scale from Strongly Disagree to Strongly Agree (Bangor et al., 2009). Not only is the SUS valid as a tool to help teams generally classify systems as usable or unusable, but it is also effective when used with small sample sizes like ours (Usability.gov, 2022).</p>
				<p>In addition to the SUS, users were asked one additional emotion-focused question (“What are five words you would use to describe the Archives site?”) to gauge their experience with the Digital Archives during our tests. All users completed the SUS, but due to an error in the survey, only five of the ten completed the final emotion-focused question. More details and results of the SUS survey can be found in “Findings and Recommendations” (page 9) and in Appendix D (pages 38–40).</p>

				<h3>Analysis</h3>
				<p>After each test, the session’s moderator and notetaker spent 5–10 minutes debriefing the session and highlighting themes that arose. Notetakers cleaned their notes while moderators uploaded the test video to share with the rest of the team, who reviewed both these items. After all tests were completed, the team consolidated notes, pulling out major successes and challenges from each task using the rainbow sheet method (Cabrera-Mieles, 2019). This method allowed the team to first identify all of the issues users experienced across all sessions, then consolidate the issues that repeated across multiple tests, and, finally, count the number of users who experienced repeat issues and sort these by severity (see more in “Findings and Recommendations” on page 9).</p>
				<p>As a supplement to the analysis, two team members conducted an ad-hoc accessibility audit with a domain expert. They reviewed the areas of the Digital Archives most frequently visited during the user tests using the WAVE system. This helped inform the recommendations the team made as well as identify other areas of work to meet the Web Content Accessibility Guidelines (WCAG).</p>
				<p>With the list of user issues compiled and noted by severity, our team created a series of recommendations to address each issue in order of priority, as well as a brief interpretation of the System Usability Scale (SUS) survey results. We detail these findings and recommendations in the following section.</p>

				<h2 id="results">Findings and Recommendations</h2>
				<p>Overall, participants had positive first impressions of the Digital Archives. They appreciated how clearly the Search was featured on the homepage, and often commented that the site felt welcoming in comparison to other archives sites they’ve visited in the past. Users also commented positively about the types of resources made available to them, often commenting how interesting it was to see markups on the digitized documents.</p>
				<aside>
					<p>“It’s a very well designed interface. It does match the culture of the New York Philharmonic. (...) It is not a very cutting edge or interactive interface, but I think it is appropriate considering the culture and nature of the institution being displayed.”</p>
					<p>Comment made while viewing the homepage.</p>
				</aside>

				<p>Impressions of the site as a whole, however, were mixed. As discussed in Methodology, participants were asked what words they would use to describe the Digital Archives in the post-test survey, and their words illustrate this mixed-reaction well.</p>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-1.png" alt=""/>
					<figcaption className={css.caption}>Figure 1: Word cloud generated from user responses to the post-test survey.</figcaption>
				</figure>

				<p>From this series of user tests, the Digital Archives received a raw SUS score of 60.3, equivalent to a D grade (average=68). The score is higher than 29.29% of other websites, and correlates to an “OK” rating of usability on a scale of Best Imaginable to Worst Imaginable (Bangor et al., 2009). This score is not an absolute number, but serves as an internal benchmark for testing the usability of a website after future changes and improvements are made.</p>
				<p>We identified 48 problems, 20 of which were identified by 2+ users. Users identified an average of 8.4 problems each. These problems occurred in 6 locations: the Search Result (22), Home (10), Performance History (7), Resource (5), Features (1), and All (1) pages.</p>
				<p>These results offer the Digital Archives a clear opportunity to improve. This report presents five detailed sets of findings and recommendations to address usability concerns selected based on their frequency and severity:</p>
				<ol>
					<li><p>Recommendation 1: Improve navigation usability and accessibility by updating styling, spacing, and text.</p></li>
					<li><p>Recommendation 2: Update style and navigation elements on the carousel to make it more intuitive and accessible.</p></li>
					<li><p>Recommendation 3: Streamline search results page with consolidated sort and filter options.</p></li>
					<li><p>Recommendation 4: Move pop-up modal underneath each filter and introduce a search bar for the filter options when opened.</p></li>
					<li><p>Recommendation 5: Minor findings and recommendations</p></li>
				</ol>
				<p>Each of these recommendations was directly informed by users’ experiences during our tests. Each recommendation section includes both a discussion of the specific challenges users faced and a series of sub-recommendations for consideration.</p>

				<h3>Recommendation 1: Improve navigation usability and accessibility by updating styling, spacing, and text.</h3>
				<p>First impressions of the homepage and the main navigation were generally positive. Users appreciated that the search bar is featured prominently and recognized it as the main way of engaging with the Digital Archives’ collection. Many users commented positively on the inclusion of the eye-catching carousel and identified it as a place to find things that the Digital Archives wanted to highlight to its visitors.</p>
				<aside>
					<p>“I definitely like that the first thing I see is the ‘Search the Digital Archives’ section.”</p>
					<p>“Nice little carousel.”</p>
				</aside>
				<p>In attempting to interact with these elements, however, users ran into several issues. If solved, these revamped elements could improve the user experience of the site as a whole.</p>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-2.png" alt=""/>
					<figcaption className={css.caption}>Figure 2: Main navigation and search bars on the homepage.</figcaption>
				</figure>

				<p>When visiting the homepage for the first time, several users experienced issues using the main navigation bar. Out of 10 total participants, three attempted to click the “Digital Archives” label when exploring what the site had to offer, which resulted in confusion — “Digital Archives” is the name of the homepage and is not designed to be interactive while the user is on that page. All navigation labels are styled the same regardless of whether or not they represent an active page. Their styling also matches the styling of body text and no changes occur to the labels when a user hovers over them — both signifiers that text is, or is not, interactive.</p>
				<p>This affects usability and accessibility. WebAIM states, “Links should look like links, and nothing else should” (WebAIM, 2019). WCAG v2.1 has two accessibility success criteria that address link styling and their implementation:</p>
				<ul>
					<li><p>1.4.1 Use of Color (A): Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element (W3C, 2016d).</p></li>
					<li><p>2.4.8 Location (AAA): Information about the user's location within a set of Web pages is available (W3C, 2016c).</p></li>
				</ul>
				<p>Users who interacted with the “Features” label also had difficulty understanding what it signified. Using the “Features” page was an option for completing multiple tasks in our tests, but only one user found and clicked the label to attempt to find task information.</p>
				<p>While most users read and commented positively on the explanatory text offered under “Search the Digital Archives” about the collection’s offerings, users who were less experienced with searching archival sites, or with the New York Philharmonic, often did not understand that the Digital Archives specifically offers access to resources related to the New York Philharmonic, not traveling orchestras or other musical institutions. This confusion resulted in later issues with searching for and filtering through search results.</p>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-3.png" alt=""/>
					<figcaption className={css.caption}>Figure 3: Screenshots of the first view of Homepage and Search Results pages.</figcaption>
				</figure>

				<p>Finally, users noted issues with the size of the navigation bar. On some browsers, such as Safari and Chrome, the size of the navigation bar pushed down the main content of the page — not just on the homepage, but also on Search Result pages — creating frustration for multiple users. One credited the size of the Navigation bar as the reason they missed the Document Type categories when searching for the part of a score.</p>
				<aside>
					<p>“They’ve really made you scroll.”</p>
					<p>Comment made while navigating past the navigation bar on a Search Results page.</p>
					<p>“I can barely see this.”</p>
					<p>Comment made as they were explaining that they nearly missed the carousel because of the size of the navigation bar.</p>
				</aside>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-4.png" alt=""/>
					<figcaption className={css.caption}>Figure 4: Annotated mockup of recommendations to improve the usability of the navigation bar.</figcaption>
				</figure>

				<ol>
					<li><p>Recommendation 1.1: Add link styling to the navigation labels to make it clear that they are interactive links and that each label on any given page signifies the active page. Per WCAG v2.1, these links should be distinguishable through means other than solely color, have a unique hover state, and display the active page. The mockup above changes all links to bold to differentiate them from body text, adds an underline to active pages, and gives them an underline and color change (#0E6AE7, Digital Archive’s “brand-blue-ada”) on hover.</p></li>
					<li><p>Recommendation 1.2: Change the “Features” label to “ Exhibits.” The Digital Archives team may consider breaking out announcements of new digitized collections, podcasts, and other non-exhibit items into a new “Special Projects” label. Unmoderated card sorting and tree testing with users can help the team determine the most intuitive label for these section(s) (Spencer, 2004; Optimal Workshop, n.d.; Spencer, 2014).</p></li>
					<li><p>Recommendation 1.3: Add “...from the New York Philharmonic” to the explanatory text offered about the Digital Archives’ collections by the search bar. Most users in our tests did read this text, and this simple addition would make it clear to them what the site contains.</p></li>
					<li><p>Recommendation 1.4: Shrink the top navigation slightly to ensure the primary content on all pages is emphasized. The size change in the above mockup was achieved by shrinking the height of the logo from 200 pixels to 150 pixels.</p></li>
					<li><p>Recommendation 1.5: Make additional adjustments to improve accessibility of main navigation and search. The mockup above addresses the following WCAG v2.1 success criteria:</p></li>
				</ol>
				<ol>
					<li><p>1.5.3 Contrast (Minimum) (AA): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1. All instances of the use of brand-blue (#1276FF), which has a contrast ratio of 4.14:1 against white and 3.8:1 against the site’s light gray, have been adjusted to brand-blue-ada (#0E6AE7), which which has a contrast ratio of 4.95:1 against white and 4.54:1 against the site’s light gray</p></li>
					<li><p>1.5.5 Target Size (AAA): The size of the target for pointer inputs is at least 44 by 44 pixels. The size of the form fields and the “Search” button have been adjusted to a height of 44 pixels.</p></li>
				</ol>
				<p>While making these changes, the Digital Archives team may also consider adding navigation role attributes to the site’s code to address WCAG v2.1 success criteria 1.3.6 Identify Purpose (AAA) (W3C, 2016b). The site already correctly marks the header, main, and footer regions, but the navigation region has not been defined. Under the same success criteria, a WAVE analysis of the homepage also determined that the form label for the “From (mm/dd/yyyy)” field is not correctly attached; however, the other form labels are working correctly.</p>

				<h3>Recommendation 2: Update style and navigation elements on the carousel to make it more intuitive and accessible.</h3>
				<p>While users often commented positively on the carousel on a first visit to the homepage, in Tasks 3 and 4 — which were designed to test the usability of finding content in the carousel — four out of 10 of users first attempted to use the search to find that content. Of the 10 total users, four described their eventual discovery of task-related content in the carousel as spontaneous and “lucky.”</p>
				<aside>
					<p>"It's luck to see what the page loads on the carousel and if it wouldn’t have showed up [via the automatic timing that flips through carousel banners], I wouldn't have known that it was there."</p>
				</aside>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-5.png" alt=""/>
					<figcaption className={css.caption}>Figure 5: Screenshot of a carousel slide demonstrating hard-to-see navigation buttons.</figcaption>
				</figure>

				<p>If the user didn’t experience serendipitous discovery of the content they needed by the carousel happening to be on the correct slide when they looked, the user ran into trouble attempting to engage with and move forward through the carousel slides. There are two options to use the carousel on desktop: squares that signify how many slides there are and enable a user to navigate forward and backward, and a dragging functionality. No users attempted to use the dragging functionality, and while the squares are more straightforward, the contrast is low and few users engaged with them.</p>
				<p>The contrast of the buttons is an accessibility issue. WCAG v2.1 1.4.3 Contrast (Minimum) (AA) requires a contrast ratio of at least 3:1 for graphics and user interface components (W3C, 2016a). The active square has a contrast of 6.14:1 against the darkest header image, but the rest land within the 2.38:1–1:1 range. The inactive have less contrast and land within 1.23:1–1.06:1.</p>
				<p>The carousel is designed to automatically move forward, but user interaction in some form may pause it. The rules of this interaction are not obvious, and a user can become confused when the carousel stops moving, especially if they cannot see the navigation buttons.</p>
				<aside>
					<p>“I think it would be helpful to have (...) more user capacity to change between the slides.”</p>
					<p>User could not see the buttons and was waiting for the carousel to move forward on its own.</p>
					<p>“Maybe if there's a carousel thing that I'm missing…that’s where that’s located and I don’t know how to navigate through [it].”</p>
				</aside>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-6.png" alt=""/>
					<figcaption className={css.caption}>Figure 6: Annotated mockup of recommendations to improve the usability of the carousel.</figcaption>
				</figure>

				<p>Recommendation 2: Improvements should be made to the navigation options to move through a carousel. These improvements include:</p>
				<ol>
					<li><p>2.1: Change the color of the navigation buttons. This mockup uses brand-blue-ada (#0E6AE7) at 100% for active squares and 50% for inactive squares. Note, this is not contrast accessible on all banners, so it must be used in combination with 2.2.</p></li>
					<li><p>2.2: Navigation arrows, which are available in the Flickity carousel code, should be unhidden. This mockup uses black and white, but other color combinations can be used as long as they have a contrast of 3:1 (W3C, 2016a).</p></li>
					<li><p>2.3: Change the color of the “Explore” buttons that appear on each header to brand-blue-ada (#0E6AE7) and the height to 44px which, as explained in Recommendation 1 (pages 11–14), is accessible by WCAG v2.1 success criteria 1.4.3 and 2.5.5.</p></li>
				</ol>
				<p>To make this website more accessible, the Digital Archives team should consider changing the squares to buttons with ARIA roles per WCAG v2.1 success criteria 1.3.6 Identify Purpose (AAA). This will make the carousel accessible to users navigating the website using assistive technologies. Our team also noticed that the Digital Archives is using the v2.0.5 version of the Flickity carousel, which was released in October 2016. The most recent version, v2.3.0, was released in December 2021. Updating the carousel code should bring enhancements to timing, navigation, and accessibility of this widget.</p>
				<p>The Digital Archives team may also consider redesigning their carousel or replacing it entirely with a new method to feature current exhibitions and projects to users. See Appendix F for two organizations whose current homepages may serve as helpful inspiration: the Metropolitan Museum of Art (page 44) and the Museum of Science and Industry, Chicago (page 45).</p>

				<h3>Recommendation 3: Streamline search results page with consolidated sort and filter options.</h3>
				<p>Users easily identified that the search function is a major piece of the Digital Archives, and the vast majority of them gravitated towards it immediately. Users found the search bar both clearly displayed and intuitive to use, and commented positively on the robust collection and breadth of information the site contained. However, in practice, the search results page and the results themselves could be confusing for users, requiring either further filtering to get to the information they were seeking or a complete restart of a search with different terms.</p>
				<p>Two key issue areas arose: one with the results page’s layout preventing users easily navigating and filtering search results, and the other with users obtaining inconsistent content in search results, such as receiving zero and/or incorrect results when searching for “nutcracker ballet.” The first issue we address below, and the second we discuss on page 20 as an area for further investigation. Both areas highlight a disconnect between users’ expected and actual experience obtaining search results; if addressed, this could streamline all site visitors’ ability to find specific information from the Digital Archives.</p>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-7.png" alt=""/>
					<figcaption className={css.caption}>Figure 7: A search for “william lincer photo” displaying two key issues with the layout of the Search Results page.</figcaption>
				</figure>

				<p>Regarding the page layout:</p>
				<ol>
					<li><p>1: Search results defaulted to showing Programs results only. If there were zero Programs available for the search, users often did not notice the other Document Type filter options and thought there were 0 results total.</p></li>
					<li><p>2: Many users looked for but could not find the Ascending/Descending sort options to make sense of their search results, and none used them.</p></li>
				</ol>
				<p>Across our test sessions, users explored several different pathways to filter their search results. Some navigated the Document Type tabs to explore Programs, Scores, Parts, etc., while others chose to open the side bar with filters such as Composers, Event Types, etc. No user made use of the “Sort” drop-down on the right hand side of the search results page, despite one user specifically looking for a way to sort alphabetically.</p>
				<aside>
					<p>“I need more information to know how to find this information”</p>
					<p>“I had to use the trial and error method to find this…looking at all the formats, like documents, programs, scores, I wasn’t sure where to find all the information."</p>
				</aside>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-8.png" alt=""/>
					<figcaption className={css.caption}>Figure 8: Annotated mockup of search result recommendations.</figcaption>
				</figure>

				<p>There are several quick fixes we recommend that could address these challenges:</p>
				<ol>
					<li><p>Recommendation 3.1: Consolidate sorting and filtering options.</p></li>
					<ol>
						<li><p>We recommend renaming the left hand section “Filter” since “Sort” already exists in the drop-down menu to the right.</p></li>
						<li><p>Though the Document Types (e.g. Programs) display results differently than Sort & Filter (e.g. Composer), we noticed that users usually only used one or the other option, and not both, even though they were both filters that updated search results in a similar way. Consolidating the filters would house them all in one place, further drawing users’ attention to the full range of filtering options.</p></li>
						<li><p>To make the “Sort” and “A-Z” feature easily discoverable, we recommend simply enlarging and adjusting the placement of the drop-down label and consolidating all options into the drop-down.</p></li>
					</ol>
					<li><p>Recommendation 3.2: Display search results content intuitively for users by adding “All Results” and displaying them consistently.</p></li>
					<ol>
						<li><p>We recommend creating an “All Results” category to display the total list of search results by default. Users can then narrow down and filter results from “All Results” via existing filters.</p></li>
						<li><p>If an “All Results” category is not possible, then adjusting the filter categories to make the results “cascade” could help ameliorate this issue. The cascade effect means that if the Programs category yields “0” search results, the page would automatically display the next category with results listed instead. If no category had results, only then would the search results page display a “No results found” message.</p></li>
						<li><p>Creating consistency across the search results, regardless of the filter selected, will help the user orient themselves to the vast quantity of information they may be sifting through. We recommend following the format of the “Scores” document type, using a thumbnail image next to each result instead of icons (as seen under “Programs,” for instance).</p></li>
					</ol>
				</ol>
				<p>We also recommend further investigation of the backend information organization and metadata to address inconsistencies with search results that our users experienced.</p>
				<p>For example, one user received a page of 0 results when they searched “Tchaikovsky’s nutcracker ballet.” They corrected by searching “Tchaikovsky’s nutcracker ballet,” but received no results that ended up being relevant to their inquiry. Another user experienced the same issue of results not actually being relevant to their search when using the keyword “nutcracker ballet.”</p>
				<aside>
					<p>One user remarked, after getting zero results repeatedly:</p>
					<p>“When you're searching and you get a lot of zeroes, you know you’re using the wrong terms.”</p>
				</aside>
				<p>Search recommendations may help users align their searches to the keywords used in resource metadata and self-correct these searching errors.</p>

				<h3>Recommendation 4: Move pop-up modal underneath each filter and introduce a search bar for the filter options when opened.</h3>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-9.png" alt=""/>
					<figcaption className={css.caption}>Figure 9: A search filter displaying three problems discussed in this section: 1) There are 200 pages of filter results to navigate through, 2) Clicking on the artists’ name makes a dropdown menu with work both relevant and not relevant to the larger search appear, and 3) The pop-up modal overlays the majority of the users’ screen, hiding the search results and the search bar.</figcaption>
				</figure>

				<p>Upon reaching the results page, users often instinctively looked under the ‘Sort & Filter’ menu to specify a specific instrument, composer, or soloist. When opening options under “Sort & Filter,” users are presented with a pop-up modal that often offers over 20 pages of results to sift through. For example, over 200 pages of filtering options appear when a user selects ‘soloists’, after searching for ‘Lincer, William’. The pop-up also covers the users’ entire screen. Users did appreciate that the results displayed were in alphabetical order, however, they frequently found navigation between multiple pages of results very time consuming.</p>
				<aside>
					<p>"I don't like skimming through all the pages, I find it very annoying."</p>
					<p>“There must be a better way to find an individual with this very long list.”</p>
				</aside>
				<p>Additionally, when the user clicked on a soloist, conductor, or composer/work they were seeking in the Sort and Filter list, another drop-down appeared listing options that were, and were not, related to the larger search being conducted. The user was then required to find and click on the option that related to their overall search in order to be redirected back to filtered search results. Users expected to be able to click on a soloist, conductor, or composer/work to be immediately directed back to a filtered search. This process added extra steps that created confusion for several users as they were narrowing search results and trying to reach their end goal.</p>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-10.png" alt=""/>
					<figcaption className={css.caption}>Figure 10: Annotated mockup of recommendations to streamline Sort and Filter menu.</figcaption>
				</figure>

				<p>To address these issues, we recommend the following:</p>
				<ol>
					<li>
						<p>Recommendation 4.1: Move the pop-up modal underneath the filter options</p>
						<p>To make it easier for the user to see the pop-up modal options while they're scanning through filters, we recommend moving the pop-up modal under its related filter option to appear like a drop down menu. This will give the user access to see both the filters and results at the same time.</p>
					</li>
					<li>
						<p>Recommendation 4.2 : Introduce a search bar under the filter options</p>
						<p>Implementing a search bar under the filter option allows the user to search directly for a specific filter option to find the result they’re looking for more quickly than the current pagination option offers alone. Removing the top pagination options minimizes redundancy and makes room for the new search bar. Users can continue to navigate through pages using the bottom pagination options. An ellipse is added inside the pagination to give the users a better sense of the amount of filters available to them.</p>
					</li>
					<li>
						<p>Recommendation 4.3 : Remove the additional layer of filtration options</p>
						<p>To save the users time and energy from clicking several times to reach the results page of that specific soloist, conductor, or composer/work, all initial options in the list are hyperlinked. The link will direct the user directly to a filtered results page of that option (for example, work filtered by the soloist they were most interested in). Removing this additional layer of the filter will save extra clicks and confusion.</p>
					</li>
				</ol>
				<p>If the Digital Archives team chooses to keep the existing pop-up modal that overlays search results, we recommend removing the ‘X’ option to close the modal and add a new option for closing it that is more intuitive for users: clicking on the filter they originally clicked to open it. Currently, when a user wants to go back to the full results page, they are forced to navigate back up to click on the ‘X’ on the top right of the modal. Additionally, adding a “keyboard escape” shortcut — allowing a user to press the Esc key to exit — will allow users to easily exit out of the filter and will address an accessibility barrier; no keyboard escape exists in the current pop-up modal.</p>
				<p>For another example of how the site’s filters could function, see an interesting example from the Pratt Libraries’ search function in Appendix F (page 43).</p>

				<h3>Recommendation 5: Minor Findings and Recommendations</h3>
				<p>While the above recommendations cover the most frequently experienced issues with the most severe impact on users’ experiences of the Digital Archives, users also noted other issues worth consideration. In our findings below, we detail where these issues were encountered and provide recommendations for addressing them.</p>
				<table>
					<tr><th>Topic</th><th>Location</th><th>Problem</th><th>Recommendation</th></tr>
					<tr><td rowspan="7">Accessibility Note: This report’s recommendations have worked to address accessibility concerns wherever possible, but are in no way comprehensive. To conduct a comprehensive audit, we suggest contacting an independent accessibility auditing firm.</td><td>Sitewide</td><td>Blue content does not consistently meet color contrast.</td><td>Change all ‘--brand-blue’ items to ‘--brand-blue-ada’</td></tr>
					<tr><td>Sitewide</td><td>Alt-text missing on pagination icons, information buttons</td><td>Ensure all icons have alt-text</td></tr>
					<tr><td>Search Results</td><td>Alt-text missing on result thumbnails</td><td>Ensure all images have alt-text</td></tr>
					<tr><td>Search Form</td><td>‘Search from’ form field isn’t associated with its label (currently “search-dates-type-range”)</td><td>Change label to ‘search-dates-from’</td></tr>
					<tr><td>Sitewide</td><td>Keyboard users cannot tell visually where they are on the page</td><td>Add focus rings and/or hover states</td></tr>
					<tr><td>Document Viewer</td><td>Document viewer cannot be exited without browser controls (i.e. user moving back to a previous page)</td><td>Add a close button and/or ‘return to information’ link</td></tr>
					<tr><td>Document Viewer</td><td>When searching documents, user could not see text highlights</td><td>Increase visibility of text highlights and/or create additional markers</td></tr>
					<tr><td rowspan="6">Metadata</td><td>Search Results</td><td>Query “Nutcracker ballet” lead to failure point</td><td>Include ‘Score type’ in metadata</td></tr>
					<tr><td>Search Results</td><td>Query “Press clippings, new lead to failure point</td><td>Allow for less strict searching, even as fallback</td></tr>
					<tr><td>Search Results</td><td>Query “William Lincer image” lead to failure point</td><td>Allow document type to be searched</td></tr>
					<tr><td>Search Results</td><td>Query “First female musician” lead to failure point</td><td>Include Digital Archives articles and exhibits in search results</td></tr>
					<tr><td>Image Results</td><td>Users were unable to associate names with individuals in photos</td><td>Ensure name order matches image and/or label individuals on image</td></tr>
					<tr><td>Performance History</td><td>Virtual performances are tagged inconsistently in event type</td><td>Review virtual performances for correct tags</td></tr>
					<tr><td rowspan="4">User Interface</td><td>Homepage</td><td>At narrow viewport sizes, ‘explore’ button is hidden behind footer <img className={css.figureObject} src="/images/article-nyp-3.png" alt=""/></td><td>Ensure the carousel expands to fit all text content</td></tr>
					<tr><td>Image Results</td><td>Users clicked multiple times on an image in order to open modal</td><td>Make ‘loading’ message more prominent</td></tr>
					<tr><td>Image Results</td><td>Users confused by the mismatch between stated number of images and image thumbnails</td><td>Provide feedback for images that are present in results, but yet to load e.g. thumbnail frame</td></tr>
					<tr><td>Search Results</td><td>Users confused why their filters disappeared when looking between document types</td><td>Unify and persist filters</td></tr>
					<tr><td rowspan="5">Links and labels. Note: The label text suggested here are recommended as a starting point. We suggest conducting A/B tests to determine which labels work best for the Digital Archives specific user base.</td><td>Performance History</td><td>User uncertain of the differences between ‘NY Philharmonic Ensemble’ and ‘New York Philharmonic’ e.g.</td><td>Create modal with information about the different groups</td></tr>
					<tr><td>Search Results</td><td>Users uncertain what “555” meant in context “Press Scrapbooks”</td><td>Link to “Press Clippings” series filter rather than ID search query</td></tr>
					<tr><td>Program Details</td><td>Users attempted to click “Found in” breadcrumbs</td><td>Make breadcrumbs clickable/lead to appropriate search</td></tr>
					<tr><td>Search Results</td><td>Users uncertain what “Business documents” filter contained</td><td>Consider “Administrative documents”, and potentially splitting into multiple filters</td></tr>
					<tr><td>Performance History</td><td>Users uncertain what “Performance History” contained</td><td>Consider “Search Performance History” label or “Advanced Performance Search”</td></tr>
					<tr><td rowspan="3">Knowledge Organization</td><td>Program Details</td><td>Users occasionally missed media player to view performances</td><td>Provide skip link in results to jump to performance</td></tr>
					<tr><td>Search Results</td><td>Users wished to see how results were relevant to their search</td><td>Visually highlight keywords in metadata preview for each resource on a search results page</td></tr>
					<tr><td>Search Results</td><td>Users wished to quickly filter based on their query. E.g. “William Lincer” is on page three of the ‘Soloist’ filter when searching for “William Lincer.”</td><td>Consider alternate rankings for filters i.e. rank by number of results, not alphabet</td></tr>
				</table>

				<h2 id="conclusion">Conclusion</h2>
				<p>The New York Philharmonic Shelby White & Leon Levy Digital Archives is working to improve the discoverability and accessibility of the archival materials in the digital repository. To inform larger work being conducted under a five-year grant project funded by the National Endowment for the Humanities, they partnered with the Pratt Institute Center for Digital Experiences to conduct a series of remote user tests for the Digital Archives. These tests involved ten participants, ranging from amateur to expert users, completing a series of five tasks over Zoom in the presence of one moderator and one notetaker from the team. The results of these sessions, along with participant questionnaires and the team’s domain knowledge, were then synthesized into the findings outlined in this report.</p>
				<p>Participants emphasized many of the positive aspects of the Digital Archives. This included the overall aesthetic, the prominence of the search functionality, the breadth of content, and the implementation of the carousel. Unfortunately, users also experienced a variety of usability issues as they completed the test tasks, such as their search queries returning unexpected or incorrect results, failing to understand how to interact with the content, and an uncertainty as to what certain functions accomplished.</p>
				<p>To help address these issues, the team recommends taking the following actions:</p>
				<ol>
					<li><p>Recommendation 1: Improve navigation usability and accessibility by updating styling, spacing, and text.	</p></li>
					<li><p>Recommendation 2: Update style and navigation elements on the carousel to make it more intuitive and accessible.	</p></li>
					<li><p>Recommendation 3: Streamline search results page with consolidated sort and filter options.</p></li>
					<li><p>Recommendation 4: Move pop-up modal underneath each filter and introduce a search bar for the filter options when opened.</p></li>
					<li><p>Recommendation 5: Minor findings and recommendations</p></li>
				</ol>
				<p>We believe that following these recommendations will improve the overall user experience on the Digital Archives. Improvements to site usability can be tracked by running further System Usability Scale (SUS) surveys (see “Methodology,” page 8 and “Findings and Recommendations,” page 9 ), and comparing new scores to the current score of 60.3. Topics for further investigation include a comprehensive accessibility audit, A/B testing of components and labels, card sorting/tree testing of the sitemap, and additional moderated user testing once changes have been implemented.</p>

				<h2 id="appendix">Appendix</h2>
				<h3>Appendix A: User Profiles</h3>
				<table>
					<tr><th>Category</th><th>Amateur Alice</th><th>Explorer Ethan</th><th>Professor Polly</th></tr>
					<tr><td>Occupation</td><td>Student</td><td>Young Professional</td><td>Researcher/ Archivist</td></tr>
					<tr><td>Product Familiarity</td><td>Never visited the site</td><td>Familiar with NYP, but not archive</td><td>Familiar with the archive</td></tr>
					<tr><td>Search Experience</td><td>Google, TikTok</td><td>Google</td><td>Archives, Research Libraries, NYP Archive</td></tr>
					<tr><td>Cultural Experience</td><td>Trained musician</td><td>NYP attendee/donor</td><td>Deeply immersed in the field</td></tr>
					<tr><td>Engagement</td><td>Get in, get out</td><td>Take time to look around</td><td>Will work to find what they're looking for</td></tr>
					<tr><td>Goals</td><td>Find specific resources</td><td>See what the archives have on offer</td><td>Find out everything they can about a subject</td></tr>
					<tr><td>Site requirements</td><td>Save/Share archive files</td><td>Easy navigation, discoverability</td><td>Cross reference, in-depth search</td></tr>
					<tr><td>Recruiment goal</td><td>2-3 Participants</td><td>2-3 Participants</td><td>2-3 Participants</td></tr>
				</table>

				<h3>Appendix B: Testing Script</h3>
				<h4>Pre-Intro</h4>
				<p>Hey, [NAME], my name’s [NAME], thanks for joining us for some user testing today.</p>
				<p>Before we formally begin and I start recording our session, I’d like to test your screen sharing capabilities. Would you please screenshare a blank browser window or a webpage of your choice?</p>
				<p>That all seems to be working. Please keep the screenshare on. We also have live transcription on for today, if you can see that? Just to let you know, I’m going to be following a script today to ensure I’m providing the same information as my team members in each of our tests. Any questions before we begin recording?</p>
				<p>[Once confirmed, start recording]</p>
				<h4>Introduction</h4>
				<p>Okay the recording has begun. The recording itself will only be used internally, and the results will be anonymised for the final report, which will be presented to the Client and Pratt Institute.</p>
				<p>This is a user test of the New York Philharmonic Digital Archives on [Date]. My name is [primary], I’m a graduate student at the Pratt Institute School of Information, and I’ll be conducting today’s interview. We’re also joined by my fellow student [secondary] who will be taking notes and helping out as needed. [participant], could you please introduce yourself with your name, occupation, and any previous experience you have with the New York Philharmonic? (If any)</p>
				<p>[Participant Introduction]</p>
				<h4>Brief</h4>
				<p>Perfect, thank you so much for joining us today. Have you ever done any user testing before? (Y: This should all sound pretty familiar to you then. N: Don’t worry, we’ll walk you through it).</p>
				<p>The way this is going to work is we’re going to go to the New York Philharmonic Digital Archives website, and you’ll be asked to complete a series of five tasks in increasing difficulty, each of which will have a couple of smaller steps. For each step, we’ll paste the prompt into the chat as well for your reference. As you’re working towards each task, we would appreciate it if you can think aloud as much as possible. So say whatever thoughts come into your head so we can get an idea of what you’re thinking.</p>
				<p>There’s no pressure to complete these tasks in a certain amount of time or clicks; we’re more interested in the way you’d go about this naturally. We’re here to test the site and not you. If you need to take a break at any time, just let us know. The same goes If you do not want to complete a task, let us know and we’ll move on to the next task. You may also end the session and leave at any time.</p>
				<p>We may ask you some clarifying questions as you’re completing each task, but we will mostly be observing. After each task, there will be some follow-up questions, and there will also be a brief survey for you to complete after the final task. In total, this shouldn’t take us more than 45 minutes, so we’ll be done by [time]. Any questions?</p>
				<h4>Tasks</h4>
				<p>Shall we get started then? I’m going to send you a link to the Digital Archives in the chat. For now just follow the link and, without clicking anything, have a look around the page. Tell us any first impressions, thoughts, or anything else that comes to mind.</p>
				<p>Let’s get started with our first task then.</p>
				<p>Task 1</p>
				<ul>
					<li><p>Task 1a: Find a program that includes William Lincer, a member of the New York Philharmonic orchestra in the mid 1900s. Think aloud as you go so we can follow along.</p></li>
					<li><p>Task 1b: Find an image of William Lincer that is not included in this program.</p></li>
					<li><p>Post task questions:</p></li>
						<li><ul>
							<li><p>How difficult was this task to complete?</p></li>
							<li><p>How successful do you feel you were in completing this task?</p></li>
						</ul></li>
					<li><p>On to our second task. If you could please navigate back to the homepage.</p></li>
				</ul>
				<p>Task 2</p>
				<ul>
					<li><p>Task 2a: Find the music for Tchaikovsky’s Nutcracker Ballet.</p></li>
					<li><p>Task 2b: Find the sheet music for clarinet for The Nutcracker. [send in chat]</p></li>
					<li><p>Post task questions:</p></li>
						<li><ul>
							<li><p>How difficult was this task to complete?</p></li>
							<li><p>How successful do you feel you were in completing this task?</p></li>
						</ul></li>
					<li><p>On to our third task. If you could please navigate back to the homepage.</p></li>
				</ul>
				<p>Task 3</p>
				<ul>
					<li><p>Task 3a: For our third task, we’d like you to visit the Archives’ digital exhibition about its first female musician.</p></li>
					<li><p>Task 3b: Now that you’ve found the exhibition, can you tell me where this musician was born?</p></li>
					<li><p>Post task questions:</p></li>
						<li><ul>
							<li><p>How difficult was this task to complete?</p></li>
							<li><p>How successful do you feel you were in completing this task?</p></li>
						</ul></li>
					<li><p>On to our fourth task. If you could please navigate back to the homepage.</p></li>
				</ul>
				<p>Task 4</p>
				<ul>
				<li><p>Task 4a: Next, without leaving the homepage, find the Digital Archives’ newly digitized set of press clipping scrapbooks.</p></li>
				<li><p>Task 4b: Once you have found the set, locate a press clipping scrapbook that documents one of the New York Philharmonic’s parks concert series.</p></li>
				<li><p>Post task questions:</p></li>
					<li><ul>
						<li><p>How difficult was this task to complete?</p></li>
						<li><p>How successful do you feel you were in completing this task?</p></li>
					</ul></li>
				<li><p>On to our fifth and final task. If you could please navigate back to the homepage.</p></li>
				</ul>
				<p>Task 5</p>
				<ul>
					<li><p>Task 5a: Now, imagine you’re researching how orchestras like the New York Philharmonic reached audiences during the COVID-19 pandemic, which began around March of 2020. Find a recording of one of the virtual performances offered by the Philharmonic in the first few months of the pandemic.</p></li>
					<li><p>Task 5b: Find out which soloist performed the most times during the first few months of the pandemic.</p></li>
					<li><p>Post task questions:</p></li>
						<li><ul>
							<li><p>How difficult was this task to complete?</p></li>
							<li><p>How successful do you feel you were in completing this task?</p></li>
						</ul></li>
				</ul>
				<h4>Debrief</h4>
				<p>Thank you for completing these tasks. If you could stop sharing your screen at this point. The last thing I’m going to ask you to do is complete a short questionnaire to record your impressions of the website and this test. I will send you the link to the questionnaire in the chat. I’ll mute myself while you finish, and please let me know when you’ve completed it. Please also take all the time you need to do so.</p>
				<p>[Participant completes questionnaire]</p>
				<p>I believe that wraps up everything we have for you. Thank you for your time today. You’ll receive an email follow-up in the next 24 hours confirming your participation and a form to receive your $10 Amazon gift card, which you should receive in 7-14 business days via email. You can reach us any time by email if you have any issues. If you’re interested in having a copy of the report, please let us know. All this information will be in the follow-up email. Did you have any questions for us before we part ways?</p>
				<p>Alright, again thank you so much for your participation, you’ve provided some valuable insights. Have a great rest of your day.</p>

				<h3>Appendix C: Rainbow Chart</h3>
				<table>
					<tr><th>Problem</th><th>Location</th><th>P1</th><th>P2</th><th>P3</th><th>P4</th><th>P5</th><th>P6</th><th>P7</th><th>P8</th><th>P9</th><th>P10</th></tr>
					<tr><td>User has difficulty navigating through a large set of search filters; there is no way to search them or change their order from alphabetical</td><td>Search Results</td><td></td><td>x</td><td></td><td>x</td><td></td><td>x</td><td>x</td><td></td><td>x</td><td>x</td></tr>
					<tr><td>Confusion about who is who in image; unclear the order that names are listed in and how to associate them with individuals in the photo</td><td>Resource Page</td><td></td><td></td><td>x</td><td>x</td><td></td><td></td><td>x</td><td></td><td>x</td><td>x</td></tr>
					<tr><td>User experienced issues finding the clickable squares that allow a user to navigate through the carousel</td><td>Homepage</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td>x</td><td>x</td></tr>
					<tr><td>Discovery of Stephanie Goldner exhibition is spontaneous - user only found the exhibition because the carousel happened to automatically move to the correct slide while looking for it.</td><td>Homepage</td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td>x</td></tr>
						<tr><td>Attempted to search for Stephanie Goldner exhibition in search bar by using "first female musician" or another variation which led to 0 results; user believes everything, including exhibitions, should be searchable through the search bar</td><td>Search Results</td><td>x</td><td></td><td></td><td></td><td></td><td>x</td><td>x</td><td>x</td><td></td><td></td></tr>
						<tr><td>User wants search recommendations when typing search terms; thought this would help her when receiving 0 results for "nutcracker ballet" or "Tchaikovsky's nutcracker ballet"</td><td>Search Results</td><td></td><td></td><td>x</td><td></td><td>x</td><td></td><td>x</td><td>x</td><td></td><td></td></tr>
					<tr><td>Orchestra or Group label is unclear: user doesn't understand differences between NY Philharmonic Ensembles, New York Philharmonic, Stadium-NY Philharmonic</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td>x</td><td>x</td></tr>
					<tr><td>User looks to navigation at the top of page to find information about exhibitions and special collections and can't find what they're looking for; Features label does not signify to the user that exhibitions can be found here</td><td>Homepage</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td>x</td></tr>
						<tr><td>User attempted to click on Digital Archives in nav multiple times; when on the homepage, this is not clickable.</td><td>Homepage</td><td>x</td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>for a virtual performance, user doesn't feel like the program is necessary; says it should be smaller; User does not understand what the program for virtual performances is and how to interact with it; user expects a program similar to in-person performances; user clicks arrow icons to try move forward and receives nothing.</td><td>Resource Page</td><td></td><td></td><td>x</td><td>x</td><td>x</td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User assumes they can filter by virtual performances in the location option, but this is not available to them.</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td>x</td><td></td></tr>
						<tr><td>Difficulty closing out of a detailed program view; user was looking for an X button where there was none</td><td>Resource Page</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td>x</td><td></td></tr>
						<tr><td>Dislikes how much space the navigation bar takes up.</td><td>Homepage</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>Difficulty searching for resources by terms included in program; search for "nutcracker ballet" returns no resources even though this is in the transcribed program metadata</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>Resource type filter terminology is a little confusing; not sure what program, business document mean; thinks score means only what a conductor sees, not the separate parts, too</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User missed that navigating to the scrapbooks search linked on the homepage leads to "business documents" results, and is not able to find the resources she had previously viewed when attempting a new search from the homepage because she is redirected to "programs"</td><td>Search Results</td><td>x</td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User believes breadcrumbs would be helpful</td><td>All</td><td></td><td></td><td>x</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Virtual performances are tagged inconsistently in event type; this is some, but not all virtual performances.</td><td>Performance History</td><td></td><td></td><td>x</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Image result loading is slow and results in user confusion as they try and understand how many results are actually available to them.</td><td>Search Results</td><td>x</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Thinks photos are of "Ancient times"</td><td>Homepage</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td></tr>
						<tr><td>Tab filters are hidden in dropdown on mobile view</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td></tr>
						<tr><td>User doesn't like having to enter dates in homepage search. Would rather see dates presented as filters</td><td>Homepage</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User thinks carousel turns too slowly</td><td>Homepage</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User doesn't like how much they have to scroll on the website, and feels it's caused by the big navigation bar</td><td>Homepage</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User doesn't like how far down on a resource page a recording is listed; it feels like a central piece of the resource page for her, and she;'d prefer it higher up</td><td>Resource Page</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User thinks using dates is required in searching from homepage</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User having trouble distinguishing between search results; thumbnails and metadata all look very similar to them; which they had date to help distinguish them</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User wants to see date of each resource in search results; this is important information for her; she's particular about the year of the nutcracker performance</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User dislikes how a user must exit out of the search filter; she wants to click an option again to close it</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>User doesn't see resource type filter and doesn't realize that it restricts her search; verbally says she's trying to find a score, but she doesn't see the score option</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td></tr>
						<tr><td>Hard to find on program where OCR result is</td><td>Search Results</td><td></td><td></td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Event types unclear, like "bandwagon"</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Number by first soloist field is confusing; does this note the amount of soloists?</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User wants to sort by all columns, but can only do so by first 9; which columns the user can sort by is not clear to the user until they hover</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User believes the filters needed to be used in a certain order to find information, and that she's receiving different results for the same query; this stems from confusing labels that seem similar but are different</td><td>Performance History</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Wants to be able to narrow search by name of a score; not finding an option to do so</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User doesn't feel that scrapbooks fit into the business documents category; that label is not clear to them</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Confusion in search filter terminology; difference between conductor and composer</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Search filters for conductor show more results than are relevant to the search; is slightly confusing</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User doesn't like that the filters open as a popup</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>When attempting to narrow a large set of results by a subject area, like events that are part of the parks series, user first looks to search filters to narrow it, but does not find options to do so; labels for search filters for business documents are confusing. Some are also described as redundant, like "press clippings"</td><td>Search Results</td><td></td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User clicked on and visited "Features" page. (Was looking for major news features; wanted to see a search box on this page to help find the press clippings.)</td><td>Features</td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Searched for “press clippings, new” in main search bar on homepage and got no results</td><td>Search Results</td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>Searched for "William Lincer photo" and got no results</td><td>Search Results</td><td></td><td></td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>If user window is small enough, carousel navigation overlaps with "Learn More" button</td><td>Homepage</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>User does not understand what the program for virtual performances is and how to interact with it; user expects a program similar to in-person performances; user clicks arrow icons to try move forward and receives nothing.</td><td>Resource Page</td><td>x</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
				</table>

				<h3>Appendix D: System Usability Scale (SUS) & Calculations</h3>
				<h4>System Usability Scale Questions</h4>
				<p>Responses fall on a five-point scale from Strongly Agree to Strongly Disagree for each of these questions, according to Usability.gov (2022):</p>
				<ol>	
					<li><p>I think that I would like to use this system frequently.</p></li>
					<li><p>I found the system unnecessarily complex.</p></li>
					<li><p>I thought the system was easy to use.</p></li>
					<li><p>I think that I would need the support of a technical person to be able to use this system.</p></li>
					<li><p>I found the various functions in this system were well integrated.</p></li>
					<li><p>I thought there was too much inconsistency in this system.</p></li>
					<li><p>I would imagine that most people would learn to use this system very quickly.</p></li>
					<li><p>I found the system very cumbersome to use.</p></li>
					<li><p>I felt very confident using the system.</p></li>
					<li><p>I needed to learn a lot of things before I could get going with this system.</p></li>
				</ol>

				<h4>System Usability Scale Calculations and Results</h4>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-d1.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-d2.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-d3.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-d4.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-d5.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-d6.png" alt=""/>
				</figure>

				<h3>Appendix E: Consent and Pre-test Forms</h3>
				<h4>New York Philharmonic Archives Usability Study:</h4>
				<p>The purpose of these usability tests is to evaluate the desktop/laptop experience for the New York Philharmonic's Shelby White & Leon Levy Archives website (archives.nyphil.org). We are interested in determining if people can accomplish desired tasks and easily find information housed on the site. The session is not a test of your ability to complete the tasks; it is meant to gather insights on areas of improvement for the Archives website. Please be advised that there are no risks associated with participation in this session.</p>
				<p>Procedure: During this session, the following will occur:</p>
				<ul>
					<li><p>I will log on to Zoom to join the session with two researchers at our scheduled time.</p></li>
					<li><p>I will share my video and my screen.</p></li>
					<li><p>I will be given tasks using the Archive’s website. While completing these tasks, I will be asked to “think aloud” to verbalize my thought process.</p></li>
					<li><p>Members of the Pratt Center for Digital Experiences will observe and take notes via Zoom. My actions on a computer will be captured via screen recording. Audio, photos, and/or video may be recorded from the session for future review.</p></li>
					<li><p>I will complete a brief online post-test questionnaire after the test is complete.</p></li>
					<li><p>The session will last no longer than 45 minutes (including time for pre and post-test activities).</p></li>
				</ul>
				<p>If for any reason you are uncomfortable during the session and do not want to complete a task, you may say so and we will move on to the next task. You may take a break at any time. You may also end the session and leave at any time.</p>
				<p>Confidentiality: Approximately 8 people will participate in this study. Results from all sessions will be included in a usability report and presentation for the Archives' representatives and a Usability graduate-level class at Pratt Institute. Your name will not be included in the report, nor will your name be associated with any session data collected unless disclosure is required by law.</p>
				<p>Contact: If you wish to speak with someone about your participation in this study, or if you feel you were not treated as described above, please contact [team emails].</p>
				<p>Statement of Consent: I have read and fully understand the extent of the study and any risks involved. All of my questions, if any, have been answered to my satisfaction. My signature below acknowledges my understanding of the information provided in this form and indicates my willingness to participate in this user testing session.</p>
				<p>Signature of participant & date: _____________________</p>

				<h4>Pre-test questionnaire:</h4>

				<p>Please type your signature:	_________</p>
				<p>Date: ________</p>
				<p>What internet browser do you typically use?</p>
				<ul>
					<li><p>Google Chrome</p></li>
					<li><p>Firefox</p></li>
					<li><p>Internet Explorer</p></li>
					<li><p>Safari</p></li>
					<li><p>Opera & Brave</p></li>
				</ul>
				<p>What operating system do you typically use?</p>
				<ul>
					<li><p>Mac OS</p></li>
					<li><p>Windows</p></li>
					<li><p>Linux</p></li>
				</ul>
				<p>What device do you typically use to browse websites?</p>
				<ul>
					<li><p>Laptop or Desktop</p></li>
					<li><p>Mobile</p></li>
					<li><p>Tablet</p></li>
				</ul>
				<p>Which of the following describes your highest completed level of education?	</p>
				<ul>
					<li><p>High School graduate</p></li>
					<li><p>Undergraduate</p></li>
					<li><p>Graduate</p></li>
					<li><p>PhD</p></li>
				</ul>
				<p>Which age group do you belong to?</p>
				<ul>
					<li><p>18-24</p></li>
					<li><p>25-39</p></li>
					<li><p>40-59</p></li>
					<li><p>60-74</p></li>
					<li><p>75+</p></li>
				</ul>
				<p>What gender do you identify as?</p>
				<ul>
					<li><p>Female</p></li>
					<li><p>Male</p></li>
					<li><p>Prefer not to say</p></li>
					<li><p>Self-identify</p></li>
					<li><p>If you selected "Self-identify" above, please feel free to enter more below: ____________________</p></li>
				</ul>

				<h3>Appendix F: Inspirations</h3>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-f1.jpg" alt=""/>
					<figcaption className={css.caption}>Figure F1 (top): Example of a pop-up filter modal from the Pratt Library. Demonstrates multiple filter selects, scrolling (non-paginated) results, and ordering filters by result count.</figcaption>
				</figure>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-f2.jpg" alt=""/>
					<figcaption className={css.caption}>Figure F2 (right): Example of a drop down filter menu from the Pratt Library. Demonstrates date slider, collapsable filter categories, ordering filters by result count, and limiting total filters immediately viewable, with an option to show full list (Figure F1).</figcaption>
				</figure>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-f3.png" alt=""/>
					<figcaption className={css.caption}>Figure F3: Screenshot of The Metropolitan Museum home page taken on December 13, 2022. Here, instead of a carousel, the Met provides a few different pieces of content: a scrolling list of modules that display current exhibitions, location information, and a list of modules that feature current special items like exhibitions, events, and more. A scrolling list of modules like this may work well for the Digital Archives to feature information that is currently hidden in the carousel. Moving this information into a scrolling list may also help the Digital Archives more prominently highlight its main feature: search.</figcaption>
				</figure>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-nyp-f4.png" alt=""/>
					<img className={css.figureObject} src="/images/article-nyp-f5.png" alt=""/>
					<figcaption className={css.caption}>Figure F4: Screenshots of the interactive carousel from the Museum of Science and Industry in Chicago’s website (https://www.msichicago.org/), taken on December 13, 2022. Note the “pause” button surrounded by a circle above the buttons. This layout, with the clearly shown vertical buttons and timer directly above them, is an example of an accessibility feature that gives users immediate temporal feedback and context for the changing carousel slides, as well as an option to pause their movement.</figcaption>
				</figure>

				<h2 id="references">References</h2>
				<p>Bangor, A., Kortum, P., & Miller, J. (2009). Determining What Individual SUS Scores Mean: Adding an Adjective Rating Scale. Journal of Usability Studies, 4(3), 114-123. https://uxpajournal.org/determining-what-individual-sus-scores-mean-adding-an-adjective-rating-scale/</p>
				<p>Bierlein, I. (2022) INFO644-03 Week 09: Meet with Clients & Testing Prep Part 2. Pratt Institute, delivered November 1, 2022.</p>
				<p>Bierlein, I. (2022) INFO644-03 Week 10: Testing Prep Part 3. Pratt Institute, delivered November 8, 2022.</p>
				<p>Cabrera-Mieles, Z. (2019). The Rainbow Sheet: A Visual Method for Research Analysis. UX Collective. Retrieved from: https://uxdesign.cc/the-rainbow-sheet-a-visual-method-for-research-analysis-a7e7d2011058</p>
				<p>New York Philharmonic Digital Archives (n.d.). http://archives.nyphil.org</p>
				<p>Nielsen, J. (2012). How Many Test Users in a Usability Study? NN Group. https://www.nngroup.com/articles/how-many-test-users/</p>
				<p>Optimal Workshop. (n.d.). Tree Testing 101. https://www.optimalworkshop.com/learn/101s/tree-testing/</p>
				<p>Rubin, J., & Chisnell, D. (2008). Handbook of Usability Testing, Second Edition. Indianapolis, IN: Wiley Publishing. Retrieved from: https://www.dropbox.com/s/t1d53lh22w2l3yj/Rubin%20%26%20Chisnell%20-%20Ch.%208%20-%20Prepare%20Test%20Materials.pdf?dl=0</p>
				<p>Shade, Amy. (2017, April 9). Write Better Qualitative Usability Tasks: Top 10 Mistakes to Avoid. https://www.nngroup.com/articles/better-usability-tasks/</p>
				<p>Spencer, D. (2014, July 4). How to Test an Information Architecture. UX Mastery. https://uxmastery.com/testing-information-architecture/</p>
				<p>Spencer, D. & Warfel, T. (2004, April 7). Card Sorting: A Definitive Guide. Boxes and Arrows. https://boxesandarrows.com/card-sorting-a-definitive-guide/</p>
				<p>Steffy Goldner online exhibition banner. (n.d.). New York Philharmonic Shelby White & Leon Levy Digital Archives. https://archives.nyphil.org/ </p>
				<p>The Complete Guide to User Testing Websites, Apps, and Prototypes. (2016). Mountain View, CA: UserTesting. Retrieved from: https://www.dropbox.com/s/wkppzhfdmqp1i34/Complete%20Guide%20to%20User%20Testing%20%28UserTesting%29.pdf?dl=0</p>
				<p>Usability.gov. (2022). System Usability Scale (SUS). Retrieved from: https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html</p>
				<p>WebAIM (2019, October 24). Links and Hypertext - Link Text and Appearance. https://webaim.org/techniques/hypertext/link_text</p>
				<p>W3C. (2016a). Contrast (Minimum) | Understanding Success Criterion 1.4.3. https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html</p>
				<p>W3C. (2016a). Identify Purpose | Understanding Success Criterion 1.3.6. https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html</p>
				<p>W3C. (2016b). Location | Understanding Success Criterion 2.4.8. https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html</p>
				<p>W3C. (2016c). Use of Color | Understanding Success Criterion 1.4.1. https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html</p>
			</>
		), 
		headings: [
			{	 
				text: "Executive Summary", 
				ref: "#summary" 
			},
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Methodology",
				ref: "#methodology" 
			},
			{	text: "Recommendations",
				ref: "#results" 
			},
			{	text: "Conclusion",
				ref: "#conclusion"
			},
			{	text: "Appendix",
				ref: "#appendix"
			},
			{	text: "References",
				ref: "#references"
			},
		] 
	},

	"nz-rent":{ 
		id:"nz-rent", 
		markup: ( 
			<>
				<img src="/images/article-rent-banner.webp" className={css.banner} alt=""/>
				<h1 className={css.title} id="introduction">Median Weekly Rent in New Zealand</h1>
				<p className={css.byline}>Originally published on <a href="https://studentwork.prattsi.org/infovis/labs/charts/median-weekly-rent-in-new-zealand/">Information Visualization</a> on March 3, 2022</p>
				<p>With each passing day, the cost of shelter becomes increasingly expensive. Rising house prices have been <a href="https://www.newshub.co.nz/home/money/2021/12/housing-crisis-everything-points-towards-a-market-correction-in-2022-economist.html">discussed</a> <a href="https://www.theguardian.com/world/2021/sep/30/haves-and-have-nots-how-the-housing-crisis-is-creating-two-new-zealands-a-photo-essay">at</a> <a href="https://www.economist.com/asia/2022/02/12/new-zealands-housing-crisis-is-worsening">length</a>. With the median house price recently surpassing $1,000,000 NZD (Per <a href="https://www.rnz.co.nz/news/national/459095/million-dollar-homes-average-new-zealand-house-price-exceeds-1-million-for-first-time">RNZ</a>) many Kiwi’s are being priced out of ever owning their own home. Facing a lifetime of renting ahead of them, it is worthwhile taking the time to look more closely at the trends in this ever growing market.</p>
				
				<h2 id="methods">Methods</h2>
				<p>The <a href="https://www.google.com/search?client=safari&rls=en&q=nz+census&ie=UTF-8&oe=UTF-8">New Zealand Census</a> was used as the primary source of information for this project. It includes questions not only about the dwelling itself, but also the owners and occupiers (See <a href="https://www.stats.govt.nz/assets/Reports/2018-census-design-of-forms/2018-Census-Design-of-forms.pdf">here</a> for a full breakdown). Taken every 5 years[<a href="https://nzhistory.govt.nz/page/census-held-after-two-year-delay">1</a>] the data allows us to inspect what trends may be occurring in the data. A curated dataset was available from the <a href="http://data.govt.nz/">New Zealand open data portal</a>, which was downloaded and imported into Tableau.</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-rent-data.webp" alt=""/>
					<figcaption className={css.caption}>Full datasource available <a href="https://catalogue.data.govt.nz/dataset/8bd0c4c9-9c0a-4153-b5a4-6311f18179a9/resource/89089be6-5165-4582-9a07-0e105126a4e2/download/census-weekly-rent.csv">here</a></figcaption>
				</figure>
				<p>Using Tableau to inspect the data, the trend was simple and obvious: rent is ever increasing. Of course the rate of this change does depend on a number of factors, several of which are baked into the data. Both the type of landlord and the household dynamic of the residents were mapped to time series charts, which is the tried and true method when presenting this sort of data:</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-rent-search.webp" alt=""/>
					<figcaption className={css.caption}>A quick Google image search for “NZ Housing Market”</figcaption>
				</figure>
				<p>Both Landlord and Household types had limited categories once filtered and grouped (4 and 6, respectively). However when attempting to plot the data broken down by region, it became somewhat unwieldily:</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-rent-test.webp" alt=""/>
					<figcaption className={css.caption}>Due to its long, slender geography, it is traditional to list New Zealand regions north to south rather than alphabetically.</figcaption>
				</figure>
				<p>Thankfully, when searching for other examples of how similar data has been visualised, <a href="https://upload.wikimedia.org/wikipedia/commons/1/1e/NZ_regional_average_price_change_2014_2019.png">this</a> example was found which provided the inspiration for how to better show this sort of data. Four charts were then created using tableau mapping module, filtered for each census. A side effect of this was that it determined at what regional level the data would be shown, as the built in map didn’t allow for finer granulation found in the data.</p>
				<p>The four maps and two time series charts were then placed into a tableau dashboard, with the maps in sequence and the time series below. Titles were made and legends were positioned where appropriate. While the dashboard was designed to stand alone as an image, several interactive filters were added to further explore the data: The ability to select regions to filter by location (and a prompt to indicate this was possible) as well as filters for the Household and Landlord types. Click filtering was not enabled for the time series as it filtered by the exact point rather than the category. The final result being:</p>
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-rent-final.webp" alt=""/>
					<figcaption className={css.caption}>To view the interactive dashboard, click <a href="https://public.tableau.com/app/profile/tk.cram/viz/MedianNZWeeklyRent/Dashboard1">here</a></figcaption>
				</figure>

				<h2 id="discussion">Discussion</h2>
				<p>Raw rent was used as the measurement, as opposed to increase e.g., as it felt as though it had the most dramatic effect. Seeing a $500 pw rent seemed more evocative than a $30 or 5% increase. It also allowed the maps to show not only increase, but where in the country rent was the most expensive (and every Kiwi knows it’s good to have a laugh at Auckland). More consideration would have been given to proportional increase if the trend wasn’t reasonably linear.</p>
				<p>I’m quite fond of the series of heat maps, although testing is required to determine the effectiveness. It helps that New Zealand is a long country and can almost tesselate, so the effect may be diminished for a wider country such as the USA. The decision was also made to keep the heat legend consistent, as it made for easier comparison. (N.b an attempt was made to create a higher contrast colour series, but this proved difficult in Tableau). The time series charts to display prices over time was consistent with other visualisations.</p>
				<p>Groupings and filters were created for all three charts (Regions, Households, Landlord). This excluded groups such as ‘total’, ‘other not identified’ and ‘total identified’ as they ultimately didn’t add anything to the chart. Regions used only the data for Regional Territories as it was compatible with Tableau’s map builder. Households rolled “and other person(s)” into their respective categories to limit the amount of data on screen. Landlord types excluded several categories that was only counted in the most recent census. All facets had their axes set to a fixed length to ensure a consistent comparison across filters.</p>
				<p>Some difficulty was also had when it came to Tableau’s dashboard builder. While working within the grid system was simple, going beyond it was less so. Free floating elements were unable to be aligned or placed with accuracy, and often times would shift between the local dashboard and the published version. Dynamic resizing of the dashboard was turned off for this reason, as items would collide in smaller views. Having four maps also proved to be a challenge: Design wise they each needed to be positioned individually, and usage wise they would zoom out to a world view if a user wasn’t careful where they were scrolling.</p>

				<h2 id="reflections">Reflections</h2>
				<p>Overall I feel satisfied with the final dashboard, although it does have its quirks. If the project were to be revisited it would need to be done so with additional data sources, as that was a key limiting factor. Additional factors such as income, inflation, house types, and counts would all allow for a richer analysis.</p>
				<p>Consideration would also go towards the medium of the visualisation. Tableau provides a wonderful layer of interactivity to filter the data on the dashboard, but the lack of in-depth design tools makes me less inclined to use it for static images.</p>
			</>
		), 
		headings: [
			{	 
				text: "Introduction", 
				ref: "#introduction" 
			},
			{	text: "Methods",
				ref: "#methods" 
			},
			{	text: "Discussion",
				ref: "#discussion" 
			},
			{	text: "Reflections",
				ref: "#reflections"
			},
		] 
	},

	"vr-as":{ 		
		id:"vr-as", 
		markup: ( 
			<>
				<img src="/images/article-vras-banner.png" className={css.banner} alt=""/>
				<h1 className={css.title}>WeAreKnitters.com: Remote User Testing Report</h1>
				{/*<p className={css.byline}>Originally published on <a href="http://ixd.prattsi.org/2022/09/design-critique-bnz-iphone-app/">IXD@Pratt</a> on Septermber 13, 2022</p>*/}
				<p>Tk Cram, Sara Kim, Ziqi Wang, Jiacheng (?)</p>

				<h2>The Project</h2>
				<p>VR is an emergent and multifaceted technology. So often the conversation revolves either around its uses in gaming or, in recent times, Facebook’s foray into the future of social media. While both of these develop- ments are fascinating, we believe that VR has potential to be used across all facets of our society, from arts and entertainment, to new ways to educate and aid individuals, and even to help push humans forward into the final frontier. We will create a website to explore and communicate many of these potential facets. Each member will choose 1-2 topics around VR and research/develop content for a standalone page.</p>
				<h2>The Authors</h2>
				<div className={css.textLogo}>
					<img alt="" className={css.logo} src="/images/article-vras-ziqi.png"/>
					<h3>Ziqi</h3>
					<p>Recent graduate from journalism school and now learning DAV. Cat person who dreams about retiring.</p>
				</div>
				<div className={css.textLogo}>
					<img alt="" className={css.logo} src="/images/article-vras-jiacheng.png"/>
					<h3>Jiacheng</h3>
					<p>Statistics undergraduate degree with IST minor, current DAV student.</p>
				</div>
				<div className={css.textLogo}>
					<img alt="" className={css.logo} src="/images/article-vras-sara.png"/>
					<h3>Sara</h3>
					<p>Journalist and former dog mother currently searching for her kitty-daughter. Graduate student in DAV.</p>
				</div>
				<div className={css.textLogo}>
					<img alt="" className={css.logo} src="/images/article-vras-tk.png"/>
					<h3>Tk</h3>
					<p>Philosophy & CS graduate turned Analyst. Now a DAV student with a love for fonts and colours.</p>
				</div>

				<h2>The Technology</h2>
				<p>The base of the website is built on wordpress and hosted on the Pratt commons to better enable content management. The theme we selected from wordpress was altered with custom CSS to match our topic. We also considered accessibility when it comes to fonts, color, multimedia elements, and the organization of the website. We also used the functions on wordpress to embed YouTube videos as well as Tweets to serve the content that we are proceeding.</p>
				
				<h2>The Design</h2>
				<p>The base deisgn we used was the Paperio Child theme created by themezaa. From there we tweaked the original colour pallete to create a more unified red/black.white experience. A custom logo was created in illustrator. An off white was chosen as the background colour for the body in order to better differentiate it from the navigation menu. We also opted for a flat navigation spread in order to make the site easier to use. Some cutsom CSS was added to the footer in order to make the font visible with the chosen coloud scheme</p>
				
				<h2>The Reflections</h2>
				<p>There were some initial concerns surrounding producing a website as a group, since with multiple people decisionmaking always has the potential to become fraught. However, we found that, thanks to fluid ideating sessions and continual, transparent communication, we were able to divvy up the work and that the workflow from beginning to end was smooth.</p>
				<p>One issue that we talked about when creating the website was the lack of access to VR headsets. It is very difficult to try to explain these contents knowing that most of our audiences for this website probably do not have VR headsets at home. How do we best explain VR to them, so it’s not just a concept? Our solution was to use videos of actual content you can see in VR, actual people using VR, and actual creation happening in VR so that our audiences can make sense of what we are talking about. We had discussions about if we can rent out a VR headset, and jokingly said that it would be great if the website can also be viewed in a VR headset with cool effects. Even though these thoughts seem impossible right now, we still hope that in the future, as VR becomes more accessible, our talks can become reality.</p>
				<p>This website only scratches the surface of the topics that we picked, but we hope that it gives people a different perspective when thinking and talking about VR. VR is a piece of technology, but more importantly, VR is art, a new space, a new way of looking and learning, a new way of collaborating and designing, new ways of healing. It introduces us to different worlds and stories, new experiences and feelings.</p>

				<h2>The Content</h2>
				<h3>Introduction - Tk Cram</h3>
				<p>This page acts as not only an introduction to the world of VR, but also as a jumping off point for the rest of the webstie. It’s comprised of three major components. The first is a general breakdown of terms on what VR in, and some links if the user wants to learn more. The second it a timeline of developments in VR, mostly from the technological point of view as including pop culture references became combersome (Sorry wachowskis). Thirdly it provides an overview of the major players currently on the market what they offer. We end off with a prompt to click through to other pages on the site and explore more of what VR has to offer</p>
				
				<h3>as Art - Ziqi Wang</h3>
				<p>Artists in different fields are using VR in different ways to assist their immersive and interactive art projects. It aims to give the audiences some ideas on how VR is connected to arts in different ways and how this technology is pushing the boundaries of arts. VR paint brushes and sculpting programs alow artists to create art in 3D spaces, without the space limits for just 2D canvas. VR is also a place for artists to exhibit their arts, which allows them to experiment with different ways of presenting their projects and pieces, allowing more audiences to engage with their art works. For art galleries and museums, VR can help them experiment with different ways of presenting their projects and pieces, allowing more audiences to engage with their art works. Two videos are added to the page, and hopefully they will give people an idea of how VR technology is being used under different circumstances, and that they are more than just a piece of technology.</p>
				 
				<h3>as Education - Sara Kim</h3>
				<p>VR can be a helpful learning tool in classrooms. For students learning such math as the 3D Cartesian coordinate system in which there are x, y, and z axes, VR offers a clearer understanding of how these three axes interact with one another in comparison to using a traditional 2D medium. Students can also immerse themselves in such worlds as the ocean to learn about marine biology, a computer-simulated interior of the human body in a biology class, or in space to learn about the universe in a physics and astronomy class. In higher education, students can utilize VR in a variety of disciplines. For example, in electrical engineering education, students can carry out such tasks as comparing structural differences between devices and assembling and disassembling machines and testing them under extreme conditions that would otherwise be too dangerous in a real-world experiment. There are even projects that allow users to step back in time to experience such situations as a particular sociopolitical climate from our past such as the Oakland Virtual Reality Project that allows anyone with access to a VR headset or a mobile phone in a VR cardboard case setup to experience the Black Panther Party’s 1968 office in Oakland, CA, a time of great racial and class tension in the US. Some organizations even use VR to educate their employees on a variety of issues, such as safety by immersing workers in situations that simulate real life.</p>
				
				<h3>as Entertainment - Jiacheng Chen</h3>
				<p>Personal VR devices were initially introduced to the public as an entertainment tool. Its immersive interaction led to applications in gaming, travel and cinema, and completely changed the public’s perception of these fields. Experience and immersion are essential elements of VR gaming. Players can see things in a virtual environment with unlimited 360-degree views, and can also access sensory simulations such as sight, sound, and touch as if they were actually there. VR movies expand the boundaries of traditional cinema, allowing the user to be not only a viewer, but also a participant. Virtual reality tourism allows people to experience the landscape freely, without the restrictions of the real world. It gives people more perspectives than ever before and brings a whole new experience to the journey.</p>
				  
				<h3>as Teleoperations - Tk Cram</h3>
				<p>Since the early days of VR, it has had military applications. Mcdonnel Douglas created an early prototype of VR head mounted displays to train pilots. Since then it has been used to train infantrymen, construction works, and doctors, all in a safe training environment. But with the develoment of robotics and communications technologies, an exciting development is the ability to hook up these VR simulations directly into real world agents. We’ve all seen the video of them performing surgery on a grape, and that was only a proof of concept. This has promising applications in cleaning up areas contaminated with radiation or providing expert skills anywhere in the world. Perhaps most exciting is the ability for astronauts to run robotic missions, such as exploring planetary surfaces or doing external satellite maintenence all while in the safety of their spacecraft.</p>
				
				<h3>as Social Media - Ziqi Wang</h3>
				<p>VR technology provides people with a variety of social platforms and people are using them for different purposes. Some of the platforms are purely for social interactions and function like social media in the real world, and others like gaming platforms on VR can also act as social platforms. These programs allow people to create their own avatar, interact with friends in the virtual world. These places not only allow people to socialize and interact with each other, but also allow creative collaborations between people. Artists use these platforms to create as well as present their work. During the Covid-19 pandemic, many companies also moved their working spaces there, so that their employees can do their work more efficiently. This also helps people to feel less lonely, giving them the psychological support that they need. Video on how to create a virtual movie theater to watch movies with friends to demonstrate just how much VR can mimic the physical world and allows actual conversation to happen. There is also the latest news of a couple being the first to get married in the Metaverse, which further proves how VR brings people together.</p>
				  
				<h3>as Viewing - Jiacheng Chen</h3>
				<p>VR is a much more natural and immersive form of media that transfers real-world objects into virtual environments. Its properties as a medium in a commercial context increase expression efficiency and reduce the gap between creators and consumers. For example, by immersing themselves in a virtual replica of their work, architects are able to create more compelling scenes. With VR headsets and controllers, designers can view and modify the details of their designs in a more intuitive way. And it’s not just designers who are benefiting from VR technology; clients are also using the same tool to make better decisions. In the real estate market, clients can experience the details of a building in a 3D environment before it is built, helping them make more informed purchase decisions.</p>
				
				<h3>as Wellbeing - Sara Kim</h3>
				<p>Virtual reality exposure therapy (VRET) is a treatment option for those struggling with issues such as phobias, anxiety, and PTSD. Using a VR headset, the patient works with an experienced therapist to confront their fears through experiential learning without being exposed to the possibility of real physical danger and/or an emotional meltdown in front of onlookers. While one potential fallback can be the unrealistic feeling of computer-rendered digital worlds, some therapists use virtual reality cameras to record real-life situations, locations, etc, for a more realistic experience. Examples of patients using VRET are soldiers who’ve experienced war and people who have a variety of phobias, such as a fear of heights, flying, public speaking, etc. VR immersion for meditation is another tactic used to calm anxieties in general VR users as well as patients who suffer from anxiety and mood disorders.</p>
				  
				<h2>The References</h2>
				<h3>Videos</h3>
				<ul>
					<li><p>Anna dream brush. Bird Gamayun Virtual reality painting (Tilt Brush), 2018. https://www.youtube.com/ watch?v=HUW49IKs1kE</p></li>
					<li><p>Atlas Bay VR. High-End Virtual Reality for Real Estate Full, 2017. https://www.youtube.com/ watch?v=8l9qRDMVNRY.</p></li>
					<li><p>Dezeen. Virtual Reality Offers Architects “a Whole New Way of Designing,” 2016. https://www.youtube.com/ watch?v=SLfW2WbpIHE.</p></li>
					<li><p>Futurism. Practice Operating Heavy Contruction Equipment in VR, 2017. https://www.youtube.com/ watch?v=huzIkUzX0tI</p></li>
					<li><p>HTC VIVE. Mona Lisa: Beyond the Glass at The Louvre I HTC VIVE ARTS, 2019. https://www.youtube.com/ watch?v=Au_UpzhzHwk</p></li>
					<li><p>IGN. Steven Spielberg Directing Ready Player One Using a VR Headset, 2018. https://www.youtube.com/ watch?v=trUexo_Tvkg.</p></li>
					<li><p>“Learn More About Virtual Reality (VR) Collaboration Platforms”. G2.Com, https://www.g2.com/categories/ vr-collaboration</p></li>
					<li><p>LSToast. Attempting RUSH E AGAIN in Beat Saber, 2021. https://www.youtube.com/watch?v=VGzfZRyS7B0.</p></li>
					<li><p>PaleBlue. Virtual Reality ROV Underwater Robot Steering, 2020. https://www.youtube.com/watch?v=OH-0_IhOwis</p></li>
					<li><p>sky100. Sky100: VR Time Travel: Step into Old Hong Kong 天際100: VR 時光倒流香港遊 2019. https://www.youtube.com/watch?v=ZbSHIQFYdTk.</p></li>
					<li><p>UNSW eLearning. MATH1131 Mathematics 1A — Introduction to the Vector Geometry Virtual Reality Experience, 2018. https://www.youtube.com/watch?v=FVEs4ctwkcY</p></li>
					<li><p>VRScout. How to Watch TV & MOVIES With Friends On OCULUS QUEST 2!, 2020. https://www.youtube. com/watch?v=_B_6e72AN1w</p></li>
					<li><p>OPB. Can Virtual Reality Replace Opioids As Pain Treatment?, 2019. https://www.youtube.com/watch?v=O0yRL4AOZII</p></li>
				</ul>     

				<h3>Articles:</h3>
				<ul>
					<li><p>“Air Force Unmanned Aerial Vehicle (UAV) Pilots Use Virtual Reality For Training And Mission Rehearsal”. Militaryaerospace.Com, 2021, https://www.militaryaerospace.com/computers/article/14204624/virtual-reality-unmanned-training.</p></li>
					<li><p>Barreda-Ángeles, Miguel, and Tilo Hartmann. “Psychological Benefits Of Using Social Virtual Reality Platforms During The Covid-19 Pandemic: The Role Of Social And Spatial Presence”. Computers In Human Behavior, vol 127, 2021, p. 107047. Elsevier BV, doi:10.1016/j.chb.2021.107047.</p></li>
					<li><p>“Black Panther Party”. Klapty, https://tour.klapty.com/7Zm0sdyhfv/?deeplinking=true&startscene=0&startactions=lookat(5.86,0,60.5,0,0);.</p></li>
					<li><p>Blum, Dani. “Virtual Reality Therapy Plunges Patients Back Into Trauma. Here Is Why Some Swear By It.”. Nytimes, 2021, https://www.nytimes.com/2021/06/03/well/mind/vr-therapy.html.</p></li>
					<li><p>Brody, Jane E. “Virtual Reality As Therapy For Pain (Published 2019)”. Nytimes, 2019, https://www.nytimes. com/2019/04/29/well/live/virtual-reality-as-therapy-for-pain.html.</p></li>
					<li><p>Coates, Charlotte. “Virtual Reality Is A Big Trend In Museums, But What Are The Best Examples Of Museums Using VR?”. Museumnext, 2021, https://www.museumnext.com/article/how-museums-are-using-virtual-reality/.</p></li>
					<li><p>Coghlan, A. and Lewis Carter, L. “New Product Design: Creating a Digital VR Game to Promote the Conservation of Nature-Based Tourism Attractions.” Emerald Publishing Limited, 2020. https://doi.org/10.1108/978-183982-688-720201011.</p></li>
					<li><p>Dirk Eitzen. “The Problems and Potentials of VR for Documentary Storytelling.” Cinergie, no. 19 (August 1, 2021): 43–55. https://doi.org/10.6092/issn.2280-9481/12212.</p></li>
					<li><p>Gordon, Rachel. “Teleoperating Robots With Virtual Reality | MIT CSAIL”. Csail.Mit.Edu, 2021, https://www. csail.mit.edu/news/teleoperating-robots-virtual-reality.</p></li>
					<li><p>Higginbottom, Justin. “Virtual Reality Is Booming In The Workplace Amid The Pandemic. Here’S Why”.</p></li>
					<li><p>CNBC, 2020, https://www.cnbc.com/2020/07/04/virtual-reality-usage-booms-in-the-workplace-amid-the-pan-demic.html. Accessed 14 Dec 2021.</p></li>
					<li><p>Kamińska, D., Zwoliński, G., Wiak, S. et al. “Virtual Reality-Based Training: Case Study in Mechatronics.” Tech Know Learn 26, 1043–1059 (2021). https://doi.org/10.1007/s10758-020-09469-z</p></li>
					<li><p>Kim, Joo-heon. “Seoul To Provide Safety Education Using Virtual Reality Technologies”. Ajudaily.Com, 2021, https://www.ajudaily.com/view/20211029163342759.</p></li>
					<li><p>NIDA. “Part 1: The Connection Between Substance Use Disorders and Mental Illness.” National Institute on Drug Abuse, 13 Apr. 2021, https://www.drugabuse.gov/publications/research-reports/common-comorbidities-substance-use-disorders/part-1-connection-between-substance-use-disorders-mental-illness</p></li>
					<li><p>“Recovery Centers Of America Collaborates With Johns Hopkins Healthcare Solutions To Introduce Virtual Reality Treatment Enhancement At Two Maryland Facilities”. Prnewswire.Com, 2021, https://www.prnewswire. com/news-releases/recovery-centers-of-america-collaborates-with-johns-hopkins-healthcare-solutions-to-introduce-virtual-reality-treatment-enhancement-at-two-maryland-facilities-301405324.html.</p></li>
					<li><p>Surowidjojo, Arya. “VR Gives Oregon Patients And Doctors An Alternative To Opioids”. Opb, 2018, https:// www.opb.org/news/article/virtual-reality-pain-treatment-opioids-providence-legacy-health/. Accessed 14 Dec 2021.</p></li>
					<li><p>“U.S. FDA Authorizes Virtual Reality System For Reducing Back Pain”. Reuters, 2021, https://www.reuters.com/ business/healthcare-pharmaceuticals/us-fda-authorizes-virtual-reality-system-reducing-back-pain-2021-11-16/.</p></li>
					<li><p>Vichitvejpaisal, P. ( 1 ), N. ( 2 ) Porwongsawang, and P. ( 3 ) Ingpochai. “Relive History: VR Time Travel at the World Heritage Site.” In Proceedings VRCAI 2019: 17th ACM SIGGRAPH International Conference on Virtual-Reality Continuum and Its Applications in Industry. Association for Computing Machinery, Inc, 2019. https:// doi.org/10.1145/3359997.3365733.</p></li>
            	</ul>
			</>
		), 
		headings: [
			{	 
				text: "Summary", 
				ref: "#summary" 
			},
			{	text: "Introduction",
				ref: "#introduction" 
			},
			{	text: "Methodlogy",
				ref: "#methodolgy" 
			},
			{	text: "Recommendations",
				ref: "#recommendations"
			},
			{	text: "Conclusion",
				ref: "#conclusion"
			},
			{	
				text: "Appendix",
				ref: "#appendix"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},

	"wak-eval":{ 		
		id:"wak-eval", 
		markup: ( 
			<>
				<img src="/images/article-wak-banner.png" className={css.banner} alt=""/>
				<h1 className={css.title}>WeAreKnitters.com: Remote User Testing Report</h1>
				{/*<p className={css.byline}>Originally published on <a href="http://ixd.prattsi.org/2022/09/design-critique-bnz-iphone-app/">IXD@Pratt</a> on Septermber 13, 2022</p>*/}
				<p>Tk Cram, Sandy Leegumjorn, Roey Wang</p>

				<h2 id="summary">Summary</h2>
				<p>We Are Knitters sells knitting kits and supplies, such as needles, wools, and yarn. What sets We Are Knitters apart from other knit websites is that it gives detailed tutorials specifically for the kits along with rated levels from beginner to advanced, and a knit community where people can join. While the interface as a whole is well designed, additional iteration of the design is important to both keep up with modern best practices, and continuing to improve the user experience</p>
				<p>In order to identify areas for improvement on the site, the research team conducted Unmoderated Remote User Testing (URUT). URUT is a testing method that does not require researchers to attend the usability testing session, but instead, participants that fit the target audience of an interface are the ones doing the tasks and answering the follow-up questions. This test is done through a software application that provides instructions, tasks, and questions, while recording their action and screen real-time.</p>
				<p>This particular testing was done via UserTesting.com, a platformed connecting potentially users to user researchers. In total, nine participants were recruited to complete four seperate tasks, as well as answer three follow up questions. These tasks we designed to move the user through three key areas of the site: Purchasing a product, accessing resources, and joining the community. Overall participants were complimentary of the interface, but did encounter several issues. It is these issues that this report investigates, and offers potential approaches on how to improve them. Namely:</p>
				<ol>	
					<li><p>Provide more information on the kit options page.</p></li>
					<li><p>Create a “Knitting Parties” tab in the navigation bar.</p></li>
					<li><p>Re-order and reduce the number of pop-up modals.</p></li>
				</ol>
				
				<h2 id="introduction">Introduction</h2>
				<p>We are knitters is an eCommerce website specialising in DIY fibre arts kits. You select the item you want to make, and they send you all the materials, tools, and instructions you need to create it. They also host online resources including video tutorials and community forums. The company also has a deep commitment to sustainability and renewability, ensuring all their products meet a certain standard.</p>
				<p>Of their approximately 400,000 customers, almost a third of them have never knitted before in their life. Being such a significant proportion of their base, it is important that these users have a positive experience, and ideally become return customers. This study focuses in on those users, and follows their journey as they take their first steps with We Are Knitters. Along the way, we examine possible difficulties they may encounter, and usability issues that might dissuade them from continuing.</p>
				
				<h2 id="methodology">Methodology</h2>
				<h3>Unmoderated Remote User Testing</h3>
				<p>User testing is an umbrella term for a wide variety of tests that aim to put the user as the focal point for designing interfaces. These tests can take place anywhere from the users natural environment to a controlled lab setting, can be performed in person or via teleconferencing software, and researchers can involve themselves as little or as much as they desire.</p>
				<p>While traditional user testing that takes place in a lab, having participants perform tasks while being observed by researchers, unmoderated remote user testing (URUT) allows researchers to examine users in their natural environment by employing screen-sharing software. It offers the benefits of observing and getting user feedback without the high overhead costs and time burden of running face-to- face studies. This method was selected in order to gain qualitative insights from potential real-life users.</p>
				<p>For this study, the team utilised tools available on Usertesting.com to recruit participants, record the tests, and present post-test questions.</p>
				
				<h3>Users & Tasks</h3>
				<p>Three evaluators were given three tasks to complete on the FoodNetwork.com website. As tasks were completed, evaluators took note of any violations of as well as their severity, with 1 being inconvenient, and 4 being severe. Tasks were completed with no restrictions other restrictions such as time or number of clicks:</p>
				<p>The team selected participants with the following characteristics:</p>
				<ol>
					<li><p>Age: 18-65+ years old</p></li>
					<li><p>Household Income: $19,999 - $99,999</p></li>
					<li><p>Gender: Any</p></li>
					<li><p>Web Browsers: Chrome</p></li>
					<li><p>Country: Any</p></li>
					<li><p>Operating System: Any</p></li>
				</ol>
				<p>We also set a screener question to filter our participants. People who answer “Yes” to the question “Have you ever completed a fibre arts project (e.g., knitting, crocheting?)” will be selected to do the next round of tasks.</p>
				<h4>Scenario</h4>
				<p>You want to give your friend a winter sweater this Christmas, which you want to knit yourself to show how appreciative you are of the friendship. You are trying to learn how to knit a sweater on weareknitters.com.</p>
				<h4>Tasks:</h4>
				<ol>
					<li><p>Find any sweater kit that would be appropriate for a complete novice. Feel free to change colors/sizing based on someone you know, then add it to your cart. Move on the next task.</p></li>
					<li><p>In your own words, tell us what the item you selected contains. Is there anything that's unclear?</p></li>
					<li><p>While you wait for the order to arrive, you decide to get a head start on learning what you need to do. Find the tutorials specific to the skills used in the kit you selected.</p></li>
					<li><p>Perhaps you learn better by receiving in person instruction. Without leaving the website, find out where you can go to work on your project in a group setting.</p></li>
				</ol>
				<h4>Post-test questionnaire:</h4>
				<ol>
					<li><p>Tell us about your overall experience after completing the web tasks. What’s your first impression of this website?</p></li>
					<li><p>What did you like about the site? Is there anything that confused you during the process? What suggestions will you give to improve this website’s browsing experience?</p></li>
					<li><p>How likely are you to recommend this site to a friend or colleague (0=Not at all likely, and 10=Very likely)?</p></li>
				</ol>

				<h3>Analysis</h3>
				<p>Once the user tests had been completed, the videos were reviewed by the researchers, taking note of any issues the participant encountered, or suggestions they made. These notes were then collated into a single spreadsheet using a ‘rainbow style’ in order to compare and contrast the various participants. The team then collectively analysed these results in order to determine which issues most needed to be addressed, and how that could be accomplished.</p>

				<h2 id="recommendations">Recommendations</h2>
				<p>Users were pleased with the site overall and the parts of the interface that were tested. One user stated “I liked the organisation of the site. Nothing confused me.” The issues that were noted typically involved minor tweaks, such as font size/colour, or finding specific pieces of information. All participants successfully completed the first two tasks, involving the main shopping flow, and only one failed to find tutorial information. However users typically struggled with the fourth task, involving community events, which recommendation 3 directly discusses.</p>
				<h3>1) Provide More Information On The Kit Options Page</h3>
				<h4>Issue:</h4>
				<p>The current kit options page don’t include detailed information, like the needle’s difference, wool quality descriptions, or available yarn colour choices, which make users confused during their shopping process.</p>
				<h4>Solution:</h4>
				<p>To provide more information to help users decide which needle size is suitable for them, adding a question mark indicator beside “Needle” option will be appropriate. When users click on it, it can expand to show details (Fig.1). On the browsing page, including a line of available yarn colour options will allow users to know what they can choose at their first glance (Fig.2). The wool quality descriptions can be included in the “Product Details” section to let users learn more about the kit they are going to buy (Fig.3). All of the above options will allow users to be better informed about what it is they’re purchasing, and prevent any confusion that may interfere with purchasing the product.</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-1.png" alt=""/>
					<figcaption className={css.caption}>FIG.1 ADD AN EXPLANATION INDICATOR BESIDE “NEEDLE”</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-2.png" alt=""/>
					<figcaption className={css.caption}>FIG.2 ADD AVAILABLE COLOUR OPTIONS</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-3.png" alt=""/>
					<figcaption className={css.caption}>FIG.3 WOOL QUALITY DESCRIPTION</figcaption>
				</figure>

				<h4>Further recommendations:</h4>
				<p> Creating good documentation and tooltips across the entire site is recommended. As We Are Knitters targets a moderately novice demographic, striking the balance is a must between providing them all the information they need while not overloading them.</p>

				<h3>2) Create a “Knitting Parties” tab in the navigation bar.</h3>
				<h4>Issue:</h4>
				<p>The option to join the community and look up events is difficult to find. “Knitting Parties” is under “Tutorials” which is not the best categorisation as users missed out the option entirely. The button does not look like a link and there is no signifier. “Knitting Parties” looks like a photo caption instead of a link and it is far to the right side which most users looked over that option (Fig 3).</p>
				<h4>Solution:</h4>
				<p>Adding its own section labeled as “Knitting Parties” in the navigation bar will allow users to find an option to join the community and look up knitting events. There is a signifier which is a hover, along with a drop down with 3 subcategories – Join a Party, Host a Party, and #knittingparties (Fig 4). Having a hover and drop down will allow users to know that the button is interactive as well as knowing where it will take them and what are the subcategories. Being able to drive community engagement is vital when building a brand, and this recommendation seeks to put that community front and centre.</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-4.png" alt=""/>
					<figcaption className={css.caption}>FIG. 4: CURRENT “KNITTING PARTIES” LOCATION</figcaption>
				</figure>

				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-5.png" alt=""/>
					<figcaption className={css.caption}>FIG. 5: MOCK-UP OF ‘KNITTING PARTIES’ AS PART OF THE NAVIGATION BAR</figcaption>
				</figure>

				<h4>Future Recommendations:</h4>
				<p>All links should be designed in a way that users know that it is interactive as well as knowing where it will take them. Categories should be arranged in a way that makes sense to the users and the placement of a link or button should be where it is easy to find. Additional testing of the site map is recommended, such as via a Card Sort.</p>
					
				<h3>3) Re-order and reduce the number of pop-up modals.</h3>
				<h4>Issue:</h4>
				<p>Currently, when a new user first lands on the website they are required to interact with 3 pop-up modals before they can engage with the content. Although these can contain important information, users can become frustrated by the experience and become inclined to leave the website. This issue is exacerbated by the fact that it is not always clear that the modal needs to be interacted with in a specific way, leaving the user confused as to why they cannot interact with the content.</p>
				<h4>Solution:</h4>
				<p>The simplest solution to these issues is to allow the user to either ignore the modal (in the case of the cookies) or dismiss them by interacting outside of their bounding box (in the case of preferences/promotions). Alternatively, if the regional preferences are mandatory, ensure they are the first to load when a user lands on the site. It is typically easier to understand that a pop-up is blocking interaction than a cookie menu. If a user is met with significant difficulty, or worse errors, when visiting a site for the first time, they’re likely leave. The goal of this recommendation is to eliminate those pain points, and get the users shopping as fast as possible.</p>
				
				<figure className={css.figure}>
					<img className={css.figureObject} src="/images/article-wak-6.png" alt=""/>
					<img className={css.figureObject} src="/images/article-wak-7.png" alt=""/>
					<img className={css.figureObject} src="/images/article-wak-7.png" alt=""/>
					<img className={css.figureObject} src="/images/article-wak-9.png" alt=""/>
					<figcaption className={css.caption}>Modals for (1) Cookies (2) Preferences (3) Call to Action before finally reaching (4) Content</figcaption>
				</figure>

				<h4>Future Recommendations:</h4>
				<p>Consider the need for each of the modals in turn. While cookie management is mandatory in several jurisdictions, location preferences can simply be inferred from an IP address, and the option to change it can be presented later. The call to action could be removed, or at least moved to later in the user flow (e.g. during checkout). It may also be beneficial to instantiate it as a banner, rather than a pop-up.</p>

				<h2 id="conclusion">Conclusion</h2>
				<p>We Are Knitters website’s main purpose is to sell knitting kits and supplies, as well as giving tutorials based on each customer’s level – beginner to advanced. This website is also a way for users that like knitting to join the knitting community. However, this website contains some major usability issues that need to be fixed. After conducting an unmoderated remote user testing with a total of 9 participants, we have come up with 3 key recommendations to further improve the website and its key features.</p>
				<ol>	
					<li><p>Provide more information on the kit options page</p></li>
					<li><p>Create a “Knitting Parties” tab in the navigation bar.</p></li>
					<li><p>Re-order and reduce the number of pop-up modals.</p></li>
				</ol>
				<p>The goal of the Unmoderated Remote User Testing of We Are Knitters is to fix the interface in a way to allow users to fully utilise the key features of this website. With these recommendations, the website will be able to give its users a better usability experience which will lead to a better knitting experience, which we believe is We Are Knitters’s primary goal.</p>

				<h2 id="appendix">Appendix</h2>
				<h3>Table of Participants</h3>
				<table>
					<tr><th>Participant</th><th>Age</th><th>Gender</th><th>Household Income</th><th>Duration</th></tr>
					<tr><td>1</td><td>39</td><td>Female</td><td>less than $19,999</td><td>12:17</td></tr>
					<tr><td>2</td><td>18</td><td>Male</td><td>$200,000+</td><td>5:28</td></tr>
					<tr><td>3</td><td>57</td><td>Female</td><td>$60,000 - $79,999</td><td>23:13</td></tr>
					<tr><td>4</td><td>20</td><td>Female</td><td>less than $19,999</td><td>6:54</td></tr>
					<tr><td>5</td><td>24</td><td>Female</td><td>$80,000 - $99,999</td><td>14:20</td></tr>
					<tr><td>6</td><td>30</td><td>Male</td><td>less than $19,999</td><td>12:31</td></tr>
					<tr><td>7</td><td>25</td><td>Non-binary</td><td>$19,999</td><td>20:29</td></tr>
					<tr><td>8</td><td>31</td><td>Male</td><td>$20,000 - $39,999</td><td>12:30</td></tr>
					<tr><td>9</td><td>19</td><td>Male</td><td>$20,000 - $39,999</td><td>12:27</td></tr>
				</table>

				<h3>Participant task completion</h3>
				<table>
					<th>Participant</th><th>Task 1: Find any sweater kit that would be appropriate for a complete novice. Feel free to change colors/sizing based on someone you know, then add it to your cart. Move on the next task.</th><th>Task 2: In your own words, tell us what the item you selected contains. Is there anything that's unclear?</th><th>Task 3: While you wait for the order to arrive, you decide to get a head start on learning what you need to do. Find the tutorials specific to the skills used in the kit you selected.</th><th>Task 4: Perhaps you learn better by receiving in person instruction. Without leaving the website, find out where you can go to work on your project in a group setting.</th>
					<tr><td>1</td><td>Success</td><td>Success</td><td>Success - but takes some time</td><td>Success</td></tr>
					<tr><td>2</td><td>Success</td><td>Success - but feel confused about the function of the stitch holder</td><td>Success</td><td>Success</td></tr>
					<tr><td>3</td><td>Success</td><td>Success</td><td>Success - but takes a long time</td><td>Failure - the navigation is pool and cannot find the right place</td></tr>
					<tr><td>4</td><td>Success</td><td>Success</td><td>Success</td><td>Failure - missed out the option entirely.</td></tr>
					<tr><td>5</td><td>Success</td><td>Success - lack of needles and other materials description for beginners.</td><td>Success but the tutorials are not helpful for beginners.</td><td>Success - some difficulties when looking for "knitting parties".</td></tr>
					<tr><td>6</td><td>Success</td><td>Success</td><td>Success but missed out the tutorial section entirely at first</td><td>Failure - didn't find the option</td></tr>
					<tr><td>7</td><td>Success</td><td>Success - lack of wool material descriptions</td><td>Failure - search outside of the original website</td><td>Failure -didn't realize that he can find the information without leaving the website</td></tr>
					<tr><td>8</td><td>Success</td><td>Success - n/a</td><td>Success</td><td>Failure -didn't find the right place/ thought the "home school" was the right one</td></tr>
					<tr><td>9</td><td>Failure - didn't find a sweater kit for novice</td><td>Success</td><td>Success</td><td>Failure -thought "join the community" was the right option</td></tr>
				</table>

				<h3>Post-Test Responses</h3>
				<table>
					<tr><th>Participant</th><th>Post-test Question 1: Tell us about your overall experience after completing the web tasks. What’s your first impression of this website?</th><th>"Post-test Question 2: What did you like about the site? Is there anything that confused you during the process? What suggestions will you give to improve this website’s browsing experience?</th><th>Post-test Question 3: How likely are you to recommend this site to a friend or colleague (0=Not at all likely, and 10=Very likely)?</th></tr>
					<tr><td>1</td><td>I liked the large images and the images in the colors sections. I think this made it easy to choose an item. I like that the site offers tutorials as well as a party hosting platform to bring knitters together.</td><td>I wish the first link I clicked on for the "We are Knitters" page took me to the same page as the second link I clicked on for that page. It also might be helpful to include a clearer description of the differences between the patterns formats or maybe separate the digital and physical items. I would change the item details page so that the details and images share an equal amount of space on the page. The current details take up most of the page and it looks a little uneven. I'd also streamline the we are knitters page and organize the videos there into a menu so you don't have to scroll through so many video thumbnails.</td><td>2</td></tr>
					<tr><td>2</td><td>Very easy to use and a very organized UI</td><td>Nothing its a very easy to use site, It could just use a little more clarity on the addons, like adding definitions to them.</td><td>8</td></tr>
					<tr><td>3</td><td>What I like or more like loved about this site is the colors and the awesome quality photos. I also loved the products offered.</td><td>The most frustrating thing about this site is the tiny words. It's difficult to see and not friendly to those who have a seeing disability. Make the lettering much better for those who are impaired. Most people who knit tend to wear glasses. And, I still don't know where to go for the 1/1 knitting instruction session. The navigation is a bit troublesome.</td><td>5</td></tr>
					<tr><td>4</td><td>The first impression I had was that this website is very organized. It was really easy to find what I needed.</td><td>I liked the organization of the site. Nothing confused me.</td><td>10</td></tr>
					<tr><td>5</td><td>The pop ups that kept appearing when I first got to the site and was trying to navigate it were frustrating. I felt it was harder to stay focused on where I was clicking. The general UI felt a bit clunky and disorganized.</td><td>I liked under the product page there were icons being used to represent what I was purchasing which was helpful. I will say that when I searched by level, I didn't see any filters to define that I only wanted to look for sweaters. I would've liked that rather than having to scroll and look at every item that was on the screen and not even a sweater.</td><td>8</td></tr>
					<tr><td>6</td><td>I could not find the last task, working with other people. Also wish there was a category for specific items people wanted to make like the sweater. Everything else seemed to run smoothly like a standard website.</td><td>I liked the layout of the crochet knits. I was a little confused on how to find the tutorials at first, thought they would be on the product page for the sweater. I would link tutorials maybe on each product page for tutorials.</td><td>6</td></tr>
					<tr><td>7</td><td>I really liked the idea of the store, I believe my people would love to consume from them. I am happy with the site experience I feel good about it. Just the note about seeing more consumer content</td><td>Not really, just maybe adding some of the experience of the making and final results, but further than that is a well made site</td><td>Maybe a 6, I have a couple friends who would love the idea of the store, but I did not saw any international shipping.</td></tr>
					<tr><td>8</td><td>Very clean cut website. maybe needs a tiny bit more style to make it just that tiny bit more unique</td><td>where to find the tutorials</td><td>10 with a little bit of touches to make it look that little bit more unique</td></tr>
					<tr><td>9</td><td>My overall experience with this website was great they show a lot of information and tutorials and guides on how to knit for beginners and new learners with also quality knitting accessories</td><td>When i first was on the website it was a little confusing but after i got the hang of it i was fine</td><td>A 9 I would recommended definitely to family and friends as this is an amazing website with a lot of quality attributes</td></tr>
				</table>

				<h2 id="references">References</h2>
				<p>Cabrera-Mieles, Z. (2019). The Rainbow Sheet: A Visual Method for Research Analysis. UX Collective. - rainbow table</p>
				<p>Oleo-shop (n.d.). eCommerce success: the story of We Are Knitters. https://www.oleoshop.com/ en/blog/ecommerce-success-the-story-of-we-are-knitters-2</p>
				<p>UserTesting.com (n.d.). http://usertesting.com</p>
				<p>We Are Knitters (n.d.). https://www.weareknitters.com</p>
			</>
		), 
		headings: [
			{	 
				text: "Summary", 
				ref: "#summary" 
			},
			{	text: "Introduction",
				ref: "#introduction" 
			},
			{	text: "Methodlogy",
				ref: "#methodolgy" 
			},
			{	text: "Recommendations",
				ref: "#recommendations"
			},
			{	text: "Conclusion",
				ref: "#conclusion"
			},
			{	
				text: "Appendix",
				ref: "#appendix"
			},
			{	
				text: "References",
				ref: "#references"
			},
		]
	},
}


