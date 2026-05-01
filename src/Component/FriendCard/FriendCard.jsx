
import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    const {id, name, picture, days_since_contact, status, tags} = friend;
    // console.log(picture);
    return (
       
             <Link to={`/friends/${id}`} className="bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] shadow-base-content/5 transition hover:shadow-xl hover:-translate-y-1 p-7 hover:bg-sky-50 text-center space-y-2">
            <div className="flex justify-center items-center">
                <img className="rounded-full h-20 w-20 object-cover" src={picture} alt="Friend Picture" />
            </div>
            <h2 className="text-xl font-bold text-base-content/90">{name}</h2>
            <p className="text-sm text-base-content/60">{days_since_contact}d ago</p>
            <div className="flex justify-center items-center gap-2 flex-wrap text-[#244D3F]">
                {
                    tags.map((tag, id)=> 
                    <span key={id} className="bg-green-100 py-1 px-3 rounded-full uppercase  text-xs">
                        {tag}
                    </span>
                    )
                }
            </div>
            <div className="flex justify-center items-center gap-2 mt-3">
                <span className={`capitalize text-white px-3 py-0.5 rounded-3xl ${status === 'overdue' ? "bg-red-600"
                : status === 'almost due' ? 'bg-orange-400'
                : status === "on track"  ? 'bg-green-900': ''}`}
                >
                    {status}
                </span>
            </div>
            
        </Link>
      
    );
};

export default FriendCard;