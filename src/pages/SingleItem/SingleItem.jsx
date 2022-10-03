import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { GoLocation } from "react-icons/go";
import moment from "moment";

const SingleItem = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="single-item-container">
      {data.images &&
        data.images
          .filter((item) => item.id == id)
          .map((item) => {
            var createdAt = moment(item.created_at).subtract(10, "days").calendar();
            var updatedAt = moment(item.updated_at).startOf("hour").fromNow();
            var promotedAt = moment(item.promoted_at).subtract(1, "days").calendar();
            return (
              <div className="single-item">
                <div className="left-content">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${item.urls.regular})` }}
                  ></div>
                  <div className="image-stats">
                    <div className="likes">
                      <span>Likes </span>
                      <h2>{item.likes}</h2>
                    </div>
                    <div className="views">
                      <span>Views </span>
                      <h2>{item.views}</h2>
                    </div>
                    <div className="downloads">
                      <span>Downloads </span>
                      <h2>{item.downloads}</h2>
                    </div>
                  </div>
                </div>
                <div className="right-content">
                  <div className="main-user-info">
                    <div
                      className="user-image"
                      style={{ backgroundImage: `url(${item.user.profile_image.large})` }}
                    ></div>
                    <div className="user-name">
                      <h1>{item.user.name}</h1>
                      <p>@{item.user.username}</p>
                    </div>
                  </div>
                  <div className="user-stats">
                    <div className="likes">
                      <p>Likes</p>
                      <h1>{item.user.total_likes}</h1>
                    </div>
                    <div className="photos">
                      <p>Photos </p>
                      <h1>{item.user.total_photos}</h1>
                    </div>
                    <div className="collections">
                      <p>Collections </p>
                      <h1>{item.user.total_collections}</h1>
                    </div>
                  </div>
                  <div className="other-user-info">
                    <span>{item.user.bio}</span>
                    {item.user.location && (
                      <div className="user-location">
                        <span>{item.user.location}</span>
                        <GoLocation color="red" size={30} />
                      </div>
                    )}
                    {item.description && (
                      <div className="description">
                        <p>{item.description}</p>
                      </div>
                    )}

                    <div className="dates">
                      <span>Created At: {createdAt}</span>
                      <span>Updated: {updatedAt}</span>
                      <span>Promoted: {promotedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default SingleItem;
