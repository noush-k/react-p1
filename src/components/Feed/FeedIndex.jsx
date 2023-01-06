import "./feed.css";

export default function Feed() {
    return(
        <div className="feed">
            <div className="feedWrapper">
            <div class="post-container">
          <div class="user-profile">
            <button class="acc">
              <a
                href="https://www.facebook.com/profile.php?id=100075959371130"
                target="_blank"
              >
                <img
                  src="./images/pfp-noush.png"
                  class="user"
                />
              </a>
            </button>
            <div>
              <p class="name">Anoushka Kondaskar</p>
              <h5>December 23 2022</h5>
            </div>
          </div>
          <p class="post-text">
            Maybe it's easier than than you think #dailymotivation #quotes
          </p>
          <img
            src="./images/Hello Big Idea _ Brand + Marketing Agency.png"
            class="pic"
          />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <button class="like">
                  <img src="./images/like.png" alt="" />
                </button>
                <div class="likeNum">218</div>
              </div>
              <div><img src="./images/comments.png" alt="" />82</div>
              <div><img src="./images/share.png" alt="" />56</div>
            </div>
          </div>
        </div>

        <div class="post-container">
          <div class="user-profile">
            <button class="acc">
              <a href="https://www.facebook.com/adarsh.warrier" target="_blank">
                <img src="./images/adarsh-pfp.jpg" class="user" />
              </a>
            </button>
            <div>
              <p class="name">Adarsh Warrier</p>
              <h5>December 17 2022</h5>
            </div>
          </div>
          <p class="post-text">
            Maybe it's easier than than you think #dailymotivation #quotes
          </p>
          <img src="./images/download.jpg" class="pic" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <button class="like">
                  <img src="./images/like.png" alt="" />
                </button>
                <div class="likeNum">80</div>
              </div>
              <div><img src="./images/comments.png" alt="" />43</div>
              <div><img src="./images/share.png" alt="" />12</div>
            </div>
          </div>
        </div>

        <div class="post-container">
          <div class="user-profile">
            <button class="acc">
              <a
                href="https://www.facebook.com/profile.php?id=100075959371130"
                target="_blank"
              >
                <img
                  src="./images/beach photooo noushhh.png"
                  class="user"
                />
              </a>
            </button>
            <div>
              <p class="name">Anoushka Kondaskar</p>
              <h5>December 9 2022</h5>
            </div>
          </div>
          <p class="post-text">
            Maybe it's easier than than you think #dailymotivation #quotes
          </p>
          <img
            src="./images/What if it all goes right_ Colourful typography design @caramillsdesign.jpg"
            class="pic"
          />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <button class="like">
                  <img src="./images/like.png" />
                </button>
                <div class="likeNum">50</div>
              </div>
              <div><img src="./images/comments.png" />13</div>
              <div><img src="./images/share.png" />6</div>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}