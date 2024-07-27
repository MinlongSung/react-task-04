import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO: import scenes
import { switchRoutes } from "./routes";
import { MemberListScene } from "@/scenes/member-list.scene";
import { RickAndMortyScene } from "@/scenes/rick-and-morty.scene";


export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={switchRoutes.root} element={<MemberListScene />}/>
                <Route path={switchRoutes.rickAndMorty} element={<RickAndMortyScene />}/>
                // TODO: DETAILS
                <Route path="*" element={<div>404 Not Found!</div>} /> // TODO: NOT FOUND
            </Routes>
        </BrowserRouter>
    )
};