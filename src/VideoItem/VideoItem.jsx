import React, { Component } from "react";
import styles from "./VideoItem.module.scss";

class VideoItem extends Component {
    render() {
        return (
            <div onClick = {()=> this.props.onVideoSelect(this.props.video)}className="video-item item">
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt="" />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItem;