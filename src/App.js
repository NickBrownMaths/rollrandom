import { useState, useEffect } from 'react';

import { TABLES } from './backend/randomTables';

import NavBar from './controls/NavBar';
import NavButton from './controls/NavButton';

function App() {

  const [currentPage, setCurrentPage] = useState('Fungi');
  const [currentItem, setCurrentItem] = useState('');
  const [currentItemText, setCurrentItemText] = useState('');
  const [rerollMessage, setRerollMessage] = useState(null);


  const buttons = [];
  for (let table in TABLES) {
    buttons.push([() => setCurrentPage(table), table]);
  }


  useEffect(() => {
    if (rerollMessage !== null) {
      let keys = Object.keys(TABLES[currentPage]);
      let rand = keys[Math.floor(Math.random() * keys.length)];
      setCurrentItem(rand);
      setCurrentItemText(TABLES[currentPage][rand]);
    }
    if (rerollMessage !== null) { setRerollMessage(null); }
  }, [rerollMessage]);


  return (
    <>
      <br />
      <NavBar buttons={buttons} buttonSize='small' currentPage={currentPage} />
      <br /><br />
      <NavButton buttonSize='large' text={'Roll on the ' + currentPage.toLowerCase() + ' table'} onClick={() => { setRerollMessage(1) }} />
      <br /><br />
      <div className='heading'>{currentItem}</div>
      <br /><br />
      <div className='bodyText'>{currentItemText}</div>


    </>
  );
}

export default App;
