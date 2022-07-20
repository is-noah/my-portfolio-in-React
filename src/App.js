/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { _footerComponents } from './components/footerComponents';
import { _mySection } from './components/mySection';
import { _headerComponent } from './components/headerComponent';
import { _mySkillsComponents } from './components/mySkillsComponents';
function App() {
  return (
    
    <div className="App">
      <_headerComponent/>
      <_mySection/>
      <_mySkillsComponents/>
      <_footerComponents />
    </div>
  );
}

export default App;