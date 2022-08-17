import React, {FC, useEffect, useState} from 'react';
import ToDoItem from "./ToDoItem";
import axios from "axios";
import {IProps, IPropsPagination, IToDoItems} from "../../Types/types";
import Stack from "@mui/material/Stack";
import {Pagination} from "@mui/material";
import './ToDoStyle.css'

export const PaginationFC: FC<IPropsPagination> = ({page, handleChange}) => {

    return(
        <div>
            <Stack spacing={2}>
                <Pagination count={20} page={page} onChange={handleChange} color="primary"/>
            </Stack>
        </div>
    )
}



const ToDo = ({fetching, setFetching, page, handleChange}: IProps & IPropsPagination ) => {

    let [todo, setToDos] = useState<IToDoItems[]>([])


    useEffect(() => {
        if (setFetching) {
            setFetching(true)
        }
        axios.get('https://jsonplaceholder.typicode.com/todos?_page=' + page).then((data) => {
            setToDos(data.data)
            if (setFetching) {
                setFetching(false)
            }

        })

        return () => {
            setToDos([])
        }
    }, [page])


    return (
        <div className={"todo_container"}>
            <div className={"todo_box"}>
                {
                    fetching ? "Loading..."
                        :
                        todo.map((i) => {
                            return <ToDoItem id={i.id}
                                             userId={i.userId}
                                             title={i.title}
                                             completed={i.completed}
                            />
                        })
                }
            </div>
            <PaginationFC page={page} handleChange={handleChange} />
        </div>
    );
};

export default ToDo;