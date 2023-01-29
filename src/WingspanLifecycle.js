import {useEffect} from 'react'
import * as d3 from 'd3'
import css from './Wingspan.module.css'

const Lifecycle = () => {
    useEffect(() => {

        if (document.querySelector("#lifecycle g")){
            return;
        }

        const lifecycleSvg = d3.select("#lifecycle")
        const lifecycleData = [
            {stage: "Birth", time:1,text:`Clutch Size: 1-3 eggs`},
            {stage: "Incubation", time:34,text:`Egg Description: Dull white, usually without markings.`},
            {stage: "Nestling", time:90,text:`Hatchling Description: Covered with light-gray down; eyes brown; gape, legs, and skin pink.`},
            {stage: "Adulthood", time:1460,text:`Monogamous: True`},
            {stage: "Death", time:7300,text:``}
            ];

        const maxAge = lifecycleData[lifecycleData.length-1].time;

        function lifecycleScale(i) {return Math.log2(i)*15+25;};

        // Axis
        const axisScale = d3.scaleLog()
                .domain([1, maxAge]) 
                .range([lifecycleScale(1), lifecycleScale(maxAge)]); 

        const axis = d3.axisLeft()
                .scale(axisScale) 
                .ticks(0);

        lifecycleSvg.append("g")
                .attr("class", "axis") 
                .attr("transform", "translate(127.5,0)")
                .call(axis);

        //Nodes
        lifecycleSvg.selectAll("circle")
            .data(lifecycleData)
            .enter()
            .append("circle")
            .attr("cx",(d) => 127.5)
            .attr("cy",(d) => lifecycleScale(d.time)) 
            .attr("r",8) 
            .attr("fill",d=>d.time>0?"red":"none");

        //Text
        lifecycleSvg.selectAll("text")
            .data(lifecycleData)
            .enter()
            .append("text")
            .attr("x", (d, i) => i % 2 ? 10 : 140)
            .attr("y", (d) => lifecycleScale(d.time)+5) 
            .html((d) => d.time<365 ? `${d.stage}: ${d.time} days` : `${d.stage}: ${d.time/365} years`)
            .style("cursor","pointer")
            .style("font-size","12px")

            .on('click',(event, d) =>{
                d3.select(`#lifecycleTooltip`)
                .transition()
                .duration(300)
                .style("opacity", 1)
                .style('display','block')
                .style("left", `${event.pageX}px`)
                .style("top", `${event.pageY}px`)

                d3.select(`#lifecycleTooltip`)
                .html(`${d.text}`);
            });
    }, [])

    return (
        <>
            <svg id='lifecycle' width="255px" height="255px"/>
            <div id="lifecycleTooltip" className={css.lifecycleTooltip}>hello world</div>
        </>
    )
}

export const LifecycleSnippet = `const lifecycleSvg = d3.select("#lifecycle")
const lifecycleData = [
    {stage: "Birth", time:1,text:\`Clutch Size: 1-3 eggs\`},
    {stage: "Incubation", time:34,text:\`Egg Description: Dull white, usually without markings.\`},
    {stage: "Nestling", time:90,text:\`Hatchling Description: Covered with light-gray down; eyes brown; gape, legs, and skin pink.\`},
    {stage: "Adulthood", time:1460,text:\`Monogamous: True\`},
    {stage: "Death", time:7300,text:\`\`}
    ];

const maxAge = lifecycleData[lifecycleData.length-1].time;

function lifecycleScale(i) {return Math.log2(i)*15+25;};

// Axis
const axisScale = d3.scaleLog()
    .domain([1, maxAge]) 
    .range([lifecycleScale(1), lifecycleScale(maxAge)]); 

const axis = d3.axisLeft()
    .scale(axisScale) 
    .ticks(0);

lifecycleSvg.append("g")
    .attr("class", "axis") 
    .attr("transform", "translate(127.5,0)")
    .call(axis);

//Nodes
lifecycleSvg.selectAll("circle")
    .data(lifecycleData)
    .enter()
    .append("circle")
    .attr("cx",(d) => 127.5)
    .attr("cy",(d) => lifecycleScale(d.time)) 
    .attr("r",8) 
    .attr("fill",d=>d.time>0?"red":"none");

//Text
lifecycleSvg.selectAll("text")
    .data(lifecycleData)
    .enter()
    .append("text")
    .attr("x", (d, i) => i % 2 ? 10 : 140)
    .attr("y", (d) => lifecycleScale(d.time)+5) 
    .html((d) => d.time<365 ? \`\${d.stage}: \${d.time} days\` : \`\${d.stage}: \${d.time/365} years\`)
    .style("cursor","pointer")
    .style("font-size","12px")

    .on('click',(event, d) =>{
        d3.select(\`#lifecycleTooltip\`)
        .transition()
        .duration(300)
        .style("opacity", 1)
        .style('display','block')
        .style("left", \`\${event.pageX}px\`)
        .style("top", \`\${event.pageY}px\`)

        d3.select(\`#lifecycleTooltip\`)
        .html(\`\${d.text}\`);
    });`

export default Lifecycle