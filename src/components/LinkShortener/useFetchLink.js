import { useState, useEffect, useRef } from "react";
import { checkLink } from "./LinkShortener.utils";

const useFetchLink = (linkToShorten) => {
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isMounted = useRef(false);

  const fetchLink = async (link) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      if (response.ok) {
        const data = await response.json();
        setShortLink({ value: data.result.short_link }); //tu podobnie jak w komponencie
      } else {
        throw response.status;
      }
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
