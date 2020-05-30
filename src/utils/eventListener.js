export function getTransitionEndEventName(element) {
  var transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };
  let elemStyle = element.style;
  for (let transition in transitions) {
    if (elemStyle[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

export function getAnimationEndEventName(element) {
  var animations = {
    animation: "animationend",
    OAnimation: "oanimationend",
    MozAnimation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
  };
  let elemStyle = element.style;
  for (let animation in animations) {
    if (elemStyle[animation] !== undefined) {
      return animations[animation];
    }
  }
}
