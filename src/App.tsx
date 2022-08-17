import './App.css';
import PeopleCard from "./Component/PeopleCard";
import './resetStyle.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Header from "./Component/Header/Header";
import ToDo from "./Component/ToDo/ToDo";
import * as React from 'react';
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import {useState} from "react";


function App() {
    const [fetching, setFetching] = useState<boolean>(false);
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<PeopleCard fetching={fetching} setFetching={setFetching}/>}/>
                    <Route path={"/Todo"} element={
                        <ToDo
                            fetching={fetching}
                            setFetching={setFetching}
                            page={page}
                            handleChange={handleChange}
                        />}/>
                    <Route path={"/:user"} element={
                        <ProfilePage
                            fetching={fetching}
                            setFetching={setFetching}

                        />
                    }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



