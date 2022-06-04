import { Component } from "react";
import { TripleMaze } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

class Loader extends Component {
    render() {
        return (
            <TripleMaze
                text={"Loading..."}
                bgColor={"#00ff1c"}
                width={"150px"}
                height={"150px"}
                center={true}
            />
        )
    }
}

export default Loader;