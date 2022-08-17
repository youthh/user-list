import React, {FC, useEffect, useState} from 'react';
import {IPeopleItems, IProps, IPropsPagination, IToDoItems} from "../../Types/types";
import {IoPersonCircleSharp} from "react-icons/io5";
import {NavLink, useParams} from "react-router-dom";
import PeopleCardItem from "../PeopleCardItem";
import axios from "axios";
import './ProfoliPage.css'
import ToDoItem from "../ToDo/ToDoItem";
import {PaginationFC} from "../ToDo/ToDo";

const ProfilePage = ({fetching, setFetching, }: IProps) => {

    let [user, setUser] = useState<IPeopleItems[]>([]);
    let [todo, setTodos] = useState<IToDoItems[]>([])
    let userRequest = useParams()
    useEffect(() => {
        setFetching(true)
        axios.get('https://jsonplaceholder.typicode.com/users/?username=' + userRequest.user).then((data) => {
            setUser(data.data)
            axios.get('https://jsonplaceholder.typicode.com/todos/?userId=' + data.data[0].id)
                .then((dataT) => {
                setTodos(dataT.data)
                setFetching(false)
            })
        })
    }, [])

    return (
        <div style={fetching ? {display: "flex", justifyContent: "center", alignItems: "center"}
            : {display: 'block'}}>
            {
                fetching ? "Loading" :
                    <div className={"page_box"}>
                        <div className="page_container">
                            {
                                user.map((i) => {
                                    return <PeopleCardItem name={i.name}
                                                           username={i.username}
                                                           email={i.email}
                                                           phone={i.phone}
                                                           id={i.id}
                                                           key={i.id}
                                    />
                                })


                            }
                        </div>
                        {
                            todo.map((i) => {
                                return <ToDoItem id={i.id}
                                                 key={i.id}
                                                 userId={i.userId}
                                                 title={i.title}
                                                 completed={i.completed}/>
                            })
                        }
                    </div>
            }

        </div>
    );
};

export default ProfilePage;