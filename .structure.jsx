import React from "react";
import X from "./create-components/XPlaceholder";

export default (
  <X App>
    <X Toolbar />
    <X Editor>
      <X div="structure">
        <X AddStructureComponent="add" />
        <X add="list" />
      </X>
      <X div="logic" />
      <X div="props" />
    </X>
  </X>
);
