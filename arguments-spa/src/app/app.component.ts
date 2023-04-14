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

  private svg: any = null;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;
  private nodeRadius = 5;

  private graph = {
    nodes: [
      { x: 5, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 5 },
    ],

    //working
    links: [
      { source: 0, target: 1 },
      { source: 1, target: 2 },
      { source: 2, target: 0 },
    ],

    // links: [
    //   { target: 1, source: 0, value: 1 },
    //   { target: 2, source: 0, value: 1 },
    //   { target: 9, source: 0, value: 1 },
    // ],

    // links: [
    //   { source: { x: 5, y: 3 }, target: { x: 1, y: 2 } },
    //   { source: { x: 1, y: 2 }, target: { x: 1, y: 5 } },
    //   { source: { x: 1, y: 5 }, target: { x: 5, y: 3 } },
    // ],
    constraints: [],
  };

  ngOnInit(): void {
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

    outer;
    // .append('rect')
    // .attr('class', 'background')
    // .attr('width', '100%')
    // .attr('height', '100%');

    var vis = outer
      .append('g')
      .attr('transform', 'translate(80,80) scale(0.7)');

    d3cola
      .nodes(this.graph.nodes)
      .links(this.graph.links)
      .constraints(this.graph.constraints)
      .start();

    vis
      .append('svg:defs')
      .append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#000');

    let path = vis
      .selectAll('.link')
      .data(this.graph.links)
      .enter()
      .append('svg:path')
      .attr('class', 'link');

    let node = vis
      .selectAll('.node')
      .data(this.graph.nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', this.nodeRadius)
      .call(d3cola.drag);

    d3cola.on('tick', function () {
      // draw directed edges with proper padding from node centers
      path.attr('d', function (d) {
        // var deltaX = d.target.x - d.source.x,
        //   deltaY = d.target.y - d.source.y,
        //   dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        //   normX = deltaX / dist,
        //   normY = deltaY / dist,
        //   sourcePadding = 5, //nodeRadius,
        //   targetPadding = 7, //nodeRadius + 2,
        //   sourceX = d.source.x + sourcePadding * normX,
        //   sourceY = d.source.y + sourcePadding * normY,
        //   targetX = d.target.x - targetPadding * normX,
        //   targetY = d.target.y - targetPadding * normY;
        // return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;

        return 'M' + 5 + ',' + 5 + 'L' + 5 + ',' + 5;
      });

      node
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
    });
  }
}
