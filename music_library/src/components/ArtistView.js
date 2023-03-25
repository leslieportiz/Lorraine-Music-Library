import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

// import { useState, useEffect } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom'
// import NavigateBar from './NavigateBar'

// export default function ArtistView() {
//     const navigate = useNavigate()
//     const { id } = useParams()
//     const [artistData, setArtistData] = useState({})

//     const [artistAlbums, setArtistAlbums] = useState([])

//     // useEffect(() => {
//     //     const API_URL = 'http://localhost:4000/album/${id}'
//     //     const fetchData = async () => {
//     //         const response = await fetch(API_URL)
//     //         const resData = await response.json()
//     //         setArtistData(resData.results)
//     //     }
//     //     fetchData()
//     // }, [id])
//     useEffect(() => {
//         async function fetchData() {
//             const res = await fetch(`http://localhost:3000/album/${id}`)
//             const resData = await res.json()
//             if (resData.results.length > 0) {
//                 setArtistData(resData.results[0])
//                 setArtistAlbums(resData.results.filter(item => item.collectionType === 'Album'))
//             }
//         }
//         fetchData()
//     }, [id])

//     // const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

//     // const renderAlbums = justAlbums.map((album, i) => {
//     //     return (
//     //         <div key={i}>
//     //             <Link to={`/album/${album.collectionId}`}>
//     //                 <p>{album.collectionName}</p>
//     //             </Link>

//     //         </div>
//     //     )
//     // })

//     // return (
//     //     <div>
//     //         <h2>The id passed was: {id}</h2>
//     //         <p>Artist Data Goes Here!</p>
//     //         {renderAlbums}
//     //     </div>
//     // )

//     return <div>
//         <NavigateBar />
//         <h2>{artistData.artistName}</h2>
//         {
//             artistAlbums.map(album => {
//                 return <div key={album.collectionId}>
//                     <Link to={`/album/${album.collectionId}`}>
//                         <h3>{album.collectionName}</h3>
//                     </Link>
//                     <img src={album.artworkUrl100} />
//                 </div>
//             })
//         }
//     </div>
// }
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'

// function ArtistView() {
//     const { id } = useParams()
//     const [ artistData, setArtistData ] = useState([])

//     return (
//         <div>
//             <h2>The id passed was: {id}</h2>
//             <p>Artist Data Goes Here!</p>
//         </div>
//     )
// }

export default ArtistView