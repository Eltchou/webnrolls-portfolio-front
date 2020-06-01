export function addClassNameAnimationAndRemoveItById(
  id,
  animationName,
  styles,
  callbacks
) {
  if (id) {
    // console.log("addClassNameAnimationAndRemoveItById", id, animationName);
    const element = document.getElementById(id);

    // add animation name
    if (animationName) {
      element.classList.add(animationName);
    }

    // add styles
    if (styles) {
      for (let style in styles) {
        element.style[style] = styles[style];
      }
    }

    let animationEndName = "";
    var animations = {
      animation: "animationend",
      OAnimation: "oanimationend",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd",
    };
    let elemStyle = element.style;

    for (let animation in animations) {
      if (elemStyle[animation] !== undefined) {
        animationEndName = animations[animation];
      }
    }
    // console.log("animationEndName", animationEndName);

    element.addEventListener(animationEndName, callbackListener);

    function callbackListener() {
      element.classList.remove(animationName);

      // add callbacks
      if (typeof callbacks == "function") {
        callbacks();
      }

      element.removeEventListener(animationEndName, callbackListener);
    }
  }
}
