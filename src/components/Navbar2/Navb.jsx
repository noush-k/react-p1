import "./navb.css";
import pfp from "../../images/pfp-noush.png";

export default function Navbars() {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">sosh.</div>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              className="bell-icon"
              viewBox="0 0 27 27"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="chat-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <form id="form">
            <input type="text" placeholder="Search Sosh..." />
          </form>
        </div>
        <div className="nav-user-icon online">
          <a
            href="https://www.facebook.com/profile.php?id=100075959371130"
            target="_blank"
          >
            <img src={pfp} width="70px" height="70px" alt="Profile Picture" />
          </a>
        </div>
      </div>
    </nav>
  );
}
