import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import ProfileCard from './components/ProfileCard';
import AIPanel from './components/AIPanel';
import Avatar1 from './pics/adventurer-1731961900547.svg';
import Avatar2 from './pics/adventurer-1731961906649.svg';
import Avatar3 from './pics/adventurer-1731961910274.svg';

const users = [
  {
    id: 1,
    user: "Alice",
    job: "Software Engineer",
    avatar: Avatar1,
    bio: "Just another developer on the grind",
    followers: "320k",
    posts: 20,
    likes: 50,
    content: "Just posted a new blog!",
    timestamp: "2 hours ago",
    color: "yellow",
    images: [],
    commentsList: [
      { user: "John", text: "Nice post!"},
      { user: "Mary", text: "Totally agree!"},
    ],
  },
  {
    id: 2,
    user: "Bob",
    job: "Photographer",
    avatar: Avatar2,
    bio: "Travel enthusiast sharing moments.",
    followers: "1000",
    posts: 45,
    likes: 1,
    images: [],
    content: "Check out my latest travel photos.",
    timestamp: "5 hours ago",
    color: "purple",
    commentsList: [
      { user: "John", text: "Nice post!"},
      { user: "Mary", text: "Totally agree!"},
    ],
  },
  {
    id: 3,
    user: "John",
    job: "Unemployed",
    avatar: Avatar3,
    bio: "Hhahahahahasaa.",
    followers: 10210,
    posts: 323,
    likes: 2,
    images: [],
    content: "HahahhhsHSAS.",
    timestamp: "7 hours ago",
    color: "red",
    commentsList: [
      { user: "John", text: "Nice post!"},
      { user: "Mary", text: "Totally agree!"},
    ],
  }
];

function App() {

  const [posts, setPosts] = useState(users);
  const [selectedUser, setSelectedUser] = useState(users[2]);
  const [animatedPost, setAnimatedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  const handlePostAnimation = (newPost) => {
    setAnimatedPost({
      ...newPost,
      commentsList: newPost.commentsList || [], //Making sure commentsList is always initialized. 
    });
    setTimeout(() => {
      setPosts((prevPosts) => [
        { ...newPost, commentsList: newPost.commentsList || [] },
        ...prevPosts,
      ]);
      setAnimatedPost(null);
    }, 1000);
  };

  const handleUpdatedPosts = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  const likesCounter = (postId) => {   
    setPosts((prevPosts) => 
      prevPosts.map((post) => {
        if(post.id === postId) {
          const isLiked = likedPosts.includes(postId);
          return {
            ...post,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
          }
        }    
        return post;
      })
    )

    setLikedPosts((prevLikedPosts) => 
      prevLikedPosts.includes(postId)
        ? prevLikedPosts.filter((id) => id !== postId) //removes from liked posts
        : [...prevLikedPosts, postId] //Add to liked posts
    );
};

  return (
    <DashboardLayout>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/**Left Column*/}
        <div className="space-y-6">
          <ProfileCard user={selectedUser}/>
          <AIPanel/>
        </div>

        {/**Right Column*/}
        <div className="lg:col-span-2 space-y-6">
          <CreatePost user={selectedUser} onAnimatePost={handlePostAnimation} />
          <Feed posts={posts} onUserClick={setSelectedUser} animatedPost={animatedPost} onUpdatedPosts={handleUpdatedPosts} likesCounter={likesCounter}/>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
