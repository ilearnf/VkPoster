import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "./mainReducer";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}


export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        process.env.NODE_ENV !== "production" && window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
    )
);
