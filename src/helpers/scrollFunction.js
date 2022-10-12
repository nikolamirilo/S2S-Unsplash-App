export const scrollFunction = (sectionName) => {
  sectionName.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  });
};
