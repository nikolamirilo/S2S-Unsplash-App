import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const SecondScreen = (props) => {
  return (
    <div className="second-screen">
      <h2>Enter user information</h2>
      <button className="back-btn" onClick={props.handleBackButtonClick}>
        <IoIosArrowBack size={30} color="#000" />
      </button>
      <form>
        <label htmlFor="#description">Enter photo description:</label>
        <input type="text" id="description" value={props.description} onChange={props.handleDescriptionChange} />
        <label htmlFor="#hashtags">Enter photo hashtags:</label>
        <input type="text" id="hashtags" value={props.hashtags} onChange={props.handleHashtagsChange} />
        <label htmlFor="#location">Enter photo location:</label>
        <input type="text" id="location" value={props.location} onChange={props.handleLocationChange} />
        <label htmlFor="#date">Enter photo date:</label>
        <input type="date" id="date" value={props.date} onChange={props.handleDateChange} />
        <label htmlFor="#image">Select image:</label>
        <input type="file" id="image" value={props.image} onChange={props.handleImageChange} />
      </form>
      <button className="submit-btn" onClick={props.handleButtonClick}>
        Submit
      </button>
    </div>
  );
};

export default SecondScreen;
