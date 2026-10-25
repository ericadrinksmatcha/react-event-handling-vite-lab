// Renders the submit button. Logs when the mouse enters or leaves it.
function SubmitButton() {
  function handleEnter() {
    console.log("Mouse Entering");
  }

  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;