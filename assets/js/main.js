$(function () {
  const tl = new TimelineLite(),
    letters = $("#coming_soon span"),
    logo = $("#logo");
    
  tl.staggerFrom(
    letters,
    0.5,
    { opacity: 0, scale: 0, rotation: -180 },
    0.3
  ).staggerTo(letters, 0.3, { scale: 1 }, 0.3, 0.7);
});
