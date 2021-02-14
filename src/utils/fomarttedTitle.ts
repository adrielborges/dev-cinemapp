const formattedTitle = (title: string) => {
  const titleLength = title.length;

  if (titleLength >= 80) {
    const trimTitle = title.slice(0, 80);
    return trimTitle + '...';
  }

  return title;
};

export default formattedTitle;
