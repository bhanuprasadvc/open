"use client";

import React, { useState } from 'react';
import ProductImageForm from '../components/ProductImageForm';
import ProductNameForm from '../components/ProductNameForm';

export default function Home() {
  const [option, setOption] = useState<string | null>(null);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Generate a Product Description</h1>
      <div className="mb-4">
        <button className="btn btn-primary mr-2" onClick={() => setOption('image')}>
          Use Product Image
        </button>
        <button className="btn btn-primary" onClick={() => setOption('name')}>
          Use Product Name
        </button>
      </div>

      {option === 'image' && <ProductImageForm />}
      {option === 'name' && <ProductNameForm />}
    </main>
  );
}
