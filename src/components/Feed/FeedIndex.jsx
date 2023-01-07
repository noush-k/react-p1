import "./feed.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import pfp1 from "../../images/adarsh-pfp.jpg";
import pfp2 from "../../images/pfp-noush.png";
import pfp3 from "../../images/taylor-pfp.jpg";
import pic1 from "../../images/post1.png";
import pic2 from "../../images/post2.jpg";
import pic3 from "../../images/post3.jpg";
import likes from "../../images/like.png";
import b_likes from "../../images/like-blue.png";
import comment from "../../images/comments.png";
import share from "../../images/share.png";
import { useState } from "react";

let data = [
    {
        id: 1,
        username: "Anoushka Kondaskar",
        userImg: pfp2,
        postImg: pic1,
        acc_url: "https://www.facebook.com/profile.php?id=100075959371130",
        postText: "Maybe it's easier than than you think #dailymotivation #quotes",
        likes: 218,
        comments: 82,
        shares: 56,
        liked: false
    },
    {
        id: 2,
        username: "Adarsh Warrier",

        userImg: pfp1,
        postImg: pic2,
        acc_url: "https://www.facebook.com/adarsh.warrier",
        postText: "Maybe it's easier than you think #dailymotivation #quotes",
        likes: 80,
        comments: 43,
        shares: 12,
        liked: false
    },
    {
        id: 3,
        username: "Taylor Swift",
        userImg: pfp3,
        postImg: pic3,
        acc_url: "https://www.facebook.com/TaylorSwift",
        postText: "Maybe it's easier than than you think #dailymotivation #quotes",
        likes: 148,
        comments: 64,
        shares: 33,
        liked: false
    }
];

export default function Feed() {
    const [posts,setPosts] = useState([...data]);


    const fetchData = () => {
        setTimeout(() => {
            setPosts([...posts,...data]);
        }, 1500);
    }

    const handleLike = (index) => {
        const data = [...posts];

        data[index].liked = !data[index].liked;

        if(data[index].liked) {
            data[index].likes += 1;

        }
        else {
            data[index].likes -= 1;
        }

        setPosts(data);
    }

  return (
    <div className="feed">
      <div className="feedWrapper">
      <InfiniteScroll
  dataLength={posts.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }

>
        {posts.map((d,index) => (
            <div key={index} className="post-container">
            <div className="user-profile">
              <button className="acc">
                <a href={d.acc_url} target="_blank">
                  <img src={d.userImg} className="user" />
                </a>
              </button>
              <div>
                <p className="name">{d.username}</p>
                <h5>December 27 2022</h5>
              </div>
            </div>
            <p className="post-text">
              {d.postText}
            </p>
            <img src={d.postImg} className="pic" />
            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <button className="like-button" onClick={() => handleLike(index)}>
                    <img src={d.liked ? b_likes : likes} alt="" />
                  </button>
                  <div className="likeNum">{d.likes}</div>
                </div>
                <div>
                  <img src={comment} alt="" />
                  {d.comments}
                </div>
                <div>
                  <img src={share} alt="" />
                  {d.shares}
                </div>
              </div>
            </div>
          </div>
            ))}

        </InfiniteScroll>

        
      </div>
    </div>
  );
}

