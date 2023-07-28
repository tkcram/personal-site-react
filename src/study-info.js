import classnames from 'classnames'
import { CodeBlock } from '@atlaskit/code';
import css from './Study.module.css'
import Diet, { DietSnippet } from './WingspanDiet'
import Lifecycle, { LifecycleSnippet } from './WingspanLifecycle'
import Range, { RangeSnippet } from './WingspanRange'
import Wingspan, { WingspanSnippet } from './WingspanWingspan'
import { projectInfo } from './project-info'
import { snippets } from './snippets-info'
import Card from './Card'
import Drawer from './Drawer'
import RelatedStudies from './RelatedStudies'

export const caseStudies = {

    "lego-history": {
        id: "lego-history",
        title: "Brick x Brick",
        subtitle: "The story of the successes and failures that lead to the humble LEGO brick taking over the world",
        blurb: "Brick x Brick is a data-driven research and journalism project. With a long and storied history, the project tells the story of the company with a focus on various KPIs as the company grew from a small workshop to the largest toy brand in the world. The data was analysed using a combination of Excel, SQL, and Python. The front end is built using React and uses Scrollama for the scrolls-telling features, and D3.js for the visualisations. The project brings together and showcases the breadth of skills learnt during my master’s programme.",
        image: "https://t3.ftcdn.net/jpg/03/21/48/06/240_F_321480639_mVJIrZLLOH0pEd00Bo2vw1LA3k8IpnjR.jpg",
        caseStudy: false,
        link: "https://apvs23.netlify.app",
        code: "https://github.com/tkcram/apvs23",
        isVisible: true,
        markup: (
            <>
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },

    "wingspan": {
        id: "wingspan",
        title: "The Birds of Wingspan",
        subtitle: "An Avian Information Dashboard Based on the Wingspan Board-game",
        blurb: "The Birds of Wingspan is a technology-driven data visualisation project. Built using React and D3.js, the project uses the board-game Wingspan as a starting point for users to explore the world of ornithology. The app draws on learnings from previous work in information visualisation to build out a compelling dashboard featuring a breakdown of a species’ diet and lifespan, biographical and game mechanic descriptions, and a map of millions of self-reported sightings.  ",
        image:"/images/study-wingspan-banner.jpg",
        caseStudy: true,
        link: "https://ivf22.netlify.app",
        code: "https://github.com/tkcram/bird-viz",
        isVisible: true,
        markup: (
            <>
                <img src="/images/study-wingspan-banner.jpg" className={css.banner} alt=""/>

                <section id="introduction">
                    <h1>Birds of Wingspan: Creating an Avian Information Dashboard Based on the Wingspan Boardgame</h1>
                    <a className="button" target="_blank" href="https://ivf22.netlify.app" rel="noreferrer">View the Dashboard</a>
                    <p>A personal favourite, Wingspan is a board game based around collecting a variety of bird species. In the game, each bird comes with several different data points, including diet, range, and nesting behaviour. But what if we wanted to find out more? This project aims to use Wingspan as a jumping-off point to learn more about the beautiful birds that exist in the world around us, and hopefully increase appreciation for our feathered friends.</p>
                </section>
                
                <section id="background">
                    <h2>Background</h2>
                    <p>This project was created for INFO 616: Programming Interactive Visualisation. The project aimed to use D3.js to create a web-based data visualisation with an interactive component. Specifically, I opted to create an online dashboard where you could learn more about different bird species. This allowed me to bring together multiple disparate datasets, including aviandietdb and Cornell ebird, to demonstrate a range of technical skills and discuss a topic I enjoy. To tie it all together, I drew inspiration from the board-game Wingspan - it provided an entry point for users as well as a framing device for how the dashboard should be laid out.</p>
                    
                    <h3>Wingspan</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph/img/d5aVUcak3R6QOHz5y-fvQdc8pwU=/fit-in/1200x630/filters:strip_icc()/pic4458123.jpg"/>
                        <p>Wingspan is a "competitive, medium-weight, card-driven, engine-building board game" designed by Elizabeth Hargrave and published by Stonemaier Games. The aim of the game is to collect a variety of bird species and combine their unique abilities to create powerful effects. Each bird is represented on a card, which includes its biographical information, gameplay statistics and abilities, and a beautiful illustration by Natalia Rojas & Ana Maria Martinez Jaramillo. In-game characteristics are designed to facsimile the real-world attributes of the species, such as diet and habitat.</p>
                    </div>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-wingspan-cards.jpg" alt="https://www.birdcollective.com/products/wingspan-board-game"/>
                        <figcaption className={css.figureCaption}>Example of a wingspan bird cards</figcaption>
                    </figure>
                </section>
                
                <section id="methodology">
                    <h2>Methodology</h2>
                    <h3>Design: Wingspan</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph/img/d5aVUcak3R6QOHz5y-fvQdc8pwU=/fit-in/1200x630/filters:strip_icc()/pic4458123.jpg"/>
                        <p>As the cards create a facsimile of the birds, so too does this visualisation create a facsimile of the cards. The visualisation is designed as a dashboard, with each module roughly correlating to a mechanical/ graphical aspect of the card. This allows users to get a wide overview of the information, even at a glance, as they orient themselves based on the game pieces. The interactive elements allow the user to dig deeper into the information, learn more about specific parts of the data, or create additional insights. </p>
                    </div>

                    <h3>Base Case: D3</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="https://raw.githubusercontent.com/d3/d3-logo/master/d3.png"/>
                        <p>Each module was built using D3.js, a JavaScript library primarily used for creating dynamic, interactive data visualisations on the web. The library contains many useful functions for our purposes, including a CSV reader, templates for standard charts and maps, and the ability to easily implement interactive elements such as tooltips and filters. Initially, a sample data set was used containing only information for a single species.</p>
                    </div>

                    <h3>Generalisation: React</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                        <p>Once all the modules had been completed with the sample data, the next step was to generalise it for any bird species. To accomplish this, the code was split out using the React JavaScript Library. This allowed for the creation of templates that could be populated by filtering the data for any species. Doing so also solved the issue with searching, as users could be directed to the appropriate page based on their input, as well as receive error handling.</p>
                    </div>
                </section>
                
                <section id="results">
                    <h2>Results</h2>

                    <section>
                        <p>In all, two separate web pages were created. The first is a simple landing screen containing information about the project, and instructions on how to interact with it. For the initial submission, the only way to find a bird was to enter its name into the search field and see if it returned a result. Later work includes adding auto-completion, as well as providing tiles, for example, bird species.</p>
                        <figure className={css.figure}>
                            <img className={css.figureObject} src="/images/study-wingspan-dashboard.png" alt="Luke, I am your caption..."/>
                            <figcaption className={css.figureCaption}>Screen capture of the dashboard for a Bald Eagle</figcaption>
                        </figure>
                        <p>Once you look up a specific bird you’re greeted with five unique modules: Biography; Diet; Lifecycle; Range; Wingspan. Each one represents a different aspect of the card and includes iconography as an indicator. Each module is designed to stand alone, with basic information on the topic at a glance and a pop-up modal for a more detailed view.</p>
                    </section>

                    <section>
                        <h3>Module 1: Biography</h3>
                        <Drawer title="The Data" buttonTextCollapsed="View Sample Data ›" buttonTextExpanded="Hide Sample Data ⌄" linkText="" linkURL="">
                            <table className={css.drawerTable}>
                                <thead>
                                    <tr><th>Common name</th><th>Hero Href</th><th>Description</th><th>Scientific name</th><th>Color</th><th>PowerCategory</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Nectar</th><th>Wild (food)</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Greater roadrunner</td><td>https://www.allaboutbirds.org/guide/assets/photo/75362461-1280px.jpg</td><td>A bird born to run, the Greater Roadrunner can outrace a human, kill a rattlesnake, and thrive in the harsh landscapes of the Desert Southwest. Roadrunners reach two feet from sturdy bill to white tail tip, with a bushy blue-black crest and mottled plumage that blends well with dusty shrubs. As they run, they hold their lean frames nearly parallel to the ground and rudder with their long tails. They have recently extended their range eastward into Missouri and Louisiana.</td><td>Geococcyx californianus</td><td>Brown</td><td>Hunting/Fishing</td><td>Look at a [card] from the deck. If &lt;50cm, tuck it behind this bird. If not, discard it.</td><td>X</td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>56</td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td><td></td><td>1</td></tr>
                                    <tr><td>Blue jay</td><td>https://www.allaboutbirds.org/guide/assets/photo/75265841-1280px.jpg</td><td>This common, large songbird is familiar to many people, with its perky crest; blue, white, and black plumage; and noisy calls. Blue Jays are known for their intelligence and complex social systems with tight family bonds. Their fondness for acorns is credited with helping spread oak trees after the last glacial period.</td><td>Cyanocitta cristata</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>3</td><td>Bowl</td><td>2</td><td>41</td><td>X</td><td></td><td></td><td></td><td>1</td><td></td><td></td><td></td><td></td><td>1</td></tr>
                                    <tr><td>Northern cardinal</td><td>https://www.allaboutbirds.org/guide/assets/photo/75224371-1280px.jpg</td><td>The male Northern Cardinal is perhaps responsible for getting more people to open up a field guide than any other bird. They're a perfect combination of familiarity, conspicuousness, and style: a shade of red you can't take your eyes off. Even the brown females sport a sharp crest and warm red accents. Cardinals don't migrate and they don't moult into a dull plumage, so they're still breathtaking in winter's snowy backyards. In summer, their sweet whistles are one of the first sounds of the morning.</td><td>Cardinalis cardinalis</td><td>Brown</td><td>Food from Supply</td><td>Gain 1 [fruit] from the supply.</td><td></td><td></td><td></td><td>3</td><td>Bowl</td><td>5</td><td>30</td><td>X</td><td></td><td></td><td></td><td>1</td><td></td><td>1</td><td></td><td></td><td></td></tr>
                                    <tr><td>Trumpeter swan</td><td>https://www.allaboutbirds.org/guide/assets/photo/75226411-1900px.jpg</td><td>Trumpeter Swans demand superlatives: they're our biggest native waterfowl, stretching to 6 feet in length and weighing more than 25 pounds - almost twice as massive as a Tundra Swan. Getting airborne requires a lumbering takeoff along a 100-yard runway. Despite their size, this once-endangered, now recovering species is as elegant as any swan, with a graceful neck and snowy-white plumage. They breed on wetlands in remote Alaska, Canada, and the northwestern U.S., and winter on ice-free coastal and inland waters.</td><td>Cygnus buccinator</td><td></td><td></td><td></td><td></td><td></td><td></td><td>9</td><td>Ground</td><td>2</td><td>203</td><td></td><td></td><td>X</td><td></td><td>2</td><td></td><td></td><td></td><td></td><td>1</td></tr>
                                    <tr><td>Dickcissel</td><td>https://www.allaboutbirds.org/guide/assets/photo/75340431-1900px.jpg</td><td>The curt song of the Dickcissel sounds like the bird's name, and it's part of the soundtrack of the North American prairies. This chunky grassland bunting is colored like a miniature meadowlark, with a black V on a yellow chest. These birds are erratic wanderers‚Äîcommon across the middle of the continent, and a pleasant surprise whenever they turn up in pastures and fields elsewhere in the central and eastern United States. Dickcissels can form enormous flocks on migration and in winter.</td><td>Spiza americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, also lay 1 [egg] on this bird.</td><td></td><td>X</td><td></td><td>4</td><td>Ground</td><td>3</td><td>25</td><td></td><td>X</td><td></td><td>1</td><td>2</td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>Bald eagle</td><td>https://www.allaboutbirds.org/guide/assets/photo/75258921-1900px.jpg</td><td>The Bald Eagle has been the national emblem of the United States since 1782 and a spiritual symbol for native people for far longer than that. These regal birds aren't really bald, but their white-feathered heads gleam in contrast to their chocolate-brown body and wings. Look for them soaring in solitude, chasing other birds for their food, or gathering by the hundreds in winter. Once endangered by hunting and pesticides, Bald Eagles have flourished under protection.</td><td>Haliaeetus leucocephalus</td><td>White</td><td>Food from Birdfeeder</td><td>Gain all [fish] that are in the birdfeeder.</td><td></td><td></td><td></td><td>9</td><td>Platform</td><td>1</td><td>203</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td>1</td><td></td><td></td></tr>
                                    <tr><td>Purple Gallinule</td><td>https://www.allaboutbirds.org/guide/assets/photo/75229331-1900px.jpg</td><td>Lurking in the marshes of the extreme southeastern U.S. lives one of the most vividly colored birds in all of North America. Purple Gallinules combine cherry red, sky blue, moss green, aquamarine, indigo, violet, and school-bus yellow, a color palette that blends surprisingly well with tropical and subtropical wetlands. Watch for these long-legged, long-toed birds stepping gingerly across water lilies and other floating vegetation as they hunt frogs and invertebrates or pick at tubers.</td><td>Porphyrio martinicus</td><td>Brown</td><td>Card-drawing</td><td>All players draw 1 [card] from the deck.</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>4</td><td>56</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td>1</td><td></td><td></td><td>1</td></tr>
                                    <tr><td>Atlantic puffin</td><td>https://www.allaboutbirds.org/guide/assets/photo/75224141-1900px.jpg</td><td>A sharply dressed black-and-white seabird with a huge, multicolored bill, the Atlantic Puffin is often called the clown of the sea. It breeds in burrows on islands in the North Atlantic, and winters at sea. In flight, puffins flap their small wings frantically to stay aloft‚Äîbut underwater those wings become powerful flippers that allow the birds to catch small fish one by one until they have a beak full. This long-lived bird, once widely hunted, is reestablishing its small range in the U.S., although warming ocean waters are causing breeding failures in other parts of the North Atlantic.</td><td>Fratercula arctica</td><td>White</td><td>Other</td><td>Draw 2 new bonus cards and keep 1.</td><td></td><td></td><td>X</td><td>8</td><td>Wild</td><td>1</td><td>53</td><td></td><td></td><td>X</td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>Mallard</td><td>https://www.allaboutbirds.org/guide/assets/photo/75711041-1900px.jpg</td><td>If someone at a park is feeding bread to ducks, chances are there are Mallards in the fray. Perhaps the most familiar of all ducks, Mallards occur throughout North America and Eurasia in ponds and parks as well as wilder wetlands and estuaries. The male's gleaming green head, gray flanks, and black tail-curl arguably make it the most easily identified duck. Mallards have long been hunted for the table, and almost all domestic ducks come from this species.</td><td>Anas platyrhynchos</td><td>Brown</td><td>Card-drawing</td><td>Draw 1 [card].</td><td></td><td></td><td></td><td>0</td><td>Ground</td><td>4</td><td>89</td><td></td><td></td><td>X</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>Scissor-tailed flycatcher</td><td>https://www.allaboutbirds.org/guide/assets/photo/75365381-1900px.jpg</td><td>An elegant gray and salmon-pink flycatcher festooned with an absurdly long tail, the Scissor-tailed Flycatcher is the bird to look for on fence wires in the south-central United States. They typically perch in the open, where their long, forked tails make an unmistakable silhouette. The tail proves useful as they expertly catch insects on the wing with sharp midair twists and turns. In late summer and early fall, scissor-tails gather in large, bickering flocks to migrate to Mexico and Central America.</td><td>Tyrannus forficatus</td><td>Brown</td><td>Food from Supply</td><td>All players gain 1 [invertebrate] from the supply.</td><td></td><td></td><td></td><td>8</td><td>Bowl</td><td>2</td><td>38</td><td></td><td>X</td><td></td><td>2</td><td></td><td></td><td>1</td><td></td><td></td><td></td></tr>
                                </tbody>
                            </table>
                        </Drawer>
                        <p>The majority of the top banner is pulled from a wingspan dataset, compiled by a fan from the original game data. It’s missing a few key pieces of information, such as when abilities were activated, but proved sufficient for our purposes. Given the time to expand on the project, entering more information into the dataset from the game would allow for more detailed mechanical descriptions.</p>
                        <p>The long-form descriptions and images of the birds were taken from <a href="https://www.allaboutbirds.org/" rel="noreferrer">All About Birds</a> by Cornell. As they don't expose a public API, the data was scraped by hand for the selected sample of birds. To expand on the project, either a more robust scraping or an alternate data source would be in order.</p>

                        <h4>The Viz</h4>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91R4ZQhdq5L._AC_UF1000,1000_QL80_.jpg" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Biographic information for a Barn Owl, from <a href="https://www.nataliarojasart.com/celebrating-birds">Celebrating Birds</a></figcaption>
                        </figure>
                        <p>The visual reference for the biographical data comes from the book <a href="https://www.nataliarojasart.com/celebrating-birds">Celebrating Birds</a> which is a companion guide to the game itself. The idea is to use a hero image to show the bird itself, placed side by side with the biography. The title should be in bold, with the taxonomy data in buckets. Overall I believe the basic layout works, but the individual components need refining, such as by modulating the line weights and fonts.</p>
                    </section>

                    <section>
                        <h3>Module 2: Diet</h3>
                        <Drawer title="The Data" buttonTextCollapsed="View Sample Data ›" buttonTextExpanded="Hide Sample Data ⌄" linkText="" linkURL="">
                            <table className={css.drawerTable}>
                                <thead>
                                    <tr><th>species</th><th>query_type</th><th>region</th><th>season</th><th>start_year</th><th>end_year</th><th>prey_level</th><th>taxon</th><th>pct_items</th><th>pct_wt_or_vol</th><th>pct_occurrence</th><th>pct_unspecified</th><th>database_timestamp</th></tr>

                                </thead>
                                <tbody>
                                    <tr><td>Blue Jay</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1915</td><td>1993</td><td>Class</td><td>Magnoliopsida [dicots]</td><td></td><td>9.75</td><td>95</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Blue Jay</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1915</td><td>1993</td><td>Class</td><td>Insecta [insects]</td><td></td><td>3</td><td>60</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Blue Jay</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1915</td><td>1993</td><td>Class</td><td>Other</td><td></td><td>87.25</td><td></td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Northern Cardinal</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1908</td><td>1961</td><td>Class</td><td>Magnoliopsida [dicots]</td><td></td><td>20</td><td>17.8</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Northern Cardinal</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1908</td><td>1961</td><td>Class</td><td>Insecta [insects]</td><td></td><td>3.8</td><td>15.7</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Northern Cardinal</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1908</td><td>1961</td><td>Class</td><td>Other</td><td></td><td>76.2</td><td>0.1</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Trumpeter Swan</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1937</td><td>1995</td><td>Class</td><td>Magnoliopsida [dicots]</td><td>71.1</td><td>67</td><td>34.8</td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Trumpeter Swan</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1937</td><td>1995</td><td>Class</td><td>Bryopsida [true mosses]</td><td></td><td>32</td><td></td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Trumpeter Swan</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1937</td><td>1995</td><td>Class</td><td>Other</td><td></td><td>1</td><td></td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                    <tr><td>Ruby-throated Hummingbird</td><td>Prey</td><td>all regions</td><td>all seasons</td><td>1912</td><td>1916</td><td>Class</td><td>Insecta [insects]</td><td></td><td>46.9</td><td></td><td></td><td>December 18, 2022 00:00:05 UTC</td></tr>
                                </tbody>
                            </table>
                        </Drawer>
                        <div></div>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="/images/study-wingspan-aviandietdb.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Diet information for a Bald Eagle, from the <a href="https://aviandiet.unc.edu/">Avian Diet Database</a></figcaption>
                        </figure>
                        <p>The data for this module comes from the <a href="https://aviandiet.unc.edu/">Avian Diet Database</a> which contains records from ~1000 studies detailing diets of various bird species. The website provides a species lookup and breaks down prey by taxon and percent of the diet. However, the data lacks any sort of consistency, with some birds listing prey only by weight, others by item, and others both. And sometimes the taxonomy was either listed at the wrong level (species in the class level) or simply not useful (“Unidentified Animalia”). The data was acquired by looking up each special in the sample and using the "Download Data" function, although the complete dataset is available in an R package if the project were to be expanded.</p>

                        <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/bird-viz/blob/main/src/Diet.js">
                            <CodeBlock language="jsx" showLineNumbers={true} text={DietSnippet}/>
                        </Drawer>
                        <figure className={css.figure}>
                            <div className={css.figureObject}>
                                <Diet/>
                            </div>
                            <figcaption className={css.figureCaption}>Try me!</figcaption>
                        </figure>
                        <p>This particular visualisation went through several rounds of development. A pie chart was chosen as it seemed most bird species only consumed a small variety of prey, with one or two making up the vast majority. Initially, there was to be an image of the prey, pulled via Wikidata, and sit on top of the chart. Even though this idea proved out of scope for this project, the space in the middle where it would have been positioned remained, creating a doughnut chart. Ideally, the colouring would be done based on the Wingspan cards (e.g. black for other birds, grey for mammals) but the taxonomy was not 1-1 and concerns arose around overlapping colours, as well as how to codify the types.</p>
                        <p>Another idea that was omitted due to time constraints was the ability to navigate down the taxonomy. For instance, if the user clicked on "Mammalia", the chart would filter down to only show mammals, and provide a breakdown of the individual species preyed upon. Beyond time, the inconsistency in the data made this a difficult challenge to tackle, as well as uncertainty around the quality of the user experience. In the end, the interactive element of the module was scaled back to a simple tooltip and highlight functionality.</p> 
                    </section>

                    <section>
                        <h3>Module 3: Lifecycle</h3>
                        <Drawer title="The Data" buttonTextCollapsed="View Sample Data ›" buttonTextExpanded="Hide Sample Data ⌄" linkText="" linkURL="">
                            <table className={css.drawerTable}>
                                <thead>
                                    <tr><th>Common name</th><th>Clutch Size</th><th>Egg Dimension</th><th>Egg Description</th><th>Incubation Period</th><th>Nestling Period</th><th>Hatchling description</th><th>Mating age</th><th>Monogamous</th><th>Lifespan (Days)</th><th>Lifespan (Years)</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Greater roadrunner</td><td>2-6 eggs</td><td>3.5x2.8cm</td><td>White covered with a chalky yellow film, sometimes stained with brown or gray.</td><td>19</td><td></td><td>Eyes closed but chick strong and active, with black skin and white down along the feather tracts.</td><td>730</td><td>1</td><td>2555</td><td>7</td></tr>
                                    <tr><td>Blue jay</td><td>2-7 eggs</td><td>2.5x1.8cm</td><td>Bluish or light brown with brownish spots.</td><td>17</td><td>34</td><td>Naked and helpless, eyes closed, mouth lining red.</td><td>365</td><td>1</td><td>2555</td><td>7</td></tr>
                                    <tr><td>Northern cardinal</td><td>2-5 eggs</td><td>2.2x1.7cm</td><td>Grayish white, buffy white, or greenish white speckled with pale gray to brown.</td><td>11</td><td>18</td><td>Naked except for sparse tufts of grayish down, eyes closed, clumsy.</td><td>365</td><td>0</td><td>1095</td><td>3</td></tr>
                                    <tr><td>Trumpeter swan</td><td>4-6 eggs</td><td>10.1x6.2cm</td><td>Creamy to dull white, often stained brown in the nest.</td><td>32</td><td>33</td><td>Eyes partially open, covered in mouse-gray or occasionally white down. Leaves nest within 24 hours of hatching and have the ability to swim and feed. Is able to fly at 90 - 122 days after hatching.</td><td>1460</td><td>1</td><td>9125</td><td>25</td></tr>
                                    <tr><td>Dickcissel</td><td>3-6 eggs</td><td>2x1.6cm</td><td>Unmarked, pale blue.</td><td>12</td><td>20</td><td>Nearly naked with sparse white down, helpless.</td><td></td><td>0</td><td>1825</td><td>5</td></tr>
                                    <tr><td>Bald eagle</td><td>1-3 eggs</td><td>5.8x4.7cm</td><td>Dull white, usually without markings.</td><td>34</td><td>90</td><td>Covered with light-gray down; eyes brown; gape, legs, and skin pink.</td><td>1460</td><td>1</td><td>7300</td><td>20</td></tr>
                                    <tr><td>Purple Gallinule</td><td>6-8 eggs</td><td>3.3x2.2cm</td><td>Creamy white with small, irregular brown spots.</td><td>20</td><td>21</td><td>Covered with black down, able to leave nest within one day. Fed by parents.
                                    </td><td>730</td><td>1</td><td>2555</td><td>7</td></tr>
                                    <tr><td>Atlantic puffin</td><td>1 egg</td><td>5.9x4.4cm</td><td>Dull white.</td><td>36</td><td>74</td><td>Covered in dark gray down.</td><td>1825</td><td>1</td><td>10950</td><td>30</td></tr>
                                    <tr><td>Mallard</td><td>1-13 eggs</td><td>5.3x3.9cm</td><td>Unmarked creamy to grayish or greenish buff.</td><td>23</td><td>24</td><td>Newly hatched birds are covered in down and alert; they are ready to leave the nest within 13‚Äì16 hours.</td><td>365</td><td>1</td><td>1825</td><td>5</td></tr>
                                    <tr><td>Scissor-tailed flycatcher</td><td>3-6 eggs</td><td>2x1.5cm</td><td>White or creamy with dark red, reddish brown, or purple blotches.</td><td>13</td><td>27</td><td>Helpless, with reddish brown skin and sparse white down.</td><td>365</td><td>1</td><td>3650</td><td>10</td></tr>

                                </tbody>
                            </table>
                        </Drawer>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="https://m.media-amazon.com/images/I/71N9PGXlSxL.jpg" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Information for a Hammerkop & Scarlet Ibis, from the <a href="https://www.amazon.com/Encyclopedia-Birds-Christiansen/dp/178274715X">Encyclopedia of Birds by Per Christiansen</a></figcaption>
                        </figure>
                        <p>Data collection for this module proved challenging as no single source offered all the information that is required. All About Birds was used for the nesting data but didn't codify information about later development stages. Towards the end of the project, I was gifted a bird encyclopaedia, which serendipitously happen to contain this information. However, being a book, this data had to be entered by hand, further exasperating the issues previously encountered using All About Birds (See Module 1). While the book provides valuable information, encoding the entire tomb would not be an insignificant amount of effort, so other avenues should be explored before such an undertaking.</p>

                        <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/bird-viz/blob/main/src/Lifecycle.js">
                            <CodeBlock language="jsx" showLineNumbers={true} text={LifecycleSnippet}/>
                        </Drawer>
                        <figure className={css.figure}>
                            <div className={css.figureObject}>
                                <Lifecycle/>
                            </div>
                            <figcaption className={css.figureCaption}>Try me!</figcaption>
                        </figure>
                        <p>Much like Module 2, this module changed frequently during development. The first attempt involved using a tree diagram and pruning it until it resembled a timeline. The second involved using a network graph, which proved completely off base. The final approach was to use a one-dimensional scatterplot. The dates are scaled on a log, as early stages in development are measured in weeks, whereas later stages can take decades, and a log allowed them to be drawn with less space in between.</p>    
                        <p>The tooltip displays additional information about each stage of development, such as clutch size and nest descriptions, as this information was present within the Wingspan cards and so should be included. It was set as a sticky to differentiate it from the tooltips in Module 2, although user testing should be done to determine which works better and unify the experience.</p>      
                   </section>

                    <section>
                        <h3>Module 4: Range</h3>
                        <Drawer title="The Data" buttonTextCollapsed="View Sample Data ›" buttonTextExpanded="Hide Sample Data ⌄" linkText="" linkURL="">
                            <table className={css.drawerTable}>
                                <thead>
                                    <tr><th>COUNTY_CODE</th><th>BALD_EAGLES</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>2013</td><td>129</td></tr>
                                    <tr><td>2016</td><td>777</td></tr>
                                    <tr><td>2020</td><td>2077</td></tr>
                                    <tr><td>2050</td><td>29</td></tr>
                                    <tr><td>2060</td><td>49</td></tr>
                                    <tr><td>2068</td><td>92</td></tr>
                                    <tr><td>2070</td><td>13</td></tr>
                                    <tr><td>2090</td><td>346</td></tr>
                                    <tr><td>2100</td><td>29</td></tr>
                                    <tr><td>2110</td><td>2609</td></tr>
                                </tbody>
                            </table>
                        </Drawer>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="/images/study-wingspan-map.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Geographic information for a Bald Eagle, from <a href="https://ebird.org/map/baleag?neg=true&env.minX=&env.minY=&env.maxX=&env.maxY=&zh=false&gp=false&ev=Z&excludeExX=false&excludeExAll=false&mr=1-12&bmo=1&emo=12&yr=all&byr=1900&eyr=2023">eBird</a></figcaption>
                        </figure>
                        <p>A Cornell Lab of Ornithology project, eBird allows users to document bird sightings, which are then collected for use by registered users. During prototyping the sightings for ~20 birds over 2021 were manually downloaded. Aggregating the data was all done using a Python script that would loop through all the files, sum up the number of sighting instances for a given county code, and export as a JSON blob. Unfortunately, the location data included isn't an exact match to standard FIPS encoding, e.g. instead of 01143 it uses AZ-143. This had to be changed to properly reference the positioning on the map.</p>
                        <p>However when trying to generalise the project, it became apparent that pre-processing the entire dataset wouldn't be suitable. If nothing else, even when narrowing the raw data to only the USA for a single year, it was over 100GB in size. eBird does expose an API, which will allow for more birds to be included in future. The downside was that a) it required more processing on the dashboard itself, lowering performance and b) it only provides the last 30 days worth of sighting, making it incomplete for migratory species.</p>
                        <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/bird-viz/blob/main/src/Range.js">
                            <CodeBlock language="jsx" showLineNumbers={true} text={RangeSnippet}/>
                        </Drawer>
                        <figure className={css.figure}>
                            <div className={css.figureObject}><Range/></div>
                            <figcaption className={css.figureCaption}>Try me!</figcaption>
                        </figure>
                        <p>The initial plan for this module involved converting all the points into a single shape file to represent the range and overlaying it atop the map. Although possible, the amount of manual work meant the approach was unsuitable for generalisation. Instead, upon consultation with a classmate, I opted to aggregate the data into regions and use D3's built-in mapping functionality to create a choropleth. Some discussion was had about whether to aggregate to the county or state level, but the former felt better suited. The scale was also much debated, as the data ranged from single sightings to tens of thousands, and so a log scale was chosen to show that granularity.</p>
                        <p>The map used for the base layer was 10m, which was recommended as a standard for this sort of chart. Beyond interfacing well with D3, it also contains a wealth of geographic information to pull on for interaction. Specifically, users can hover over any given country and be provided with where that county is, as well as the total sightings within the data.</p>
                        <p>In future, it would be worth investigating how to add a temporal aspect to this visualisation, as the range of many migratory species changes drastically throughout the year. Previous work has been done on this topic (see <a href="http://ivs22.netlify.app">here</a>) based on the same dataset in a New Zealand context, and showing the sightings as a series of animated points. Other options could include a filter on the data, based on season or month.</p>
                    </section>

                    <section>
                        <h3>Module 5: Wingspan</h3>
        
                        <h4>The Data</h4>
                        <p>The simplest of the datasets, the data for bird wingspan comes from the Wingspan game's data (see Module 1) and is done by table lookup for the relevant species. The other points that appear in the visualisation are also in the data but are instead hard coded. It would be interesting to draw on additional data sources to better demonstrate the scale, such as by using an average human or a blue whale, but that remains for future work.</p>
                        <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/bird-viz/blob/main/src/Wingspan.js">
                            <CodeBlock language="jsx" showLineNumbers={true} text={WingspanSnippet}/>
                        </Drawer>
                        <figure className={css.figure}>
                            <div className={css.figureObject}><Wingspan/></div>
                            <figcaption className={css.figureCaption}>Try me!</figcaption>
                        </figure>   
                        <p>This module provided the most hands-on work with SVGs. The basic shape is courtesy of Jennifer Cahalane and was manipulated through various transform effects. Although it may not be readily apparent, the width of the SVG is a 1-to-1 match between the cm measurement of the wingspan to the pixel width of the SVG. To provide a relative size reference, the California Condor and Hummingbird, the largest and smallest birds in the dataset, were overlaid in the module. This had the added benefit of not having to worry about SVGs overlapping in strange ways, as they would always fall between those two points.</p>
                    </section>
                </section>

                <section id="reflections">
                    <h2>Reflections</h2>
                    <h3>Data Wrangling</h3>
                    <p>One of the biggest challenges for this project was the amount of data that had to be wrangled for it to all come together. Even though it needn't be interoperable, each dataset came with its own set of challenges, such as being incomplete, strangely constructed, or simply not readily available. In the future, more time should be spent during the initial data collection stage to collect and clean what's available and rescope the project based on what's not.</p>

                    <h3>Technology</h3>
                    <p>This has been my largest undertaking in D3, and my first time using React. While both are powerful tools and I'm excited to work with them going forward, there was no shortage of teething issues. D3 can create the standard array of visualisations well, but when trying to push those boundaries it can quickly seize up, with high-quality examples hard to come by (especially with the rise of Observable). React on the other hand has a high barrier to entry, and had me relying heavily on outside help to have it working at all.</p>

                    <h3>It's a bird; it's a plane</h3>
                    <p>I adore being able to work on these sorts of projects, as sharing a topic I'm passionate about and hopefully incentivizing others to learn are both wonderful. While the project can certainly use more polish, and there are many more features I'd love to add, I'm ultimately happy with what I was able to deliver.</p>
                </section>
                
                <section>
                    <h2 id="future">Future Work</h2>
                    <h3>More Data</h3>
                    <p>As mentioned, the dashboard only exists for a small selection of bird species. Being able to fully generalise the project would be an interesting experiment.</p>

                    <h3>Collaboartion</h3>
                    <p>It would be amazing to be able to work with the Wingspan game team to help inform the project and the things that they think would work well. Having their asset library would also be a great boon.</p>

                    <h3>AR</h3>
                    <p>Given that the Wingspan game is the way into this dashboard, it would be interesting to find a way to easily transition participants from one to the other. To that end, a small web application could be developed to scan the game cards and launch the dashboard to the appropriate page.</p>
                </section>    

                <section>
                    <h2 id="related">Other Data Viz Projects</h2>
                    <RelatedStudies>
                        <Card key={"bird-map"} {...projectInfo["bird-map"]}/>   
                        <Card key={"bird-network"} {...projectInfo["bird-network"]}/>   
                        <Card key={"nz-rent"} {...projectInfo["nz-rent"]}/> 
                    </RelatedStudies>  
                </section> 
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },

    "dnd-ui": {
        id: "dnd-ui",
        title: "Cannoneers & Dragons",
        subtitle: "A Web-based Adventure Game Based on the Dungeons and Dragons API",
        blurb: "Cannoneers & Dragons is a technology-focused, web-based app based on the Dungeons & Dragons RPG. It combines Python on the back end to generate characters, monsters, and mazes, with JavaScript on the front end to render it all on the page and allow the user to interact with it. Along the way it queries an API, exposes one via Flask, and even attempts to create an enjoyable experience for the player.",
        note: "N.b: Due to a recent update to the API, certain features of this project no longer function as expected. Character and Maze generation have been temporarily disabled, with pre-generated values inserted into the code.",
        caseStudy: true,
        image:"/images/study-dnd-banner.jpg",
        link: "https://puis22.netlify.app/",
        code: "https://github.com/tkcram/programming-final",
        isVisible: true,
        markup: (
            <>
                <img alt="" src="/images/study-dnd-banner.jpg" className={css.banner}></img>

                <section id="introduction">
                    <h1>Cannoneers & Dragons: Creating a Web-based Adventure Game Based on the Dungeons and Dragons API</h1>
                    <a className="button" target="_blank" href="https://puis22.netlify.app/" rel="noreferrer">Play the Game</a>
                    <p>Cannoneers & Dragons is a small, browser-based game, based on the tabletop roleplaying game Dungeons and Dragons (D&D) by Wizards of the Coast. It consists of two parts: A Python app connected to a D&D API that generates a character to play as and a dungeon to explore; and a Javascript app that renders the game elements in the browser and affords user interaction.</p>
                </section>

                <section id="background">
                    <h2>Background</h2>
                    <p>This project was created as the final of two separate classes. INFO 664: Programming for Cultural Heritage provided the back end, and INFO 637: Programming User Interfaces provided the front end. The goal was to demonstrate a variety of coding skills, such as calling APIS and rendering elements to the DOM, in such a way that provided a unified product at the end of the project. I opted to work with D&D both because it is a game system I know well and believe would be engaging to a general audience, and also because the complexities and nuances within the rules system provided ample opportunity to test my skills.</p>

                    <h3>Dungeons & Dragons</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="/images/study-dnd-dnd.png"/>
                        <p>Dungeons and Dragons is a game wherein players come together around a table, take control of a character, and embark on an adventure devised by an additional group member, aka the Dungeon Master. Created by Gary Gygax and published in 1974, currently in its 5th edition, the game has been played by millions of people around the world.</p>
                    </div>
                </section>

                <section id="back-end">
                    <h2>Back-end</h2>
                    <section>
                        <h3>Resources</h3>
                        <h4>Python</h4>
                        <div className={css.textLogo}>
                            <img alt="" className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
                            <p>The backend code for this project was written in Python, built entirely from scratch. Several packages were imported: 'requests' and 'json' for getting data from the API and being able to manipulate it; 'math' and 'random' for making decisions when the API offered multiple options, and 're' for dealing with D&D dice notation (e.g. two six-sided die would be rendered 2d6).</p>
                        </div>

                        <h4>D&D API</h4>
                        <div className={css.textLogo}>
                            <img alt="" className={css.logo} src="http://www.dnd5eapi.co/public/favicon.ico"/>
                            <p>The D&D 5e API was created by Fergus Bentley and makes the freely available D&D resources available through a RESTful API. Although this content only scratches the surface of what D&D has to offer, it provides more than enough to get started and provide all the templates that this project needs.</p>
                        </div>

                        <h4>Flask</h4>
                        <div className={css.textLogo}>
                            <img alt="" className={css.logo} src="/images/study-dnd-flask.png"/>
                            <p>Due to the nature of the project straddling two different classes, and thus two different languages, a program layer was needed to allow them to talk to each other. Flask.py was chosen, as I felt it would be the easiest to implement. Although this was still one of the more challenging aspects of the project as it was the part I had the least experience with.</p>
                        </div>
                    </section>

                    <section>
                        <h3>Code Files</h3>
                        <section>
                            <Drawer title="character.py" buttonTextCollapsed="View Sample Output ›" buttonTextExpanded="Hide Sample Output ⌄" linkText="Github" linkURL="https://github.com/tkcram/pfchs22/blob/master/src/create_character.py">
                                    <CodeBlock language="json" showLineNumbers={true} text={JSON.stringify(snippets['tempChar'], null, 2)}/>
                                   {/*<CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>*/}
                            </Drawer>

                            <p>The character creator is the largest of the backend files, due mostly to the wide variety of traits a single character needs. It works by initially defining the character template and filling in each section in turn. The first three it calls defines (i.e. Race, Class, and Background) all require calling the API for the complete list of possible options and choosing one at random. These are called first as they each modify later parts of the template. Thankfully, the Fifth Edition rules do not contain any logic as to race/class combinations, so choosing completely blind is a valid approach.</p>
                            <p>Next come the character statistics and skills. Although there are a variety of ways within the rules to calculate this, I opted for the "3d6" approach, or the sum of three numbers each between 1 and 6. This is repeated for each of the six key statistics in the game, and modified based on data from the character's race. Skills are then calculated based on which on the six statistics they're based on, modified by any factors from the class or background.</p>
                            <p>Equipment and combat actions follow, which proved significantly more complex than the previous sections. The main challenge came from the breadth of equipment the game has on offer and all the different combinations that a character could possess. Once the equipment list was sorted, it was then reasonably straightforward to calculate the hit points and other combat details.</p>
                            <p>Lastly, and most complexly, came spellcasting. The complexity here stems from the fact that there is minimal uniformity between spellcasting classes. Some casters learn new spells as they level up for instance, while others simply gain the ability to use more spells in one burst. This resulted in a significant amount of error handling and special cases but ultimately proved functional. The biggest impact it had on the code was needing to have each level calculated in sequence from level 0, rather than being able to calculate backwards from a given level. Thus it forced the creation of a levelling up system, which proved useful to be able to pass back and forth between the front and back ends.</p>
                        </section>

                        <section>
                            <Drawer title="items.py" buttonTextCollapsed="View Sample Output ›" buttonTextExpanded="View Sample Output ⌄" linkText="Github" linkURL="https://github.com/tkcram/pfchs22/blob/master/src/create_equipment.py">
                                    <CodeBlock language="jsx" showLineNumbers={true} text={JSON.stringify(snippets['tempItem'], null, 2)}/>
                                    {/*<CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>*/}
                            </Drawer>
                            <p>This code does two things. The first is to format the equipment the character receives into a usable format. It does this by taking the desired item and the current inventory, fetching that item from the API, transforming the data into a flat dict, and appending it onto the inventory before returning said list. The key challenge was figuring out how to tackle the wide variety of items. Weapons and armour were both relevant to gameplay and thus needed their statistics saved, whereas all other items were simply returned as strings. This is something to expand upon in future work. </p>
                            <p>The second is to populate the maze with items. In addition to the weapon and armour categories listed above, the code also includes a custom-built potion category to help players as they progress through the game, allowing them to recover health or improve their character's statistics. It also allowed for all items to receive a bonus based on both the level of the maze and a random number generator. Otherwise, item selection works based on randomly selecting an item category, calling the API for all items in that category, choosing one at random, and then running the above equipment code. Merging of loot and current equipment is to be handled on the front end.</p>
                        </section>

                        <section>
                            <Drawer title="monsters.py" buttonTextCollapsed="View Sample Output ›" buttonTextExpanded="Hide Sample Output ⌄" linkText="Github" linkURL="https://github.com/tkcram/pfchs22/blob/master/src/create_monster.py">
                                    <CodeBlock language="jsx" showLineNumbers={true} text={JSON.stringify(snippets['tempMon'], null, 2)}/>
                                    {/*<CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>*/}
                            </Drawer>
                            <p>Compared to creating a character, creating a monster is a relatively straightforward process. Each monster comes with a pre-generated block of statistics, and so this code mostly focuses on transforming those details into something that the front end can process. I also captured more details than were strictly needed, to allow a certain amount of future-proofing if I ever decide to add those features to the game. There was a minor issue where some Monsters had abilities that did not fit into the well-defined boxes, but for this project, it was simpler to exclude them rather than try and work through every edge case.</p>
                        </section>

                        <section>
                             <Drawer title="maze.py" buttonTextCollapsed="View Sample Output ›" buttonTextExpanded="Hide Sample Output ⌄" linkText="Github" linkURL="https://github.com/tkcram/pfchs22/blob/master/src/create_maze.py">
                                    <CodeBlock language="jsx" showLineNumbers={true} text={JSON.stringify(snippets['tempMaze'], null, 2)}/>
                                    {/*<CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>*/}
                            </Drawer>
                            <p>The maze itself is created using a randomised depth-first search. This involves creating an X by X grid of cells, with X determined by input, and placing a marker at an "entrance" position. The marker then traverses the grid, choosing randomly which direction to go at each step, until it is presented with no valid options. It then steps back along its path until it finds a previously unvisited cell, and repeats this process. The process terminates when the marker finds itself back at the 'entrance, having visited all available cells. As it traverses it also keeps a note of the single longest pathway it has taken, and at the end of that path places the 'exit' cell.</p>
                            <figure className={css.figure}>
                                <img className={css.figureObject} src="https://plaxdev.files.wordpress.com/2017/08/depth-first-quad2.gif?w=200" alt=""/>
                                <figcaption className={css.figureCaption}>Example of Depth First Search Maze Generation</figcaption>
                            </figure>
                            <p>Once the maze has been generated, the second part of the code moves through each cell and has a chance to populate it. It does this by generating a random number, which above a certain threshold adds something to the cell, such as a monster of an appropriate level for the maze, or equipment based on how high the random generator scores. These call either monsters.py or items.py to handle the API calls and data transformation. The maze is then exported as a single JSON object.</p>
                        </section>
                    </section>
                </section>

                <section id="front-end">
                    <h2>Front-end</h2>
                    <h3>Resources</h3>
                    <h4>JavaScript</h4>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="/images/study-dnd-js.png"/>
                        <p>The front-end code for this project was written in JavaScript, with a simple index.html page to serve as the anchor. Although some discussion was had about using React or some other JS library, I opted to code entirely in vanilla as I wanted to develop a good understanding of the fundamental principles of a language I hadn't used much of previously. </p>
                    </div>

                    <h4>Assets</h4>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="https://github.com/tkcram/puis22/blob/master/images/Hero.png?raw=true"/>
                        <p>Assets for this project were developed either by myself or my partner Jennifer Cahalane. The rudimentary style was used partially to impart character to the project, and partially due to my lack of illustrative acumen. Additional sprites were drawn for the project, but due to time constraints, it was easier to rely on only basic hero & monster sprites.</p>
                    </div>

                    <h3>Code Files</h3>
                    <Drawer title="control.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/puis22/blob/master/scripts/control_script.js">
                        <CodeBlock language="jsx" showLineNumbers={true} text={"Coming Soon!"}/>
                    </Drawer>
                    <p>The control code does what you might expect - operates all top-level functionality of the code. This primarily involves reading the initial input (i.e. character level, maze size, difficulty), calling the back-end to generate the appropriate files, and then passing those files to the game engine. It also controls any non-game-related functionality on the page, such as switching between menus. Despite being relatively straightforward, learning the nuances of async await functions provided a good learning experience.</p>
                    <p><i>N.b. due to changes in the D&D API, generation has been temporarily disabled. The code currently reads in several local files with pre-generated code.</i></p>

                    <Drawer title="builder.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/puis22/blob/master/scripts/maze_builder.js">
                        <CodeBlock language="jsx" showLineNumbers={true} text={"Coming Soon!"}/>
                    </Drawer>
                    <p>If ever there was a reason to switch to React, it would be this code block, which is responsible for converting the maze from JSON to HTML. Since components aren't available in vanilla JS, the workaround was to render each block of HTML in a template string. Thus, the code iterates through each cell, and using a series of conditionals it converts each field in the JSON to a string of HTML code, combines the code all together, and injects the entire string to the page. Once rendered on the page, the code then queries each clickable element type (e.g. 'Monsters', 'doors') and gives them the associated click event. Given the chance to refactor the project, it would be worth pursuing better ways of approaching this problem.</p>

                    <Drawer title="interactions.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/puis22/blob/master/scripts/maze_exporter.js">
                        <CodeBlock language="jsx" showLineNumbers={true} text={"Coming Soon!"}/>
                    </Drawer>
                    <p>Once everything has been taken in from the API and rendered on the page, this code block defines all how you can interact with it. As well as a 'dice roller' that functions as the game's random number generator, interactions are broadly sorted into three categories: maze, monster, and item.</p>
                    <p><b>Maze Interactions:</b> This is how a player reveals new rooms and moves between them. The main thing to note about how this works is that the entire maze is rendered all at once. So instead of rendering each room as the player moves into it, the rooms are prerendered and the view is moved based on where the player is located. It was initially implemented this way as the idea was to have the entire maze visible on screen but was switched to a single-room view late in development. Not to say it is without benefit, as it allows for rapid load times, and the ability to easily animate movement between rooms. </p>
                    <p><b>Monster Interactions aka Combat:</b> As to be expected in a game about fighting monsters, combat uses a significant amount of math and logic, which is defined based on the ruleset of Dungeons and Dragons. So when a monster is interacted with, both them and the player character attempt to attack, with 'initiative' determining who goes first. A random number between one and twenty is set, and the attacker's abilities and weapons add to it. If the total number exceeds the defenders 'ac', or if the random number is 20, the attack succeeds and damage is calculated.</p>
                    <p>Damage is where things get complicated from a computational standpoint. Within the game rules damage is given as 'xDy+z', i.e. roll x dice with y sides and add z. Here regex is used to tease apart the details, and the dice roller function is called x times, with y being passed as the maximum. Once the dice rolls are summed, and z is added, the total number is subtracted from the defender's health. Finally, if their health is below zero they are removed from the game (game over if this is the player), otherwise, it resets back to the initial state.</p>
                    <p><b>Item Interaction:</b> Comparitively, item interaction is straightforward. The data for the items is already loaded, so when clicking on an item it is removed from the map and its data is added to the player's inventory. However, it's of little use if all it does is sit there, so a player needs to be able to use it. This is done by clicking the icon for it in the player's information, which isn't well highlighted, and the code rerolls all relevant statistics. Unfortunately, since the code for doing this on the back end, it required either passing the information back and forth or reduplicating the code. I opted for the latter.</p>

                    <Drawer title="exporter.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="https://github.com/tkcram/puis22/blob/master/scripts/maze_interactions.js">
                        <CodeBlock language="jsx" showLineNumbers={true} text={"Coming Soon!"}/>
                    </Drawer>
                    <p>This code is responsible for passing any updates in-game states into the information models. Thus whenever a character takes damage it is reflected in their health total, or if they explore a new room it is visible on the minimap. The biggest part of this is listing any actions the player takes in the action log. This allows players to both keep track of what has been happening in the game, but also know that their interactions on the page are having an effect. Combined with animations, this means the player should always have feedback on their actions, improving the user experience.</p>
                </section>

                <section id="reflections">
                    <h2>Reflections</h2>
                    <h3>Constraints</h3>
                    <p>A significant amount of complexity for this project came from the various constraints, both self-imposed and as part of the curriculum. Using only vanilla JavaScript meant that several creative workarounds were needed for what would be easily accomplishable using React. And having to work in both JavaScript and Python meant ensuring they could talk to each other in some way, and passing data back and forth proved challenging. </p>
                    <p>Beyond the lack of interoperability, another challenge of working across two languages was remembering the syntax for each. Frequently I would encounter errors because I switched print() for console.log(), or len(string) for string.length(). While both languages have their unique advantages, and solving these challenges was a reward, using a single coding language for the entire stack is likely the way to go when possible.</p>

                    <h3>Ornithopters and Aeroplanes</h3>
                    <p>It was interesting trying to directly adapt the rules for Dungeons and Dragons into a digital format. Things such as rolling dice or adding bonuses are relatively straightforward using pen and paper but can require much more involved computation. Similarly, in a tabletop setting most players need only track their specific requirements, and so edge cases are less noticeable, but this is not the case for a project like this. Thus, there's a tension between wanting to stay as close to the original rules as possible and trying to do what works best in the medium. I tended towards the former, but exploring the latter could be interesting.</p>
                </section>

                <section id="future">
                    <h2>Future Work</h2>
                    <h3>Complete Refactor</h3>
                    <p>In all, I would consider this a solid prototype. But given all the lessons learnt from the project, I believe the best future for it would be to start again from scratch, without all the constraints imposed on it. Mainly, this would involve writing the entire game in React. I would also expect to give the asset and animation library a makeover, likely drawing from external sources.</p>

                    <h3>More Features</h3>
                    <p>Dungeons and Dragons is a vast ruleset, with the 5th edition resources spread across dozens of books. Although a portion of that content, such as races or classes, isn't available in the API, there's still a wealth of features to draw on. Whether this is character abilities, spells, or even just a save function, there's plenty of opportunity for growth for this project</p>
                </section>

                <section id="related">
                    <h2>Other Technology Projects</h2>
                    <RelatedStudies>
                        <Card key={"wingspan"} {...projectInfo["wingspan"]}/>   
                        <Card key={"personal-site"} {...projectInfo["personal-site"]}/> 
                        <Card key={"dog-ui"} {...projectInfo["dog-ui"]}/>   
                    </RelatedStudies>  
                </section> 
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
                    text: "Related Projects",
                    ref: "#related"
                },
            ]
        },

    "ids": {
            id: "ids",
            title: "IDS & Open Data",
            subtitle: "Reviewing the Tensions and Potential Resolutions Between Two Ideologies",
            blurb: "Indigenous Data Sovereignty is a burgeoning field of scholarship that examines the role of indigenous peoples in data ownership and control. The Open Data Movement however exerts that data should be available and usable to all by default. This research paper conducts a literature review investigating what these movements stand for, where their tenets may conflict, and proposes several ways that they may be able to exist harmoniously.",
            image:"/images/study-ids-banner.png",
            caseStudy: false,
            link: "/documents/ids.pdf",
            code: "",
            isVisible: true,
            markup: (
                <>
                    <img src="/images/study-ids-banner.png" className={css.banner} alt=""/>
                    <h1 id="introduction">Indigenous Data Sovereignty & Open Data: Tensions and Resolutions</h1>
                    <a className="button" target="_blank" href="/documents/ids.pdf" rel="noreferrer">Read the Report</a>
                    <p>(Original Abstract) In the age of big data an array of questions are being asked as to how our data is created, controlled, and distributed. Two movements that have manifested to answer these questions are Indigenous Data Sovereignty (IDS) and the Open Data Movement (ODM). IDS examines these questions through an indigenous perspective, focusing on the reclamation of data about, with, or by indigenous peoples. ODM, on the other hand, believes that data should be freely available without restrictions. While both of these movements come with lofty ambitions, the ways they approach data may not inherently be harmonious. The goal of this paper is to examine what tensions exist between these two movements, as well as what steps can be taken to have them coexist and potentially even support one another</p>

                    <h2 id="background">Background</h2>
                    <h3>The Project</h3>
                    <p>This project was created for INFO 601: Foundations of Information with Prof Debbie Rabina. As an indigenous person myself, I felt this was an important topic to dive into. It was almost entirely a literature review</p>
                    <p>It is also currently out for review for publication (At the time of this writing, will update if published)</p>

                    <h3>Indigenous Data Soveriegnty</h3>
                    <p>Indigenous peoples are people who are indigenous. I know I use this a lot for my placeholder text, but in this instance, it's actually about as accurate a definition as anything else</p>
                    <p>In recent years, there has been a growing discourse in these communities about their rights in the modern world. Including their data Soveriegnty</p>

                    <h3>The Open Data Movement</h3>
                    <p>While the notion of open data is almost a hundred years old, the current incarnation is closer to maybe 30. It has its roots in research data, but this study mostly focuses on administrative data. That is, data the government collects about its peoples</p>

                    <h2 id="tensions">Tensions</h2>
                    <h3>About Openness</h3>
                    <h4>Ownership, Control, & Access</h4>
                    <p>This is where a lot of the literature exists, talking about what openness and control are all about. Hell, people have been talking about this since there's been data. We love to talk about the Raja</p>

                    <h3>About Data</h3>
                    <h4>Context, Bias, & Absence</h4>
                    <p>It also seemed important to talk about the quality of the data. This speaks a lot to me as someone who works with data. There can be so many assumptions about the truth of plainly falsifiable data.</p>

                    <h2 id="resolutions">Resolutions</h2>
                    <h3>IDS - Involvement</h3>
                    <p>I'm gonna be honest, most of the literature around what indigenous people want is to just be included, and at every step of the way. People are sick of having others make decisions about them.</p>

                    <h3>ODM - 50 Shades of Grey</h3>
                    <p>ODM likes to make big, utopian claims, but it's not so simple. There are so many moving parts that a lot more needs to be done to dig deeper, and part of that is acknowledging the current hegemony.</p>

                    <h2 id="reflections">Reflections</h2>
                    <h3>Something New</h3>
                    <p>Both of these are emerging fields, and there has been very little work intersecting the two of them. So by literature review standards, it required a lot of thinking</p>

                    <h3>Bias abound</h3>
                    <p>Oh man are people racist. Like I'm not just talking about the old-timey judges saying deplorable things, but even some of the writing now is a lot</p>

                    <h2 id="future">Future Work</h2>
                    <p>So goddamn much</p>

                    <h3>Data Literals</h3>
                    <p>A reconnection of IDS within the larger DS movement would be good. Having our data on server racks in the canaries is a problem</p>

                    <h3>We the peoples</h3>
                    <p>As mentioned, there's so much grey area in both of these movements, so being able to view a more diverse range of voices in them is a start</p>

                    <h3>MAAAAAM</h3>
                    <p>Big government is one thing, big tech is a whole other beast.</p>

                    <h2 id="related">Other Research Project</h2>
                    <RelatedStudies>
                        <Card key={""} {...projectInfo[""]}/>   
                        <Card key={""} {...projectInfo[""]}/>   
                        <Card key={""} {...projectInfo[""]}/>   
                    </RelatedStudies>   
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },

    "nyphil-eval": {
        id: "nyphil-eval",
        title: "Updating the Archive",
        subtitle: "Conducting Moderated User Testing to Improve the New York Philharmonic's Digital Archives",
        blurb: "As the New York Philharmonic Archive works to improve its user interface, we were called upon to perform user research on the current version. Our team conducted a series of moderated user tests and used the results to inform our recommendations for potential areas of improvement. The full report was presented to the client, allowing them to ensure the interface followed a user-centred design.",
        image:"/images/study-nyp-banner.png",
        caseStudy: true,
        link: "/documents/nyphil.pdf",
        code: "",
        isVisible: true,
        markup: (
            <>
                <img className={css.banner} alt="" src="/images/study-nyp-banner.png"/>

                <section>
                    <h1 id="introduction">Conducting Moderated User Testing to Improve the New York Philharmonic's Digital Archives</h1>
                    <a className="button" href="/documents/nyphil.pdf" target="_blank" rel="noreferrer">Read the Report</a>
                    <p>The New York Philharmonic is one of the city’s most prestigious institutions, and its archive represents over 180 years of cultural heritage. In 2011, the Philharmonic founded the Shelby White & Leon Levy Digital Archive to undertake the herculean effort of digitising the contents, including thousands of scores, programs, and photographs, and making them publicly accessible. 10 years on, the Digital Archive contains over six million pages of material. The interface, however, remains the same. This project works with users to explore both what makes the Digital Archives interface wonderful, and also to identify ways that it can be improved, as they seek to revitalise the entire site.</p>
                </section>

                <section id="background">
                    <h2>Background</h2>
                    {/*<h3>The Project</h3>*/}

                    <p>This was the final project in INFO 644: Usability Theory & Practice. The goal was to gain experience working with real clients and stakeholders, as part of the <a href="https://prattdx.org/">Center for Digital Experiences</a>. Specifically, our team worked with the New York Philharmonic's Digital Archive as they continue to improve their user interface. Although the archive itself only consists of a handful of unique pages, the breadth of the user base and the depth of the archived material were both challenges we were eager to sink our teeth into.</p>

                    <h3>PrattDX</h3>
                    <p>The team for this project comprised four graduate students at Pratt's School of Information, guided by <a href="https://www.pratt.edu/people/iris-bierlein/">Professor Iris Bierlein</a>. Anna Feldman and I came from the Data Analytics and Visualization program, Sayali Nikumbh from Information Experience Design, and Tess Porter from Museums and Digital Culture.</p>
                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-nyp-headshots.png" alt=""/>
                        <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
                    </figure>

                    <h3>The New York Philharmonic</h3>

                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="/images/study-nyp-logo-main.svg"/>
                        <p>The New York Philharmonic is amongst both the oldest and largest orchestras in the United States of America. Known as one of the "<a href="https://starkconductor.com/big-five-orchestras/">Big Five</a>", they have performed over 14,000 concerts across a storied 181-year history. </p> 
                    </div>

                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="/images/study-nyp-logo-archive.png"/>
                        <p>In 2011 the Philharmonic launched their digital archive. Comprising over four million records dating back to the orchestra's earliest days, the archive consists of musical scores, programs, images, and audio recordings. As part of a National Endowment for the Humanities grant, the Digital Archives was to undergo a redesign and wanted user testing done to inform where they should best direct their efforts.</p>
                    </div>
                </section>

                <section id="testing">
                    <h2>User Testing</h2>  

                    <section>
                        <h3>Initial Consultation</h3>
                        <p>A meeting was set up to discuss the scope and goals for the project. From this, we established the following:</p>
                        <p>Moderated Remote User Testing would best suit their needs. This is a form of a lab experiment that involves users as participants, is conducted in a controlled environment, and is actively moderated by a usability expert. This is widely considered the gold standard for user testing research, as it gives the evaluator more control of the test, such as asking follow-up questions or directing participants through pain points. It also provides richer information, as evaluators can observe actions and body language, and engage in follow-up discussions. Although it is a time and resource-intensive approach, it is balanced by the quality of the results.</p>
                        <p>The scope of the project was incredibly broad. While it would all be contained within the Digital Archives interface, there was a want to explore all the features it had to offer. The same was true for their users - although a couple of distinct user groups were identified (see below), the only limiting factor for potential participants was that they could access the site. </p>  
                        <p>Several areas were discussed that we knew the client wanted specific information on. This includes the discoverability of content, the linking of records, and the overall accessibility of the site</p>
                    </section>

                    <section>   
                        <h3>Preparation</h3>
                        <p>After our initial meeting with the Digital Archives, the team got to work. We decided the most efficient use of our time would be to divide out the tasks between us and reconvene periodically to review each other’s work. As my teammates got to work on creating the communications, surveys, and testing material, I began formulating the user profiles.</p>
                        <p>Given that the Digital Archives wanted to test their interface on as broad a user group as possible, we didn’t need to account for demographics. However, in our initial consultation, they did state how they wanted it to be intuitive for new users, but powerful enough for established ones. Amateur Alice and Professor Polly were the first two user profiles created, looking to capture those two user groups. A third profile, Explorer Ethan, was made to cover those that existed between the two groups. However, during testing, we determined that the key factor was whether they were experienced with archives, and so the distinction between Ethan and Alice became less relevant.</p>
                        <figure className={css.figure}>
                            <table className={classnames(css.drawerTable,css.figureObject)}>
                                <thead>
                                    <tr><th>Category</th><th>Amateur Alice</th><th>Explorer Ethan</th><th>Professor Polly</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Occupation</td><td>Student</td><td>Young Professional</td><td>Researcher/ Archivist</td></tr>
                                    <tr><td>Product Familiarity</td><td>Never visited the site</td><td>Familiar with NYP, but not archive</td><td>Familiar with the archive</td></tr>
                                    <tr><td>Search Experience</td><td>Google, TikTok</td><td>Google</td><td>Archives, Research Libraries, NYP Archive</td></tr>
                                    <tr><td>Cultural Experience</td><td>Trained musician</td><td>NYP attendee/donor</td><td>Deeply immersed in the field</td></tr>
                                    <tr><td>Engagement</td><td>Get in, get out</td><td>Take time to look around</td><td>Will work to find what they're looking for</td></tr>
                                    <tr><td>Goals</td><td>Find specific resources</td><td>See what the archives have on offer</td><td>Find out everything they can about a subject</td></tr>
                                    <tr><td>Site requirements</td><td>Save/Share archive files</td><td>Easy navigation, discoverability</td><td>Cross reference, in-depth search</td></tr>
                                    <tr><td>Recruiment goal</td><td>2-3 Participants</td><td>2-3 Participants</td><td>2-3 Participants</td></tr>
                                </tbody>
                            </table>
                            <figcaption className={css.figureCaption}>User profiles for recruitment</figcaption>
                        </figure>
                        <p>After a few rounds of edits on everyone’s material, we moved on to the next stage of preparation. I paired with the task author, Tess Porter, to develop the testing script. We decided on using a tight script (i.e. one to be followed exactly) to ensure minimal variance across evaluators due to confidence, language proficiency, or our natural cadence. However, this style of script also required a significant amount more testing and refinement for the tests to go smoothly when read entirely verbatim. We did this by running a series of pilots, initially by ourselves and then with family members, revising and tightening the language at every step. We also touched base with the Digital Archives to ensure we were capturing the data they were looking for, leading us to add a task to our script.</p>
                        <p>During this same period, the other two team members had been working on recruitment. They created both the communication templates, as well as the screening questionnaires for participants to express interest. These were circulated initially on Pratt's internal mailing list, and later by members of the Digital Archives team. Once participants had signed up and been selected based on our current recruitment needs, they were sent an invite to schedule a testing time, as well as a consent form to be signed.</p>
                        <figure className={css.figure}>
                            <img className={css.figureObject} src="/images/study-nyp-consent.png" alt=""/>
                            <figcaption className={css.figureCaption}>Consent form</figcaption>
                        </figure>
                    </section>

                    <section>   
                        <h3>Testing</h3>
                        <p>In total, 10 moderated user tests were performed, with three matching the “Professor Polly” profile, and seven matching a combination of the other two. All team members moderated and spectated an equal amount. Tests on average took the expected amount of time, approximately 30-45 minutes, with our highly proficient users taking the least amount of time.</p>
                        <p>Abridged versions of the tasks are listed below. Initially, we had considered modifying the tasks based on which user profile the participant matched but ultimately decided that we would receive better data noting how novice vs expert users solved the same tasks. Each task also featured two follow-ups - “How difficult was this task to complete” and “How successful do you feel you were in completing this task”.</p>
                        
                        <figure className={css.figure}>
                            <dl className={classnames(css.figureObject,css.figureText)}>
                                <dt>Task 1:</dt>
                                <dd>Find a program and a photo that includes William Lincer, a member of the New York Philharmonic orchestra in the mid-1900s </dd>

                                <dt>Task 2:</dt>
                                <dd>Find the sheet music and clarinet piece for Tchaikovsky's Nutcracker Ballet.</dd>

                                <dt>Task 3:</dt>
                                <dd>Find the digital exhibition about its first female musician, and where said musician was born</dd>

                                <dt>Task 4:</dt>
                                <dd>Find the newly digitized set of press clipping scrapbooks, which are featured on their homepage, and specifically one from the park concert series</dd>

                                <dt>Task 5:</dt>
                                <dd>Find a recording of one of the virtual performances offered by the Philharmonic in the first few months of the pandemic, and which soloist performed the most during this time</dd>
                            </dl>
                            <figcaption className={css.figureCaption}>User Testing Task List</figcaption>
                        </figure>

                        <p>After completing the five tasks, participants were asked to complete a post-test questionnaire based on the System Usability Scale. Users were also asked about their emotional response to the interface, but due to an error in the initial survey this data is incomplete.</p>
                    </section>

                    <section>   
                        <h3>Analysis</h3>
                        <p>After all participants completed testing, the team reconvened to discuss the findings. Our participants had provided us with a wealth of information, and after some initial discussion, we settled on using a Rainbow Chart to analyse the information. This involved each of us reviewing our notes and listing any issues the participants encountered, before pulling the list into a single spreadsheet. We then consolidated the items, combining any that were functionally the same and which participants encountered them. </p>
                        <figure className={css.figure}>
                            <img className={css.figureObject} src="/images/study-nyp-rainbow.png" alt=""/>
                            <figcaption className={css.figureCaption}>Sample of the rainbow chart used in analysis</figcaption>
                        </figure>
                        <p>We used several other tools to help inform our recommendations. The System Usability Scale data from the questionnaires was analysed, for a benchmark score of 60.3/100 ("okay"). Tess Porter and I also sat down with an accessibility domain expert to run an ad-hoc audit on the Digital Archives website, giving us insight into specific accessibility issues that could be remedied.</p>
                    </section>
                </section>

                <section id="recommendations">
                    <h2>Recommendations</h2>
                    <p>There were a few pages a lot of people visited, and a lot of pages a few people visited. This set out the narrative for our report, targeting the areas that were most commonly visited while also keeping notes on all other potential improvements. In particular, we found users spent the majority of their time on either the main landing page or the search results page.</p>

                    <section>   
                        <h3>Homepage</h3>
                        <p>The first recommendation involved updates to the homepage. While initially only presented as one recommendation, we soon discovered that the two main areas of improvement, the navigation and the carousel, had little commonality between them. This led to us splitting the recommendation into two separate items.</p>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="/images/study-nyp-navigation-before.png" alt=""/>
                                <img className={css.figureObject} src="/images/study-nyp-navigation-after.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Navigation Before/After</figcaption>
                        </figure>
                        <p>Recommendation 1 focused on the navigation menu, and was mostly intended to be small, actionable items. This included several accessibility-minded updates, including increasing colour contrast and adding hover states, and renaming some labels that our participants found confusing - such as changing ‘features’ to ‘exhibits’.</p>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="/images/study-nyp-carousel-before.png" alt=""/>
                                <img className={css.figureObject} src="/images/study-nyp-carousel-after.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Carousel Before/After</figcaption>
                        </figure>

                        <p>Recommendation 2 involved the carousel, which the Digital Archives had indicated was an area of interest. Again we opted for simple solutions mainly focused on usability. However, compared to the navigation bar, we were surprised when the client requested grander changes on how the carousel could be resigned from scratch. This led to us updating our report to include other examples of carousels and alternate ways of displaying this information.</p>
                    </section>

                    <section>   
                        <h3>Search Results Page</h3>
                        <p>Much like the main landing, it was evident that the findings from the search results page warranted two separate recommendations, one about the overall layout, and one specifically targeting the filter modal.</p>
                        <figure className={css.figure}>
                            <div>
                                <img className={css.figureObject} src="/images/study-nyp-results-before.png" alt=""/>
                                <img className={css.figureObject} src="/images/study-nyp-results-after.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Results Before/After</figcaption>
                        </figure>
                        <p>Recommendation 3 was about making sure the search results page better matched the users' mental model. The most substantive change was to create a consolidated results page, rather than the current version where it is pre-filtered. Several visual changes were made to help create consistency between the different filters, namely grouping all the filters in a single place, as well as formatting all results in the same style.</p>
                        <figure className={css.figure}>
                            <div className={classnames(css.figMulti, css.figDouble)}>
                                <img className={css.figureObject} src="/images/study-nyp-filter-before.png" alt=""/>
                                <img className={css.figureObject} src="/images/study-nyp-filter-after.png" alt=""/>
                            </div>
                            <figcaption className={css.figureCaption}>Filter Before/After</figcaption>
                        </figure>
                        <p>Recommendation 4, the filter modal, was the screen that was displayed when selecting filters. The team was aware this was a problem area, as users were consistently overwhelmed by the sheer volume of filters (sometimes over 200 pages), but didn't know how to best resolve it. Options included changing the pagination to a scroll function, reordering the results, and creating different modals for few vs many results. In the end, we decided that the simplest option was to allow users to search through the filters to find the one they were looking for. We also moved this view to the sidebar, to help create the consistency that we mentioned in recommendation 3.</p>
                    </section>

                    <section>   
                        <h3>Everything Else</h3>
                        <p>While I was involved in the discussion around the other recommendations, my main task was focused on how to convey the miscellany of other insights we gleaned from our user testing. While many narrative structures were attempted, a tabular format proved to be the most efficient. None of these recommendations alone have much depth nor a mockup. 5 broad categories were created:</p>
                        <dl>
                            <dt><h4>Accessibility</h4></dt><dd><p>This was important to the Digital Archives per our meetings. We aimed to incorporate as much as possible into our other recommendations, but we wanted to state that these were items that should be updated site wide</p></dd>
                            <dt><h4>Metadata</h4></dt><dd><p>With Google being such a feature of modern life, novice users typically ran into roadblocks with stricter search queries. Terms like “ballet” or “image” weren’t indexed, and there was no fallback state for the user.</p></dd>
                            <dt><h4>User Interface</h4></dt><dd><p>Some items we described were intentional design choices, this category was for the rest. Object overflows, loading times, etc.</p></dd>
                            <dt><h4>Links and Labels</h4></dt><dd><p>Naming things is difficult. This section also gave us the chance to offer further testing opportunities through A/B testing.</p></dd>
                            <dt><h4>Knowledge organisation</h4></dt><dd><p>Again, structuring information is a hard problem to solve. This again offered future testing opportunities, for instance, a Tree Test</p></dd>
                        </dl>
                    </section>
                </section>

                <section id="handoff">
                    <h2>Client Handoff</h2>
                    <p>After a significant number of revisions, we had our report in hand. The next step was to present it to the client.  We tried to showcase our work in the nicest format, but refining the content of the report took longer than anticipated, leading us to run out of time for slide formatting. However, we tried our best to present the intense amount of information concisely and understandably.</p>
                    <p>We each presented a section, with myself doing the introductions and methods, followed by a discussion session. Although the sentiment in the room was positive, it was obvious that there was a significant amount of information for the client to digest. One surprise, as mentioned when discussing recommendation 2, was how much interest they had in the 'Blue Sky' approaches. As they were actively in the middle of a redesign, the Digital Archives was also interested in larger improvements that could be made to the overall design, in addition to smaller, easy-to-implement fixes. While we added some items to the appendix of the report, this remains a topic for future work.</p>
                </section>

                <section id="reflections">
                    <h2>Reflections</h2>
                    <h3>Teamwork Makes the Dream Work</h3>
                    <p>I'm eternally thankful to have worked with such an amazing team throughout this project, and wouldn't hesitate to collaborate with them again. I learnt a lot about how to trust the work of others, and knowing when to let them handle the work.</p>

                    <h3>So Much to Do, so Little Time</h3>
                    <p>Time management was an issue on the project, as even with the best of coordination, working with teammates, participants, and clients all requires a lot of moving parts. But being aware of it, I've learnt how to build in more time for unexpected delays in the future.</p>
                </section>

                <section id="future">
                    <h2>Future Work</h2>
                    <h3>Testing testing</h3>
                    <p>The Digital Archives has walked away with a lot of information, and a report totalling almost 50 pages. But even with that, there's still more testing to be done. A/B testing on the labels, Tree testing the sitemap, and completing an official accessibility audit should all be on their roadmap.</p>

                    <h3>Continued Evolution</h3>
                    <p>Once the changes outlined in our report are implemented, they should themselves be tested to ensure they achieved the desired effect.</p>
                </section>

                <section id="related">
                    <h2>Other UX Projects</h2>
                    <RelatedStudies>
                        <Card key={"wak-eval"} {...projectInfo["wak-eval"]}/>
                        <Card key={"food-eval"} {...projectInfo["food-eval"]}/>     
                        <Card key={"bnz-eval"} {...projectInfo["bnz-eval"]}/>   
                    </RelatedStudies>
                </section>
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },

    "nyc-parks": {      
        id: "nyc-parks",
        title: "Parks of New York City",
        subtitle: "Revitalising the Design of the New York City Parks Website",
        blurb: "The Parks of NYC project is a user-centred redesign of the nycgovparks.org website. It involved a top-down redesign of the entire interface, informed by user testing at every step of the process. This included initial surveying and profiling of potential users, card sorting and tree testing the knowledge organisation, and wireframe testing early prototypes. As a result, a high-fidelity prototype of the new design was created in Figma.",
        caseStudy: true,
        image:"/images/study-parks-banner.png",
        link: "https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202",
        code:"",
        isVisible: true,
        markup: (
            <>
                <img alt="" src="/images/study-parks-banner.png" className={css.banner}></img>

                <section id="introduction">
                    <h1>Parks of NYC: Revitalising the Design of the New York City Parks Website</h1>
                    <a className="button" target="_blank" href="https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202" rel="noreferrer">Desktop Prototype</a>
                    <a className="button" target="_blank" href="https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=67%3A14014&scaling=scale-down&page-id=1%3A110&starting-point-node-id=67%3A14014" rel="noreferrer">Mobile Prototype</a>
                    <p>From Central Park to Prospect Park, Coney Island to the Bronx Zoo, the parks of New York City are some of the greatest in the world. All of these fall under the banner of the New York City Department of Parks and Recreation whose <a href="https://www.nycgovparks.org/">website</a> serves as a repository for information about the parks themselves, as well as events and facilities within them. Unfortunately, the current version of the website features a cluttered navigation, and dated designs, and is overall in need of an update. This project intends to redesign the interface from the bottom up, using appropriate testing methodologies to ensure a strong user-centred design.</p>
                </section>

                <section id="background">
                    <h2>Background</h2>
                    <p>This project was created for INFO 643: Information Architecture & Interaction Design. The goal was completely to redesign a website to target a specific user group, using methods such as card sorting and wireframe tests to inform our every step. Specifically, we were to redesign <a href="nycgovparks.org">nycgovparks.org</a>, the website for the NYC parks department. The website offered us an abundance of information that would need to be included sensibly, while also lacking major branding constraints.</p>
                    <h3>The Team</h3>
                    <p>The team for this project consisted of four graduate students from within the Pratt School of Information. Myself, coming from the Data Analytics and Visualization program, as well as Rishi Mudaliar, Anne Kuo, and Jennie Lin, all from the Information Experience Design program.</p>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-group.jpeg" alt=""/>
                        <figcaption className={css.figureCaption}>The NY Parks Team Group 3 (Eventually)</figcaption>
                    </figure>

                    <h3>New York City Department of Parks & Recreation</h3>
                    <div className={css.textLogo}>
                        <img alt="" className={css.logo} src="/images/study-parks-logo.png"/>
                        <p>NYC Parks maintains ~1700 public spaces spread throughout the five boroughs. This ranges from parks, skating rinks, zoos, beaches, and more. They do so either independently, or in agreement with local community organisations (e.g. <a href="https://www.prospectpark.org/">The Prospect Park Alliance</a>). A snapshot of the version of the website we were working with can be found <a href="https://web.archive.org/web/20220901042417/https://www.nycgovparks.org/">here</a>.</p>    
                    </div>
                </section>

                <section id="profiles">
                    <h2>Step 1: Understanding Users</h2>
                    {/*<a className="button" target="_blank" href="/articles/nycp-1.pdf" rel="noreferrer">Go To Report</a>*/}
                    <a className="button" target="_blank" href="/documents/nycp-1.pdf" rel="noreferrer">Full Report</a>
                    <h3>Methodology</h3>
                    <p>The first thing to do in any redesign is to determine who your users are, and what they need. Given the broad range of people and communities NYC Parks serves, our focus was to be narrow to a specific subsection. After discussing this amongst ourselves, we opted to focus on young adults who were new residents of the city. The idea was that these were individuals who were most likely to lack institutional knowledge of the system, while also having the highest aptitude for researching information online.</p>
                    <p>The next step was to select and interview members of our chosen user group. We each reached out to our networks and set up 3-4 interviews each. These interviews were to be semi-structured, guided by a predetermined set of questions. Each team member shared their notes in a Google Drive folder, and the group met together to discuss our findings and how we should present them.</p>

                    <h3>Results</h3>
                    <p>With our findings in hand, we needed to transform them into materials that we could use to inform our design decisions. Splitting the work between us, I was tasked with drawing up the written report around key insights. Anne and Jennie set about creating a pair of personas, and Rishi created a storyboard of a potential use case.</p>
                    <p>Across all interviews, we were able to draw four key insights about our users:</p>
                    <ul>
                        <li><p>Location was the primary decision point in choosing a park</p></li>
                        <li><p>Participants would travel to a park, but only if given a reason to</p></li>
                        <li><p>Search engines were a vital source of information</p></li>
                        <li><p>Safety and comfort were always on participants’ minds</p></li>
                    </ul>
                    <p>The following material was also created:</p>

                    <figure className={css.figure}>
                        <div className={classnames(css.figMulti, css.figDouble)}>
                            <img className={css.figureObject} src="/images/study-parks-persona1.png" alt=""/>
                            <img className={css.figureObject} src="/images/study-parks-persona2.png" alt=""/>
                        </div>
                        <figcaption className={css.figureCaption}>Personas</figcaption>
                    </figure>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-storyboard.png" alt=""/>
                        <figcaption className={css.figureCaption}>Storyboard</figcaption>
                    </figure>
                </section>

                <section id="sitemap">
                    <h2>Step 2: Sitemap</h2>
                    {/*<a className="button" target="_blank" href="/articles/nycp-2.pdf" rel="noreferrer">Go To Report</a>*/}
                    <a className="button" target="_blank" href="/documents/nycp-2.pdf" rel="noreferrer">Full Report</a>
                    <h3>Methodology</h3>
                    <h4>Card Sorting</h4>
                    <p>Card sorting is a UX method where users are presented with a deck of cards, each one with the heading of a potential webpage. Users then group the cards into buckets that are either preset by the testers (closed sort) or that the user determines (open sort). The testing method provides a good overview of how users may group topics and requires minimal set-up and time investment. For more information, see <a href="https://www.optimalworkshop.com/optimalsort/">here</a>.</p>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="https://www.usertesting.com/sites/default/files/inline-images/Closed%20card%20sorting.png" alt=""/>
                        <figcaption className={css.figureCaption}>Example Card Sorting</figcaption>
                    </figure>

                    <p>We used <a href="https://www.optimalworkshop.com/">Optimal Workshop</a> to perform the testing, and opted for a hybrid sort (i.e. predetermined buckets, but allowing the user to also create their own). 150 cards were initially created but quickly curated down to 42 as we didn't want to overwhelm the user and risk them not completing. The link to the test was then circulated on Pratt's internal mail server, as well as amongst the team's network. 22 people completed the test, which revealed a high level of ambiguity between "events", "activities", and "facilities", as well as the need to expand the footer links. With the results in hand, we began to draft what the sitemap may look like. </p>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-card.png" alt=""/>
                        <figcaption className={css.figureCaption}>Our Results</figcaption>
                    </figure>
                    
                    <h4>Tree Testing</h4>
                    <p> To ensure we were on the right track, we returned to Optimal Workshop to conduct a Tree Test on our draft sitemap. Slightly more involved than a card sort, a tree test involves presenting the user with the sitemap and having them move through it from the top down to find a specific heading. The test tracks not only if they correctly find it, but also whether they believe they do, and what pathway(s) they took to get there. This sort of testing is useful as it allows the team to determine whether someone who has never encountered the interface before can navigate it, as opposed to the researchers who are familiar with it. For more information, see <a href="https://www.optimalworkshop.com/treejack/">here</a>.</p>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="https://help.usertesting.com/hc/article_attachments/360088640912/Tree_Test_Save_Tree_08.png" alt=""/>
                        <figcaption className={css.figureCaption}>Tree Testing</figcaption>
                    </figure>
                   
                   <p>21 people completed the six tasks that were involved in the test. The main issue revealed was the continued ambiguity between 'events' and 'activities', which continued to haunt us despite our best efforts. Instead of attempting to relabel them, we instead opted to rethink the basic structure and combine them under a single "Things to do" heading. While it wouldn't eliminate confusion or errors, we hoped that it would at least minimise them.</p>

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-tree.png" alt=""/>
                        <figcaption className={css.figureCaption}>Testing Results</figcaption>
                    </figure>

                    <h3>Results</h3>
                    {/*<p>With all our results in hand, we came back together to discuss them. Then we made a site map</p>*/}

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-sitemap.jpg" alt=""/>
                        <figcaption className={css.figureCaption}>Sitemap</figcaption>
                    </figure>
                </section>

                <section id="wireframes">
                    <h2>Step 3: Wireframes</h2>
                    {/*<a className="button" target="_blank" href="/articles/nycp-3.pdf" rel="noreferrer">Go To Report</a>*/}
                    <a className="button" target="_blank" href="/documents/nycp-3.pdf" rel="noreferrer">Full Report</a>
{/*                    <h3>Methodology</h3>
                    <p>With our idea for a sitemap in hand, we started working on the low-fidelity mock-ups, aka wireframes.</p>
                    <p>We each took on a different part of the wireframe, and I got the permit flow</p>*/}
                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-wireframe.png" alt=""/>
                        <figcaption className={css.figureCaption}><a href="https://www.figma.com/file/oVclnLV83krHsb57ZvwEcH/Wireframes?node-id=416%3A12486&t=N">View full wireframe</a></figcaption>
                    </figure>
{/*                    <p>Once we had our wireframes created, we got to testing them. This involved sitting down with users and having them try and complete the flows we created</p>

                    <h3>Results</h3>
                    <h4>Flow 1: Find a Park</h4>
                    <p>We observed some things and made some adjustments</p>

                    <h4>Flow 2: Find an Event</h4>
                    <p>We observed some things and made some adjustments</p>

                    <h4>Flow 3: Find a Permit (ME!)</h4>
                    <p>We observed some things, and made some adjustments</p>*/}
                </section>

                <section id="prototype">
                    <h2>Step 4: Final Prototype</h2>
                    {/*<a className="button" target="_blank" href="/articles/nycp-4.pdf" rel="noreferrer">Go To Report</a>*/}
                    <a className="button" target="_blank" href="/documents/nycp-4.pdf" rel="noreferrer">Full Report</a>
{/*                    <h3>Methodology</h3>
                    <p>Once we had all our user data, the next step is to create the high-fidelity prototypes</p>
                    <p>Some changes still got made, based on internal design decisions. Such as me splitting up the flow of the park </p>

                    <h3>Results</h3>
                    <p>We created the high fidelity prototypes</p>*/}

                    <figure className={css.figure}>
                        <img className={css.figureObject} src="/images/study-parks-final.png" alt=""/>
                        <figcaption className={css.figureCaption}><a href="https://www.figma.com/file/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202">View full final.</a></figcaption>
                        {/*<figcaption className={css.figureCaption}>I wonder if you can embed this...</figcaption>*/}
                    </figure>
                </section>

                <section  id="reflections">
                    <h2>Reflections</h2>
                    <h3>No I in Team</h3>
                    <p>Working with a new team is often a learning curve. We each come with different backgrounds, experiences, and skill sets. And with no designated project manager, it falls to the group to figure itself out. Thankfully we had the length of the semester to work on this, and by the end of it, we were a well-oiled machine.</p>

                    <h3>UX Design vs UI Design</h3>
                    <p>I found myself in my comfort zone during the initial stages of testing, as my background was in research. Even as the prototype began to come together, most of what we were constructing were UX elements based on user feedback. However, towards the end of the wireframing, and fully into the high-fidelity prototype, it was clear that it would require a certain amount of UI design that I had yet to develop. The exact ratio of image to text, the rounding on the buttons, and the margins between elements all eluded me. Thankfully Anne was able to help me through it, but it certainly highlighted an area for growth.</p>
                </section>

                <section id="future">
                    <h2>Future Work</h2>
                    <h3>Iteration</h3>
                    <p>As with any project, more testing is often in order. The overall structure of the website is in good shape, but there's still plenty more to do. Likely this would involve A/B testing on a variety of elements, all things that could be done on a production build of the site.</p>

                    <h3>The Real Deal</h3>
                    <p>With the prototype in hand, the next step would be to develop a live version of the website. This would likely involve creating the components from the prototype based on the static data we have been using so far, before plugging it into the main database. And as always with the handoff from design to development, new issues will arise and more challenges will need to be solved.</p>
                </section>

{/*                <section id="related">
                    <h2>Other Design Projects (TBD)</h2>
                    <RelatedStudies>
                        <Card key={""} {...projectInfo[""]}/>   
                        <Card key={""} {...projectInfo[""]}/>   
                        <Card key={""} {...projectInfo[""]}/>   
                    </RelatedStudies> 
                </section>*/}
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
                text: "Step 4: Hi-Fi Prototype",
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
            // {   
            //     text: "Related Projects",
            //     ref: "#related"
            // },
        ]
    },

    "wcs-zoos": {
        id: "wcs-zoos",
        title: "Rebranding NYC Zoos",
        subtitle: "Redesigning the Wildlife Conservation Society’s and Subsidiary Zoo’s branding and campaigns",
        blurb: "Using a combination of typography and branding techniques, this project aims to refine the current branding slate for the WCS and create a branding campaign that maximises audience impact. Work was done using a combination of hand-drawn materials, as well as utilising Adobe Creative Cloud products such as Illustrator and Photoshop. It was refined through an iterative process involving both peer and mentor critiques, as well as audience evaluations.",
        image:"/images/study-zoos-banner.png",
        caseStudy: false,
        link: "/documents/wcs-artboard.png",
        code: "",
        isVisible: true,
        markup: (
            <>
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },
}