import { useState, useEffect } from 'react'
import './App.css'
import LocationCard from './components/LocationCard'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'
import SearchBar from './components/SearchBar'
import banner from './assets/images/banner.svg'

function App() {

  const [count, setCount] = useState()
  const [location, setLocation] = useState()
  const [search, setSearch] = useState()

  const URL = 'https://rickandmortyapi.com/api/location'

  useEffect(()=> {
    axios
    .get(URL)
    .then(res => setCount(res.data.info.count))
    .catch(e => console.log(e))
  },[])

  const randomLocation = limit => Math.floor(Math.random() * limit + 1)

  useEffect(()=> {
    const randomNumber = randomLocation(count)
    if(count && !search){
      axios
      .get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
    } 
    if(search){
      axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
    }
  },[count, search])

  console.log(location);

  return (
    <div className="App">
      <div className='banner'>
        <img src={banner} alt="" />
      </div>
      <div className='container-location'>
        <LocationCard location={location}/>
      </div>
      <div className='container-search'>
        <SearchBar setSearch={setSearch}/>
      </div>
     <div className='container-residents'>
       {
         location?.residents.map(resident=> (
          <ResidentInfo resident={resident} key={resident}/>
          ))
       }
     </div>
    </div>
  );
}

export default App;
