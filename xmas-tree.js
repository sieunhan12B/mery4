document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(TextPlugin);

  gsap.fromTo(
    ".greeting",
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 2, ease: "bounce.out" }
  );

  gsap.to(".greeting", {
    duration: 5,
    text: "Trùm elsu",
    ease: "power1.inOut",
    delay: 2,
  });

  gsap.to(".greeting", {
    duration: 2,
    repeat: -1,
    yoyo: true,
    color: "#ff0000",
    textShadow: "2px 2px 4px #00ff00",
    ease: "power1.inOut",
  });
});
