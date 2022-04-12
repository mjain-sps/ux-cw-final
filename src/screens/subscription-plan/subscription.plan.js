import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import {
  BackButtonContainer,
  MasterContainer,
  SubscritionPlanCard,
  SubscritionPlanCardWrapper,
} from "./subscription.plan.styles";

const SubscriptionScreen = () => {
  const handlePlanSelect = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <MasterContainer>
        <h1>Subscription Details</h1>
        <h4>You are currently using 15 days trial</h4>
        <h6>13 days left in trial version</h6>

        <BackButtonContainer
          onClick={() => navigate(location.state.from.pathname)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </BackButtonContainer>

        <SubscritionPlanCardWrapper>
          {/* Basic plan */}
          <SubscritionPlanCard style={{ marginTop: "10px", height: "400px" }}>
            <div className="subscription-card--header">
              <h4>Basic</h4>
              <h5>12.99 GBP/week</h5>
            </div>
            <p>Benefits</p>
            <ul>
              <li>5 Primary users</li>
              <li>10 students / primary user</li>
              <li>PEC levels 1,2,3</li>
            </ul>
            <div style={{ textAlign: "center", width: "100%" }}>
              <ButtonComponent
                disabled={true}
                name="select-basicplan-cta"
                type="button"
                onClick={handlePlanSelect}
              >
                Select
              </ButtonComponent>
            </div>
          </SubscritionPlanCard>

          <SubscritionPlanCard style={{ height: "425px" }}>
            <div className="subscription-card--header standard">
              <h2>Standard</h2>
              <h5>15.99 GBP/week</h5>
            </div>
            <p>Benefits</p>
            <ul>
              <li>5 Primary users</li>
              <li>10 students / primary user</li>
              <li>PEC levels 1-6</li>
            </ul>
            <div style={{ textAlign: "center", width: "100%" }}>
              <ButtonComponent
                disabled={true}
                name="select-standardplan-cta"
                type="button"
                onClick={handlePlanSelect}
              >
                Select
              </ButtonComponent>
            </div>
          </SubscritionPlanCard>

          <SubscritionPlanCard style={{ marginTop: "10px", height: "400px" }}>
            <div className="subscription-card--header">
              <h4>Premium</h4>
              <h5>19.99 GBP/week</h5>
            </div>
            <p>Benefits</p>
            <ul>
              <li>10 Primary users</li>
              <li>20 students / primary user</li>
              <li>PEC levels 1-6</li>
            </ul>
            <div style={{ textAlign: "center", width: "100%" }}>
              <ButtonComponent
                disabled={true}
                name="select-premiumplan-cta"
                type="button"
                onClick={handlePlanSelect}
              >
                Select
              </ButtonComponent>
            </div>
          </SubscritionPlanCard>
        </SubscritionPlanCardWrapper>
      </MasterContainer>
    </>
  );
};

export default SubscriptionScreen;
