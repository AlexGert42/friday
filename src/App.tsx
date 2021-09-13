import React from 'react';
import {Header} from "./components/header/Header";
import {Content} from "./components/content/Content";
import {Footer} from "./components/footer/Footer";


export const App: React.FC = () => {

    return (
        <div className="wrapper">
           <Header/>
            <div className="container">
                <Content/>
            </div>
            <Footer/>
        </div>
    )
}
