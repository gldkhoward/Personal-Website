"use client";

import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

interface NDEFMessage {
  records: NDEFRecord[];
}

interface NDEFRecord {
  data: BufferSource;
  encoding?: string;
}

interface NDEFReadingEvent extends Event {
  message: NDEFMessage;
}

declare class NDEFReader {
  scan(): Promise<void>;
  write(message: string | NDEFMessage): Promise<void>;
  onreading: (event: NDEFReadingEvent) => void;
  onerror: (event: Event) => void;
}

export default function NFCReaderPage() {
  const [tagData, setTagData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleNFCTagRead = async () => {
    if (typeof window === "undefined" || !('NDEFReader' in window)) {
      setError('NFC is not supported on this device or browser.');
      console.error('NFC not supported or running in a non-browser environment.');
      return;
    }

    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log('NFC scan started successfully.');

      ndef.onreading = (event: NDEFReadingEvent) => {
        const message = event.message.records[0];
        const decodedData = new TextDecoder().decode(message.data);
        setTagData(decodedData);
        console.log('Tag read:', decodedData);
      };

      ndef.onerror = (err: Event) => {
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
      <Link href="/" className="absolute top-6">
        <FaHome size={32} className="text-gray-800 hover:text-orange-400" />
      </Link>

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

        {tagData && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tag Information</h2>
            <p className="text-gray-600">{tagData}</p>
          </div>
        )}

        {error && (
          <div className="mt-8 bg-red-100 p-4 rounded-lg shadow-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
