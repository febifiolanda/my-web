import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Main from './component/page/Main';
import Navbar from './MyAppBar';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
            </div> 

        );
    }
}

export default App;
