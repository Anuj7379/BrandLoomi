// components/Recaptcha.js
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = forwardRef((_, ref) => {
  const recaptchaRef = useRef(null);

  useImperativeHandle(ref, () => ({
    async getToken() {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      return token;
    },
  }));

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey="REACT_APP_RECAPTCHA_SITE_KEY" 
      size="invisible"
    />
  );
});

export default Recaptcha;
