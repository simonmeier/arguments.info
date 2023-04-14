import { Component, OnInit } from '@angular/core';
import * as cola from 'webcola';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'arguments';
  private data = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
  ];
  private svg: any = null;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  private graph = {
    nodes: [{ x: 1, y: 2 }],
    links: [
      { target: 1, source: 0, value: 1 },
      { target: 2, source: 0, value: 1 },
      { target: 9, source: 0, value: 1 },
      { target: 11, source: 0, value: 1 },
      { target: 78, source: 1, value: 1 },
      { target: 3, source: 2, value: 1 },
      { target: 4, source: 3, value: 1 },
      { target: 5, source: 4, value: 1 },
      { target: 6, source: 5, value: 1 },
      { target: 10, source: 6, value: 1 },
      { target: 8, source: 7, value: 1 },
      { target: 11, source: 7, value: 1 },
      { target: 12, source: 8, value: 1 },
      { target: 18, source: 9, value: 1 },
      { target: 35, source: 10, value: 1 },
      { target: 13, source: 12, value: 1 },
      { target: 14, source: 12, value: 1 },
      { target: 15, source: 12, value: 1 },
      { target: 16, source: 12, value: 1 },
      { target: 17, source: 12, value: 1 },
      { target: 19, source: 12, value: 1 },
      { target: 20, source: 12, value: 1 },
      { target: 21, source: 12, value: 1 },
      { target: 23, source: 12, value: 1 },
      { target: 25, source: 12, value: 1 },
      { target: 26, source: 12, value: 1 },
      { target: 28, source: 12, value: 1 },
      { target: 29, source: 12, value: 1 },
      { target: 31, source: 12, value: 1 },
      { target: 24, source: 13, value: 1 },
      { target: 45, source: 14, value: 1 },
      { target: 22, source: 15, value: 1 },
      { target: 49, source: 16, value: 1 },
      { target: 30, source: 18, value: 1 },
      { target: 39, source: 19, value: 1 },
      { target: 40, source: 20, value: 1 },
      { target: 50, source: 21, value: 1 },
      { target: 27, source: 22, value: 1 },
      { target: 63, source: 23, value: 1 },
      { target: 72, source: 24, value: 1 },
      { target: 60, source: 26, value: 1 },
      { target: 68, source: 27, value: 1 },
      { target: 59, source: 29, value: 1 },
      { target: 32, source: 31, value: 1 },
      { target: 33, source: 31, value: 1 },
      { target: 34, source: 31, value: 1 },
      { target: 36, source: 31, value: 1 },
      { target: 37, source: 31, value: 1 },
      { target: 38, source: 31, value: 1 },
      { target: 58, source: 32, value: 1 },
      { target: 75, source: 33, value: 1 },
      { target: 41, source: 34, value: 1 },
      { target: 48, source: 35, value: 1 },
      { target: 76, source: 36, value: 1 },
      { target: 42, source: 37, value: 1 },
      { target: 44, source: 38, value: 1 },
      { target: 46, source: 38, value: 1 },
      { target: 47, source: 38, value: 1 },
      { target: 43, source: 39, value: 1 },
      { target: 57, source: 40, value: 1 },
      { target: 67, source: 41, value: 1 },
      { target: 74, source: 42, value: 1 },
      { target: 51, source: 43, value: 1 },
      { target: 52, source: 48, value: 1 },
      { target: 53, source: 48, value: 1 },
      { target: 54, source: 48, value: 1 },
      { target: 55, source: 48, value: 1 },
      { target: 56, source: 48, value: 1 },
      { target: 61, source: 48, value: 1 },
      { target: 62, source: 48, value: 1 },
      { target: 64, source: 62, value: 1 },
      { target: 65, source: 62, value: 1 },
      { target: 66, source: 62, value: 1 },
      { target: 69, source: 62, value: 1 },
      { target: 70, source: 69, value: 1 },
      { target: 71, source: 69, value: 1 },
      { target: 73, source: 69, value: 1 },
      { target: 77, source: 69, value: 1 },
      { target: 79, source: 78, value: 1 },
    ],
    constraints: [
      { axis: 'y', left: 0, right: 1, gap: 25 },
      { axis: 'y', left: 0, right: 2, gap: 25 },
      { axis: 'y', left: 0, right: 9, gap: 25 },
      { axis: 'y', left: 0, right: 11, gap: 25 },
      { axis: 'y', left: 1, right: 78, gap: 25 },
      { axis: 'y', left: 2, right: 3, gap: 25 },
      { axis: 'y', left: 3, right: 4, gap: 25 },
      { axis: 'y', left: 4, right: 5, gap: 25 },
      { axis: 'y', left: 5, right: 6, gap: 25 },
      { axis: 'y', left: 6, right: 10, gap: 25 },
      { axis: 'y', left: 7, right: 8, gap: 25 },
      { axis: 'y', left: 7, right: 11, gap: 25 },
      { axis: 'y', left: 8, right: 12, gap: 25 },
      { axis: 'y', left: 9, right: 18, gap: 25 },
      { axis: 'y', left: 10, right: 35, gap: 25 },
      { axis: 'y', left: 12, right: 13, gap: 25 },
      { axis: 'y', left: 12, right: 14, gap: 25 },
      { axis: 'y', left: 12, right: 15, gap: 25 },
      { axis: 'y', left: 12, right: 16, gap: 25 },
      { axis: 'y', left: 12, right: 17, gap: 25 },
      { axis: 'y', left: 12, right: 19, gap: 25 },
      { axis: 'y', left: 12, right: 20, gap: 25 },
      { axis: 'y', left: 12, right: 21, gap: 25 },
      { axis: 'y', left: 12, right: 23, gap: 25 },
      { axis: 'y', left: 12, right: 25, gap: 25 },
      { axis: 'y', left: 12, right: 26, gap: 25 },
      { axis: 'y', left: 12, right: 28, gap: 25 },
      { axis: 'y', left: 12, right: 29, gap: 25 },
      { axis: 'y', left: 12, right: 31, gap: 25 },
      { axis: 'y', left: 13, right: 24, gap: 25 },
      { axis: 'y', left: 14, right: 45, gap: 25 },
      { axis: 'y', left: 15, right: 22, gap: 25 },
      { axis: 'y', left: 16, right: 49, gap: 25 },
      { axis: 'y', left: 18, right: 30, gap: 25 },
      { axis: 'y', left: 19, right: 39, gap: 25 },
      { axis: 'y', left: 20, right: 40, gap: 25 },
      { axis: 'y', left: 21, right: 50, gap: 25 },
      { axis: 'y', left: 22, right: 27, gap: 25 },
      { axis: 'y', left: 23, right: 63, gap: 25 },
      { axis: 'y', left: 24, right: 72, gap: 25 },
      { axis: 'y', left: 26, right: 60, gap: 25 },
      { axis: 'y', left: 27, right: 68, gap: 25 },
      { axis: 'y', left: 29, right: 59, gap: 25 },
      { axis: 'y', left: 31, right: 32, gap: 25 },
      { axis: 'y', left: 31, right: 33, gap: 25 },
      { axis: 'y', left: 31, right: 34, gap: 25 },
      { axis: 'y', left: 31, right: 36, gap: 25 },
      { axis: 'y', left: 31, right: 37, gap: 25 },
      { axis: 'y', left: 31, right: 38, gap: 25 },
      { axis: 'y', left: 32, right: 58, gap: 25 },
      { axis: 'y', left: 33, right: 75, gap: 25 },
      { axis: 'y', left: 34, right: 41, gap: 25 },
      { axis: 'y', left: 35, right: 48, gap: 25 },
      { axis: 'y', left: 36, right: 76, gap: 25 },
      { axis: 'y', left: 37, right: 42, gap: 25 },
      { axis: 'y', left: 38, right: 44, gap: 25 },
      { axis: 'y', left: 38, right: 46, gap: 25 },
      { axis: 'y', left: 38, right: 47, gap: 25 },
      { axis: 'y', left: 39, right: 43, gap: 25 },
      { axis: 'y', left: 40, right: 57, gap: 25 },
      { axis: 'y', left: 41, right: 67, gap: 25 },
      { axis: 'y', left: 42, right: 74, gap: 25 },
      { axis: 'y', left: 43, right: 51, gap: 25 },
      { axis: 'y', left: 48, right: 52, gap: 25 },
      { axis: 'y', left: 48, right: 53, gap: 25 },
      { axis: 'y', left: 48, right: 54, gap: 25 },
      { axis: 'y', left: 48, right: 55, gap: 25 },
      { axis: 'y', left: 48, right: 56, gap: 25 },
      { axis: 'y', left: 48, right: 61, gap: 25 },
      { axis: 'y', left: 48, right: 62, gap: 25 },
      { axis: 'y', left: 62, right: 64, gap: 25 },
      { axis: 'y', left: 62, right: 65, gap: 25 },
      { axis: 'y', left: 62, right: 66, gap: 25 },
      { axis: 'y', left: 62, right: 69, gap: 25 },
      { axis: 'y', left: 69, right: 70, gap: 25 },
      { axis: 'y', left: 69, right: 71, gap: 25 },
      { axis: 'y', left: 69, right: 73, gap: 25 },
      { axis: 'y', left: 69, right: 77, gap: 25 },
      { axis: 'y', left: 78, right: 79, gap: 25 },
    ],
  };

  ngOnInit(): void {
    //this.createSvg();
    //this.drawBars(this.data);

    let d3cola = cola
      .d3adaptor(d3)
      .avoidOverlaps(true)
      .size([this.width, this.height]);

    var outer = d3
      .select('body')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('pointer-events', 'all');

    outer
      .append('rect')
      .attr('class', 'background')
      .attr('width', '100%')
      .attr('height', '100%');

    var vis = outer
      .append('g')
      .attr('transform', 'translate(80,80) scale(0.7)');

    var groupsLayer = vis.append('g');
    var nodesLayer = vis.append('g');
    var linksLayer = vis.append('g');

    var graph = {},
      nodeLookup = {};

    // define arrow markers for graph links
    outer
      .append('svg:defs')
      .append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 5)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5L2,0')
      .attr('stroke-width', '0px')
      .attr('fill', '#000');

    var node = nodesLayer
      .selectAll('.node')
      .data(this.graph.nodes)
      .enter()
      .append('rect')
      .attr('class', 'node')

      .call(d3cola.drag);

    var label = nodesLayer
      .selectAll('.label')
      .data(this.graph.nodes)
      .enter()
      .append('text')
      .attr('class', 'label')
      .call(d3cola.drag);

    d3cola
      .nodes(this.graph.nodes)
      .links(this.graph.links)
      .constraints(this.graph.constraints)
      .start();

    d3cola.on('tick', function () {});
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.Framework))
      .attr('y', (d: any) => y(d.Stars))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.Stars))
      .attr('fill', '#d04a35');
  }
}
