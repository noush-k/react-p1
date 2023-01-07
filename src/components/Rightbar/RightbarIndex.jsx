import "./rightbar.css";
import a1 from "../../images/H&M-Logo.png";
import a2 from "../../images/Amazon_logo.png";
import a3 from "../../images/Binance-Logo.png";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="right-sidebar">
          <h6 className="sponsored">Sponsored</h6>
          <a href="https://www2.hm.com/en_in/index.html" target="_blank">
            <img src={a1} className="ad1" alt="AD 1" />
          </a>
          <a href="https://www.amazon.in/" target="_blank">
            <img src={a2} className="ad2" alt="AD 2" />
          </a>
          <a href="https://accounts.binance.com/en/register?ref=554191597&gclid=CjwKCAiAqt-dBhBcEiwATw-ggD5ojb0ESaZFwFjRdCFHYYhez4GJY3hr2F9-QUXZCHKLA3N3cmdsMxoC2hgQAvD_BwE" target="_blank">
            <img src={a3} className="ad3" alt="AD 3" />
          </a>
        </div>
      </div>
    </div>
  );
}
