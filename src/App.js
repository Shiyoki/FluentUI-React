import './App.css';
//import for grid
import 'office-ui-fabric-core/dist/css/fabric.css'
import Navigation from './components/Navegation';
import CardsSection from './components/CardSection';
import OperationsTable from './components/OperationTable';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl2">
          <Navigation />
        </div>
        <div className="ms-Grid-col ms-sm10 ms-xl10 main-element">
        <div className="ms-Grid-row"> 
          <CardsSection />
        </div>
        <div className="ms-Grid-row"> 
          <OperationsTable />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
