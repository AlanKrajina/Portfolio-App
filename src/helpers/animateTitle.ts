const animateTitle = (titleId: string, titleString: string) => {
  const title = document.getElementById(titleId);
  if (title) {
    title.setAttribute("id", "typewriterEffect");
    title.innerHTML = titleString;
  }
};

export default animateTitle;
