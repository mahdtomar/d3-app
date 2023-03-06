const circle = svg
  .append("circle")
  .attr("cx", 250)
  .attr("height", 250)
  .attr("r", 40)
  .attr("fill", "blue");
const triangle = svg
  .append("rect")
  .attr("width", 100)
  .attr("height", 100)
  .attr("cx", 200)
  .attr("fill", "yellow");
const line = svg
  .append("line")
  .attr("x1", 250)
  .attr("y1", 250)
  .attr("x2", 300)
  .attr("y2", 280)
  .attr("stroke", "green");

//////////////////////////////////////////////////////////

/////////////////////////////////////////////

const dataArray = [10, 20, 30, 50, 60];
console.log(d3);
const width = 500;

const height = 500;

const theWidthScale = d3.scaleLinear().domain([0, 60]).range([0, width]);

const axis = d3.axisBottom().ticks(20).scale(theWidthScale);

const colorScale = d3.scaleLinear().domain([0, 60]).range(["yellow", "green"]);
const svg = d3
  .select("div")
  .append("svg")
  .attr("width", 520)
  .attr("height", 500)
  .style("background-color", "red")
  .append("g")
  .attr("transform", "translate(20,20)");

const bars = svg
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", (d) => {
    return theWidthScale(d);
  })
  .attr("height", 30)
  .attr("fill", "green")
  .attr("y", (d, i) => {
    return i * 100;
  })
  .attr("fill", (d) => {
    return colorScale(d);
  });
svg.append("g").call(axis).attr("transform", "translate(0,400)");
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
const circle3 = svg
  .append("circle")
  .attr("width", 50)
  .attr("height", 50)
  .attr("r", 30)
  .attr("cx", 100)
  .attr("cy", 50);
const circles = svg
  .selectAll("circle")
  .data(data)
  .attr("fill", "green")
  .exit()
  .attr("fill", "blue");
//        .attr("fill", "red")
//        .enter()
//        .append("circle")
//        .attr("cx", 50)
//        .attr("cy", 50)
//        .attr("r", 30)
//        .attr("fill", "blue");
