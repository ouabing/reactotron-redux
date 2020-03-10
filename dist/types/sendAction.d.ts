import { Reactotron } from "reactotron-core-client";
export default function createSendAction(reactotron: Reactotron): (action: {
    type: any;
    payload?: any;
}, ms: number, important?: boolean) => void;
