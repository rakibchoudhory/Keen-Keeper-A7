import React, { useContext } from "react";
import { useParams } from "react-router";
import { datasContext } from "../Context/DatasProvider";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";
import { Bounce, toast } from "react-toastify";
import { Vortex } from "react-loader-spinner";

const FriendDetails = () => {
  const { friends,interactions,handleInteration} = useContext(datasContext);
console.log(interactions);
  const friendDetails = useParams();
  const friendId = friendDetails.id;

  if (!friends || friends.length === 0) {
    return <div className="flex justify-center items-center flex-col">
      <Vortex
visible={true}
height="80"
width="80"
ariaLabel="vortex-loading"
wrapperStyle={{}}
wrapperClass="vortex-wrapper"
colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
<h2>Loading</h2>
    </div>

  }

  // console.log(friends,"friends", friendId ,interaction );
  const selectedFriend = friends?.find(
    (friend) => friend.id === Number(friendId),
  );
  if (!selectedFriend) {
    return <p>Friend not found</p>;
  }
  // console.log(selectedFriend, "selectF");

  const status = selectedFriend?.status;
  const handleAudio = () => {
    handleInteration(selectedFriend?.id,selectedFriend?.name,"Call")
    toast.success(`Call with ${selectedFriend?.name}`);
  };
 
  const handleText = () => {
     handleInteration(selectedFriend?.id,selectedFriend?.name,"Text")
    toast.info(`Text with ${selectedFriend?.name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  const handleVideo = () => {
     handleInteration(selectedFriend?.id,selectedFriend?.name,"Video")
    toast.success(`Video with ${selectedFriend?.name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    // toast.info(`Video with ${selectedFriend?.name}`)
  };
  // console.log(selectedFriend.status);
  return (
    <div className="bg-base-200 py-20 text-base-content/90">
      <div className="max-w-290 px-5 md:px-8 xl:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-md shadow-md shadow-base-content/5 transition p-5 text-center space-y-2">
            <div className="flex justify-center items-center">
              <img
                className="rounded-full h-20 w-20 object-cover"
                src={selectedFriend.picture}
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold text-[#1F2937]">
              {selectedFriend?.name}
            </h2>

            <div className="flex justify-center items-center gap-2 mt-3">
              <span
                className={`text-white capitalize 
                                ${
                                  status === "almost due"
                                    ? "bg-orange-400"
                                    : status === "overdue"
                                      ? "bg-red-600"
                                      : status === "on track"
                                        ? "bg-green-900"
                                        : ""
                                } rounded-full py-1 px-3 text-sm`}
              >
                {status}
              </span>
            </div>

            <div className="flex justify-center items-center gap-2 flex-wrap text-[#244D3F]">
              {selectedFriend.tags.map((tag, id) => (
                <span
                  key={id}
                  className="bg-green-100 py-1 px-3 rounded-full uppercase text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-base-content/60">
              <i>&quot;{selectedFriend?.bio}&quot;</i>
            </h2>
            <p className="text-sm text-gray-600">
              Preferred: {selectedFriend?.email}
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-3 font-medium cursor-pointer text-base-content/80 ">
            <h2 className="flex justify-center items-center gap-2">
              <RiNotificationSnoozeLine className="font-semibold text-lg" />
              Snooze 2 weeks
            </h2>
          </div>
          <div className="bg-white rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-3 font-medium cursor-pointer text-base-content/80 ">
            <h2 className="flex justify-center items-center gap-2">
              <FiArchive className="font-semibold text-lg" />
              Archive
            </h2>
          </div>
          <div className="bg-white rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-3 font-medium cursor-pointer text-red-500 ">
            <h2 className="flex justify-center items-center gap-2">
              <RiDeleteBin6Line className="font-semibold text-lg" />
              Delete
            </h2>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 bg-white p-5 text-center ">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-[#244D3F]">
                {selectedFriend?.days_since_contact}
              </h2>
              <p className="text-gray-600">Days Since Contact</p>
            </div>
            <div className="rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 bg-white p-5 text-center text-[#244D3F]">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
                {selectedFriend?.goal}
              </h2>
              <p className="text-gray-600">Goal (Days)</p>
            </div>
            <div className="rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 bg-white p-5 text-center text-[#244D3F]">
              <h2 className="text-[20px] lg:text-[26px] font-semibold mb-2 ">
                {selectedFriend?.next_due_date}
              </h2>
              <p className="text-gray-600">Next Due</p>
            </div>
          </div>
          <div className="rounded-md shadow-md shadow-base-content/5 bg-white p-5 ">
            <div className="flex justify-between items-center gap-5 ">
              <h2 className="font-semibold text-[#244D3F]">
                Relationship Goal
              </h2>
              <button className="btn">Edit</button>
            </div>
            <h2 className="text-gray-600 ">
              Connect every{" "}
              <span className="font-extrabold">
                {selectedFriend?.goal} days
              </span>
            </h2>
          </div>
          <div className="rounded-md shadow-md shadow-base-content/5 bg-white p-5 space-y-3">
            <h2 className="font-semibold">Quick Check-In</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">


              <button
                onClick={handleAudio}
                className="btn h-25 shadow-sm bg-gray-100 text-center rounded-md flex flex-col p-4"
              >
                <div className="flex justify-center items-center">
                  <LuPhoneCall className="text-2xl font-extrabold" />
                </div>
                <h2 className="text-sm xl:text-lg mt-2 font-medium">Call</h2>
              </button>



              <button
                onClick={handleText}
                className="btn h-25 shadow-sm bg-gray-100 text-center rounded-md flex flex-col p-4"
              >
                <div className="flex justify-center items-center">
                  <LuMessageSquareMore className="text-2xl font-semibold" />
                </div>
                <h2 className="text-sm xl:text-lg mt-2 font-medium">Text</h2>
              </button>


              <button
                onClick={handleVideo}
                className="btn h-25 shadow-sm bg-gray-100 text-center rounded-md flex flex-col p-4"
              >
                <div className="flex justify-center items-center">
                  <PiVideoCameraLight className="text-3xl font-extrabold" />
                </div>
                <h2 className="text-sm xl:text-lg mt-2 font-medium">Video</h2>
              </button>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
