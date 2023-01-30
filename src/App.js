import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState()

  const renderTab = () => {
    switch (currentTab) {
      case "Portfolio":
        return <Portfolio />;

      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;
    
      default:
        return <About />;
    }
  }
  const handleTabChange = (tab) => setCurrentTab(tab);
  
  return (
    <>
      <Header 
        currentTab = {currentTab}
        handleTabChange = {handleTabChange}
      >
      </Header>
      <main>
        {renderTab()}
      </main>
    </>
  );
}

export default App;
