import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";

function ProjectFolder(props) {
  const { img, title, desc, stack, url } = props;
  return (
    <>
      <div
        className="project-outline h-72 w-72 cursor-pointer m-5"
        onClick={() => window.open(url)}
      >
        <div className="flex flex-col">
          <div className="flex project-img-header h-32 justify-center items-center w-full overflow-hidden">
            <img src={img} className="overflow-hidden project-img" alt="" />
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <h3 className="text-black ml-2 mt-2">{title}</h3>
            <div className="mr-2">
              <RiCodeSSlashFill color="black" size={25} />
            </div>
          </div>
          <div className="text-left ml-2 mt-4 w-5/6 project-desc">
            <p className="text-xs text-gray-600">{desc}</p>
          </div>
          <div className="text-left stack ml-2 mt-5 w-5/6 flex flex-row">
            {stack.map((f) => (
              <p className="text-xs text-gray-600 mr-2">{f}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectFolder;
