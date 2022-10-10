import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { formatCurrencyString } from "use-shopping-cart";

function useSessionId() {
  return new URLSearchParams(useLocation().search);
}

const Result = () => {
  const sessionId = useSessionId().get("session_id");

  const [sessionLoading, setSessionLoading] = useState();
  const [sessionError, setSessionError] = useState();
  const [sessionData, setSessionData] = useState();

  useEffect(() => {
    if (sessionId) {
      const { data, isLoading, isError } = axios
        .get(`/api/checkout-sessions/${sessionId}`)
        .then((res) => res.data);
      setSessionData(data);
      setSessionLoading(isLoading);
      setSessionError(isError);
    } else {
      return null;
    }
  }, []);

  return (
    <div className="result-page">
      <section>
        <i className="bi bi-check"></i>
        <h1 className="display-3">Payment Accepted!</h1>
        <h3></h3>
        <h3>Your total is </h3>
        <h4 className="parag text-light">
          You should recieve an Email shortly with your order details at{" "}
        </h4>
      </section>
    </div>
  );
};

export default Result;
