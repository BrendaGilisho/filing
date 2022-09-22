import React from "react";
import './CaseCategories.css';
import LandImg from '../../assets/images/land.jpg';


import DriveUploady from "drive-uploady";
import UploadButton from "@rpldy/upload-button";

export const App = () => {

    return <DriveUploady        
            clientId="<my-client-id>"
            scope="https://www.googleapis.com/auth/drive.file"
           >                
            <UploadButton>Upload to Drive</UploadButton>
        </DriveUploady>;
};


export default function CaseCategories() {
    return (
        <div>
            <div className="landcases">
                <div className="land-image">
                    <img className="landimg" src={LandImg} />
                </div>
                <div className="case-details">
                    <h2>Cases Title</h2>
                    <p>Description of the cases</p>
                    <p>Number of cases: 4</p>
                    <div>
                        {/* <button>Add Case</button> */}
                        <UploadButton>Add Case</UploadButton>
                        <button>View Cases</button>
                    </div>

                </div>

            </div>
        </div>
    );
}