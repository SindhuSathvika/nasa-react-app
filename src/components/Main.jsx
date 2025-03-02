export default function Main(props){
    const {data} =props
    return (
        <div className="imgContainer">
            {data.media_type === "image" ? (
                <img src={data.hdurl || data.url} alt={data.title || "bg-image"} className="bgImage" />
            ) : data.media_type === "video" ? (
                <div>
                <p>
                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                    Watch the video here
                    </a>
                </p>
                </div>
            ) : (
                <p>Sorry, content is unavailable or unsupported.</p>
            )}
        </div>
    )
}