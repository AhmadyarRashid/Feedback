import React from "react";
import {Grid} from '@material-ui/core';
import Card from "./feedbackCard";
import FeedbackForm from "./feedbackForm";
import {Color} from '../../constant/color';

export default function Index(props) {
  const [screen, setScreen] = React.useState(1);
  const [selectedCard, setSelectedCard] = React.useState({
    type: '',
    color: ''
  });
  const onCategoryHandler = (type, color) => {
    setSelectedCard({
      type,
      color
    });
    setScreen(2)
  };
  const onResetRating = () => {
    setSelectedCard({
      type: '',
      color: ''
    });
    setScreen(1)
  }
  return (
      <div classNameName="App" style={{backgroundColor: selectedCard.color}}>
        <div className="landing-page">
          <div className="main">
            <div className="fixed-top-spacing">&nbsp;</div>
            {screen === 1 ?
                <div className="container">
                  <div className="row">
                    <div className="col-lg-1 col-md-1 placeholder">&nbsp;</div>
                    <div className="col-lg-10 col-md-12 col-sm-12">
                      <div className="tabcontent" id="page_1">
                        <p>&nbsp;</p>
                        <h1 className="question">Hey there,</h1>
                        <h2 className="question">How was your experience today?</h2>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                        <Grid container spacing={3}>
                          <Grid onClick={e => onCategoryHandler('amazing', Color.lite_amazing)} item xs={12} sm={6} md={3}>
                            <Card rating="amazing"/>
                          </Grid>
                          <Grid onClick={e => onCategoryHandler('good', Color.lite_good)} item xs={12} sm={6} md={3}>
                            <Card rating="good"/>
                          </Grid>
                          <Grid onClick={e => onCategoryHandler('bad', Color.lite_bad)}  item xs={12} sm={6} md={3}>
                            <Card rating="bad"/>
                          </Grid>
                          <Grid onClick={e => onCategoryHandler('hated', Color.lite_hated)} item xs={12} sm={6} md={3}>
                            <Card rating="hated"/>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                  <div className="fixed-bottom-spacing">&nbsp;</div>
                </div> :
                <FeedbackForm selectedCard={selectedCard} onResetRating={onResetRating}/>
            }
          </div>
        </div>
      </div>
  );
}
