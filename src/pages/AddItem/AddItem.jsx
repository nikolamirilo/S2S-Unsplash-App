import React, { useState, useReducer } from "react";
import { FirstScreen, SecondScreen } from "../../components/AddItem";

const AddItem = () => {
  const [isClicked, setIsClicked] = useState({ first: true, second: false });
  const initialPostState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    description: "",
    hashtags: "",
    location: "",
    date: "",
    image: "",
  };
  const [post, setPost] = useReducer(
    (post, updates) => ({
      ...post,
      ...updates,
    }),
    initialPostState
  );
  return (
    <div className="add-item">
      <div className="add-item-content">
        {isClicked.first ? (
          <FirstScreen
            firstName={post.firstName}
            handleFirstNameChange={(e) => {
              setPost({ firstName: e.target.value });
            }}
            lastName={post.lastName}
            handleLastNameChange={(e) => {
              setPost({ lastName: e.target.value });
            }}
            email={post.email}
            handleEmailChange={(e) => {
              setPost({ email: e.target.value });
            }}
            username={post.username}
            handleUsernameChange={(e) => {
              setPost({ username: e.target.value });
            }}
            phoneNumber={post.phoneNumber}
            handlePhoneNumberChange={(e) => {
              setPost({ phoneNumber: e.target.value });
            }}
            handleButtonClick={() => {
              setIsClicked({ second: true });
            }}
          />
        ) : (
          <SecondScreen
            description={post.description}
            handleDescriptionChange={(e) => {
              setPost({ description: e.target.value });
            }}
            hashtags={post.hashtags}
            handleHashtagsChange={(e) => {
              setPost({ hashtags: e.target.value });
            }}
            location={post.location}
            handleLocationChange={(e) => {
              setPost({ location: e.target.value });
            }}
            date={post.date}
            handleDateChange={(e) => {
              setPost({ date: e.target.value });
            }}
            image={post.image}
            handleImageChange={(e) => {
              setPost({ image: e.target.value });
            }}
            handleBackButtonClick={() => {
              setIsClicked({ first: true });
            }}
            handleButtonClick={() => {
              console.log(post);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AddItem;
