"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Image Encryptor (LFSR)",
    description: "Encryption using Linear Feedback Shifting",
    image: "/images/LFSR-image.png",
    tag: ["All", "C++", "Cybersecurity"],
    gitURL: "/downloads/comp4-archives/LFSR-encryptor.tar.gz",
    preview: "/",
  },
  {
    id: 2,
    title: "Pythagoras Tree",
    description: "Tree drawn with a common Pythagoras theorem",
    image: "/images/pythagorastree-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/pythagoras-tree.tar.gz",
    preview: "/"
  },
  {
    id: 3,
    title: "Sokoban",
    description: "Classic Japanese box game",
    image: "/images/sokoban-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/sokoban.tar.gz",
    preview: "/",
  },
  {
    id: 4,
    title: "NBody Simulation",
    description: "Simulation of Newton's Gravitational Laws",
    image: "/images/nbody-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/nbody-simulation.tar.gz",
    preview: "/",
  },
  {
    id: 5,
    title: "DNA Sequence Aligner",
    description: "Optimizes string alignments, commonly seen for DNA",
    image: "/images/dna-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/dna-alignment.tar.gz",
    preview: "/"
  },
  {
    id: 6,
    title: "Kronos Regex Searcher",
    description: "Searches through a Linux Kronos device's logs using regex",
    image: "/images/kronos-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/kronos-regex.tar.gz",
    preview: "/"
  },
  {
    id: 7,
    title: "SecureDrop",
    description: "Secure filesharing app for any Linux distro",
    image: "/images/securedrop-image.png",
    tag: ["All", "Python", "Cybersecurity"],
    gitURL: "https://github.com/Xyloshun/SecureDrop-Rework",
    preview: "/",
  },
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mb-4">My Projects</h2>
      <div id="projects" className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            gitURL={project.gitURL}
            previewURL={project.preview}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection