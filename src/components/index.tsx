// Import CSS styles for component UI
import "./index.css";

// Import useState and useEffect hooks from React
import { useEffect, useState } from "react";


// Main component
const Index = () => {
  /**
   * State to store the selected rating index (default from localStorage if exists).
   * We use lazy initialization with a function so it only runs once on mount.
   */
  const [selectedIndex, setSelected] = useState(() => {
    const saved = localStorage.getItem("feedbackRating");
    return saved !== null ? parseInt(saved) : -1;
  });

  // State to control visibility of the feedback modal
  const [isVisible, setVisible] = useState(false);

  // State to track whether feedback has been submitted
  const [submited, submit] = useState(false);

  // Array of rating numbers (1 to 10)
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Function to toggle the visibility of the feedback modal
  const displayBox = () => {
    setVisible(!isVisible);
  };

  // Function to handle submission of feedback
  const submiting = () => {
    submit(true); // set submission state to true

    // Save selected rating index to localStorage (if a valid rating was selected)
    if (selectedIndex >= 0) {
      localStorage.setItem("feedbackRating", selectedIndex);
    }
  };

  // Function to return the selected rating index
  const getResponse = () => selectedIndex;

  return (
    <div className="body">
      {/* Feedback Box UI */}
      <div className="parent-box shadow rounded">
        <h1 className="text-center">Feedback Modal Component</h1>
        <p className="text-center">We would like to receive your feedback</p>

        {/* Show thank-you message only if feedback is submitted and a rating was selected */}
        {submited && getResponse() >= 0 ? (
          <p className="text-center text-success">
            Thank you for your response: {getResponse() + 1}
          </p>
        ) : (
          ""
        )}

        {/* Button to open feedback modal */}
        <button
          type="button"
          className="btn btn-primary feedback-button"
          onClick={displayBox}
        >
          Give Feedback
        </button>
      </div>

      {/* Feedback Modal: shown only when isVisible is true */}
      {isVisible && (
        <div className="rounded shadow hidden-box" data-bs-dismiss="modal">
          {/* Modal close button */}
          <p className="btn-close" onClick={displayBox}>
            x
          </p>

          {/* Question prompt */}
          <p className="feedback-quiz">
            How likely are you to recommend frontendPro to someone you know?
          </p>

          {/* Display rating buttons from 1 to 10 */}
          <div className="buttons-pane">
            {buttons.map((button, index) => (
              <button
                key={button}
                className={`btn select-btn ${
                  selectedIndex === index ? "active btn-info" : "btn-dark"
                }`}
                onClick={() => setSelected(index)} // Set selected index on click
              >
                {button}
              </button>
            ))}
          </div>

          {/* Scale explanation (left and right labels) */}
          <div className="d-flex">
            <p className="range-text">Not likely at all</p>
            <p className="range-text text-end">Extremely likely</p>
          </div>

          {/* Modal action buttons: cancel and submit */}
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
                displayBox(); // Close modal
                submiting();  // Handle submission logic
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}

      {/* Challenge Instructions Panel (static content) */}
      <div className="test-panel rounded shadow">
        <h3>Challenge Requirements</h3>
        <p>The Feedback Modal Component should be triggered by a button, and it should appear as a modal overlay on top of the current page.</p>
        <p>The modal should include a rating scale that allows users to rate a product on a scale of 1 to 10.</p>
        <p>Users should be able to select a rating by clicking on a number in the scale.</p>
        <p>The modal should close when the user submits their feedback.</p>
        <p>The modal should get closed by clicking on a “Cancel” button or by clicking outside of the modal</p>
        <p>Show the hover state of all the elements.</p>
        <p>The component should be responsive and display correctly on different screen sizes.</p>
        <p>Make this landing page look as close to the design as possible.</p>
      </div>
    </div>
  );
};

export default Index;
