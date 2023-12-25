import { useState } from "react";

export default function useCopyToClipboard() {
    const [result, setResult] = useState(null);

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setResult({ state: 'success', message: 'Copied to clipboard!' });
      } catch (e) {
        setResult({ state: 'error', message: 'Failed to copy' });
        throw e;
      } finally {
        // 👇 Show the result feedback for 2 seconds
        setTimeout(() => {
          setResult(null);
        }, 3000);
      }
    };
  
    // 👇 We want the result as a tuple
    return [copyToClipboard, result];
  }