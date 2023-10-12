import React from "react";
import { GridProps } from "../../types";
import "./Grid.css"
import GridSection from "../GridSection";
import { BreakpointProvider, useBreakpoint } from "./../../breakpoint";

/**
 * Master component
 * @param param
 * @returns 
 */
const GridComponent: React.FC<GridProps> = ({
  alignment,
  sections,
  xsSection,
  smSection,
  mdSection,
  lgSection,
  xlSection,
  xxlSection,
  xxxlSection,
}: GridProps) => {

  const breakpoint = useBreakpoint();
  let currentSections = sections;
  console.log("breakpoint: ", breakpoint);

  switch (breakpoint) {
    case 'xs':
      if (xsSection) currentSections = xsSection;
      break;
    case 'sm':
      if (smSection) currentSections = smSection;
      break;
    case 'md':
      if (mdSection) currentSections = mdSection;
      break;
    case 'lg':
      if (lgSection) currentSections = lgSection;
      break;
    case 'xl':
      if (xlSection) currentSections = xlSection;
      break;
    case 'xxl':
      if (xxlSection) currentSections = xxlSection;
      break;
    case 'xxxl':
      if (xxxlSection) currentSections = xxxlSection;
      break;
    default:
      currentSections = sections;
      break;
  }

  return (
    <div className={`grid-container ${alignment}`}>
      {currentSections && currentSections.map((section, index) => (
        <GridSection {...section} parentAlignment={alignment} id={index} />
      ))}
    </div>
  );
};

const Grid = (props: GridProps) => (
  <BreakpointProvider>
    <GridComponent {...props} />
  </BreakpointProvider>
);

export default Grid;
