import React from "react";
import { data } from "../data";
import SpeakerUi from "./SpeakerUi";

function SpeakersUiList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', flexFlow: 'wrap' }}>
      
      {data.map((speaker, id) => {
        return (
          <SpeakerUi key={id}
            {...speaker}
            // name={speaker.first + ' ' + speaker.last}
            // img={`./images/speaker-${speaker.id}.jpg`}
            // details={speaker.bio}
            // user={speaker.first}
            // home={speaker.company}
            // twit={'@' + speaker.twitterHandle}
            // session={speaker.sessions.length}
          />
        );
      })}
     
    </div>
  );
}

export default SpeakersUiList;
