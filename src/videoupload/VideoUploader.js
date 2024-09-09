import React, { useState } from 'react';
import './VideoUploader.css'; // Import the CSS file

const VideoUploader = () => {
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [videoURL, setVideoURL] = useState(null);

  const handleUploadVideo = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      setVideoURL(URL.createObjectURL(file)); // Create a local URL for the video file
      setIsVideoUploaded(true);
      alert('Video Uploaded Successfully!');
    }
  };

  const handleViewClick = () => {
    setShowCards(true);
  };

  return (
    <div className="container">
      <div className="button-container">
        {!isVideoUploaded && (
          <button className="upload-button">
            <input
              type="file"
              accept="video/*"
              onChange={handleUploadVideo}
              className="file-input"
            />
            Upload Video
          </button>
        )}
        {isVideoUploaded && !showCards && (
          <>
            <button className="action-button" onClick={handleViewClick}>
              View Video
            </button>
            <button className="action-button" onClick={handleViewClick}>
              View Analytics
            </button>
          </>
        )}
      </div>

      {showCards && (
        <div className="card-container">
          <div className="card">
            {/* <h5>Video Details</h5>
            <p>{uploadedFileName}</p> */}
            {videoURL && (
              <video className="video-player" controls>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="card">
            <h5>Analytics</h5>
            <p>Analytics details will be here</p>
          </div>
        </div>
      )}

      {showCards && (
        <div className="button-container">
          <button className="action-button" onClick={handleViewClick}>
            View Video
          </button>
          <button className="action-button" onClick={handleViewClick}>
            View Analytics
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
