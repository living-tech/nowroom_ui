const easeInOutQuad = (currentTime: number, start: number, change: number, duration: number): number => {
  let newCurrentTime = currentTime;
  newCurrentTime /= duration / 2;

  if (newCurrentTime < 1) {
    return (change / 2) * newCurrentTime * newCurrentTime + start;
  }

  newCurrentTime -= 1;
  return (-change / 2) * (newCurrentTime * (newCurrentTime - 2) - 1) + start;
};

export const smoothScroll = (
  duration: number,
  element: HTMLElement,
  to: number,
  property: "scrollTop" | "scrollLeft"
): void => {
  const start = element[property];
  const change = to - start;
  const startDate = new Date().getTime();

  const animateScroll = () => {
    const currentDate = new Date().getTime();
    const currentTime = currentDate - startDate;

    element[property] = easeInOutQuad(currentTime, start, change, duration);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element[property] = to;
    }
  };
  animateScroll();
};
