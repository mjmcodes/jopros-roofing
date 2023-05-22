import React, { useEffect, useState } from "react";

const ProjectType = {
   flatRoof: "Flat Roof",
   metalRoof: "Metal Roof",
   tiles: "Tiles",
   shingles: "Shingles",
   commercial: "Commercial",
};

export default function ProjectList() {
   const [filter, setFilter] = useState(undefined);
   const [projects, setProjects] = useState([]);

   useEffect(() => {}, [filter]);

   return (
      <div>
         <div className="flex items-center gap-12 text-lg justify-center">
            <button
               className={!filter ? "underline underline-offset-4" : ""}
               onClick={() => setFilter(undefined)}
            >
               All
            </button>
            {Object.values(ProjectType).map((item) => (
               <button
                  key={item}
                  className={
                     filter == item ? "underline underline-offset-4" : ""
                  }
                  onClick={() => setFilter(item)}
               >
                  {item}
               </button>
            ))}
         </div>
         <p>{filter}</p>
      </div>
   );
}
