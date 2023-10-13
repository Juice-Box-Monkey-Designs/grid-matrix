import React, { useId } from "react";
import { Display, GridSectionProps } from "../../types";
import "./GridSection.css"
import Grid from "../Grid";
import { useBreakpoint } from "../../breakpoint";

/**
 * Child component used inside a Grid component
 * @param param
 * @returns 
 */
const GridSection: React.FC<GridSectionProps> = (props) => {
  let uniqueKey = useId();
  if (props.id) { uniqueKey = uniqueKey + props.id }
  const breakpoint = useBreakpoint();
  let display: Display | undefined = "default";

  switch (breakpoint) {
    case "xs":
      display = props.xsSectionDisplay || "default";
      break;
    case "sm":
      display = props.smSectionDisplay || "default";
      break;
    case "md":
      display = props.mdSectionDisplay || "default";
      break;
    case "lg":
      display = props.lgSectionDisplay || "default";
      break;
    case "xl":
      display = props.xlSectionDisplay || "default";
      break;
    case "xxl":
      display = props.xxlSectionDisplay || "default";
      break;
    case "xxxl":
      display = props.xxxlSectionDisplay || "default";
      break;
    default:
      display = "default";
      break;
  }
  if (display === "hide") return null;

  return (
    <div
      key={uniqueKey}
      className={`grid-item ${props.align}`}
      style={{ flexBasis: `${props.cover}%`, flexGrow: 0, flexShrink: 0, height: "100%" }}
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
