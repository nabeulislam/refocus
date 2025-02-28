import React, { useEffect, useState } from 'react';

function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkSocialMedia = () => {
      const socialMediaSites = ['facebook.com', 'twitter.com', 'instagram.com'];
      const currentUrl = window.location.href;
      const isSocialMedia = socialMediaSites.some(site => currentUrl.includes(site));
      setIsVisible(isSocialMedia);
    };

    window.addEventListener('load', checkSocialMedia);
    window.addEventListener('hashchange', checkSocialMedia);

    return () => {
      window.removeEventListener('load', checkSocialMedia);
      window.removeEventListener('hashchange', checkSocialMedia);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup">
      <h1>Stay Focused!</h1>
      <p>You've opened a social media site. Stay focused and save time!</p>
    </div>
  );
}

export default Popup;
