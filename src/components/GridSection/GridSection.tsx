import React, { useId } from "react";
import { Display, GridSectionProps, xAlignValue, yAlignValue } from "../../types/index.types";
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

  /**
   * Alignment Support is part of 3
   */
  let xAlign: xAlignValue | undefined = "left";
  let yAlign: yAlignValue | undefined = "top";

  if (props.align) {
    if (props.align.includes("-")) {
      const splitAlign = props.align.split("-");
      xAlign = splitAlign[0] as xAlignValue;
      yAlign = splitAlign[1] as yAlignValue;
    } else {
      xAlign = 'center';
      yAlign = props.align as yAlignValue;
    }
  }

  if (props.yAlign && props.yAlign != 'align') {
    yAlign = props.yAlign
  }

  if (props.xAlign && props.xAlign != 'align') {
    xAlign = props.xAlign;
  }


  return (
    <div
      key={uniqueKey}
      className={`grid-item ${"x-" + xAlign} ${"y-" + yAlign}`}
      style={{ flexBasis: `${props.cover}%`, flexGrow: 0, flexShrink: 0, height: "100%" }}
    >
      {props.content && !props?.innerGrid &&
        props.content
      }
      {props.subSection && (
        <Grid alignment={props.parentAlignment} sections={props.subSection} />
      )}
      {props.innerGrid && (
        <Grid {...props.innerGrid}  containment={{ height: "100%", width: "100%"}} />
      )}
    </div>
  );
};

export default GridSection;
