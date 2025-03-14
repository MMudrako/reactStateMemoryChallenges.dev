export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  // my solution:
  let counter = 0;
  queue.map((item) => {
    if (typeof item === "function") {
      if (counter > 0) {
        baseState = 0;
        let n = baseState;
        baseState = item(n);
        finalState += baseState;
      } else {
        let n = baseState;
        baseState = item(n);
        finalState += baseState;
      }
    } else {
      baseState = 0;
      finalState = baseState + item;
    }
    counter++;
  });

  // tutorial solution:
  /* for (let update of queue) {
    if (typeof update === "function") {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  } */
  return finalState;
}
