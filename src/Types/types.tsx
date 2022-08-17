import React, {Dispatch, SetStateAction} from "react";

export interface IPeopleItems {
    id: number
    name: string,
    username: string,
    email: string,
    phone: string
}


export interface IToDoItems{
    id: number,
    userId: number,
    title: string,
  readonly  completed: boolean
}


export interface IProps{
    fetching: boolean,
    setFetching: Dispatch<SetStateAction<boolean>>
}

export interface IPropsPagination {
    page: number,
    handleChange: (e: React.ChangeEvent<unknown>, number: number)  => void
}