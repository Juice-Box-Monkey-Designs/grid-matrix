import React from "react";
import { GridProps } from "../../types";
import "./Grid.css"
import GridSection from "../GridSection";

/**
 * Master component
 * @param param
 * @returns 
 */
const Grid: React.FC<GridProps> = ({ alignment, sections }) => {
  return (
    <div className={`grid-container ${alignment}`}>
      {sections && sections.map((section, index) => (
        GridSection({...section, parentAlignment: alignment, id: index})
      ))}
    </div>
  );
};

export default Grid;