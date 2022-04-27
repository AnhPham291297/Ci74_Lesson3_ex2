import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/input/Input";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="form">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email Address" />
          <Input label="Number phone" />
          <Button title="Submit" />
          <Button title="Contact us" />
        </div>
      </div>
    </div>
  );
}

export default App;
