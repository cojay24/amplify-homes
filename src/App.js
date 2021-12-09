import './App.css';
import { NewHomes, NavBar, MarketingFooter, Features2x2 } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <NewHomes isPaginated itemsPerPage={3} />
      <Features2x2 />
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
