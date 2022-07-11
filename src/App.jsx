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

  // PAGINATION---------->

  const [page, setPage] = useState(1)

  const residentNumbers = 6
  const lastIndex = residentNumbers * page
  const firstIndex = lastIndex-residentNumbers
  const residentsPagination = location?.residents.slice(firstIndex, lastIndex)

  const lastPage = Math.ceil(location?.residents.length / residentNumbers)

  const pageNumbers = []
  for(let i=1; i<=lastPage; i++){
    pageNumbers.push(i)
  }

  return (
    <div className="App">
      <div className='banner'>
        <img src={banner} alt="" />
        <SearchBar setSearch={setSearch}/>
      </div>
      <div className='container-location'>
        <LocationCard location={location}/>
      </div>
     <div className='container-residents'>
       {
         residentsPagination?.map(resident=> (
          <ResidentInfo resident={resident} key={resident}/>
          ))
       }
     </div>
     <button onClick={()=> setPage(page-1)} disabled={page===1}
     >Prev</button>
     {
      pageNumbers.map(number=> (
        <button onClick={()=> setPage(number)}>{number}</button>
      ))
     }
     <button onClick={()=> setPage(page+1)} disabled={page===lastPage}
     >Next</button>
    </div>
  );
}

export default App;
