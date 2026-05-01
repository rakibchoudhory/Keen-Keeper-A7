import React from 'react';


const TimeLineCard = ({singleInteraction}) => {
    // console.log(singleInteraction);
    return (
         <div className="bg-white p-4 border-b rounded-md shadow-sm border-gray-200 flex justify-start items-center gap-5 my-3">
                    <div className="flex justify-start items-center gap-4 ">

                        <div className=' flex justify-center items-center'>
                           {
                            singleInteraction.protocol === "Call" ? <img src="/assets/call.png" alt="" /> : singleInteraction.protocol === "Text" ? <img src="/assets/text.png" alt="" />  : 
                           <img src="/assets/video.png" alt="" /> 
                           }
                        </div>
                        
                        <div>
                            <h2 className="text-lg font-semibold capitalize">{singleInteraction.protocol} <span className=' text-gray-600 lowercase font-medium'>with {singleInteraction.name}</span></h2>
                            <p className="text-sm text-gray-600">{singleInteraction.date}</p>
                        </div>
        
                    </div>
                    
                </div>
    );
};

export default TimeLineCard;