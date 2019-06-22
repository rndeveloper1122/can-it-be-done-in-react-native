import React from "react";

import LoadAssets from "./components/LoadAssets";
import Tabs, { ITabs } from "./components/Tabs";

const tabs: ITabs = [
  { id: "screen1", screen: require("./assets/screens/screen1.jpg") },
  { id: "screen2", screen: require("./assets/screens/screen2.jpg") },
  { id: "screen3", screen: require("./assets/screens/screen3.jpg") },
  { id: "screen4", screen: require("./assets/screens/screen4.jpg") },
  { id: "screen5", screen: require("./assets/screens/screen5.jpg") }
];

export default () => (
  <LoadAssets assets={tabs.map(({ screen }) => screen)}>
    <Tabs {...{ tabs }} />
  </LoadAssets>
);
