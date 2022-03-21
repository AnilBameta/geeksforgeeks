import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div>
      <TopHeader />
      <ResponsiveAppBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
