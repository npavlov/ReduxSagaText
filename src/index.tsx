import * as React from "react";
import { render } from "react-dom";
import configureStore from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { loadImages } from "./AC";

import "./styles.css";

const store = configureStore();

const TestComp = () => {
  const dispatch = useDispatch();

  const imgs = useSelector((x: any) => x.images);

  const loading = useSelector((x: any) => x.isLoading);

  console.log(loading);

  React.useEffect(() => {
    dispatch(loadImages());
  }, []);

  const arrs = imgs.map(x => {
    return <img src={x} alt="pic" style={{ height: "200px" }} key={x} />;
  });

  return (
    <div>
      Hello world
      {arrs}
      <div>isLoading? {loading.toString()}</div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <TestComp />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
