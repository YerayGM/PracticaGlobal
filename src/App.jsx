import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AgentsList from './components/AgentsList';
import BundlesList from './components/BundlesList';
import CompetitiveTiers from './components/CompetitiveTiers';
import Search from './components/Search';
import AgentDetails from './components/AgentDetails';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<AgentsList />} />
          <Route path="/bundles" element={<BundlesList />} />
          <Route path="/competitive-tiers" element={<CompetitiveTiers />} />
          <Route path="/search" element={<Search />} />
          <Route path="/agent/:uuid" element={<AgentDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;