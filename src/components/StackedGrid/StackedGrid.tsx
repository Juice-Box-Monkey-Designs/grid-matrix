import React from "react";
import { StackedGridProps } from "../../types";
// import "./StackedGrid.css"
import Grid from "../Grid";

/**
 * Helper component
 * @param param
 * @returns 
 */
const StackedGridComponent: React.FC<StackedGridProps> = ({
  grids,
}: StackedGridProps) => {
  const combinedStyle = {
    ...{ position: "absolute" }
  };
  return (
    // @ts-ignore
    <div style={combinedStyle}>
      {grids.map((grid, index) => (
        <Grid {...grid} id={index} style={{...grid.style, position: 'absolute'}} />
      ))}
    </div>
  )
}

const StackedGrid = (props: StackedGridProps) => (
  <StackedGridComponent {...props} />
);

export default StackedGrid;