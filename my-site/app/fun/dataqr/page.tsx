"use client";

import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

interface NDEFReadingEvent extends Event {
  message: NDEFMessage;
  serialNumber: string;
}

interface NDEFMessage {
  records: NDEFRecord[];
}

interface NDEFRecord {
  recordType: string;
  data: BufferSource;
  encoding?: string;
  lang?: string;
}

declare class NDEFReader {
  onreading: ((event: NDEFReadingEvent) => void) | null;
  onreadingerror: ((event: Event) => void) | null;
  scan(): Promise<void>;
}

export default function NFCReaderPage() {
  const [status, setStatus] = useState<string>(''); // Feedback status
  const [tagData, setTagData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]); // Store logs

  // Helper to add logs dynamically
  const addLog = (message: string) => {
    setLogs((prevLogs) => [...prevLogs, `${new Date().toISOString()}: ${message}`]);
  };

  const handleNFCTagRead = async () => {
    setStatus('Initializing NFC scan...');
    addLog('Attempting to start NFC scan.');

    // Check if Web NFC is supported
    if (typeof window === 'undefined' || !('NDEFReader' in window)) {
      const errorMsg = 'NFC is not supported on this device or browser.';
      setError(errorMsg);
      setStatus('');
      addLog(errorMsg);
      return;
    }

    try {
      const ndef = new NDEFReader();
      addLog('NDEFReader instance created.');

      setStatus('NFC scan started. Please bring a tag close to your device.');
      addLog('Calling ndef.scan()... Awaiting tag...');

      await ndef.scan(); // Start scanning for NFC tags
      addLog('NFC scan initialized successfully.');

      // Handle successful tag read
      ndef.onreading = (event: NDEFReadingEvent) => {
        const message = event.message.records[0];
        const decodedData = new TextDecoder().decode(message.data);

        setTagData(decodedData);
        setStatus(`Tag read successfully! Serial: ${event.serialNumber}`);
        addLog(`Tag read! Serial: ${event.serialNumber}, Data: ${decodedData}`);
      };

      // Handle read errors
      ndef.onreading = (event) => {
        const nfcEvent = event as NDEFReadingEvent; // Type casting here
        const message = nfcEvent.message.records[0];
        const decodedData = new TextDecoder().decode(message.data);
      
        setTagData(decodedData);
        setStatus(`Tag read successfully! Serial: ${nfcEvent.serialNumber}`);
        addLog(`Tag read! Serial: ${nfcEvent.serialNumber}, Data: ${decodedData}`);
      };
    } catch (err) {
        const errorMessage = (err as Error).message; // Type narrowing here
        setError('Failed to initialize NFC scan. Permission denied or unsupported.');
        setStatus('');
        addLog(`Initialization error: ${errorMessage}`);
      }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Home Link */}
      <Link href="/" className="absolute top-6">
        <FaHome size={32} className="text-gray-800 hover:text-orange-400" />
      </Link>

      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-6 text-orange-400">NFC Tag Reader</h1>
        <p className="text-lg text-gray-600 mb-6">
          Tap the button below to start scanning your NFC tag.
        </p>

        <button
          onClick={handleNFCTagRead}
          className="px-6 py-3 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500 transition"
        >
          Scan NFC Tag
        </button>

        {/* Status Feedback */}
        {status && (
          <div className="mt-4 text-lg text-blue-500">
            <p>{status}</p>
          </div>
        )}

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

        {/* Real-Time Logs */}
        <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Real-Time Logs</h2>
          <div className="max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <p key={index} className="text-sm text-gray-700">
                {log}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
