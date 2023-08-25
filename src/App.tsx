import React from 'react';
import { DescriptionBox, HeaderText, UserInput } from "./components";

const App = () => (
  <div className={"flex justify-center items-center text-center"}>
    <div className={"w-full"}>
      <HeaderText />
      <DescriptionBox />
      <UserInput />
    </div>
  </div>
);

export default App;
