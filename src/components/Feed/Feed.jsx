import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox setTweets={props.setTweets} userProfile={props.userProfile} tweets={props.tweets}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.map((e, idx) => {
          <Tweet tweet={e} key={idx}/>
        })
      }</div>
    </div>
  )
}
