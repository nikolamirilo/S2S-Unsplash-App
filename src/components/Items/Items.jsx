import React from "react";
import Card from "../Card/Card";
import { Grid, GridItem } from "react-masonry-grid";
import data from "../../data.json";

const Items = (props) => {
  return (
    <div className="items">
      {props.type === "similar-images" && <h1>Similar Images</h1>}
      <Grid gutter={10} columnWidth={350} rowHeight={10}>
        {props.type === "similar-images" &&
          data.images &&
          data.images
            .filter((item, idx) => props.type === "similar-images" && item.id !== props.currentId)
            .map((item, idx) => {
              return (
                <GridItem key={idx}>
                  <Card image={item.urls.small} id={item.id} type="single-item-page" />
                </GridItem>
              );
            })}

        {props.type === "all-images" &&
          data.images &&
          data.images.map((item, idx) => {
            return (
              <GridItem key={idx}>
                <Card image={item.urls.small} id={item.id} type="home-page" />
              </GridItem>
            );
          })}
      </Grid>
    </div>
  );
};

export default Items;

//!Not Live Version
//import useFetch from "./../../hooks/useFetch";
// const { data = [], loading, error } = useFetch(process.env.REACT_APP_UNSPLASH_API_KEY);
// console.log(data);
// if (loading) return <h1>Loading...</h1>;
// if (error) return <h1>Error</h1>;
// return (
//   <div className="items">
//     <Grid gutter={10} columnWidth={350} rowHeight={10}>
//       {Array.isArray(data)
//         ? data.map((item, idx) => {
//             return (
//               <GridItem key={idx}>
//                 <Card image={item.urls.small} id={item.id} />
//               </GridItem>
//             );
//           })
//         : null}
//     </Grid>
//   </div>
// );
