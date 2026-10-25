// Renders a password <input>. Logs when the user is typing.
function PasswordInput() {
  // Runs on every change event (each keystroke)
  function handleChange() {
    console.log("Entering password...");
  }

  return <input type="password" onChange={handleChange} />;
}

export default PasswordInput;