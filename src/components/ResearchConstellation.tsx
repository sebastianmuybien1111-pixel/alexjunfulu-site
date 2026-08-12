"use client";

import { useState } from "react";

const nodes = [
  { id: "ir", label: "International\nRelations", x: 50, y: 47, r: 8.8, description: "The study of power, order, cooperation, and competition across the international system." },
  { id: "foreign", label: "Foreign\nPolicy", x: 20, y: 24, r: 6.7, description: "How leaders, institutions, and domestic pressures shape state choices." },
  { id: "conflict", label: "International\nConflict", x: 78, y: 22, r: 6.6, description: "How security pressures, crises, and strategic competition affect world politics." },
  { id: "institutions", label: "International\nInstitutions", x: 81, y: 68, r: 7.3, description: "How rules and organisations structure cooperation and collective action." },
  { id: "ipe", label: "Political\nEconomy", x: 25, y: 75, r: 7, description: "How markets, security, and political power interact across borders." },
  { id: "governance", label: "Global\nGovernance", x: 52, y: 88, r: 6, description: "How authority and responsibility are organised around transnational challenges." },
  { id: "domestic", label: "Domestic\nPolitics", x: 50, y: 16, r: 5.7, description: "How institutions and political incentives inside states shape international behaviour." },
];

const edges = [
  ["ir", "foreign"], ["ir", "conflict"], ["ir", "institutions"], ["ir", "ipe"],
  ["foreign", "domestic"], ["domestic", "conflict"], ["institutions", "governance"], ["ipe", "governance"], ["conflict", "institutions"],
];

export default function ResearchConstellation() {
  const [active, setActive] = useState("ir");
  const activeNode = nodes.find((node) => node.id === active) ?? nodes[0];

  return (
    <div className="research-map" aria-label="Interactive map of Alex Junfu Lu's areas of interest">
      <div className="research-map__canvas">
        <svg viewBox="0 0 100 100" role="img" aria-labelledby="research-map-title">
          <title id="research-map-title">Connections among Alex Junfu Lu&apos;s research interests</title>
          <g className="research-map__edges" aria-hidden="true">
            {edges.map(([a, b]) => {
              const start = nodes.find((node) => node.id === a)!;
              const end = nodes.find((node) => node.id === b)!;
              const highlighted = a === active || b === active;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  className={highlighted ? "is-active" : ""}
                />
              );
            })}
          </g>
          <g>
            {nodes.map((node) => {
              const isActive = node.id === active;
              return (
                <g
                  key={node.id}
                  className={`research-map__node ${isActive ? "is-active" : ""}`}
                  transform={`translate(${node.x} ${node.y})`}
                  onMouseEnter={() => setActive(node.id)}
                  onFocus={() => setActive(node.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${node.label.replace("\n", " ")}: ${node.description}`}
                >
                  <circle r={node.r} />
                  <circle className="research-map__pulse" r={node.r + 2.6} />
                  <text textAnchor="middle" dominantBaseline="middle">
                    {node.label.split("\n").map((line, index) => (
                      <tspan key={line} x="0" dy={index === 0 ? "-0.25em" : "1.05em"}>{line}</tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <div className="research-map__caption" aria-live="polite">
        <span>Area of interest</span>
        <h3>{activeNode.label.replace("\n", " ")}</h3>
        <p>{activeNode.description}</p>
      </div>
    </div>
  );
}
