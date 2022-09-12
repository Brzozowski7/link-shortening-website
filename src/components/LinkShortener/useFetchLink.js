import { useState, useEffect, useRef } from "react";
import { checkLink } from "./LinkShortener.utils";

const useFetchLink = (linkToShorten) => {
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newLink, setNewLink] = useState(false); // dodany po to, żeby w momencie jak api zwraca ten sam link kolejny shortenedLink był komponowany (czekam na inne propozycje :D )
  const isMounted = useRef(false);

  const fetchLink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${linkToShorten.value}`
      );
      if (response.ok) {
        const data = await response.json();
        setShortLink(data.result.short_link);
        setNewLink((prev) => !prev);
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

  const value = { shortLink, loading, error, newLink };
  return value;
};

export default useFetchLink;
