import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  console.log(props.tweetText)
  const handleOnTweetTextChange = (e) => {
    props.setTweetText(e.target.value)

  }

  const handleOnSubmit = () => {
    if (props.tweetText.length===0 || props.tweetText.length >= 140) {return}
    const newObj = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    }
    props.setTweets((prevState)=>[...prevState, newObj])
    props.setTweetText("")

  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount text={props.tweetText}/>
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
  return <span className={(140 - props.text.length) < 0 ? "red":""}>{140 - props.text.length}</span>
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick={handleOnSubmit} className="tweet-submit-button">Tweet</button>
    </div>
  )
}
