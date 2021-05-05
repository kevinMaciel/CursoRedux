import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch( {
    // call an api
    type: 'error',
    payload: { message: "An error occurred."}
});
