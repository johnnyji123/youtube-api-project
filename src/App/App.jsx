import React, { Component } from "react";
import styles from "./App.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Youtube from "../Youtube/Youtube";
import axios from "axios";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";

const KEY = "AIzaSyCPCErkuA7A0joDKpNU9xfDfkHbtvb2DHQ"

class App extends Component{

  state = {
    videos: [],
    selectedVideo: null
  }
 
  onTermSubmit = async (term) => {
   const response = await Youtube.get("/search", {
      params: {
        part:"snippet",
        maxResults: 5,
        key: KEY,
        q: term
      }
    })
    this.setState({videos: response.data.items})
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render(){
    return(
      <div className = "ui container">
        <SearchBar FormSubmit = {this.onTermSubmit}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList onVideoSelect ={this.onVideoSelect} videos = {this.state.videos} />
      </div>
    )
  }
}

export default App;