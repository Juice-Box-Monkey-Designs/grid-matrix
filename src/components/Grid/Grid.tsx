import React from "react";
import { GridProps } from "../../types";
import "./Grid.css"

const Grid: React.FC<GridProps> = ({ alignment, sections }) => {
  return (
    <div className={`grid-container ${alignment}`}>
      {sections && sections.map((section, index) => (
        <div
          key={index}
          className={`grid-item ${section.align}`}
          style={{ flexBasis: `${section.cover}%`, flexGrow: 0, flexShrink: 0, height: '100%' }}
        >
          {section.content}
          {section.subSection && (
            <Grid alignment={alignment} sections={section.subSection} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;