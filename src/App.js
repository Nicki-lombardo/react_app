import { Card } from './components/Card/Card';
import { UserName } from './components/UserName/UserName';
import { Counter } from './components/Counter/Counter';




function App() {
  
  return (
    
    <div>
      <UserName name="Pink" lastname="BNNE" nickname="Project" />
      <UserName name="Nicky" lastname="Lombardo" nickname="Pink BNNE Project" />
      <Card />
      <Counter />
      </div>
    
  );
}



export default App;
