import React, {FC} from 'react';
import {IToDoItems} from "../../Types/types";
import "./ToDoStyle.css"


const ToDoItem: FC<IToDoItems> = ({id, userId, title, completed}) => {
    return (
        <div className={"todo_item"}>
            <p>{id}</p>
            <p className="todo_title">{title}</p>
            <input type="checkbox" checked={completed}/>
        </div>
    );
};

export default ToDoItem;