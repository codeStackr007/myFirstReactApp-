import { useState } from 'react';
import './App.css';

function App() {
  const profileData = {
    Name: 'John Doe',
    Job: 'Frontend Developer',
    Gender: 'Male',
    Height: '5\'9"',
    Location: 'LA, Boston',
    Email: 'john.dev@example.com',
    Skills: 'HTML, CSS, JS, React ',
    About: `I am a passionate and determined junior web developer with a deep love for technology and problem-solving. My journey into web development began with a curiosity about how websites function and a desire to create platforms that improve user experiences and address real-world challenges.

I am committed to mastering modern web development tools and frameworks, including HTML, CSS, Bootstrap, and JavaScript, while steadily building expertise in technologies like Sass and SCSS. My focus lies in designing and developing responsive, interactive, and accessible websites that prioritize efficiency and user satisfaction.`,
  };

  const profileImages = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/men/67.jpg',
    'https://randomuser.me/api/portraits/men/90.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/54.jpg',
    'https://randomuser.me/api/portraits/men/60.jpg',
    'https://randomuser.me/api/portraits/men/0.jpg',
    'https://randomuser.me/api/portraits/men/20.jpg',
    'https://randomuser.me/api/portraits/men/70.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
  };

  return (
    <div className="app-container">
      <div className="profile-container">
        <div className="sidebar">
          <div className="sidebar-profile-image">
            <img
              src={profileImages[currentImageIndex]}
              alt="Sidebar Profile"
              className="sidebar-image"
            />
          </div>
          <div className="profile-info">
            {Object.entries(profileData).map(([key, value]) => {
              if (key.toLowerCase() === 'about') return null;
              return (
                <div key={key} className="info-item">
                  <span className="info-label">{key}:</span>
                  <span className="info-value">{value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="main-content">
          <div className="top-section">
            <div className="about-section">
              <h3>About Me</h3>
              <p>{profileData.About}</p>
            </div>

            <div className="profile-image-container">
              <img
                src={profileImages[currentImageIndex]}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>

          <button onClick={changeImage} className="change-image-btn">
            Change Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
