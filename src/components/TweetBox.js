import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase/firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage === "") {
      alert("You must type a post, URL images are optional");
    } else {
      db.collection("posts").add({
        displayName: "John Doe",
        username: "johndoe555",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://venturebeat.com/wp-content/uploads/2016/02/anonymous-face.shutterstock_365080829.jpg?w=1200&strip=all",
      });
    }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://venturebeat.com/wp-content/uploads/2016/02/anonymous-face.shutterstock_365080829.jpg?w=1200&strip=all' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />

        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
