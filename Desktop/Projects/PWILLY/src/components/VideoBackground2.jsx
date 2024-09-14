import { videoBg2 } from '../assets/images'; 

const VideoBackground2 = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" src={videoBg2} autoPlay loop muted playsInline />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground2;
