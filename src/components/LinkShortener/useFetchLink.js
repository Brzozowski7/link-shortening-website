import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { checkLink } from "./LinkShortener.utils";

const useFetchLink = (linkToShorten) => {
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isMounted = useRef(false);

  const fetchLink = async (link) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      setShortLink({ value: response.data.result.short_link });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      if (checkLink(linkToShorten.value)) {
        setError(checkLink(linkToShorten.value));
      } else {
        fetchLink(linkToShorten.value);
      }
    } else {
      isMounted.current = true;
    }
  }, [linkToShorten]);

  const value = { shortLink, loading, error };
  return value;
};

export default useFetchLink;
