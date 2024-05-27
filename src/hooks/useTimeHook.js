export const useTimeHook = () => {
  const timeSince = (startUnix, gameLength) => {
    const currentUnix = Math.floor(new Date().getTime() / 1000);
    const gameStartUnix = Math.floor(startUnix / 1000);
    const gameEndUnix = gameStartUnix + gameLength;
    const timeSinceEnd = currentUnix - gameEndUnix;

    if (timeSinceEnd < 60) {
      return timeSinceEnd + " seconds ago";
    } else if (timeSinceEnd < 120) {
      return Math.floor(timeSinceEnd / 60) + " minute ago";
    } else if (timeSinceEnd < 3600) {
      return Math.floor(timeSinceEnd / 60) + " minutes ago";
    } else if (timeSinceEnd < 7200) {
      return Math.floor(timeSinceEnd / 3600) + " hour ago";
    } else if (timeSinceEnd < 86400) {
      return Math.floor(timeSinceEnd / 3600) + " hours ago";
    } else if (timeSinceEnd < 172800) {
      return Math.floor(timeSinceEnd / 86400) + " day ago";
    } else if (timeSinceEnd < 604800) {
      return Math.floor(timeSinceEnd / 86400) + " days ago";
    } else if (timeSinceEnd < 1209600) {
      return Math.floor(timeSinceEnd / 604800) + " week ago";
    } else if (timeSinceEnd < 2628000) {
      return Math.floor(timeSinceEnd / 604800) + " weeks ago";
    } else if (timeSinceEnd < 5256000) {
      return Math.floor(timeSinceEnd / 2620800) + " month ago";
    } else if (timeSinceEnd < 31536000) {
      return Math.floor(timeSinceEnd / 2620800) + " months ago";
    }
  };

  const calcDuration = (gameLength) => {
    return Math.floor(gameLength / 60) + "m" + Math.floor(gameLength % 60) + "s";
  };

  return { timeSince, calcDuration };
};
