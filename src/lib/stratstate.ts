import type { Stratagem } from "./strats";

import { setup } from "xstate";

const machine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "start" }
      | { type: "Wrong Input" }
      | { type: "Correct Input" }
      | { type: "Sequence Complete" },
  },
  schemas: {
    events: {
      start: {
        type: "object",
        properties: {},
      },
      "Wrong Input": {
        type: "object",
        properties: {},
      },
      "Correct Input": {
        type: "object",
        properties: {},
      },
      "Sequence Complete": {
        type: "object",
        properties: {},
      },
    },
  },
}).createMachine({
  context: {},
  id: "Strat Sequence",
  initial: "Not Started",
  states: {
    "Not Started": {
      on: {
        start: {
          target: "Accepting Input",
        },
      },
    },
    "Accepting Input": {
      on: {
        "Wrong Input": {
          target: "Incorrect",
        },
        "Sequence Complete": {
          target: "Correct",
        },
        "Correct Input": {
          target: "Accepting Input",
        },
      },
    },
    Incorrect: {
      after: {
        "1000": {
          target: "Not Started",
        },
      },
    },
    Correct: {
      after: {
        "1000": {
          target: "Not Started",
        },
      },
    },
  },
});

export function createStratMachine(strat: Stratagem) {
  const foo = machine.
}