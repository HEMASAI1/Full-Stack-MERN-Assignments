import React, { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />
      <p className="text-gray-700">Text: {text}</p>
    </div>
  );
}