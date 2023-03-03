import './App.css';
import Pic from "./components/Pic";
import friend1 from './pics/friend1.jpg'
import friend2 from './pics/friend2.jpg'
import friend3 from './pics/friend3.jpg'
import friend4 from './pics/friend4.jpg'
import friend5 from './pics/friend5.jpg'
import friend6 from './pics/friend6.jpg'
import friend7 from './pics/friend7.jpg'
import friend8 from './pics/friend8.jpg'
import friend9 from './pics/friend9.jpg'
import React, {Component} from 'react';

//CHANGE SIZES HERE
const PIC_WIDTH = 100;
const PIC_HEIGHT = 80;
const PARENT_DIV_WIDTH = 300;

class App extends Component {
    constructor(props) {
        super(props);
        this.pics = [
            friend1, friend2, friend3,
            friend4, friend5, friend6,
            friend7, friend8, friend9
        ]
        this.state = {
            isPicSelected: false,
            selectedPic: null,
            picWidth: PIC_WIDTH,
            picHeight: PIC_HEIGHT
        };
    }

    switchRenderView = (pic) => {
        if (pic) {
            this.setState({
                ...this.state, isPicSelected: true, selectedPic: pic,
                picWidth: this.state.picWidth * 3, picHeight: this.state.picHeight * 3
            })
        } else this.setState({
            ...this.state, isPicSelected: false, selectedPic: null,
            picWidth: this.state.picWidth / 3, picHeight: this.state.picHeight / 3
        })
    }

    dispAllPics = () => {
        const pictures = this.pics.map((item, index) => {
            return < Pic key={index} src={item}
                         width={`${this.state.picWidth}px`} height={`${this.state.picHeight}px`}
                         onClick={() => this.switchRenderView(item)}/>
        })
        return <div style={{width: `${PARENT_DIV_WIDTH}px`}}>{pictures}</div>
    }
    dispSelectedPic = () => {
        return (
            <Pic width={`${this.state.picWidth}px`} height={`${this.state.picHeight}px`}
                 src={this.state.selectedPic}
                 onClick={() => this.switchRenderView()}
            />
        );
    };

    render() {
        if (!this.state.isPicSelected)
            return this.dispAllPics()
        else
            return this.dispSelectedPic()
    }
}

export default App;
