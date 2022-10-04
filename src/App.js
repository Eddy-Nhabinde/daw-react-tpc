import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { SearchComponent } from './components/searchBar/SearchBar';
import { MainPage } from './components/pages/mainPage.js/mainPage';

function removeElement(op) {
  if (op) {
    document.getElementById("ip1").style.marginLeft = "2px"
    document.getElementById("logo").style.display = "block"
    document.getElementById("ip2").style.border = "none"
    document.getElementById("ip2").style.borderRight = "solid 2px rgba(0, 0, 0, 0.078)"
    document.getElementById("ip2").style.borderRadius = "0px"
    document.getElementById("ip1").style.border = "none"
    document.getElementById("ip1").style.borderRight = "solid 2px rgba(0, 0, 0, 0.078)"
    document.getElementById("ip1").style.borderRadius = "0px"
  } else {
    document.getElementById("logo").style.display = "none"
  }
}


function App() {

  const [maxWid, setMaxWid] = useState(false)
  const [Location, setLocation] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <SearchComponent
        setSearch={setSearch}
        maxWid={maxWid}
        setMaxWid={setMaxWid}
        Location={Location}
        setLocation={setLocation}
        removeElement={removeElement}
      />
      {maxWid ? <div className="separator"></div> : ""}
      <MainPage
        search={search}
        setLocation={setLocation}
        setMaxWid={setMaxWid}
        removeElement={removeElement}
      />
    </div>
  );
}
export default App;
