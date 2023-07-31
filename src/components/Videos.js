const Videos = () => {
    const videos = ["https://player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761",
                    "https://player.vimeo.com/external/363737105.sd.mp4?s=ed5d8790d07ac8b5a7641fe4d816b00c1e049935&profile_id=164&oauth2_token_id=57447761",
                    "https://player.vimeo.com/external/363737105.sd.mp4?s=ed5d8790d07ac8b5a7641fe4d816b00c1e049935&profile_id=164&oauth2_token_id=57447761"]
    return (
        <div className="video-grid">
            {
                videos.map(video => {
                    return (
                        <video controls>
                            <source src={video} />
                        </video>
                    )
                })
                
            }
        </div>
    );
    }
export default Videos;