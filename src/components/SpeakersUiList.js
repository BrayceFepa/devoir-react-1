import React from "react";
import SpeakerUi from "./SpeakerUi";

function SpeakersUiList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', flexFlow: 'wrap' }}>
      <SpeakerUi
        img="./images/gery.jpg"
        name="Regis Atemengue"
        details="Developpeur Fullstack JAvascript"
        user="Regis"
        home="Yaoundé"
        twit="@regis"
      />

      <SpeakerUi
        img="./images/herve.jpg"
        name="Herve"
        details="Developpeur Fullstack "
        user="Hever"
        home="Yaoundé"
        twit="@hever"
      />

      <SpeakerUi
        img="./images/speaker-1124.jpg"
        name="Gery"
        details="Developpeur Backend"
        user="Gery"
        home="Yaoundé"
        twit="@gery"
      />

      <SpeakerUi
        img="./images/speaker-5443.jpg"
        name="Speaker-4"
        details="Developpeur Frontend"
        user="Speaker4"
        home="Yaoundé"
        twit="@speaker4"
      />

      <SpeakerUi
        img="./images/speaker-1269.jpg"
        name="Speaker-5"
        details="Developpeur"
        user="Speaker-5"
        home="Yaoundé"
        twit="@Speaker-5"
      />

      <SpeakerUi
        img="./images/speaker-10801.jpg"
        name="Designer"
        details="UI/UX Design"
        user="Designer"
        home="Yaoundé"
        twit="@gery"
      />
    </div>
  );
}

export default SpeakersUiList;
