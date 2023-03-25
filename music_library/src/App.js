import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import { createResource as fetchData } from './helper'

function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    // let [data, setData] = useState([])
    let [data, setData] = useState(null)


    useEffect(() => {
        if (search) {
            setData(fetchData(search))
        }
    }, [search])

    //     useEffect(() => {
    //       const fetchData = async () => {
    //           document.title = `${search} Music`
    //           const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
    //           const resData = await response.json()
    //           if (resData.results.length > 0) {
    //               setData(resData.results)
    //           } else {
    //               setMessage('Not Found')
    //           }
    //       }
    //       fetchData()
    //   }, [search])
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    const renderGallery = () => {
        if (data) {
            return (
                <Suspense fallback={<Spinner/>}>
                    <Gallery data={data} />
                </Suspense>
            )
        }
    }

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}
            {renderGallery()}
        </div>
    )
    
    // return (
    //     <div className="App">
    //         <SearchBar handleSearch={handleSearch} />
    //         {message}
    //         <Suspense fallback={<h1>Loading...</h1>}>
    //             <Gallery data={data} />
    //         </Suspense>
    //     </div>
    // )

}

export default App

