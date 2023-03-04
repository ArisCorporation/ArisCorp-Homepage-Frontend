import { CaptionControl, ClickToPlay, ControlGroup, Controls, ControlSpacer, DefaultControls, DefaultUi, FullscreenControl, IconLibrary, MuteControl, PipControl, PlaybackControl, Player, Scrim, ScrubberControl, SettingsControl, Spinner, TimeProgress, Ui, Video, VolumeControl, Youtube } from "@vime/react"
import '@vime/core/themes/default.css';
// import { useEffect, useState } from "react";

// const loadImage = (setImageDimensions, thumbnailUrl) => {
//   const img = new Image();
//   img.src = thumbnailUrl;

//   img.onload = () => {
//     setImageDimensions({
//       height: img.height,
//       width: img.width
//     });
//   };
//   img.onerror = (err) => {
//     console.log("img error");
//     console.error(err);
//   };
// };

const VideoPlayer = ({ video, thumbnail, videoId }) => (
  <div className="overflow-hidden rounded-2xl">
    <Player>
      <Youtube videoId={videoId} />
      {/* <Video crossOrigin="" poster={'https://cms.ariscorp.de/assets/' + thumbnail.id}>
        <source
          data-src={'https://cms.ariscorp.de/assets/' + video.id}
          type="video/mp4"
        />
      </Video> */}

      <Ui>
        <ClickToPlay useOnMobile />
        <Controls fullWidth hideOnMouseLeave hideWhenPaused="false">
          <ControlGroup>
            <ScrubberControl />
          </ControlGroup>

          <ControlGroup space="top">
            <PlaybackControl />
            <VolumeControl />
            <TimeProgress />

            <ControlSpacer />

            <CaptionControl />
            <PipControl />
            <FullscreenControl />
          </ControlGroup>
        </Controls>
      </Ui>
    </Player>
  </div>
)

export default VideoPlayer