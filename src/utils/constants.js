export const textFormat = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const transformRoadMap = (level) => {
  console.log("This is level", level)
  if (level === "fresher" || level === "Fresher") {
    return "junior"
  }
  return level
}