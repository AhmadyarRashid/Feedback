/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import "@lottiefiles/lottie-player";
import axios from "axios";
import './feedback.css';

const Card = ({ rating }) => {
  const [state, setState] = useState({ outer: "", inner: "", feedback_id: "" }); ///states to manage CSS classes
  const [formData, setFormData] = useState({
    experience_score: "",
    video_quality: false,
    audio_quality: false,
    ease: false,
    ui: false,
    interactive: false,
    comment: "",
  }); //states to manage form submissions

  useEffect(() => {
    (() => {
      switch (rating) {
        case "amazing":
          setState({ ...state, outer: "b", inner: "h", feedback_id: "1" });
          break;
        case "good":
          setState({ ...state, outer: "c", inner: "s", feedback_id: "2" });
          break;
        case "bad":
          setState({ ...state, outer: "d", inner: "o", feedback_id: "3" });
          break;
        case "hated":
          setState({ ...state, outer: "e", inner: "a", feedback_id: "4" });
          break;
        default:
          setState({ ...state });
      }
    })();
  }, [rating]);

  const { outer, inner, feedback_id } = state;

  const post_rating = async (rating) => {
    console.log("in post_rating");
    try {
      setFormData({ ...formData, experience_score: rating });
      let { session_id, room_name, user_id } = JSON.parse(
          localStorage.getItem("session_key")
      );

      let feeback_payload = { session_id, user_id, room_name, rating };
      console.log("feedback_payload in post_rating", feeback_payload);

      const res = await axios.post("/feedback_response/", feeback_payload);
      console.log("Data", res.data);
    } catch (error) {
      console.error("Error in post_rating", error);
    }
  };

  const update_feedback = (trigger) => {
    switch (trigger) {
      case 1:
        setFormData({ ...formData, video_quality: !formData.video_quality });
        break;

      case 2:
        setFormData({ ...formData, audio_quality: !formData.audio_quality });
        break;

      case 3:
        setFormData({ ...formData, ease: !formData.ease });
        break;

      case 4:
        setFormData({ ...formData, ui: !formData.ui });
        break;

      case 5:
        setFormData({ ...formData, interactive: !formData.interactive });
        break;
    }
  };

  const update_textarea = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit_feedback = async (e) => {
    e.preventDefault();
    try {
      let { session_id, room_name, user_id } = JSON.parse(
          localStorage.getItem("session_key")
      );

      let feedback_payload = {
        session_id,
        user_id,
        room_name,
        rating: formData.experience_score,
        improve_audio: formData.audio_quality,
        improve_video: formData.video_quality,
        ease_of_use: formData.ease,
        improve_look_and_feel: formData.ui,
        improve_interactiveness: formData.interactive,
        additional_comments: formData.comment,
      };

      console.log("feedback_payload in submit_feedback", feedback_payload);

      const res = await axios.post("/feedback_response/", feedback_payload);
      console.log("Data", res.data);
      localStorage.removeItem("session_key");
      setTimeout(function () {
        window.location = "/thanks";
      }, 200);
    } catch (error) {
      console.error("Error in submit_feedback ", error);
    }
  };

  return (
      <div
          className={`circle_${outer} col-lg-2 col-md-2 col-sm-2 col-xs-right-offset-1`}
      >
        <button
            className={`circle_${inner} clickme_${inner} color_${rating}_bg`}
            onClick={() =>
                post_rating(
                    ` ${rating.replace(
                        rating.charAt(0),
                        rating.charAt(0).toUpperCase()
                    )}`
                )
            }
        >
          <div className="emoji-reaction" id={`emoji_${inner}`}>
            <lottie-player
                src={"http://localhost:3000/"+ rating +".json"}
                background="transparent"
                speed="0.3"
                style={{ width: "70px", height: "70px" }}
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

        <div id={`feedback_overlay_${feedback_id}`} className="feedback_content">
          <h1 className={`color_${rating}_fg`}>Oh. oh!</h1>
          <h2 className={`color_${rating}_fg`}>
            What should we work on for your next class?
          </h2>
          <h4 className={`color_${rating}_fg`}>Select all that apply.</h4>
          <p>&nbsp;</p>
          <div className="button_holder">
            <button
                className={`"button-s button-choice selected noshadow color_${rating}_fg"`}
                onClick={() => update_feedback(1)}
            >
              Video Quality
            </button>
            <button
                className={`"button-s button-choice selected noshadow color_${rating}_fg"`}
                onClick={() => update_feedback(2)}
            >
              Audio Quality
            </button>
            <button
                className={`"button-s button-choice selected noshadow color_${rating}_fg"`}
                onClick={() => update_feedback(3)}
            >
              Ease of Use
            </button>
            <button
                className={`"button-s button-choice selected noshadow color_${rating}_fg"`}
                onClick={() => update_feedback(4)}
            >
              Look & Feel
            </button>
            <button
                className={`"button-s button-choice selected noshadow color_${rating}_fg"`}
                onClick={() => update_feedback(5)}
            >
              Student Participation
            </button>
            <p>&nbsp;</p>
          </div>
          <br />
          <div className="button_holder">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <textarea
                className={`color_${rating}_fg`}
                placeholder="Please tell us more...."
                tabindex="5"
                id={`textarea_${rating}`}
                name="comment"
                onChange={(e) => update_textarea(e)}
            >
            {formData.comment}
          </textarea>
            <p>&nbsp;</p>

            <button
                className={`button-s button-outline noshadow close_${inner}`}
                onClick="refresh_rating()"
            >
              Change Rating
            </button>
            <button
                className={`button-s button-submit noshadow color_${rating}_fg`}
                onClick={(e) => submit_feedback(e)}
            >
              Submit
            </button>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
