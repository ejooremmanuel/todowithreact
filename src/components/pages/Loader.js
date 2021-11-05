import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const PageLoader = () => (
  <div style={{ height: "100vh" }}>
    <Dimmer active inverted>
      <Loader size="large">Please wait...</Loader>
    </Dimmer>
  </div>
);

export default PageLoader;
