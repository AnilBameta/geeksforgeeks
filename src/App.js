import './App.css';
import Content from './components/Content';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div>
      <TopHeader />
      <ResponsiveAppBar />
      <Content />
    </div>
  );
}

export default App;
