var controller = new ScrollMagic.Controller();

// 1. 기본 트윈맥스 사용법
// var tween1 = TweenMax.to('#animate1', 0.5, {
//     backgroundColor: "#333333",
//     scale: 2.5,
//     rotation: 360,
//     x: 130
// });

// 2. 트윈맥스 요요로 사용법 yoyo를 사용하면 애니메이션 무한 재생 가능하다. 
var tweenYoyo = TweenMax.fromTo(".move-circle", 3, {
    backgroundColor: "#ddd",
    scale: 1,
  }, {
    scale: 2.5,
    backgroundColor: "#dc143c",
    x: 0,
    y: 300,
    repeat: -1,
    yoyo: true
  }) 

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "100%",
//  duration은 애니메이션 재생 시간. 100%로 주면 뷰포트에 따라 유동적으로 end 지점이 바뀐다. 40%로 주면 애니메이션이 더 많이 재생됨.
    offset: 150,
//  offset 값을 주면 실제 트리거보다 빠르게/ 느리게 애니메이션을 작동시킬 수 있다.


})
.setTween(tweenYoyo)
.addTo(controller)
.addIndicators({
    name: "1"
}) 