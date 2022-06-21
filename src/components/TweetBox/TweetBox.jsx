import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnSubmit = () => {
    const newObj = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: "",
      comments: 0,
      retweets: 0,
      likes: 0,
    }
    props.setTweets((prevState)=>[...prevState, newObj])

  }
  return (
    <div className="tweet-box">
      <TweetInput />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick={handleOnSubmit} className="tweet-submit-button">Tweet</button>
    </div>
  )
}
