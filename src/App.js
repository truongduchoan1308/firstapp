import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="wraper">
          <div class="left-box">
            <img class="img-avt" src="1999.jpg"></img>
            <p class="hello">Hello</p>
            <p class="name">My name is ...</p>
          </div>
          <div class="right-box">
            <p class="text-right-one">Introducing Yourseft Self</p>
            <p class="text-right-two"> Introduction with Text Boxes</p>
            <div class="gachngang"></div>
            <div class="boxes">
              <div class="box1">
                <p class="title">TextHere 01</p>
                <p class="content">There slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
              </div>
              <div class="box1">
                <p class="title">TextHere 03</p>
                <p class="content">There slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
              </div>
              <div class="box1">
                <p class="title">TextHere 02</p>
                <p class="content">There slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
              </div>
              <div class="box1">
                <p class="title">TextHere 04</p>
                <p class="content">There slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
