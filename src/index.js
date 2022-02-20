import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
const Header = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <p>This was made in React</p>
    </>
  );
}

const SumnElse = () => {
  return (
    <>
      <div class="uh">lorem something something
       this my first react app ay</div>
    </>
  )
}



function Page() {
  return (
    <>
      <Header/>
      <SumnElse/>
    </>
  )
}


ReactDOM.render(<Page />, document.getElementById("root"));