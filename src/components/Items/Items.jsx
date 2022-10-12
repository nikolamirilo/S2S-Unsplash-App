import React from "react";
import Card from "../Card/Card";
import { Grid, GridItem } from "react-masonry-grid";
import { useGlobalState } from "../../context/GlobalContext";
import { useImagesContext } from "../../context/ImagesContext";

const Items = (props) => {
  const { itemsSection } = useGlobalState();
  const { images } = useImagesContext();
  return (
    <div className="items" ref={itemsSection}>
      {props.type === "all-images" && (
        <>
          <h2>
            <i>Beautiful, free images and photos that you can download and use for any project</i>
          </h2>
          <h2>
            <i>Better than any royalty free or stock photos!</i>
          </h2>
        </>
      )}

      {props.type === "similar-images" && <h1>Similar Images</h1>}
      <Grid gutter={10} columnWidth={350} rowHeight={10}>
        {props.type === "similar-images" &&
          images &&
          images
            .filter((item, idx) => props.type === "similar-images" && item.id !== props.currentId)
            .map((item, idx) => {
              return (
                <GridItem key={idx}>
                  <Card image={item.urls.small} id={item.id} type={props.type} />
                </GridItem>
              );
            })}

        {props.type === "all-images" &&
          images &&
          images.map((item, idx) => {
            return (
              <GridItem key={idx}>
                <Card image={item.urls.small} id={item.id} type={props.type} />
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
//import { useGlobalState } from './../../context/GlobalContext';
//import { useImagesContext } from './../../context/ImagesContext';
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
