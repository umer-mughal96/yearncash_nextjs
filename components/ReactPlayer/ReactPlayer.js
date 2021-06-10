import React from 'react'
import ReactPlayer from 'react-player'

const ReactPlayerF = () => {
    return (
        <>
            {/* <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player> */}
            <ReactPlayer className="security-video" width={"100%"} loop={true} controls={false} playing={true} stopOnUnmount={false} url='assets/images/Security-Circuit-Board.mp4' />
        </>
    )
}

export default ReactPlayerF
