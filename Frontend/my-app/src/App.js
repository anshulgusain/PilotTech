import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
