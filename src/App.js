import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [Keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  /**
   * ReactJS에서 제공하는 useEffect function을 사용하면
   * 코드를 개발자가 의도한 때에만 re-render 할 수 있게 한다.
   * 어떤 동작에 의해 re-render가 발생해도 useEffect()를 한 것은 처음 한번만 실행
   * useEffect는 2개의 argument를 가지는데,
   * argument 1. 개발자가 실행하고 싶은 코드 (effect)
   * argument 2. 특정 state에 변화가 있을때는 argument1에 넣은 코드를 실행할 수 있게 해주는 역할
   *             - dependencies 라고 부르는데, react.js가 지켜봐야 하는 것들이고, 이게 변화하면
   *             - react.js가 effect를 실행시킨다.
   */
  useEffect(() => {
    console.log("only once");
  }, []);
  useEffect(() => {
    console.log("keyword changed");
  }, [Keyword]);
  useEffect(() => {
    console.log("counter changed");
  }, [counter]);
  useEffect(() => {
    console.log("keyword & couter changes");
  }, [Keyword, counter]);
  return (
    <div>
      <input
        value={Keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
