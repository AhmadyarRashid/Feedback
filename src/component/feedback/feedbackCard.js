import React, {useState, useEffect} from "react";
import "@lottiefiles/lottie-player";
import {url} from '../../constant/variables';
import './feedback.css';

const FeedbackCard = ({rating}) => {
  const [state, setState] = useState({outer: "", inner: "", feedback_id: ""}); ///states to manage CSS classes
  useEffect(() => {
    (() => {
      switch (rating) {
        case "amazing":
          setState({...state, outer: "b", inner: "h", feedback_id: "1"});
          break;
        case "good":
          setState({...state, outer: "c", inner: "s", feedback_id: "2"});
          break;
        case "bad":
          setState({...state, outer: "d", inner: "o", feedback_id: "3"});
          break;
        case "hated":
          setState({...state, outer: "e", inner: "a", feedback_id: "4"});
          break;
        default:
          setState({...state});
      }
    })();
  }, [rating]);

  const {outer, inner} = state;
  return (
      <div
          className={`circle_${outer} col-lg-2 col-md-2 col-sm-2 col-xs-right-offset-1`}
      >
        <button
            className={`circle_${inner} clickme_${inner} color_${rating}_bg`}>
          <div className="emoji-reaction" id={`emoji_${inner}`}>
            <lottie-player
                src={url + "/img/" + rating + ".json"}
                background="transparent"
                speed="0.3"
                style={{width: "70px", height: "70px"}}
                loop={true}
                autoplay={true}
            />
          </div>
          <span className="white_text" id={`text_${inner}`}>
          {` ${rating.replace(
              rating.charAt(0),
              rating.charAt(0).toUpperCase()
          )}`}
        </span>
        </button>
      </div>
  );
};

export default FeedbackCard;
