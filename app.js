import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";


const AppLayout = () =>{
    return(
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout/>);



