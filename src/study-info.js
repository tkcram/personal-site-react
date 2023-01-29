import classnames from 'classnames'
import { CodeBlock } from '@atlaskit/code';
import css from './Study.module.css'
import Diet, { DietSnippet } from './WingspanDiet'
import Lifecycle, { LifecycleSnippet } from './WingspanLifecycle'
import Range, { RangeSnippet } from './WingspanRange'
import Wingspan, { WingspanSnippet } from './WingspanWingspan'
import { projectInfo } from './project-info'
import Card from './Card'
import Drawer from './Drawer'

export const caseStudies = {
    "wingspan": {
        id: "wingspan",
        title: "The Birds of Wingspan",
        subtitle:"Creating an Avian Information Dashboard Based on the Wingspan Boardgame",
        blurb: "A data visualisation project",
        image:"/images/study-wingspan-banner.jpg",
        link: "https://ivf22.netlify.app",
        isVisible: true,
        markup: (
            <>
                <img src="/images/study-wingspan-banner.jpg" className={css.banner} alt=""/>
                <h1 id="introduction">Birds of Wingspan: Creating an Avian Information Dashboard Based on the Wingspan Boardgame</h1>
                <a className="button" target="_blank" href="https://ivf22.netlify.app" rel="noreferrer">View the Dashboard</a>
                <p>Intro intro intro</p>
                
                <h2 id="background">Background</h2>
                <h3>The Project</h3>
                <p>This project was originally created for INFO 616: Programming Interactive Visualization. The goal of the project was to use D3.js to create a web-based data visualisation with an interactive component. Specifically, I opted to create an online dashboard where you could learn more about a specific bird species. This allowed me to bring together multiple disparate datasets, including aviandietdb and cornell ebird, demostrate a range of technical skills, and discuss a topic I personally enjoy. In order to tie it all together, I drew upon the boardgame Wingspan - this provided an entry point for users as well as a framing device for how the dashboard should be laid out</p>
                <p>For inclusion in this portfolio, the project was later expanded upon in three key ways. The first was to generalise the datasets to include a siginificantly wider selection of bird species. The second was to create modals for each module, allowing for more in depth exploration and drawing on previous work from INFO 658: Information Visualization. Thirdly, additional polish has been done to improve both the interface and the code that belies it.</p>
                
                <h3>Wingspan</h3>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__opengraph/img/d5aVUcak3R6QOHz5y-fvQdc8pwU=/fit-in/1200x630/filters:strip_icc()/pic4458123.jpg"/>
                    <p>Wingspan is a "competitive, medium-weight, card-driven, engine-building board game" designed by Elizabeth Hargrave and published by Stonemaier Games. The aim of the game is to collect a vairety of bird species and combine their unique abilities to create powerful effects. Each bird is represented on a card, which includes its biographical information, gameplay statistics and abilities, and a beautiful illustration by Natalia Rojas & Ana Maria Martinez Jaramillo. In game characteristics are designed to facsimile the real world attributes of the species, such as diet and habitat.</p>
                </div>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-wingspan-cards.jpg" alt="https://www.birdcollective.com/products/wingspan-board-game"/>
                    <figcaption className={css.figureCaption}>Example of a wingspan bird cards</figcaption>
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
                    <img className={css.figureObject} src="/images/study-wingspan-dashboard.png" alt="Luke, I am your caption..."/>
                    <figcaption className={css.figureCaption}>Screen capture of the dashboard for a Bald Eagle</figcaption>
                </figure>
                <p>Once you look up a specific bird you’re greeted with five unique modules: Biography; Diet; Lifecycle; Range; Wingspan. Each one representing a different aspect of the card, and including the iconography as an indicator. Each module is designed to stand alone, with basic information on the topic at a glance and a pop-up modal for a more detailed view.</p>
                
                <h3>Module 1: Biography</h3>
                <Drawer title="The Data" buttonTextCollapsed="View Data ›" buttonTextExpanded="Hide Data ⌄" linkText="Download" linkURL="">
                    <table className={css.drawerTable}>
                        <thead>
                            <tr><th>Common name</th><th>Scientific name</th><th>Color</th><th>Power Category</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Wild (food)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Abbott's Booby</td><td>Papasula abbotti</td><td>White</td><td></td><td>Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.</td><td></td><td></td><td>X</td><td>5</td><td>Platform</td><td>1</td><td>190</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td></td><td></td></tr>
                            <tr><td>Acorn Woodpecker</td><td>Melanerpes formicivorus</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>5</td><td>Cavity</td><td>4</td><td>46</td><td>X</td><td></td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Avocet</td><td>Recurvirostra americana</td><td>Pink</td><td>Egg-laying</td><td>When another player takes the "lay eggs" action, this bird lays 1 [egg] on another bird with a [ground] nest.</td><td></td><td></td><td></td><td>6</td><td>Ground</td><td>2</td><td>79</td><td></td><td></td><td>X</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Bittern</td><td>Botaurus lentiginosus</td><td>Brown</td><td>Card-drawing</td><td>Player(s) with the fewest [wetland] birds: draw 1 [card].</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>107</td><td></td><td></td><td>X</td><td>1</td><td></td><td>1</td><td></td><td>1</td><td></td></tr>
                            <tr><td>American Coot</td><td>Fulica americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, draw 1 [card].</td><td></td><td>X</td><td></td><td>3</td><td>Platform</td><td>5</td><td>61</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td></tr>
                            <tr><td>American Crow</td><td>Corvus brachyrhynchos</td><td>Brown</td><td>Food from Supply</td><td>Discard 1 [egg] from any of your other birds to gain 1 [wild] from the supply.</td><td></td><td></td><td></td><td>4</td><td>Platform</td><td>2</td><td>99</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
                        </tbody>
                    </table>
                </Drawer>
                <p>(Wingspan) Most of the top banner is pulled from a wingspan dataset that a fan created. It’s missing a few key pieces of information, but does a better job than trying to compile it myself. Would want to amend a few things if I continue to work on this project though, notably some missing data points around game actions.</p>
                <p>(Biography)</p>
                <h4>The Viz</h4>
                <p>There were two references I used when trying to decide how to display this information. The first comes from the book “Celebrating birds” which is a companion guide to the game itself. The second is All About Birds by Cornell</p>

                <h3>Module 2: Diet</h3>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <Diet/>
                    </div>
                    <figcaption className={css.figureCaption}>Try me!</figcaption>
                </figure>
                <Drawer title="The Data" buttonTextCollapsed="View Data ›" buttonTextExpanded="Hide Data ⌄" linkText="Download" linkURL="">
                    <table className={css.drawerTable}>
                        <thead>
                            <tr><th>Common name</th><th>Scientific name</th><th>Color</th><th>Power Category</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Wild (food)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Abbott's Booby</td><td>Papasula abbotti</td><td>White</td><td></td><td>Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.</td><td></td><td></td><td>X</td><td>5</td><td>Platform</td><td>1</td><td>190</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td></td><td></td></tr>
                            <tr><td>Acorn Woodpecker</td><td>Melanerpes formicivorus</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>5</td><td>Cavity</td><td>4</td><td>46</td><td>X</td><td></td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Avocet</td><td>Recurvirostra americana</td><td>Pink</td><td>Egg-laying</td><td>When another player takes the "lay eggs" action, this bird lays 1 [egg] on another bird with a [ground] nest.</td><td></td><td></td><td></td><td>6</td><td>Ground</td><td>2</td><td>79</td><td></td><td></td><td>X</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Bittern</td><td>Botaurus lentiginosus</td><td>Brown</td><td>Card-drawing</td><td>Player(s) with the fewest [wetland] birds: draw 1 [card].</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>107</td><td></td><td></td><td>X</td><td>1</td><td></td><td>1</td><td></td><td>1</td><td></td></tr>
                            <tr><td>American Coot</td><td>Fulica americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, draw 1 [card].</td><td></td><td>X</td><td></td><td>3</td><td>Platform</td><td>5</td><td>61</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td></tr>
                            <tr><td>American Crow</td><td>Corvus brachyrhynchos</td><td>Brown</td><td>Food from Supply</td><td>Discard 1 [egg] from any of your other birds to gain 1 [wild] from the supply.</td><td></td><td></td><td></td><td>4</td><td>Platform</td><td>2</td><td>99</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
                        </tbody>
                    </table>
                </Drawer>
                <div></div>
                <p>(Source: Avian Diet Database) The data lacks any sort of consistency however, with some birds listing prey only by weight, others by item, others both. And sometimes the taxonomy was either listed at the wrong level (species in the class level) or simply not useful (“Unidentified Animalia”).</p>
                <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={DietSnippet}/>
                </Drawer>
                <p>TBD what the pop-up is gonna look like</p>   
                
                <h3>Module 3: Lifecycle</h3>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <Lifecycle/>
                    </div>
                    <figcaption className={css.figureCaption}>Try me!</figcaption>
                </figure>
                <Drawer title="The Data" buttonTextCollapsed="View Data ›" buttonTextExpanded="Hide Data ⌄" linkText="Download" linkURL="">
                    <table className={css.drawerTable}>
                        <thead>
                            <tr><th>Common name</th><th>Scientific name</th><th>Color</th><th>Power Category</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Wild (food)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Abbott's Booby</td><td>Papasula abbotti</td><td>White</td><td></td><td>Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.</td><td></td><td></td><td>X</td><td>5</td><td>Platform</td><td>1</td><td>190</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td></td><td></td></tr>
                            <tr><td>Acorn Woodpecker</td><td>Melanerpes formicivorus</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>5</td><td>Cavity</td><td>4</td><td>46</td><td>X</td><td></td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Avocet</td><td>Recurvirostra americana</td><td>Pink</td><td>Egg-laying</td><td>When another player takes the "lay eggs" action, this bird lays 1 [egg] on another bird with a [ground] nest.</td><td></td><td></td><td></td><td>6</td><td>Ground</td><td>2</td><td>79</td><td></td><td></td><td>X</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Bittern</td><td>Botaurus lentiginosus</td><td>Brown</td><td>Card-drawing</td><td>Player(s) with the fewest [wetland] birds: draw 1 [card].</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>107</td><td></td><td></td><td>X</td><td>1</td><td></td><td>1</td><td></td><td>1</td><td></td></tr>
                            <tr><td>American Coot</td><td>Fulica americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, draw 1 [card].</td><td></td><td>X</td><td></td><td>3</td><td>Platform</td><td>5</td><td>61</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td></tr>
                            <tr><td>American Crow</td><td>Corvus brachyrhynchos</td><td>Brown</td><td>Food from Supply</td><td>Discard 1 [egg] from any of your other birds to gain 1 [wild] from the supply.</td><td></td><td></td><td></td><td>4</td><td>Platform</td><td>2</td><td>99</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
                        </tbody>
                    </table>
                </Drawer>
                <p>I was unable to find a single dataset with all the information that this module needed publically available. For prototyping purposes, data was sourced manually and entered into a spreadsheet. Early stages of development were found at AllAboutBirds, but they didn't codify later stages such as mating or lifespan, which had to be sought out on google. I was serendipitously gifted an encyclopaedia on birds, which provided all the information the module needed. The book itself is slightly dated, as taxonomies are ever shifting, but it provides good enough information for this project. Unfortunately, it being a paper book meant a significant amout of manual data entry.</p>
                <p>Should probably write something about the tooltip info</p>
                <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={LifecycleSnippet}/>
                </Drawer>
                <p>This module is the one that was changed most frequently during development. The first attempt involved using a tree diagram and pruning it until it resembled a timeline. The second involved using a newtwork graph, which proved completely off base. The final approach was to use a one-dimensional scatterplot. The dates are scaled on a log, as early stages in development are measured in weeks, whereas later stages can take decades, and a log allowed them to be draw with less space in between</p>    
                <p>I wonder what the pop-up for this one will look like. Probably rolling the tooltips into it</p>      

                <h3>Module 4: Range</h3>
                <figure className={css.figure}>
                    <div className={css.figureObject}><Range/></div>
                    <figcaption className={css.figureCaption}>Try me!</figcaption>
                </figure>
                <Drawer title="The Data" buttonTextCollapsed="View Data ›" buttonTextExpanded="Hide Data ⌄" linkText="Download" linkURL="">
                    <table className={css.drawerTable}>
                        <thead>
                            <tr><th>Common name</th><th>Scientific name</th><th>Color</th><th>Power Category</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Wild (food)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Abbott's Booby</td><td>Papasula abbotti</td><td>White</td><td></td><td>Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.</td><td></td><td></td><td>X</td><td>5</td><td>Platform</td><td>1</td><td>190</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td></td><td></td></tr>
                            <tr><td>Acorn Woodpecker</td><td>Melanerpes formicivorus</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>5</td><td>Cavity</td><td>4</td><td>46</td><td>X</td><td></td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Avocet</td><td>Recurvirostra americana</td><td>Pink</td><td>Egg-laying</td><td>When another player takes the "lay eggs" action, this bird lays 1 [egg] on another bird with a [ground] nest.</td><td></td><td></td><td></td><td>6</td><td>Ground</td><td>2</td><td>79</td><td></td><td></td><td>X</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Bittern</td><td>Botaurus lentiginosus</td><td>Brown</td><td>Card-drawing</td><td>Player(s) with the fewest [wetland] birds: draw 1 [card].</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>107</td><td></td><td></td><td>X</td><td>1</td><td></td><td>1</td><td></td><td>1</td><td></td></tr>
                            <tr><td>American Coot</td><td>Fulica americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, draw 1 [card].</td><td></td><td>X</td><td></td><td>3</td><td>Platform</td><td>5</td><td>61</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td></tr>
                            <tr><td>American Crow</td><td>Corvus brachyrhynchos</td><td>Brown</td><td>Food from Supply</td><td>Discard 1 [egg] from any of your other birds to gain 1 [wild] from the supply.</td><td></td><td></td><td></td><td>4</td><td>Platform</td><td>2</td><td>99</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
                        </tbody>
                    </table>
                </Drawer>
                <p>A Cornell Lab of Ornithology project, eBird allows users to document bird sightings, which are then collected for use by registered users. [something something more about the data].</p>
                <p>During prototyping I manually downloaded the sightings for ~20 birds over 2021. Aggregating the data was all done using a python script that would loop through all the files, and sum up the number of sighting instances for a given county code. Unfortunately the location data included isn't an exact match to standard FIPS encoding, e.g. instead of 01143 it uses AZ-143. This had to be changed in order to properly reference the positioning on the map.</p>
                <p>However when trying to generalise the project, it became apparent that pre-processing the entire dataset wouldn't be suitable. If nothing else, even when narrowing the raw data to only the USA for a single year, it was over 100gb in size. Instead I switched to using the eBird API. The upside of this was that it allowed for lightweight access to the dataset. The downside was that a) it required more processing on the dashboard itself, lowering performance and b) it only provides the last 30 days worth of sighting, making it incomplete for migratory species</p>
                <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={RangeSnippet}/>
                </Drawer>
                <p>The initial plan for this module involved converting all the points into a single shape file to represent the range, and overlaying it atop the map. Although possible, the amount of manual work meant the approach was unsuitable for generalisation. Instead, upon consultation with a classmate, I instead opted to aggregate the data into regions, and use D3's built in mapping functionality to create a chloropleth. Some discussion was had about whether to aggregate to the county or state level, but the former felt better suited. Scale was also much debated, as the data ranged from single sightings to tens of thousands, and so a log scale was chosen to show that granularity.</p>
                <p>The map used for the base layer was 10m</p>
                <p>The addition of a pop-up modal provided the opportunity for significantly more user interaction, such as the ability to zoom and filter by time. This also provided the ability to switch between aggregate and descrete points (that the data provided). With that, i integrated work from [a previous project] to not only display the points, but also allow the user to view them in a sped up real time (???)</p>
                
                <h3>Module 5: Wingspan</h3>
                <figure className={css.figure}>
                    <div className={css.figureObject}><Wingspan/></div>
                    <figcaption className={css.figureCaption}>Try me!</figcaption>
                </figure>           
                <Drawer title="The Data" buttonTextCollapsed="View Data ›" buttonTextExpanded="Hide Data ⌄" linkText="Download" linkURL="">
                    <table className={css.drawerTable}>
                        <thead>
                            <tr><th>Common name</th><th>Scientific name</th><th>Color</th><th>Power Category</th><th>Power text</th><th>Predator</th><th>Flocking</th><th>Bonus card</th><th>Victory points</th><th>Nest type</th><th>Egg capacity</th><th>Wingspan</th><th>Forest</th><th>Grassland</th><th>Wetland</th><th>Invertebrate</th><th>Seed</th><th>Fish</th><th>Fruit</th><th>Rodent</th><th>Wild (food)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Abbott's Booby</td><td>Papasula abbotti</td><td>White</td><td></td><td>Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.</td><td></td><td></td><td>X</td><td>5</td><td>Platform</td><td>1</td><td>190</td><td></td><td></td><td>X</td><td></td><td></td><td>2</td><td></td><td></td><td></td></tr>
                            <tr><td>Acorn Woodpecker</td><td>Melanerpes formicivorus</td><td>Brown</td><td>Caching Food</td><td>Gain 1 [seed] from the birdfeeder (if available). You may cache it on this card.</td><td></td><td></td><td></td><td>5</td><td>Cavity</td><td>4</td><td>46</td><td>X</td><td></td><td></td><td></td><td>3</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Avocet</td><td>Recurvirostra americana</td><td>Pink</td><td>Egg-laying</td><td>When another player takes the "lay eggs" action, this bird lays 1 [egg] on another bird with a [ground] nest.</td><td></td><td></td><td></td><td>6</td><td>Ground</td><td>2</td><td>79</td><td></td><td></td><td>X</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
                            <tr><td>American Bittern</td><td>Botaurus lentiginosus</td><td>Brown</td><td>Card-drawing</td><td>Player(s) with the fewest [wetland] birds: draw 1 [card].</td><td></td><td></td><td></td><td>7</td><td>Platform</td><td>2</td><td>107</td><td></td><td></td><td>X</td><td>1</td><td></td><td>1</td><td></td><td>1</td><td></td></tr>
                            <tr><td>American Coot</td><td>Fulica americana</td><td>Brown</td><td>Flocking</td><td>Tuck a [card] from your hand behind this bird. If you do, draw 1 [card].</td><td></td><td>X</td><td></td><td>3</td><td>Platform</td><td>5</td><td>61</td><td></td><td></td><td>X</td><td></td><td>1</td><td></td><td></td><td></td><td>1</td></tr>
                            <tr><td>American Crow</td><td>Corvus brachyrhynchos</td><td>Brown</td><td>Food from Supply</td><td>Discard 1 [egg] from any of your other birds to gain 1 [wild] from the supply.</td><td></td><td></td><td></td><td>4</td><td>Platform</td><td>2</td><td>99</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
                        </tbody>
                    </table>
                </Drawer>
                <p>The Wingspan Dataset used through the project contains datapoints for the literal wingspan of each species, which was piped directly into the viz.</p>
                <Drawer title="The Viz" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={WingspanSnippet}/>
                </Drawer>
                <p>This module provided the most hands on work with SVGs. The basic shape is courtesy of Jennifer Cahalane, and was manipulated through various transform effects. Although it may not be readily apparent, the width of the svg is a 1-to-1 match between the cm measurement of the wingspan to the pixel width of the SVG. In order to provide a relative size reference, the California Condor and Hummingbird, the largest and smallest birds in the dataset, were overlaid in the module. This had the added benefit of not having to worry about SVGs overlapping in strange ways, as they would always fall between those two points.</p>
                 <p>The idea of relative size was expanded upon in the pop-up modal, providing references against [other species] </p>
                
                <h2 id="reflections">Reflections</h2>
                <h3>Understimation</h3>
                <p>This project was a lot more work that expected. Mainly because every single dataset I worked with came with its own unique challenges and quirks</p>
                
                <h2 id="future">Future Work</h2>
                <h3>AR</h3>
                <p>Being able to pipe in the actual cards to land on a page would be fun</p>

                <h3>Collaboartion</h3>
                <p>It would be amazing to be able to work with the Wingspan game team to help inform the project and the things that they think would work well. Having their asset library would also be a great boon</p>
                
                <h2 id="related">Other Data Viz Projects</h2>
                <ul className={css.related}>
                    <Card key={"bird-map"} {...projectInfo["bird-map"]}/>   
                    <Card key={"bird-network"} {...projectInfo["bird-network"]}/>   
                    <Card key={"nz-rent"} {...projectInfo["nz-rent"]}/> 
                </ul>   
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
        subtitle:"Creating a Web-based Adventure Game Based on the Dungeons and Dragons API",
        blurb: "A technology project",
        image:"/images/study-dnd-banner.jpg",
        link: "https://puis22.netlify.app/",
        isVisible: true,
        markup: (
            <>
                <img alt="" src="/images/study-dnd-banner.jpg" className={css.banner}></img>
                <h1 id="introduction">Cannoneers & Dragons: Creating a Web-based Adventure Game Based on the Dungeons and Dragons API</h1>
                <a className="button" target="_blank" href="https://puis22.netlify.app/" rel="noreferrer">Play the Game</a>
                <p>Intro intro intro</p>

                <h2 id="background">Background</h2>
                <h3>The Project</h3>
                <p>This project was created as the final project of two seperate classes. INFO 664: Programming for Cultural Heritage provided the back-end. INFO 6xx: Programming User Interfaces provided the front-end</p>
                <p>For inclusion for this portfolio, additional work has been done to improve the code, and the assets.</p>

                <h3>The Client (DnD)</h3>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="/images/study-dnd-dnd.png"/>
                    <p>Dungeons and Dragons (D&D) is a game about Dungeons and Dragons.</p>
                </div>

                <h2 id="back-end">Back-end</h2>
                <h3>Resources</h3>
                <h4>Python</h4>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
                    <p>We called the API using Python, and it was all terribly exciting</p>
                </div>

                <h4>DnD API</h4>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="http://www.dnd5eapi.co/public/favicon.ico"/>
                    <p>The D&D API is a thing that we used. Thanks SRD!</p>
                </div>

                <h4>Flask</h4>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="/images/study-dnd-flask.png"/>
                    <p>Because the front and back ends were written in two different languages, JavaScript and Python respective, there needed to be an intermediary layer.</p>
                </div>

                <h3>Code Files</h3>
                <h4>character.py</h4>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <div className={css.codeModule}>  
                            <button className="button">Output</button> 
                            <button className="button">Code</button> 
                            <a href="">Github</a>            
                        </div>
                        <CodeBlock language="jsx" showLineNumbers={true} text={"This will eventually be a JSON blob called from the code"}/>
                        <CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>
                    </div>
                    <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
                </figure>
                <p>This is the bulk of the code, it's all about creating a randomly generated character. It makes so many different calls it's kinda silly</p>

                <h4>items.py</h4>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <div className={css.codeModule}>  
                            <button className="button">Output</button> 
                            <button className="button">Code</button> 
                            <a href="">Github</a>            
                        </div>
                        <CodeBlock language="jsx" showLineNumbers={true} text={"This will eventually be a JSON blob called from the code"}/>
                        <CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>
                    </div>
                    <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
                </figure>
                <p>This code does two things. The first is to create items that the characters can equip</p>
                <p>The second is to populate the maze with items</p>

                <h4>monsters.py</h4>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <div className={css.codeModule}>  
                            <button className="button">Output</button> 
                            <button className="button">Code</button> 
                            <a href="">Github</a>            
                        </div>
                        <CodeBlock language="jsx" showLineNumbers={true} text={"This will eventually be a JSON blob called from the code"}/>
                        <CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>
                    </div>
                    <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
                </figure>
                <p>This creates a monster, go figure</p>

                <h4>maze.py</h4>
                <figure className={css.figure}>
                    <div className={css.figureObject}>
                        <div className={css.codeModule}>  
                            <button className="button">Output</button> 
                            <button className="button">Code</button> 
                            <a href="">Github</a>            
                        </div>
                        <CodeBlock language="jsx" showLineNumbers={true} text={"This will eventually be a JSON blob called from the code"}/>
                        <CodeBlock language="python" showLineNumbers={true} text={"This will eventually be the Python code, with a button to switch between"}/>
                    </div>
                    <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
                </figure>
                <p>The maze itself is created by a depth first search</p>
                <p>Once the maze is created, it populates it with monsters and loot</p>

                <h2 id="front-end">Front-end</h2>
                <h3>Resources</h3>
                <h4>JavaScript</h4>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="/images/study-dnd-js.png"/>
                    <p>We called the API using Python, and it was all terribly exciting</p>
                </div>

                <h4>Assets</h4>
                <p>Tk Can't draw. It's fine.</p>

                <h3>Code Files</h3>
                <Drawer title="control.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={"Hello World"}/>
                </Drawer>
                <p>The control script is all about calling the API and building out the game itself</p>
                <p>It also controls any other interactions on the page, such as switching between tabs</p>

                <Drawer title="builder.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={"Hello World"}/>
                </Drawer>
                <p>Takes the API call from the backend and renders it on the page</p>

                <Drawer title="interactions.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={"Hello World"}/>
                </Drawer>
                <p>Once the maze has been built, you have to interact with it!</p>
                <p>Movement!</p>
                <p>Combat!</p>
                <p>Loot!</p>

                <Drawer title="exporter.js" buttonTextCollapsed="View Code ›" buttonTextExpanded="Hide Code ⌄" linkText="Github" linkURL="">
                    <CodeBlock language="jsx" showLineNumbers={true} text={"Hello World"}/>
                </Drawer>
                <p>Any time the game area updates something else on the page, it goes here</p>

                <h2 id="reflections">Reflections</h2>
                <p>I really did choose the hardest way of doing this. All so very verbose</p>
                <p>Also switching between languages really sucks</p>

                <h2 id="future">Future Work</h2>
                <p>Honestly this game could be built out basically infinitely. The rules for D&D are so rich there's so much more that could be added</p>
                <p>The D&D API on the other hand only has a limited amount of content. So expanding on that could be good</p>
                <p>Or we just diverge from that entirely and try create our own game</p>
                <p>Honestly a complete rebuild is probably in order</p>

                <h2 id="related">Other Technology Projects</h2>
                <ul className={css.related}>
                    <Card key={"wingspan"} {...projectInfo["wingspan"]}/>   
                    <Card key={"personal-site"} {...projectInfo["personal-site"]}/> 
                    <Card key={"dog-ui"} {...projectInfo["dog-ui"]}/>   
                </ul>   
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
        subtitle:"Reviewing the Tensions and Potential Resolutions Between Two Ideologies",
        blurb: "A critial perspectives project",
        image:"/images/study-ids-banner.png",
        link: "/documents/ids.pdf",
        isVisible: true,
        markup: (
            <>
                <img src="/images/study-ids-banner.png" className={css.banner} alt=""/>
                <h1 id="introduction">Indigenous Data Sovereignty & Open Data: Tensions and Resolutions</h1>
                <a className="button" target="_blank" href="/documents/ids.pdf" rel="noreferrer">Read the Report</a>
                <p>(Original Abstract) In the age of big data an array of questions are being asked as to how our data is created, controlled, and distributed. Two movements that have manifested to answer these questions are Indigenous Data Sovereignty (IDS) and the Open Data Movement (ODM). IDS examines these questions through an indigenous perspective, focusing on the reclamation of data about, with, or by indigenous peoples. ODM, on the other hand, believes that data should be freely available without restrictions. While both of these movements come with lofty ambitions, the ways they approach data may not inherently be harmonious. The goal of this paper is to examine what tensions exist between these two movements, as well as what steps can be taken to have them coexist and potentially even support one another</p>

                <h2 id="background">Background</h2>
                <h3>The Project</h3>
                <p>This project was originally created for INFO 601: Foundations of Information with Prof Debbie Rabina. As an indigenous person myself, I felt this was an important topic to dive into. It was almost entirely a literature review</p>
                <p>It is also currently out for review for publication (At the time of this writing, will update if published)</p>

                <h3>Indigenous Data Soveriegnty</h3>
                <p>Indigenous peoples are people who are indigenous. I know I use this a lot for my placeholder text, but in this instance it's actually about as accurate a definition as anything else</p>
                <p>In recent years, there has been a growing discourse in these communities about their rights in the modern world. Including their data Soveriegnty</p>

                <h3>The Open Data Movement</h3>
                <p>While the notion of open data is almost a hundred years old, the current incarnation is closer to maybe 30. It has its roots in research data, but this study mostly focuses on administrative data. That is, data the government collects about its peoples</p>

                <h2 id="tensions">Tensions</h2>
                <h3>About Openness</h3>
                <h4>Ownership, Control, & Access</h4>
                <p>This is where a lot of the literature exists, talking about what openness and control are all about. Hell people have been talking about this since there's been data. We love to talk about the Raja</p>

                <h3>About Data</h3>
                <h4>Context, Bias, & Absence</h4>
                <p>It also seemed important to talk about the quality of the data. This speaks a lot to me as someone who works with data. There can be so many assumptions about the truth of data that are plainly falsifiable.</p>

                <h2 id="resolutions">Resolutions</h2>
                <h3>IDS - Involvement</h3>
                <p>I'm gonna be honest, most of the literature around what indigenous people want is to just be included, and at every step of the way. People are sick of having others make decisions about them.</p>

                <h3>ODM - 50 Shades of Grey</h3>
                <p>ODM likes to make big, utopian claims, but really it's not so simple. There's so many moving parts that a lot more needs to be done to dig deeper, and part of that is acknowledging the current hegemony.</p>

                <h2 id="reflections">Reflections</h2>
                <h3>Something New</h3>
                <p>Both of these are emerging fields, and there has been very little work intersecting the two of them. So by literature review standards, it required a lot of thinking</p>

                <h3>Bias abound</h3>
                <p>Oh man are people racist. Like I'm not just talking about the old timey judges saying deplorable things, but even some of the writing now is a lot</p>

                <h2 id="future">Future Work</h2>
                <p>So goddamn much</p>

                <h3>Data Literals</h3>
                <p>A reconnection of IDS within the larger DS movement would be good. Having our data on server racks in the canaries is a problem</p>

                <h3>We the peoples</h3>
                <p>As mentioned, there's so much grey area in both of these movements, so being able to view a more diverse range of voices in them is a start</p>

                <h3>MAAAAAM</h3>
                <p>Big government is one thing, big tech is a whole other beast.</p>

                <h2 id="related">Other Research Project</h2>
                <ul className={css.related}>
                    <Card key={""} {...projectInfo[""]}/>   
                    <Card key={""} {...projectInfo[""]}/>   
                    <Card key={""} {...projectInfo[""]}/>   
                </ul>   
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
        subtitle:"Conducting Moderated User Testing to Improve the New York Philharmonic's Digital Archives",
        blurb: "A client based ux evaluation project ",
        image:"/images/study-nyp-banner.png",
        link: "/documents/nyphil.pdf",
        isVisible: true,
        markup: (
            <>
            <img className={css.banner} alt="" src="/images/study-nyp-banner.png"/>
            <h1 id="introduction">Conducting Moderated User Testing to Improve the New York Philharmonic's Digital Archives</h1>
            <a className="button" href="/documents/nyphil.pdf" target="_blank" rel="noreferrer">Read the Report</a>
            <p>The New York Philharmonic is one of the city’s most prestigious institutions, and its archive represents over 180 years of cultural heritage. In 2011, the Philharmonic founded the Shelby White & Leon Levy Digital Archive to undertake the herculean effort of digitising the contents, including thousands of scores, programs, and photographs, and making them publicly accessible. 10 years on, the Digital Archive contains over six million pages of material. The interface, however, remains the same. This project works with users to explore both what makes the Digital Archives interface wonderful, and also to identify ways that it can be improved, as they seek to revitalise the entire site.</p>

            <h2 id="background">Background</h2>
            <h3>The Project</h3>

            <p>This was the final project in INFO 644: Usability Theory & Practice. The goal was to blah blah blah. We worked as a team of grad students from various programs</p>

            <figure className={css.figure}>
                <img className={css.figureObject} src="/images/study-nyp-headshots.png" alt=""/>
                <figcaption className={css.figureCaption}>The NY Philharmonic UX Team</figcaption>
            </figure>

            <h3>The New York Philharmonic</h3>

            <div className={css.textLogo}>
                <img alt="" className={css.logo} src="https://nyphil.org/nyphil/assets/website/images/new-logo.svg"/>
                <p>The NY Phil[...]</p> 
            </div>

            <div className={css.textLogo}>
                <img alt="" className={css.logo} src="https://archives.nyphil.org/images/digital-archives-lockup@2x.png"/>
                <p>The team at the New York Philharmonic Digital Archives contacted the Pratt Center for Digital Experiences (Pratt dx) in the fall of 2022. As part of a National Endowment for the Humanities grant, the Digital Archives was to undergo a redesign, and they wanted user testing done to inform where they should best direct their efforts. The project was passed along to our team, a group of graduate students at the Pratt School of Information currently studying Usability Theory and Practice.</p>
            </div>

            <h2 id="testing">User Testing</h2>  
            <h3>Initial Consultation</h3>
            <p>An initial meeting was set up to discuss its scope and goals. From this meeting, we established the following two ideas.</p>
            <p>The first was that Moderated Remote User Testing would be best suited to their needs. This is a form of lab experiment that involves users as participants, is conducted in a controlled environment, and is actively moderated by a usability expert. This is widely considered the gold standard for user testing research, as it gives the evaluator more control of the test, such as asking follow up questions or directing participants through pain points. It also provides richer information, as evaluators can observe actions and body language and engage in follow up discussion. Although it is a time intensive approach, it is balanced by the quality of the results.</p>
            <p>The second point was that the scope of the project was incredibly broad. While it would all be contained within the Digital Archives interface, there was a want to explore all the features the Digital Archive had to offer. The same was true for their users - although a couple of distinct user groups were identified (see below), the only limiting factor for our participants was that they could access the site. Some key pieces of information were gleaned from the meeting, such as a focus on both accessibility and discoverability of content.</p>     

            <h3>Preparation</h3>
            <p>After our initial meeting with the Digital Archives, the team got to work. We decided the efficient use of our time would be to divide out the initial tasks between us, and reconvene periodically to review each other’s work. While my teammates got to work on creating the communications, surveys, and testing material, I began formulating the user profiles.</p>
            <p>As mentioned, the Digital Archives wanted to test their interface on as broad a user group as possible, meaning that we didn’t need to account for demographics or psychographics. However, in our initial consultation they did state how they wanted it to be intuitive for new users, but powerful enough for established ones. Amateur Alice and Professor Polly were the first two user profiles created, looking to capture those two user groups. A third profile, Explorer Ethan, was was made to cover those that existed between the two groups. However during testing, we determined that the key factor was whether they were experienced with archives, and so the distinction between Ethan and Alice became less relevant.</p>
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
            <p>After a few rounds of edits on everyone’s material, to get it to a place that we were all satisfied with, we moved on to the next stage of preparation. I paired with the author of the tasks to develop the testing script. We decided on using a reasonably strict script, to ensure minimal variance across evaluators due to confidence, language proficiency, or simply our own natural cadence. However this style of script also required a significant amount more testing and refinement for the tests to go smoothly when read entirely verbatim. We did this by running a series of pilots, initially by ourselves and then with family members, revising and tightening the language at every step. We also touched based with the Digital Archives to ensure we were capturing the data they were looking for, and wound up adding an additional task to our script.</p>
            <p>During this same period, the other two members of our group had been working on recruitment. They had created both the communication templates, as well as the screening questionnaires for participants to express interest. These were circulated initially on the Pratt internal mailing list, and later by members of the Digital Archives team. Once participants had signed up and met our current recruitment needs, they were sent an invite with a link to schedule a testing time.</p>
            <figure className={css.figure}>
                <img className={css.figureObject} src="/images/study-nyp-consent.png" alt=""/>
                <figcaption className={css.figureCaption}>Consent form</figcaption>
            </figure>
            <h3>Testing</h3>
            <p>In total 10 moderated user tests were performed, with three matching the “Professor Polly” profile, and seven matching a combination of the others. All team members both moderated and spectated an equal amount. Tests typically took the expected amount of time, approximately 30-45 minutes, with our highly proficient users taking the least amount of time.</p>
            <p>Abridged versions of the tasks are listed below. Initially we had considered modifying the tasks based on which user profile the participant matched, but ultimately decided that we would receive better data noting how novice vs expert users solved the same tasks. Each task also featured two follow ups - “How difficult was this task to complete” and “How successful do you feel you were in completing this task”.</p>
            
            <figure className={css.figure}>
                <dl className={classnames(css.figureObject,css.figureText)}>
                    <dt>Task 1:</dt>
                    <dd>Find a program and a photo that includes William Lincer, a member of the New York Philharmonic orchestra in the mid 1900s</dd>

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

            <p>At the completion of the five tasks, participants were asked to complete a post-test questionnaire based on the System Usability Scale. Users were also asked about their emotional response to the interface, but due to an error in the initial survey this data is incomplete.</p>

            <h3>Analysis</h3>
            <p>after all participants completed testing, the team reconvened to discuss our findings. Our participants had provided us with a wealth of information, and after some initial discussion we decided on using a Rainbow Chart to analyse the information. This involved each of us reviewing our notes and listing any issues the participants encountered, before pulling the list into a single spreadsheet. We then consolidated the items, combining any that were functionally the same and which participants encountered it. </p>
            <figure className={css.figure}>
                <img className={css.figureObject} src="/images/study-nyp-rainbow.png" alt=""/>
                <figcaption className={css.figureCaption}>Sample of the rainbow chart used in analysis</figcaption>
            </figure>
            <p>We used several other tools to help inform our recommendations. The System Usability Scale data from the questionnaires was analysed, for a benchmark score of 60.3/100 ("okay"). Myself and another teammate also sat down with an accessibility domain expert to run an ad-hoc audit on the Digital Archives website, giving us insight into specific accessibility issues that could be remedied.</p>

            <h2 id="recommendations">Recommendations</h2>
            <p>There were a few pages a lot of people visited, and a lot of pages a few people visited. This set out the narrative for our report, targeting the areas that were most commonly visited while also keeping notes on all other potential improvements. In particular, we found users spent the majority of their time on either the main landing page or on the search results page.</p>

            <h3>Homepage</h3>
            <p>The first recommendation involved updates to the homepage. While initially only presented as one recommendation, we soon discovered that the two main areas of improvement, the navigation and the carousel, had little commonality between them. This led to us splitting the recommendation into two seperate items.</p>
            <figure className={css.figure}>
                <div>
                    <img className={css.figureObject} src="/images/study-nyp-navigation-before.png" alt=""/>
                    <img className={css.figureObject} src="/images/study-nyp-navigation-after.png" alt=""/>
                </div>
                <figcaption className={css.figureCaption}>Navigation Before/After</figcaption>
            </figure>
            <p>Recommendation 1 focused on the navigation menu, and was mostly intended to be small, actionable items. This included several accessibility minded updates, including increasing colour contrast and adding hover states, and renaming some labels that our participants found confusing - such as changing ‘features’ to ‘exhibits’.</p>
            <figure className={css.figure}>
                <div>
                    <img className={css.figureObject} src="/images/study-nyp-carousel-before.png" alt=""/>
                    <img className={css.figureObject} src="/images/study-nyp-carousel-after.png" alt=""/>
                </div>
                <figcaption className={css.figureCaption}>carousel Before/After</figcaption>
            </figure>

            <p>Recommendation 2 involved the carousel, which the Digital Archives had indicated was an area of interest. Again we opted for simple solutions mainly focused around usability. However compared to the navigation bar, we were surprised when the client requested grander changes on how the carousel could be resigned from scratch. This led to us updating our report to include other examples of carousels and alternate ways of displaying this information.</p>

            <h3>Search Results Page</h3>
            <p>Much like the main landing, it was evident that the findings from the search results page warranted being two seperate recommendations, one about the overall layout, and one specifically targeting the filter modal.</p>
            <figure className={css.figure}>
                <div>
                    <img className={css.figureObject} src="/images/study-nyp-results-before.png" alt=""/>
                    <img className={css.figureObject} src="/images/study-nyp-results-after.png" alt=""/>
                </div>
                <figcaption className={css.figureCaption}>results Before/After</figcaption>
            </figure>
            <p>Recommendation 3 was about making sure the search results page better matched the users' mental model. The most substantive change was to create a consolidated results page, rather than the current version where it is pre-filtered. Several visual changes were made to help create consistency between the different filters, namely grouping all the filters together in a single place, as well as formatting all results in the same style.</p>
            <figure className={css.figure}>
                <div className={classnames(css.figMulti, css.figDouble)}>
                    <img className={css.figureObject} src="/images/study-nyp-filter-before.png" alt=""/>
                    <img className={css.figureObject} src="/images/study-nyp-filter-after.png" alt=""/>
                </div>
                <figcaption className={css.figureCaption}>filter Before/After</figcaption>
            </figure>
            <p>Recommendation 4, the filter modal, was the screen that was displayed when selecting filters. The team was aware this was a problem area, as users were consistently overwhelmed by the sheer volume of filters (sometimes over 200 pages), but didn't know how to best resolve it. Options included changing the pagination to a scroll function, reordering the results, and creating different modals for few vs many results. In the end we decided that the simplest option was to allow users to search through the filters to find the one they were looking for. We also moved this view to the sidebar, to help create the consistency that we mentioned in recommendation 3.</p>

            <h3>Everything Else</h3>
            <p>While I personally was involved in the discussion around the other recommendations, my main task was focused on how to convey the miscellany of other insights we gleaned from our user testing. While many narrative structures were attempted, a tabular format proved to be the most efficient. None of these recommendations alone have much depth nor a mockup. 5 broad categories were created:</p>
            <dl>
                <dt><h4>Accessibility</h4></dt><dd><p>This was something that was important to the Digital Archives per our meetings. We aimed to incorporate as much as possible into our other recommendations, but we wanted to state that these were items that should be updated site wide</p></dd>
                <dt><h4>Metadata</h4></dt><dd><p>With Google being such a feature of modern life, novice users typically ran into roadblocks with stricter search queries. Terms like “ballet” or “image” weren’t indexed, and there was no fallback state for the user.</p></dd>
                <dt><h4>User Interface</h4></dt><dd><p>Some items we described were intentional design choices, this category was for the rest. Object overflows, loading times, etc.</p></dd>
                <dt><h4>Links and Labels</h4></dt><dd><p>Naming things is difficult. This section also gave us the chance to offer further testing opportunities through A/B testing.</p></dd>
                <dt><h4>Knowledge organisation</h4></dt><dd><p>Again, structuring information is a hard problem to solve. This again offered future testing opportunities, for instance a Tree Test</p></dd>
            </dl>

            <h2 id="handoff">Client Handoff</h2>
            <p>After a significant number of revisions, we had our report in hand. The next step was to present it to the client.  We tried to showcase our work in the nicest format, but refining the content of the report took longer than anticipated, leading us to run out of time for slide formatting. However we tried our best to present the intense amount of information in a concise and understandable manner.</p>
            <p>We each presented a section, with myself doing the introductions and methods, followed by a discussion session. Although the sentiment in the room was positive, it was obvious that there was a significant amount of information for the client to digest. One surprise, as mentioned when discussing recommendation 2, was how much interest they had in 'Blue Sky' approaches. As they were actively in the middle of a redesign, the Digital Archives was also interested in larger improvements that could be made to the overall design, in addition to smaller, easy to implement fixes. While we added some items to the appendix of the report, this remains a topic for future work.</p>

            <h2 id="reflections">Reflections</h2>
            <p>I'm eternally thankful to have worked with such an amazing team throughout this project, and wouldn't hesitate to collaborate with them again. I learnt a lot about how to trust the work of others, and knowing when to let them handle the work. Time management was an issue on the project, as even with the best of coordination, working with teammates, participants, and clients all requires a lot of moving parts. But being aware of it, I've learnt how to build in more time for unexpected delays in the future.</p>

            <h2 id="future">Future Work</h2>
            <p>The Digital Archives has walked away with a lot of information, and a report totalling almost 50 pages. But even with that, there's still more testing to be done. A/B testing on the labels, Tree testing the sitemap, and completing an official accessibility audit should all be on their roadmap. Once the changes outlined in our report are implemented, they should themselves be testing to ensure they achieved the desired effect.</p>

            <h2 id="related">Other UX Projects</h2>
            <ul className={css.related}>
                <Card key={"wak-eval"} {...projectInfo["wak-eval"]}/>
                <Card key={"food-eval"} {...projectInfo["food-eval"]}/>     
                <Card key={"bnz-eval"} {...projectInfo["bnz-eval"]}/>   
            </ul>
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
        subtitle:"Revitilising the Design of the New York City Parks Website",
        blurb: "A design project",
        image:"/images/study-parks-banner.png",
        link: "https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202",
        isVisible: true,
        markup: (
            <>
                <img alt="" src="/images/study-parks-banner.png" className={css.banner}></img>
                <h1 id="introduction">Parks of NYC: Revitilising the Design of the New York City Parks Website</h1>
                <a className="button" target="_blank" href="https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202&scaling=scale-down&page-id=117%3A17343&starting-point-node-id=122%3A18202" rel="noreferrer">Desktop</a>
                <a className="button" target="_blank" href="https://www.figma.com/proto/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=67%3A14014&scaling=scale-down&page-id=1%3A110&starting-point-node-id=67%3A14014" rel="noreferrer">Mobile</a>
                <p>Intro intro intro</p>

                <h2 id="background">Background</h2>
                <h3>The Team</h3>
                <p>This project was created for INFO 643: Information Architecture & Interaction Design</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-nyp-headshots.png" alt=""/>
                    <figcaption className={css.figureCaption}>The NY Parks Team Group 3 (Eventually)</figcaption>
                </figure>

                <h3>New York City Parks</h3>
                <div className={css.textLogo}>
                    <img alt="" className={css.logo} src="/images/study-parks-logo.png"/>
                    <p>The NYC Parks deptartment takes care of the parks in NYC. Original site is <a href="https://www.nycgovparks.org/">here</a>. I should probably take a snapshot of it...</p>    
                </div>

                <h2 id="profiles">Step 1: Understanding Users</h2>
                <a className="button" target="_blank" href="/articles/nycp-1.pdf" rel="noreferrer">Go To Report</a>
                <a target="_blank" href="/documents/nycp-1.pdf" rel="noreferrer">PDF</a>
                <h3>Methodology</h3>
                <p>The first thing to do in any redesign is to determine who your users are, and what they need. As NYC Parks serves a wide range of communities, this project focused on young adults who were new residents of the city.</p>
                <p>In order to determine their needs, we well... we asked them. Each group member 3-4 individuals they knew that fit the target user group, and conducted semi structured interviews with them. The group members then came together to compare notes</p>

                <h3>Results</h3>
                <h4>Insights (Me)</h4>
                <p>Our analysis of the results showed 4 key insights</p>
                <ul>
                    <li><p>Location was the primary decision point in choosing a park</p></li>
                    <li><p>Participants would travel to a park, but only if given a reason to</p></li>
                    <li><p>Search engines were a vital source of information</p></li>
                    <li><p>Safety and comfort were always on participants’ minds</p></li>
                </ul>

                <h4>Personas</h4>
                <p>Two Personas were developed (Jennie & Anne)</p>
                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-parks-persona1.png" alt=""/>
                    <img className={css.figureObject} src="/images/study-parks-persona2.png" alt=""/>
                    <figcaption className={css.figureCaption}>Personas</figcaption>
                </figure>

                <h4>Storyboard (Rishi)</h4>
                <p>And a partridge in a pear tree</p>
                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-parks-storyboard.png" alt=""/>
                    <figcaption className={css.figureCaption}>Storyboard</figcaption>
                </figure>


                <h2 id="sitemap">Step 2: Sitemap</h2>
                <a className="button" target="_blank" href="/articles/nycp-2.pdf" rel="noreferrer">Go To Report</a>
                <a target="_blank" href="/documents/nycp-2.pdf" rel="noreferrer">PDF</a>
                <h3>Methodology</h3>
                <h4>Card Sorting</h4>
                <p>Card sorting is a UX method where users sort cards. Shout out to UserTesting.Com</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="https://www.usertesting.com/sites/default/files/inline-images/Closed%20card%20sorting.png" alt=""/>
                    <figcaption className={css.figureCaption}>Card Sorting</figcaption>
                </figure>

                <p>We used an open card sort, with a bunch of people</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="" alt=""/>
                    <figcaption className={css.figureCaption}>Our Results</figcaption>
                </figure>
                
                <h4>Tree Testing</h4>
                <p>The card sorting fed back into our sitemap, which we then tested using tree testing</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="https://help.usertesting.com/hc/article_attachments/360088640912/Tree_Test_Save_Tree_08.png" alt=""/>
                    <figcaption className={css.figureCaption}>Tree Testing</figcaption>
                </figure>
               
               <p>It went well</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="" alt=""/>
                    <figcaption className={css.figureCaption}>Testing Results</figcaption>
                </figure>

                <h3>Results</h3>
                <p>With all our results in hand, we came back together to discuss them. Then we made a site map</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-parks-sitemap.jpg" alt=""/>
                    <figcaption className={css.figureCaption}>Sitemap</figcaption>
                </figure>

                <h2 id="wireframes">Step 3: Wireframes</h2>
                <a className="button" target="_blank" href="/articles/nycp-3.pdf" rel="noreferrer">Go To Report</a>
                <a target="_blank" href="/documents/nycp-3.pdf" rel="noreferrer">PDF</a>
                <h3>Methodology</h3>
                <p>With our idea for a sitemap in hand, we started working on the low-fidelity mock-ups, aka wireframes.</p>
                <p>We each took on a different park of the wireframe, I got the permit flow</p>
                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-parks-wireframe.png" alt=""/>
                    <figcaption className={css.figureCaption}><a href="https://www.figma.com/file/oVclnLV83krHsb57ZvwEcH/Wireframes?node-id=416%3A12486&t=N">View full wireframe</a></figcaption>
                </figure>
                <p>Once we had our wireframes created, we got to testing them. This involved sitting down with users and having them try and complete the flows we created</p>

                <h3>Results</h3>
                <h4>Flow 1: Find a Park</h4>
                <p>We observed some things, and made some adjustments</p>

                <h4>Flow 2: Find an Event</h4>
                <p>We observed some things, and made some adjustments</p>

                <h4>Flow 3: Find a Permit (ME!)</h4>
                <p>We observed some things, and made some adjustments</p>

                <h2 id="prototype">Step 4: Final Prototype</h2>
                <a className="button" target="_blank" href="/articles/nycp-4.pdf" rel="noreferrer">Go To Report</a>
                <a target="_blank" href="/documents/nycp-4.pdf" rel="noreferrer">PDF</a>
                <h3>Methodology</h3>
                <p>Once we had all our user data, the next step is to create the high fidelity prototypes</p>
                <p>Some changes still got made, based on internal design decisions. Such as me splitting up the parks flow</p>

                <h3>Results</h3>
                <p>We created the high fidelity prototypes</p>

                <figure className={css.figure}>
                    <img className={css.figureObject} src="/images/study-parks-final.png" alt=""/>
                    <figcaption className={css.figureCaption}><a href="https://www.figma.com/file/xmNITLhxfF5bXdZQ643M8g/Prototypes?node-id=122%3A18202">View full final.</a></figcaption>
                    <figcaption className={css.figureCaption}>I wonder if you can embed this...</figcaption>
                </figure>

                <h2 id="reflections">Reflections</h2>
                <h3>Teamwork makes the dream work</h3>
                <p>I mean I suppose they were alright</p>

                <h3>What is design</h3>
                <p>Oh man, those early research stages were breezy, but as soon as we got into the actual design phase I was completely lost</p>

                <h2 id="future">Future Work</h2>
                <h3>Iteration</h3>
                <p>As with any of these sorts of projects, it would be nice to do EVEN MORE TESTING to help refine it. Especially since we only targetted one specific group</p>

                <h3>The Real Deal</h3>
                <p>It would be interesting to build this out into an actual website.</p>

                <h3>Edge cases</h3>
                <p>I'm sure if we made a final build of this for reals, there'd be all sorts of weird cases that's on the current park website that we haven't accounted for</p>

                <h2 id="related">Other Design Projects (TBD)</h2>
                <ul className={css.related}>
                    <Card key={""} {...projectInfo[""]}/>   
                    <Card key={""} {...projectInfo[""]}/>   
                    <Card key={""} {...projectInfo[""]}/>   
                </ul>   
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
                text: "Related Projects",
                ref: "#related"
            },
        ]
    },
}