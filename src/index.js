import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
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