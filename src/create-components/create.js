import React from "react";

// import fs from "fs";
// import structure from "../.structure.json";

// function convertElement(entry) {
//   if (typeof entry === 'string') {
//     if (entry.substr[0] === '@') {
//       return [`<${entry.substr(1)} />`];
//     } else if (entry.substr[0] === '.') {
//       return {}
//     }
//   }
// }

function extractOutcomes(node, components, isRoot = false) {
  if (Array.isArray(node)) {
    return node.reduce((accOutcomes, iNode) => {
      return extractOutcomes(iNode, accOutcomes);
    }, components);
  }
  // if (isRoot) {
  //   if (node.props.App && node.props.children) {
  //     return extractOutcomes(node.props.children, components);
  //   } else if (node.type === React.Fragment) {
  //     return extractOutcomes(node.props.children, components)
  //   }
  // }
  // Look for specific props

  const xProps = Object.keys(node.props);
  const nodeName = xProps[0];
  debugger;
  if (nodeName[0] === nodeName[0].toLowerCase()) {
    // lower case means normal HTML ele
    // It's a Component:
  } else if (nodeName[0] === nodeName[0].toUpperCase()) {
    // has been defined, but has children
    if (components[nodeName] && node.props.children) {
      throw Error(`An implementation of ${nodeName} has already been declared`);
      // has been defined, but no children
    } else if (components[nodeName] && !node.props.children) {
      // just referencing it
      return components;

      // This is definition
    } else if (node.props.children) {
      const openTag = `<${nodeName}${
        node.props[nodeName] !== true
          ? ` className={css['${node.props[nodeName]}']}`
          : ""
      }>`;
      const outcomes = extractOutcomes();
      components[nodeName] = {
        openTag,
        children: [],
        closeTag: `</ ${nodeName}>`
      };
    }
  }
  // components[]
  console.log(xProps);

  return {
    components
  };
}

export default async function() {
  const XApp = (await import("../.structure.jsx")).default;
  console.log(XApp);

  const outcomes = extractOutcomes(XApp, {}, true);

  console.log(outcomes);
  // debugger;
  // if (!XApp.props.App) throw new Error("App must be ");
  // const structure = fs.readFileSync("../.structure.json");
  // console.log(structure);

  // structure['App'].reduce(
  //   (acc, entry, _s) => {
  //     if (typeof entry === 'string') {
  //       if (entry.substr(0, 1) === '@') {
  //         acc[entry] = {}
  //       } else if (entry.substr())
  //     }
  //     acc.
  //   },
  //   {
  //     App: []
  //   }
  // )
}
