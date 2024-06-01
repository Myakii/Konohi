import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Faire_part from './pages/Faire_part';
import Photos from './pages/Photos';
import Organisation from './pages/Organisation';
import Livre_or from './pages/Livre_or';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/faire-part" element={<Faire_part />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/livre-or" element={<Livre_or />} />
          {/* Autres routes */}
        </Routes>
    </Router>
  );
}


export default App;