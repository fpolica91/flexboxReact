import React from "react";
import { render } from "react-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <header id="main-header">
        <div className="content">
          <nav>
            <ul id="list-icons">
              <li>
                {" "}
                <img
                  src=" https://cdn0.iconfinder.com/data/icons/thin-nature/24/thin-0808_bird_house_twitter-512.png"
                  alt="home"
                />
                {" Home"}
              </li>
              <li>
                {" "}
                <img
                  src="https://lh3.googleusercontent.com/proxy/BRAvHA0AOZ2yuk8HtjObUMJBwnsKlhZzLthSPFCbDhvwNU_ilutuhcFitMvCQ-n1HPtDCwBf6U_3K09Z8n8euVm2pz9_Ty-8eZuN0hbApYWfsz1fzIe-6jtFYcA4TO4LqmzESQzxNT7_EXkHhRFxTw"
                  alt="notifications"
                />
                {"Notifications "}
              </li>
              <li>
                {" "}
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/message+send+twitter+icon-1320196033637137992.png"
                  alt="messages"
                />
                {"Messages "}
              </li>
            </ul>
          </nav>
          <img
            src="https://lh3.googleusercontent.com/proxy/QLEivcJcfw-_GSdG-DsOwzwzvjXCl5OKqAmSc5rmDzPYJugSxHpH1kEvqbhD1oV8nM8EvCCTP1PElfwwkGhoSGPgCIPIhmw"
            alt="logo twitter"
            id="logo"
          />
          <div className="side">
            <input type="text" placeholder="search on twitter" />
            <img
              id="profile"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2173/95/Network_Social_Instagram_Internet_Twitter_Facebook_30-512.png"
              alt="profile"
            />
            <button> Tweet </button>
          </div>
        </div>
      </header>

      {/* bleu banner */}

      <div className="banner">
        <h1>
          Rocket Twitter <span role="img"> 🚀 </span>
        </h1>
      </div>

      {/* blue banner */}

      <div className="bar">
        <div className="content">
          <ul>
            <li className="active">
              <span> Tweets </span>
              <strong>1234 </strong>
            </li>

            <li>
              <span> Followings </span>
              <strong> 300 </strong>
            </li>

            <li>
              <span> Followers </span>
              <strong> 233 </strong>
            </li>

            <li>
              <span> Favorites </span>
              <strong> 98 </strong>
            </li>
          </ul>

          <div className="actions">
            <button>follow</button>
            <img alt="drop" />
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
