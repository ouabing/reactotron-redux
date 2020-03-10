import { Reactotron } from "reactotron-core-client";

export default function createSendAction(reactotron: Reactotron) {
  return (action: { type: any, payload?: any }, ms: number, important = false) => {
    // let's call the type, name because that's "generic" name in Reactotron
    let { type: name, payload } = action
    let newAction = { ...action }
    if (payload) {
      let newPayload = {...payload}
      delete newPayload.realmData
      newAction.payload = newPayload
    }

    // convert from symbol to type if necessary
    if (typeof name === "symbol") {
      name = name
        .toString()
        .replace(/^Symbol\(/, "")
        .replace(/\)$/, "")
    }


    // off ya go!
    // reactotron.send("state.action.complete", { name, action, ms }, important)
    reactotron.send("state.action.complete", { name, action: newAction, ms }, important)
  }
}
