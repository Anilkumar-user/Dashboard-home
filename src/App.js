import './chartConfig'; // Ensure Chart.js is registered
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import { SidebarProvider } from './components/Sidebar/SidebarContext';
import Order from './components/Order';
import Settings from './components/Settings';

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;






