import React, {FC, useEffect, useState} from 'react';
import PeopleCardItem from "./PeopleCardItem";
import {IPeopleItems, IProps} from "../Types/types";
import axios from "axios";
import './PeopleCardItem.css'


const PeopleCard: FC<IProps> = ({fetching, setFetching}) => {
    let [users, setUsers] = useState<IPeopleItems[]>([])

    useEffect(() => {
        setFetching(true)
        axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
            setFetching(false)
            setUsers(data.data)
        })

        return () => {
            setUsers([])
        }
    }, [])


    return (
        <div className={"user_container"}>
            {
                fetching ? "Loading..."
                    :
                    users.map((i) => {
                        return <PeopleCardItem
                            id={i.id}
                            name={i.name}
                            username={i.username}
                            email={i.email}
                            phone={i.phone}/>
                    })
            }
        </div>
    );
};

export default PeopleCard;