import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Cards';


function App() {
  return (
    <div className="App">

      <Card lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} />
      <Card lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"} />
      <Card lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"} />
      <Card lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;