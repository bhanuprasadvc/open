import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ProductNameForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Product Name</h2>
      <input type="email" name="email" placeholder="Email" required className="input mt-1 block w-full" />
      <input type="text" name="productName" placeholder="Product Name" required className="input mt-1 block w-full" />
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

export default ProductNameForm;
