import React from "react";

//function to calculate the percentage of time remaining in the session and is passed to the progress bar

function ProgressBar({ session, timeRemaining, focusDuration, breakDuration }) {
  function percentElapsed(
    session,
    timeRemaining,
    focusDuration,
    breakDuration
  ) {
    const focusTime = focusDuration * 60;
    const breakTime = breakDuration * 60;

    const breakDiff = breakTime - timeRemaining;
    const focusDiff = focusTime - timeRemaining;

    if (session.label === "On Break") {
      return (breakDiff / breakTime) * 100;
    } else {
      return (focusDiff / focusTime) * 100;
    }
  }

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={percentElapsed(
        session,
        timeRemaining,
        focusDuration,
        breakDuration
      )}
      style={{
        width: `${percentElapsed(
          session,
          timeRemaining,
          focusDuration,
          breakDuration
        )}%`,
      }}
    />
  );
}

export default ProgressBar;
