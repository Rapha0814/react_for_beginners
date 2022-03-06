import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log("bye");
  }
  function effectFn() {
    console.log("created ");
    return destroyedFn;
  }
  useEffect(
    // useEffect에서 return 으로 함수를 만들어주면
    // component가 destroy 될때 동작한다.
    // return () => console.log("destroyed");
    effectFn,
    []
  );
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
