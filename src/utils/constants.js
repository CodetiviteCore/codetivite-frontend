export const textFormat = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const transformRoadMap = (level) => {
  if (level === "fresher" || level === "Fresher") {
    return "junior"
  }
  return level
}

export const formatProgressValue =(num)=> {
  return num.toFixed(1);
}

export const truncateText = (text) => {
  return `${text.split(" ").slice(0, 20).join(" ")}...`;
}