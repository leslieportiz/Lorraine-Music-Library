// import GalleryItem from './GalleryItem'

// function Gallery({data}){
//     const songs = data.filter((result) => result.kind === "song")
//     return (
//         <div className='gallery'>
//             {songs.map((song)=> <GalleryItem song={song} key={song.trackId} />)}
            
//         </div>
//     )
// }

// export default Gallery

import GalleryItem from './GalleryItem'

export default function Gallery(props) {
    return <div className="gallery">
        {
            props.data.map((item, i) => {
                return <GalleryItem key={`track ${i}`} data={item} />
            })
        }
    </div>
}