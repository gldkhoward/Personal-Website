"use client";
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function NFCReaderPage() {
  const [tagData, setTagData] = useState(null);
  const [error, setError] = useState(null);

  const handleNFCTagRead = async () => {
    try {
      const ndef = new NDEFReader();
      await ndef.scan();  // Start NFC scan
      console.log('NFC scan started successfully.');

      ndef.onreading = (event) => {
        const message = event.message.records[0];
        const decodedData = new TextDecoder().decode(message.data);
        setTagData(decodedData);
        console.log('Tag read:', decodedData);
      };

      ndef.onerror = (err) => {
        setError('Failed to read tag. Try again.');
        console.error('Reading error:', err);
      };
    } catch (err) {
      setError('NFC scan not supported or permission denied.');
      console.error('Error initializing NFC scan:', err);
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Home Icon */}
      <Link href="/" className="absolute top-6">
      <FaHome size={32} className="text-gray-800 hover:text-orange-400" />
    </Link>

      {/* Page Content */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-6 text-orange-400">NFC Tag Reader</h1>
        <p className="text-lg text-gray-600 mb-6">
          Tap the button below and scan your NFC tag.
        </p>

        <button
          onClick={handleNFCTagRead}
          className="px-6 py-3 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500 transition"
        >
          Scan NFC Tag
        </button>

        {/* Display Tag Data */}
        {tagData && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tag Information</h2>
            <p className="text-gray-600">{tagData}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-8 bg-red-100 p-4 rounded-lg shadow-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
