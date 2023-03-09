import React from "react";

const projects = [
  {
    id: 1,
    name: "SpeechieForPrez.com",
    url: "https://speechieforprez.com",
    thumbnailImage: "",
    galleryImage: "",
  },
  {
    id: 2,
    name: "Carbon Presets",
    url: "https://carbonpresets.com",
    thumbnailImage: "",
    galleryImage: "",
  },
  {
    id: 3,
    name: "Brer Rabbit Corporate Advisory",
    url: "https://brerrabbit.io",
    thumbnailImage: "",
    galleryImage: "",
  },
];

function ProjectSection() {
  return (
    <div className="project-section h-52">
      <div className="project-label text-black">ProjectSection</div>
      <div className="project-label text-black">ProjectSection</div>
      <div className="project-label text-black">ProjectSection</div>
    </div>
  );
}

export default ProjectSection;
