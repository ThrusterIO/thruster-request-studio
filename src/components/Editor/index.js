import * as React from "react";
import Split from "react-split";
import RequestEditor from "./RequestEditor";
import ResponseEditor from "./ResponseEditor";
import "./index.scss";

const Editor = props => (
  <Split sizes={[35, 65]} className={"editors"} gutterSize={5}>
    <div className={"editor"}>
      <RequestEditor/>
    </div>
    <div className={"editor"}>
      <ResponseEditor/>
    </div>
  </Split>
);

export default Editor;
