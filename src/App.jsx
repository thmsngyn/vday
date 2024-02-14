import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hearts from "./components/Hearts";
import SparklingPigCursor from "./components/SparklingPig";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Fireworks from "./components/Fireworks";

const Steps = {
  Hello: 0,
  WillYouBeMyValentine: 1,
  Boo: 2,
  ThankYou: 3,
  ChooseSnack: 4,
  ChooseBestPair: 5,
  ChooseArtist: 6,
  Goodbye: 7,
};

const Flow = [
  Steps.Hello,
  Steps.WillYouBeMyValentine,
  [Steps.Boo, Steps.ThankYou],
  Steps.ChooseSnack,
  Steps.ChooseBestPair,
  Steps.ChooseArtist,
  Steps.Goodbye,
];

const artistMap = {
  tyler: {
    yt: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TSsFB241BHs?si=J9tGvoow6SQL6ENo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  taylor: {
    yt: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/b1kbLwvqugk?si=2W-4jNy2vvszbAxB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  gracie: {
    yt: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_rKPotMhXGA?si=uKYbF0e9XBM97lM_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  jennie: {
    yt: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZgLlabyz7oY?si=QlNyp_FJteqb1GuX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
};

const Carousel = ({
  step,
  setStep,
  accepted,
  setAccepted,
  candy,
  setCandy,
  pair,
  setPair,
  artist,
  setArtist,
}) => {
  const pairSize = 120;
  const pairMap = {
    meyers: {
      text: "introspective INFP type 4",
      gif: (
        <iframe
          src="https://giphy.com/embed/Xg9qVfblOUg5oMBS1v"
          width="480"
          height="262"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      ),
    },
    sleepers: {
      text: "sensitive sleepy moomin",
      gif: (
        <iframe
          src="https://giphy.com/embed/1037XzaGpW6xMc"
          width="480"
          height="324"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      ),
    },
    elements: {
      text: "fiery steel type",
      gif: (
        <iframe
          src="https://giphy.com/embed/IeKpg7M6wu7W8"
          width="400"
          height="350"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      ),
    },
  };
  switch (step) {
    case Steps.Hello:
      return (
        <div className="flex-col">
          <div className="full-viewport">
            <div className="x">
              <iframe
                src="https://giphy.com/embed/4NetxFvQ2mq8Zy9VWn"
                width="250"
                height="200"
                frameBorder="0"
                className="y"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <iframe
            src="https://giphy.com/embed/LYRSRTWa9oD8fdvV4C"
            width="480"
            height="418"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <div>❤️‍🔥 I hope ur having a wonderful day boo ❤️‍🔥</div>
          <div>I have a question for you...</div>
        </div>
      );
    case Steps.WillYouBeMyValentine:
      return (
        <div className="flex-col">
          <Hearts />
          <iframe
            src="https://giphy.com/embed/9sk9UWcjx6Xzq"
            width="480"
            height="269"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <div>Will you be my valentine? 🥹💘</div>
          <div>
            <RadioGroup
              value={
                accepted === undefined ? undefined : accepted ? "true" : "false"
              }
              onChange={(value) => setAccepted(value === "true" ? true : false)}
              horizontal
            >
              <RadioButton value={"true"}>Yes</RadioButton>
              <RadioButton value={"false"}>No</RadioButton>
            </RadioGroup>
          </div>
        </div>
      );
    case Steps.Boo:
      return (
        <div>
          <iframe
            src="https://giphy.com/embed/7WqqX7NMfWGHe"
            width="480"
            height="352"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <div className="flex-col">Boo!! Sorry an error occurred... 🤖🤷🏻</div>
        </div>
      );
    case Steps.ThankYou:
      return (
        <div className="flex-col">
          <Fireworks />
          <div>🍬 Awwwwww, thank you for choosing me, ur so sweet! 🍬</div>
          <iframe
            src="https://giphy.com/embed/pVGge0JWyYQjiQfPAL"
            width="480"
            height="480"
            frameBorder="0"
          ></iframe>
          <div>...but dont leave yet :)</div>
        </div>
      );
    case Steps.ChooseSnack:
      return (
        <div>
          <div>Choose a snackie</div>
          <RadioGroup
            value={candy === undefined ? undefined : candy}
            onChange={(value) => setCandy(value)}
            horizontal
          >
            <RadioButton value={"sweedish fish"}>
              <img src={require("./assets/fish.jpeg")}></img>
            </RadioButton>
            <RadioButton value={"sour patch kids"}>
              <img src={require("./assets/sourpatch.jpeg")}></img>
            </RadioButton>
          </RadioGroup>
        </div>
      );

    case Steps.ChooseBestPair:
      return (
        <div className="flex-col">
          <div>
            Yummmy choice, I would've chosen{" "}
            <span style={{ color: "yellow" }}>{candy}</span> too 😋
          </div>
          {candy === "sweedish fish" ? (
            <iframe
              src="https://giphy.com/embed/vvKstGSPKTdd8tX7uy"
              width="480"
              height="320"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              src="https://giphy.com/embed/l4FGr3nzq5u0m02vm"
              width="356"
              height="300"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          )}

          <div>Now, choose the best pair</div>
          <RadioGroup
            value={pair === undefined ? undefined : pair}
            onChange={(value) => setPair(value)}
            horizontal
          >
            <RadioButton value={"meyers"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/meyers.jpg")}
              ></img>
            </RadioButton>
            <RadioButton value={"sleepers"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/sleepers.jpg")}
              ></img>
            </RadioButton>
            <RadioButton value={"elements"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/elements.png")}
              ></img>
            </RadioButton>
          </RadioGroup>
        </div>
      );
    case Steps.ChooseArtist:
      return (
        <div className="flex-col">
          <div>
            ✨ Ur my one and only{" "}
            <span style={{ color: "aqua" }}>{pairMap[pair].text}</span> 😊
          </div>
          {pairMap[pair].gif}
          <div>And choose ur fave artist</div>
          <RadioGroup
            value={artist === undefined ? undefined : artist}
            onChange={(value) => setArtist(value)}
            horizontal
          >
            <RadioButton value={"tyler"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/tyler.png")}
              ></img>
            </RadioButton>
            <RadioButton value={"taylor"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/taylor.jpeg")}
              ></img>
            </RadioButton>
            <RadioButton value={"gracie"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/gracie.png")}
              ></img>
            </RadioButton>
            <RadioButton value={"jennie"}>
              <img
                width={pairSize}
                height={pairSize}
                src={require("./assets/jennie.png")}
              ></img>
            </RadioButton>
          </RadioGroup>
        </div>
      );

    case Steps.Goodbye:
      return (
        <div className="flex-col">
          <Hearts />
          <div>Goodbye, here's a sweet song for a sweet ting.</div>
          {artistMap[artist].yt}
        </div>
      );
    default:
      return <div>default</div>;
  }
};

function App() {
  const [step, setStep] = useState(Steps.Hello);
  const [accepted, setAccepted] = useState(undefined);
  const [candy, setCandy] = useState(undefined);
  const [pair, setPair] = useState(undefined);
  const [artist, setArtist] = useState(undefined);

  const props = {
    step,
    setStep,
    accepted,
    setAccepted,
    candy,
    setCandy,
    pair,
    setPair,
    artist,
    setArtist,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;

    console.log({ value, e });
    let curStep = Flow.findIndex((s) => s === step);
    if (curStep < 0) {
      curStep = 2;
    }
    const nextIndex = curStep + parseInt(value);
    const nextStep =
      nextIndex === 2 ? Flow[nextIndex][accepted ? 1 : 0] : Flow[nextIndex];
    setStep(nextStep);
  };

  return (
    <div className="App">
      <SparklingPigCursor />
      <Carousel {...props} />
      {step === Steps.Boo && (
        <form className="nav-cta">
          <button value={-1} onClick={handleSubmit} className="button-49">
            Try again
          </button>
        </form>
      )}
      {step !== Steps.Boo && (
        <form className="nav-cta">
          {step > 0 && (
            <button
              value={-1}
              className="button-55 prev-btn"
              onClick={handleSubmit}
            >
              {"prev"}
            </button>
          )}
          <button
            value={1}
            className="button-55 next-btn"
            disabled={
              step >= Flow.length ||
              (step === Steps.WillYouBeMyValentine && accepted === undefined) ||
              (step === Steps.ChooseSnack && candy === undefined) ||
              (step === Steps.ChooseBestPair && pair === undefined) ||
              (step === Steps.ChooseArtist && artist === undefined)
            }
            onClick={handleSubmit}
          >
            {step < Flow.length ? "next" : "the end"}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
