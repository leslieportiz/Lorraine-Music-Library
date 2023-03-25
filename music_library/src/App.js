import { useEffect, useState, Fragment, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
      async function fetchData() {
        if (search) {
          try {
            const res = await fetch(`https://itunes.apple.com/search?term=${search}`)
            const resData = await res.json()
            if (resData.results.length > 0) {
              setData(resData.results)
              setMessage('Search for more Music!!!')
            } else {
              
            }
          } catch (err) {
            console.log(err)
            setMessage("Oopsie, that's not a valid search ...")
          }
        }
      }
      fetchData()
    }, [search])
  
    return <main>
      <p>{message}</p>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <SearchBar setSearch={setSearch} />
              <Gallery data={data} />
            </>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
    </main>
  }
//     const API_URL = 'https://itunes.apple.com/search?term='

//     useEffect(() => {
//         if (search) {
//             const fetchData = async () => {
//                 document.title = `${search} Music`
//                 const response = await fetch(API_URL + search)
//                 const resData = await response.json()
//                 if (resData.results.length > 0) {
//                     return setData(resData.results)
//                 } else {
//                     return setMessage('Not Found')
//                 }
//             }
//             fetchData()
//         }
//     }, [search])

//     const handleSearch = (e, term) => {
//         e.preventDefault()
//         setSearch(term)
//     }

//     return (
//         <div>
//             {message}
//             <Router>
//                 <Routes>
//                     <Route path="/" element={
//                         <Fragment>
//                             <SearchBar handleSearch={handleSearch} />
//                             <Gallery data={data} />
//                         </Fragment>
//                     } />
//                     <Route path="/album/:id" element={<AlbumView />} />
//                     <Route path="/artist/:id" element={<ArtistView />} />
//                 </Routes>
//             </Router>
//         </div>
//     )

// }

export default App;

