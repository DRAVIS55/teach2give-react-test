// Import CSS styles for component UI
import "./index.css";

// Import useState hook
import { useState } from "react";

// Main component
const Index = () => {
  // State to store selected rating index (default -1 means no selection)
  const [selectedIndex, setSelected] = useState(-1);

  // State to control visibility of the feedback modal
  const [isVisible, setVisible] = useState(false);

  // State to track whether feedback was submitted
  const [submited, submit] = useState(false);

  // Array to help creating buttons
  let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Toggle the visibility of the feedback modal

  const displayBox = () => {
    setVisible(!isVisible);
  };
  // Toggle the submission state
  const submiting = () => {
    submit(!submited);
  };
  // Returns the selected rating index
  function getResponse() {
    return selectedIndex;
  }

  return (
    <div className="body">
      {/* Main Feedback UI box */}
      <div className="  parent-box shadow rounded">
        <h1 className="text-center ">Feedback Modal Component</h1>
        <p className="text-center">we would like to receive your feed back</p>

        {/* Thank-you message after submission if a rating was selected */}
        {submited && getResponse() >= 0 ? (
          <p className="text-center text-success">
            Thank you for your response: {getResponse() + 1}
          </p>
        ) : (
          ""
        )}

        {/* Button to trigger modal visibility */}
        <button
          type="button"
          className="btn btn-primary feedback-button"
          onClick={displayBox}
        >
          Give Feedback
        </button>
      </div>

      {/* Feedback modal (conditionally rendered based on isVisible) */}
      {isVisible && (
        <div className="rounded shadow hidden-box " data-bs-dismiss="modal">
          {/* Close button for modal */}
          <p className=" btn-close" onClick={displayBox}>
            x
          </p>

          {/* Question prompt */}
          <p className="feedback-quiz">
            How likely are you to recommend frontendPro to someone you know?
          </p>

          {/* Rating buttons (1–10), highlight active selection */}
          <div className="buttons-pane ">
            {buttons.map((button, index) => (
              <button
                key={button}
                className={`btn select-btn ${
                  selectedIndex === index ? "active btn-info" : "btn-dark"
                }`}
                onClick={() => setSelected(index)}
              >
                {button}
              </button>
            ))}
          </div>

          {/* Rating scale text */}
          <div className="d-flex ">
            <p className="range-text">Not likely at all</p>
            <p className="range-text text-end">Extremely likely</p>
          </div>

          {/* Cancel and Submit buttons */}
          <div>
            <button
              className="btn btn-outline-danger cancel-button"
              onClick={displayBox}
            >
              cancel
            </button>
            <button
              className="btn btn-outline-light submit-button"
              onClick={() => {
                displayBox();
                submiting();
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}

      {/* Static panel showing challenge requirements (for reference) */}
      <div className="test-panel rounded shadow">
        <h3>Challenge Requirements</h3>
        <p>
          The Feedback Modal Component should be triggered by a button, and it
          should appear as a modal overlay on top of the current page.
        </p>
        <p>
          The modal should include a rating scale that allows users to rate a
          product on a scale of 1 to 10.
        </p>
        <p>
          Users should be able to select a rating by clicking on a number in the
          scale.
        </p>
        <p>The modal should close when the user submits their feedback.</p>
        <p>
          The modal should get closed by clicking on a “Cancel” button or by
          clicking outside of the modal
        </p>
        <p>Show the hover state of all the elements.</p>
        <p>
          The component should be responsive and display correctly on different
          screen sizes.
        </p>
        <p>Make this landing page look as close to the design as possible.</p>
      </div>
    </div>
  );
};

export default Index;
