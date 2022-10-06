import './App.css';
import FunctionalComponent from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1 className='head1'>Styling using Functional and Class Component</h1>
       
      <FunctionalComponent/>
      <ClassComponent/>
  
    </div>
  );
}

export default App;
