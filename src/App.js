import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div >
      <Sidebar/>
      
      <div className="container-fluid">
        <Content/>
      </div>
    </div>
  );
}

export default App;
