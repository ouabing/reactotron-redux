import { StoreEnhancer } from "redux";
import { Reactotron } from "reactotron-core-client";
import { PluginConfig } from "./pluginConfig";
declare function reactotronRedux(pluginConfig?: PluginConfig): (reactotron: Reactotron) => {
    onCommand: ({ type, payload }: {
        type: string;
        payload?: any;
    }) => void;
    features: {
        createEnhancer: (skipSettingStore?: boolean) => (createStore: any) => (reducer: any, ...args: any[]) => any;
        setReduxStore: (store: any) => void;
        reportReduxAction: (action: {
            type: any;
            payload?: any;
        }, ms: number, important?: boolean) => void;
    };
};
export { reactotronRedux };
declare module "reactotron-core-client" {
    interface Reactotron {
        reduxStore?: any;
        /**
         * Enhancer creator
         */
        createEnhancer?: (skipSettingStore?: boolean) => StoreEnhancer;
        /**
         * Store setter
         */
        setReduxStore?: (store: any) => void;
    }
}
