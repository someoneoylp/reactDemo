import React, { Component } from 'react';

class MusicItem extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
        <div className="MusicItem">
            <img src={this.props.imgUrl} className="musicImg"/>
            <p className="desc">{this.props.desc}</p>
        </div>
        );
    }
}

export default MusicItem;