import React from "react";
import "./Widgets.css";
import { Search } from "@material-ui/icons";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"284842645"} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='supernaturepics'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/TwitterInc/"}
          options={{ text: "share", via: "supernaturepics" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
