import React from "react";
import { StackedGridProps } from "../../types/index.types";
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
    ...{
      display: 'grid',
      gridTemplateColumn: 'repeat(3, 1fr)',
      gridTemplateRow: 'repeat(3, 1fr)',
      placeItems: "start",
      width: "100%",
      height: "100%"
   },
  };
  return (
    // @ts-ignore
    <div style={combinedStyle}>
      {grids.map((grid, index) => (
        <div style={{ zIndex: grid.level, gridArea: `1 / 1 / 4 / 4`, width: "100%", height: "100%"}}>
         <Grid {...grid} id={index} />
        </div>
      ))}
    </div>
  )
}

/**
 * Helper component
 * @param param
 * @returns 
 */
const StackedGridContainmentComponent: React.FC<StackedGridProps> = (props: StackedGridProps) => {
  const containmentStyle = {
    ...{
      width: props.containment?.width,
      height: props.containment?.height
    },
  };
  return (
    // @ts-ignore
    <div style={containmentStyle}>
      <StackedGridComponent {...props} />
    </div>
  )
}




const StackedGrid = (props: StackedGridProps) => (
  props.containment ? <StackedGridContainmentComponent {...props} /> : <StackedGridComponent {...props} />
);

export default StackedGrid;