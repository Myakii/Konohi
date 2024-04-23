import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* Autres routes */}
        </Routes>
    </Router>
  );
}


export default App;