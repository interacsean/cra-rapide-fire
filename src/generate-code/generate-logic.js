import assert from "assert";

const LineGenerators = {
  state: def =>
    `const [ ${def.varName}, ${
      def.setVarName
    } ] = React.useState(${JSON.stringify(def.defaultVal)});`,

  callback: def => {
    const nl = !def.inline ? "\n" : "";
    const nlOrSp = !def.inline ? "\n" : " ";
    const tt = !def.inline ? "  " : "";
    return (
      `const ${def.varName} = React.useCallback(${nl}` +
      `${tt}() => {},${nlOrSp}` +
      `${tt}[${(def.dependencies || []).join(", ")}]${
        def.inline ? "" : ","
      }${nl}` +
      `);`
    );
  }
};
const retUndef = _ => undefined;

function getLine(def) {
  return (LineGenerators[def.type] || retUndef)(def);
}

function generateLogic(logicData) {
  const init = {
    imports: [],
    logic: []
  };
  const generated = logicData.logic.reduce((accLogic, lineDef) => {
    accLogic.logic.push(getLine(lineDef));
    return accLogic;
  }, init);

  return {
    imports: [].join("\n"),
    logic: generated.logic.join("\n")
  };
}

const dummyData = {
  logic: [
    {
      type: "state",
      varName: "myStateVar",
      setVarName: "setMyStateVar",
      varType: "string",
      defaultVal: false
    },
    {
      type: "callback",
      varName: "myCallback",
      inline: true,
      dependencies: ["setMyStateVar"]
    }
    // { type: "reducer" } ...memoized, effectOnMount, effectOnUnmount, effectOnUpdate
  ]
  // props: (

  // )[]
};

const dummyLogic = generateLogic(dummyData);

// assert.deepStrictEqual(dummyLogic, {
//   imports: "",
//   logic: `const [ myStateVar, setMyStateVar ] = React.useState(false);
// const myCallback = React.useCallback(() => {}, [setMyStateVar]);`
// });

// * State, basic
((testName = "State basic") => {
  const actual = getLine({
    type: "state",
    varName: "myStateVar",
    setVarName: "setMyStateVar",
    varType: "string",
    defaultVal: false
  });
  const expected = `const [ myStateVar, setMyStateVar ] = React.useState(false);`;

  try {
    assert.equal(actual, expected, testName);
  } catch (e) {
    console.warn(actual, "Did not match", expected);
  }
})();

// * Callback, basic
((testName = "Callback basic") => {
  const actual = getLine({
    type: "callback",
    varName: "myCallback",
    inline: true,
    dependencies: ["setMyStateVar"]
  });
  const expected = `const myCallback = React.useCallback(() => {}, [setMyStateVar]);`;

  try {
    assert.equal(actual, expected, testName);
  } catch (e) {
    console.warn(actual, "Did not match", expected);
  }
})();

// * Callback, basic
((testName = "Callback multiline") => {
  const actual = getLine({
    type: "callback",
    varName: "myCallback",
    inline: false,
    dependencies: ["myStateVar", "setMyStateVar"]
  });
  const expected = `const myCallback = React.useCallback(
  () => {},
  [myStateVar, setMyStateVar],
);`;

  try {
    assert.equal(actual, expected, testName);
  } catch (e) {
    console.warn(actual, "Did not match", expected);
  }
})();
