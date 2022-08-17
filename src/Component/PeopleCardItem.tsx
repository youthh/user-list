import React from 'react';
import {IPeopleItems} from "../Types/types";
import './PeopleCardItem.css'
import {NavLink} from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";




const PeopleCardItem: React.FC<IPeopleItems> = ({name, username, email, phone}) => {

    return (
        <div className="user_item">
            <IoPersonCircleSharp size={50}/>
            <NavLink to={"/" + username}>
                <h1 className={"user_item-name"}>{username}</h1>
            </NavLink>
            <h1 className="user_item-username">{name}</h1>
            <p className="user_item-email">email: {email}</p>
            <p className={"user_item-phone"}>phone: {phone}</p>
        </div>
    );
};

export default PeopleCardItem;