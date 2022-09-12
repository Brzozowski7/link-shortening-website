import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(null);

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => {
        setCopied("");
      }, 5000);
      return true;
    } catch (error) {
      console.log(error);
      setCopied(null);
      return false;
    }
  };

  return [copied, copy];
};

export default useCopyToClipboard;
