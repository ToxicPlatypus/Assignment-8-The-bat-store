import './App.css';
import Shop from './Components/Shop/Shop';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div>
      <h1 className='header'>My Bat Store</h1>
      <Shop></Shop>
      <Questions></Questions>
    </div> 
  );
}

export default App;
