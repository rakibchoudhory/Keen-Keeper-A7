import React, { useContext } from "react";
import { datasContext } from "../Context/DatasProvider";
import FriendCard from "../FriendCard/FriendCard";
import { Vortex } from "react-loader-spinner";

const AllFriends = () => {
  const { friends, loading } = useContext(datasContext);
  // console.log(friends);
  return (
    <div>
      <h2 className="text-3xl font-bold">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5 ">
        {loading ? (
          <div className="col-span-full flex justify-center items-center min-h-[100px] flex flex-col">
           
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
             <h2 className="font-semibold text-xl">Loading</h2>
            
          </div>
        ) : (
          friends.map((friend) => {
            return <FriendCard key={friend.id} friend={friend} />;
          })
        )}
      </div>
    </div>
  );
};

export default AllFriends;
