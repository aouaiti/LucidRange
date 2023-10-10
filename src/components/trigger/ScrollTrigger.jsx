import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { rotate } from "../../Features/globalUiVars/section3";

function ScrollTrigger() {
  const [idle, setIdle] = useState(false);
  const [multiplier, setMultiplier] = useState(0);
  const dispatch = useDispatch();
  const section2Part = useSelector((state) => state.section2.part);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const previousSection = useSelector(
    (state) => state.currentSection.prevSection
  );
  const section3Part = useSelector((state) => state.section3.rotation);
  // const a = 1;
  const sectionMutation = () => {
    if (multiplier === 0) return;
    if (section3Part > 0 && section3Part < 5) return;
    if (currentSection === 1 && (multiplier === -1 || multiplier === 1)) return;
    if (currentSection === 3 && (multiplier === -1 || multiplier === 1)) return;
    if (currentSection === 2) return;
  };
  useEffect(() => {
    if (
      (currentSection !== 1 || multiplier !== 1) &&
      (currentSection !== 4 || multiplier !== -1)
    )
      return;
    let sectoSec = setTimeout(
      () => dispatch(sectionIndex(currentSection + multiplier)),
      50
    );
    return () => clearTimeout(sectoSec);
  }, [multiplier]);

  // useEffect(() => {
  //   if (currentSection !== 4 || multiplier !== -1) return;
  //   let sec1toSec2 = setTimeout(() => {
  //     dispatch(sectionIndex(currentSection + multiplier));
  //   }, 50);
  //   return () => clearTimeout(sec1toSec2);
  // }, [multiplier]);

  // useEffect(() => {
  //   if (currentSection === 3 && multiplier === 1 && section3Part === 4) {
  //     window.scrollTo({
  //       top: "0",
  //       behavior: "instant",
  //     });
  //     dispatch(sectionIndex(4));
  //     return;
  //   }
  //   if (currentSection !== 3 || multiplier !== -1 || section3Part !== 0) return;
  //   let sec3toSec2 = setTimeout(() => {
  //     // if (section2Part !== 3) dispatch(currentPart(1));[todo]
  //     dispatch(sectionIndex(currentSection + multiplier));
  //   }, 100);
  //   return () => clearTimeout(sec3toSec2);
  // }, [multiplier]);

  useEffect(() => {
    if (currentSection !== 2) {
      setIdle(false);
      return;
    }
    const timer = setTimeout(() => setIdle(true), 100);
    return () => clearTimeout(timer);
  }, [currentSection]);

  useEffect(() => {
    // if (multiplier === 0 || currentSection !== 3) return;
    // if (multiplier === 1 && section3Part === 4) return;
    // if (multiplier === -1 && section3Part === 0) return;
    if (!idle) return;
    if (currentSection !== 2) return;
    const sec2p3 = setTimeout(() => dispatch(rotate(multiplier)), 50);
    const reset = setTimeout(() => setMultiplier(0), 70);
    return () => clearTimeout(sec2p3) && clearTimeout(reset);
  }, [multiplier]);

  let start = null;

  // useEffect(() => {
  //   sectionMutation();
  // }, [multiplier, section2Part]);

  useEffect(() => {
    const main = document.querySelector("#main");
    // IE9, Chrome, Safari, Opera
    main.addEventListener("mousewheel", MouseWheelHandler, {
      passive: true,
    });
    // Firefox
    main.addEventListener("DOMMouseScroll", MouseWheelHandler, {
      passive: true,
    });

    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchend", touchEndHandler);

    document.addEventListener("keydown", TypeHandler);

    return () => {
      window.removeEventListener("mousewheel", MouseWheelHandler);
      window.removeEventListener("DOMMouseScroll", MouseWheelHandler);
      window.removeEventListener("keydown", TypeHandler);
    };
  }, []);

  const touchStartHandler = (e) => {
    start = e.changedTouches[0];
  };
  const touchEndHandler = (e) => {
    let end = e.changedTouches[0];
    if (end.screenY - start.screenY > 0) {
      setMultiplier(-1);
    } else if (end.screenY - start.screenY < 0) {
      setMultiplier(1);
    }
  };

  const MouseWheelHandler = (e) => {
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    setMultiplier(-delta);
    return false;
  };

  const TypeHandler = (e) => {
    if (e.key == "ArrowUp") {
      setMultiplier(-1);
    } else if (e.key == "ArrowDown") {
      setMultiplier(1);
    }
  };

  return null;
}

export default ScrollTrigger;

/////////////////////////// re implement state (state to redux)
