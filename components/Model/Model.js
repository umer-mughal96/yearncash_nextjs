import React from "react";
import SkyLight from "react-skylight";

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
          <button className="btn custom-btn rounded-btn" onClick={() => this.simpleDialog.show()}>Download</button>
        {process.browser && (
          <SkyLight className="SkyLight-text"
            hideOnOverlayClicked
            ref={(ref) => (this.simpleDialog = ref)}
            title="coming soon"
          >
          </SkyLight>
        )}
      </>
    );
  }
}

export default Model;
