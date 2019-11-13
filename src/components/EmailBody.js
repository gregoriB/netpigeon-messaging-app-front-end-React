import React from "react";

const EmailBody = ({ index }) => {
  return (
    <div>
      <div>{index}</div>
      <p>Date: 11/12/13</p>
      <p>From: sender</p>
      <p>body</p>
    </div>
  );
};

export default EmailBody;
