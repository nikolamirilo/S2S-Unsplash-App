import React from "react";
import Card from "../Card/Card";
import { Grid, GridItem } from "react-masonry-grid";
import data from "../../data.json";

const Items = () => {
  return (
    <div className="items">
      <Grid gutter={10} columnWidth={350} rowHeight={10}>
        {data.images &&
          data.images.map((item, idx) => {
            return (
              <GridItem key={idx}>
                <Card image={item.urls.small} id={item.id} />
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
