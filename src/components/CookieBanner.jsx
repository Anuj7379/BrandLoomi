import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setIsVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookieConsent", value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 p-4 sm:p-6 bg-black text-white rounded-xl shadow-lg z-50 max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">Privacy preference</h3>
      <p className="text-sm mb-4">
        We use cookies to make our site work better for you. Accept them to
        enjoy the full experience or manage your preferences below.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200"
        >
          Accept All
        </button>
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-[#1A1A1A] text-white px-6 py-2 rounded-md font-medium hover:bg-[#333]"
        >
          Reject All
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
