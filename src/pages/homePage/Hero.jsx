import React from "react";
import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return  <div className='pt-20 pb-10 text-center'>
            <h2 className='md:w-[80%] mx-auto font-bold text-3xl md:text-4xl mb-4 text-[#1F2937]'>Friends to keep close in your life</h2>
            <p className='w-[80%] mx-auto text-sm text-base-content/60 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className='flex justify-center items-center'>

                <button className='btn  text-white bg-[#244d3f] rounded-md border shadow-none flex justify-center items-center gap-1 transition border-[#1F2937] hover:bg-white hover:-translate-y-0.5 hover:text-[#1F2937]'><FaPlus />Add a Friend</button>
            </div>
            
        </div>
};

export default Hero;
