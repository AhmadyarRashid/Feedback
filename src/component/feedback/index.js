import React from "react";
import Card from "./feedbackCard";

class Index extends React.Component {
  render() {
    return (
        <div classNameName="App">
          <div className="landing-page">
            <div className="main">
              <div className="fixed-top-spacing">&nbsp;</div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-1 col-md-1 placeholder">&nbsp;</div>
                  <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="tabcontent" id="page_1">
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <h1 className="question">Hey there,</h1>
                      <h2 className="question">How was your experience today?</h2>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>

                      <div className="row">
                        <Card rating="amazing" />
                        <Card rating="good" />
                        <Card rating="bad" />
                        <Card rating="hated" />

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fixed-bottom-spacing">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Index;
