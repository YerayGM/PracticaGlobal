import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AgentsList from './components/AgentsList';
import BundlesList from './components/BundlesList';
import CompetitiveTiers from './components/CompetitiveTiers';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AgentsList />} />
          <Route path="/bundles" element={<BundlesList />} />
          <Route path="/competitive-tiers" element={<CompetitiveTiers />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;