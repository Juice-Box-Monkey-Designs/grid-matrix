import React, { useId } from "react";
import { GridProps } from "../../types/index.types";
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
  className,
  style,
  transform,
  level,
  id,
}: GridProps) => {
  let uniqueKey = useId();
  if (id) { uniqueKey = uniqueKey + id }

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

  const combinedStyle = {
    ...style,
    ...(transform ? { transform } : {}),
    ...(level ? { zIndex: level } : {})
  };

  return (
    // @ts-ignore
    <div key={uniqueKey} className={`grid-container ${alignment} ${className}`} style={combinedStyle} >
      {currentSections && currentSections.map((section, index) => (
        <GridSection {...section} parentAlignment={alignment} id={index} />
      ))}
    </div>
  );
};

/**
 * Helper component
 * @param param
 * @returns 
 */
const GridContainmentComponent: React.FC<GridProps> = (props: GridProps) => {
  const containmentStyle = {
    ...{
      width: props.containment?.width,
      height: props.containment?.height
    },
  };
  return (
    // @ts-ignore
    <div style={containmentStyle}>
      <GridComponent {...props} />
    </div>
  )
}

const Grid = (props: GridProps) => (
  <BreakpointProvider>
    {props?.containment ?
      <GridContainmentComponent {...props} />
    :
      <GridComponent {...props} />
    }
  </BreakpointProvider>
);

export default Grid;
