import {useEffect} from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson'
import css from './Wingspan.module.css'


const Range = () => {
	useEffect(() => {
		if (document.querySelector("#range g")){
				return;
			}
		
		const rangeSvg = d3.select("#range")
		const rangeG = rangeSvg.append("g");

		const projection = d3.geoAlbersUsa()
							.scale(300) 
							.translate([127.5, 80]); 

		const geoPath = d3.geoPath(projection);

		Promise.all([
			d3.json("/data/counties-10m.json"),
			d3.json("/data/WingspanRange.json")
		])
		.then(function(files) {

			let geodata = files[0];
			const counties = topojson.feature(geodata, geodata.objects.counties).features;

			const rangeMax = 10000
			const rangeColor = d3.scaleSequential() 
				.domain([0, Math.log(rangeMax)])
				.interpolator(d3.interpolateGreens);

			rangeG.selectAll("path")
				.data(counties)
				.join("path") 
				.attr("d", geoPath)
				.attr("stroke","black")
				.attr("stroke-width","0")
				.attr("fill", function (d) {
					d.pop = 0
					if (files[1][d.id]){
						d.pop = files[1][d.id]["Bald Eagle"] || 0;
					}
					return rangeColor(Math.log(d.pop));
				})
				.on("mouseover", function(event, d) {
		            d3.select(this)
		            .attr("stroke-width","1px");

		            const rangeInnertext = `${d.properties.name} county: ${d.pop}`
		            document.querySelector(`#${css.rangeTooltip}`).innerText = rangeInnertext
		        }) 
		        .on("mouseout", function(event, d) {
		            d3.select(this)
					.attr("stroke-width","0");
		        });

		    const rangeScaleSvg = d3.select('#rangeText')

    		const rangeAxisScale = d3.scaleLog()
				.domain([1, rangeMax]) 
				.range([0, 200]); 

			const rangeAxis = d3.axisBottom()
				.scale(rangeAxisScale) 
				.tickValues([10,100,1000,rangeMax]);

			rangeScaleSvg.append("g")
				.attr("class", "axis") 
				.call(rangeAxis);
		});
	}, [])

	return (
		<div id={css.rangeModule}>
			<p id={css.rangeTooltip}>Hover over for count</p>
			<svg id='range' width="255px" height="170px"/>
			<img id={css.rangeImage} src='/images/study-wingspan-range.png' alt=""/>
			<svg id='rangeText' height="20px" width="210px"/>
		</div>
	)
}

export default Range