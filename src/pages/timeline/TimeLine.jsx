import React, { useContext, useState } from "react";
import { datasContext } from "../../Component/Context/DatasProvider";
import TimeLineCard from "./TimeLineCard";

const TimeLine = () => {
  const { interactions } = useContext(datasContext);
  console.log(interactions);

    const [selectedType, setSelectedType] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredInteractions = interactions.filter(itr => {
        const matchesType = selectedType ? itr.protocol === selectedType : true;
        const matchesSearch = searchTerm
            ? itr.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              itr.protocol?.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return matchesType && matchesSearch;
    });  
    

  return (
    <div className="w-11/12 mx-auto my-8">
      <h2 className="text-4xl font-bold"> Timeline</h2>

    
                <div className="flex justify-between items-center flex-col md:flex-row gap-4 mt-5 cursor-pointer">

                    <select 
                        defaultValue="Filter timeline" 
                        className="select"
                        onChange={
                            (e)=>setSelectedType(e.target.value)
                        } 
                    >
                        <option disabled={true} >Filter timeline</option>
                        <option value="Text">Text</option>
                        <option value="Call">Call</option>
                        <option value="Video">Video</option>
                    </select>

                </div>

      {interactions.length === 0 ? (
        <div className="h-70 p-10 bg-white rounded-md shadow-sm flex justify-center items-center my-12">
          <h2 className="font-semibold text-xl">No Interactions Yet...</h2>
        </div>
      ) : (
        filteredInteractions.map((singleInteraction, index) => (
          <TimeLineCard key={index} singleInteraction={singleInteraction} />
        ))
      )}
    </div>
  );
};

export default TimeLine;
