import Video from "./Video";
import logVideo from "../assets/logo-vid.mp4";

export const BannerVideo = () => {
  return (
    <div className="bg-video border border-primary ">
        <Video src={logVideo} />
    </div>
  )
}
