import { RiPauseFill, RiPlayFill } from '@remixicon/react'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

const Cta = () => {
  const playerRef = useRef(null)
  const [isPlaying,setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev)
  }
  return (
    <section className='py-20'>
        <div className="container h-[600px] flex justify-center relative bg-white group overflow-hidden rounded-lg">
            {/* React video player */}
            <div>
              <ReactPlayer
                ref={playerRef}
                url='/images/Cta-video.mp4'
                playing={isPlaying}
                loop
                muted
                playsinline
                width="100%"
                height="100%"
              />
            </div>

            {/* play/pause button */}
            <button className={`absolute inset-0 m-auto bg-neutral-50/90 w-[60px] h-[60px] flex items-center rounded-full justify-center shadow-lg ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} onClick={handlePlayPause}>
              {isPlaying ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
            </button>

        </div>
    </section>
  )
}

export default Cta