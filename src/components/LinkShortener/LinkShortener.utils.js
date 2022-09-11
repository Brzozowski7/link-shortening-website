import { linkRegex } from "./LinkShortener.const";

export const checkLink = (link) => {
  if (!link) {
    return "Please add link";
  } else if (!link.match(linkRegex)) {
    return "That's not a link";
  } else return false;
};
