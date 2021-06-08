var easeInOutQuad = function (currentTime, start, change, duration) {
    var newCurrentTime = currentTime;
    newCurrentTime /= duration / 2;
    if (newCurrentTime < 1) {
        return (change / 2) * newCurrentTime * newCurrentTime + start;
    }
    newCurrentTime -= 1;
    return (-change / 2) * (newCurrentTime * (newCurrentTime - 2) - 1) + start;
};
export var smoothScroll = function (duration, element, to, property) {
    var start = element[property];
    var change = to - start;
    var startDate = new Date().getTime();
    var animateScroll = function () {
        var currentDate = new Date().getTime();
        var currentTime = currentDate - startDate;
        element[property] = easeInOutQuad(currentTime, start, change, duration);
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element[property] = to;
        }
    };
    animateScroll();
};
//# sourceMappingURL=smoothScroll.js.map