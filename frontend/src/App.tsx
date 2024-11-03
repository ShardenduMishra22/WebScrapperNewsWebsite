import { Routes, Route } from 'react-router-dom';
import SelectNews from './components/SelectNews';
import Home from './components/Home';

export default function App() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SelectedNews" element={<SelectNews />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
  );
}