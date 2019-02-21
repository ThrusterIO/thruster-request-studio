import * as React from "react";
import AceEditor from "react-ace";
import brace from "brace";
import "brace/mode/json";
import "brace/theme/monokai";
import { connect } from "react-redux";
import { mainActions } from "../../redux/modules/main";

class RequestEditor extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.editor.editor.resize()
    });
  }

  render() {
    return (
      <AceEditor
        ref={node => {
          this.editor = node;
        }}
        mode="json"
        theme="monokai"
        // onChange={onChange}
        name="requestEditorSplit"
        height={"100%"}
        width={"100%"}
      />
    );
  }
}

const mapStateToProps = state => ({
  httpClient: state.main.httpClient,
  responseEditor: state.main.responseEditor,
});

export default connect(mapStateToProps, {
  changeResponseTab: mainActions.changeResponseTab,
})(RequestEditor);
