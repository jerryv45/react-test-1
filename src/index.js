import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'

const Buttons = () => {
  return (
    <>
      <div class="center">
        <button class="button-1">Content 1</button>
        <button class="button-2">Content 2</button>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <p>This was made in React</p>
      <p>I'm the first content btw</p>
    </>
  );
}

const SumnElse = () => {
  return (
    <>
      <div class="uh">Hello, I'm the second content</div>
    </>
  )
}



function Page() {
  return (
    <>
      <Buttons/>
      <Header/>
      <SumnElse/>
    </>
  )
}


ReactDOM.render(<Page />, document.getElementById("root"));