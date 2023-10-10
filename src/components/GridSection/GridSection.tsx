import React, { useId } from "react";
import { GridSectionProps } from "../../types";
import "./GridSection.css"
import Grid from "../Grid";

/**
 * Child component used inside a Grid component
 * @param param
 * @returns 
 */
const GridSection: React.FC<GridSectionProps> = (props) => {
  let uniqueKey = useId();
  if (props.id) { uniqueKey = uniqueKey + props.id }
  return (
    <div
      key={uniqueKey}
      className={`grid-item ${props.align}`}
      style={{ flexBasis: `${props.cover}%`, flexGrow: 0, flexShrink: 0, height: '100%' }}
    >
      {props.content &&
        props.content
      }
      {props.subSection && (
        <Grid alignment={props.parentAlignment} sections={props.subSection} />
      )}
    </div>
  );
};

export default GridSection;