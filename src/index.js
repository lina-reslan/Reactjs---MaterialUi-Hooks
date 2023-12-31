import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Container from "@mui/material/Container";
ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="xl" style={{ height: "100%" }}>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
