import React, { useContext } from "react";
import { datasContext } from "../../Component/Context/DatasProvider";

import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
  const { interactions } = useContext(datasContext);
  // console.log(interactions);
  const text = interactions.filter((itr) => itr.protocol === "Text");
  const call = interactions.filter((itr) => itr.protocol === "Call");
  const video = interactions.filter((itr) => itr.protocol === "Video");
  console.log(text, call, video);

  const data = [
    { name: "Text", value: text.length, fill: "#7E35E1" },
    { name: "Call", value: call.length, fill: "#244D3F" },
    { name: "Video", value: video.length, fill: "#37A163" },
  ];

  return (
    <div className="bg-base-200 py-20 text-base-content/90 min-h-[70vh]">
      <div className="max-w-290 px-5 md:px-8 xl:px-0 mx-auto space-y-5">
        <h2 className="font-bold text-4xl text-[#1F2937]">
          Friendship Analytics
        </h2>
        <div className="bg-white rounded-md shadow-sm p-7">
          <h2 className="font-semibold mb-4 text-[#244D3F]">
            By Interaction Type
          </h2>
          <div className="flex justify-center items-center min-h-24">
          {
            interactions.length === 0 ? <h2 className="font-semibold text-xl">No Interactions Yet...</h2> :   <PieChart
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "50vh",
                aspectRatio: 1,
                
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="75%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend wrapperStyle={{ paddingTop: "25px",borderRadius: "20px", }} />
              <Tooltip />
            </PieChart>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
