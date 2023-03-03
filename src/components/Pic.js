import React, {Component} from 'react';


class Pic extends Component {
    render() {
        return (
            <img
                src={this.props.src} alt={'friend'}
                style={{
                    width: this.props.width, height: this.props.height,
                    display: 'inline-block', margin: '-2px'
                }}
                onClick={() => {this.props.onClick()}}
            />
        );
    }
}


export default Pic;