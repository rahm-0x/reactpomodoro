import React from "react";
import { minutesToDuration } from "../utils/duration";

//change label off how much time is remaining

function CurrentSessionLabel({ session, focusDuration, breakDuration }) {
  if (session.label === "On Break") {
    return (
      <p>
        {session.label} for {minutesToDuration(breakDuration)} minutes
      </p>
    );
  } else {
    return (
      <p>
        {session.label} for {minutesToDuration(focusDuration)} minutes
      </p>
    );
  }
}

export default CurrentSessionLabel;
