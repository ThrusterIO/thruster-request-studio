import * as React from "react";
import AceEditor from "react-ace";
import { Tabs, Tab, Navbar, Alignment, Button } from "@blueprintjs/core";
import { connect } from "react-redux";
import { mainActions, mainSelectors } from "../../redux/modules/main";

import brace from "brace";
import 'brace/ext/searchbox';
import "brace/mode/json";
import "brace/theme/github";

const httpStatusToIntent = (status) => {
  switch (true) {
    case (status >= 200 && status < 300):
      return 'success';
    case (status >= 300 && status < 400):
      return 'primary';
    case (status >= 400 && status < 500):
      return 'warning';
    case (status >= 500):
      return 'danger';
    default:
      return '';
  }
};

class ResponseEditor extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {this.editor.editor.resize()});
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={node => {
        this.a = node;
      }}>
        <Navbar className={"responseTabs"}>
          {this.props.httpClient.response !== null &&
          (
            <Navbar.Group>
            <Button icon="globe-network" intent={httpStatusToIntent(this.props.httpClient.response.status)} text={`${this.props.httpClient.response.status} ${this.props.httpClient.response.status_phrase}`} minimal={true} disabled={true}/>
            <Button icon="time" text={this.props.httpClient.response.app_time}minimal={true} disabled={true}/>
            <Button icon="history" text="10ms" minimal={this.props.httpClient.response.time} disabled={true}/>
            <Button icon="box" text={this.props.httpClient.response.size} minimal={true} disabled={true}/>
          </Navbar.Group>
          )}
          <Navbar.Group align={Alignment.RIGHT}>
            {/* controlled mode & no panels (see h1 below): */}
            <Tabs
              animate={false}
              id="navbar"
              large={true}
              onChange={this.props.changeResponseTab}
              selectedTabId={this.props.responseEditor.selectedTab}
              defaultSelectedTabId="BodyTab"
            >
              <Tab id="BodyTab" title="Body"/>
              <Tab id="ResponseTab" title="Response Headers"/>
              <Tab id="RequestTab" title="Request"/>
            </Tabs>
          </Navbar.Group>
        </Navbar>
        <AceEditor
          ref={node => {
            this.editor = node;
          }}
          mode={this.props.responseEditor.mode}
          theme="github"
          // onChange={onChange}
          name="responseEditorSplit"
          height={"100%"}
          width={"100%"}
          value={this.props.responseEditor.content}
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  httpClient: state.main.httpClient,
  responseEditor: state.main.responseEditor,
});

export default connect(mapStateToProps, {
  changeResponseTab: mainActions.changeResponseTab,
})(ResponseEditor);
