import React, { Component } from "react";
import VideoItem from "../VideoItem/VideoItem";


class VideoList extends Component{
    render(){
        const ListOfVideos = this.props.videos.map((video) => {
            return <VideoItem onVideoSelect = {this.props.onVideoSelect} video ={video} />
        });
        return(
            <div className = "ui relaxed divided list ">
            {ListOfVideos}
            </div>
        )
    }
}

export default VideoList;