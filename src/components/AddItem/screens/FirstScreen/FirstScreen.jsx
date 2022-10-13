import React from "react";

const FirstScreen = (props) => {
  return (
    <div className="first-screen">
      <h2>Enter user information</h2>
      <form>
        <label htmlFor="#first-name">Enter your first name:</label>
        <input type="text" id="first-name" value={props.firstName} onChange={props.handleFirstNameChange} />
        <label htmlFor="#last-name">Enter your last name:</label>
        <input type="text" id="last-name" value={props.lastName} onChange={props.handleLastNameChange} />
        <label htmlFor="#email">Enter your email:</label>
        <input type="email" id="email" value={props.email} onChange={props.handleEmailChange} />
        <label htmlFor="#username">Enter your username:</label>
        <input type="text" id="username" value={props.username} onChange={props.handleUsernameChange} />
        <label htmlFor="#phone-number">Enter your phone number:</label>
        <input type="text" id="phone-number" value={props.phoneNumber} onChange={props.handlePhoneNumberChange} />
      </form>
      <button className="next-btn" onClick={props.handleButtonClick}>
        Next
      </button>
    </div>
  );
};

export default FirstScreen;
