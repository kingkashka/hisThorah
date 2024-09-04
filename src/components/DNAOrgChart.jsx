import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import "/src/css/DNA.css";

const DNAOrgChart = ({ data }) => {
  const d3Container = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1400, height: 800 });

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setDimensions({ width: 600, height: 600 }); // Adjust dimensions for small screens
    } else {
      setDimensions({ width: 1400, height: 800 }); // Default dimensions for larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (d3Container.current && data) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove(); // Clear previous content

      const { width, height } = dimensions;
      const margin = { top: 100, right: 0, bottom: 20, left: 0 }; // Increased top margin

      svg.attr("width", width).attr("height", height);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const root = d3.hierarchy(data);
      const treeLayout = d3
        .tree()
        .size([width - margin.left - margin.right, height - margin.top - margin.bottom]);
      treeLayout(root);

      // Adjust node positions to add margin and spread out the graph
      root.descendants().forEach((d) => {
        d.y = d.depth * 100; // Increase vertical spacing
      });

      // Links
      g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("line")
        .classed("link", true)
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
        .style("stroke", "#a4a4a4");

      // Nodes
      const node = g
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .classed("node", true)
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      // Node appearance based on window width
      const isSmallScreen = window.innerWidth <= 600;
      const rectWidth = isSmallScreen ? 85 : 150;
      const rectHeight = isSmallScreen ? 45 : 50;
      const rectX = -rectWidth / 2;
      const rectY = -rectHeight / 2;

      node
        .append("rect")
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .attr("x", rectX)
        .attr("y", rectY)
        .attr("rx", 12) // Horizontal radius for rounded corners
        .attr("ry", 12) // Vertical radius for rounded corners
        .style("stroke", "black")
        .style("fill", (d) => d.data.color || "#8fb6ff"); // Apply the color from the data or a default color

      node
        .append("text")
        .attr("x", 0)
        .attr("y", rectY + 5)
        .attr("dy", "1em") // Vertical alignment
        .style("text-anchor", "middle")
        .style("fill", (d) => d.data.textColor || "#202124") // Apply text color from the data or default to black
        .text((d) => d.data.name);

      node
        .append("text")
        .attr("x", 0)
        .attr("y", rectY + 25)
        .attr("dy", "1em") // Vertical alignment
        .style("text-anchor", "middle")
        .style("fill", (d) => d.data.mutationColor || "#202124")
        .text((d) => d.data.mutation);
    }
  }, [data, dimensions]);

  return <svg className="DNAchart" ref={d3Container} />;
};

export default DNAOrgChart;
