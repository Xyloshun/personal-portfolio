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
    title: "Sokoban",
    description: "Classic Japanese box game",
    image: "/images/sokoban-image.png",
    tag: ["All", "C++"],
    gitURL: "/downloads/comp4-archives/sokoban.tar.gz",
    preview: "/",
  },
  {
    id: 3,
    title: "SecureDrop",
    description: "Secure filesharing app for any Linux distro",
    image: "/images/securedrop-image.png",
    tag: ["All", "Python"],
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