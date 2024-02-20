import Video from "./Video";
import logVideo from "../assets/log-vid.mp4";

export const BannerVideo = () => {
  return (
    <>
    
    <div className="bg-video">
        <Video src={logVideo} />
    
    </div>
    
    </>
  )
}
