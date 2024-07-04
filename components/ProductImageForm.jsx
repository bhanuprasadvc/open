import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ProductImageForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with image:", image);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Product Image</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Click to add a jpg image of product</label>
        <input type="file" accept=".jpg" onChange={handleImageChange} className="mt-1 block w-full text-sm text-gray-900" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Choose Marketplace</label>
        <input type="text" className="input mt-1 block w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tone of Voice</label>
        <input type="text" className="input mt-1 block w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Primary Audience</label>
        <input type="text" className="input mt-1 block w-full" />
      </div>
      <button type="submit" className="btn btn-primary">Generate</button>
      <div className="mt-4">
        <ReCAPTCHA
          sitekey="your-recaptcha-site-key" // Replace with your reCAPTCHA site key
          onChange={(value) => {
            // Handle reCAPTCHA verification
            console.log("Captcha value:", value);
          }}
        />
        <label className="block text-sm font-medium text-gray-700">I am not a bot</label>
      </div>
    </form>
  );
};

export default ProductImageForm;
