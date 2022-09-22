import React from "react";
import './Home.css'
import CaseCategories from "../../components/CaseCategories/CaseCategories";
import Calendar from 'react-calendar'

export default function Home() {
    return (
        <div>
            <div className="home-div">
                < CaseCategories />
                < Calendar />
            </div>
        </div>
    );
}