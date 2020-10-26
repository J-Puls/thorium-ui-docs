/* React */
import React from "react";
/* Thorium-UI */
import { useCustomStyles } from "thorium-ui";

export const PageSection = (props) => {
  const cs = useCustomStyles();
  return (
    <div id={props.id} className="page-section" style={cs.pageSection}>
      {props.children}
    </div>
  );
};

export default PageSection;
