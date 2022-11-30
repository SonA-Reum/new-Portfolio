 // ==============================================================
// gnb 
// ===============================================================

let moGnb =  document.querySelector('.open_ham').nextElementSibling;

// 햄버거 메뉴 열 때 
document.querySelector('.open_ham').addEventListener("click", function(){
moGnb.classList.toggle("active");


    if (moGnb.style.maxWidth) {
        panel.style.maxWidth = null;
        document.body.style.overflowY = 'scroll';
      } else {
        moGnb.style.maxWidth = "50%";
        document.body.style.overflowY = 'hidden';
         //메뉴 열면 배경 흐림 효과 넣기
        document.querySelector('.mo_gnb').classList.toggle('active');
        
      }

});

// 햄버거 메뉴 닫을 때  
document.querySelector('.close_ham').addEventListener("click", function(){
    //body overflow-y scroll 되게
    document.body.style.overflowY = 'scroll';
    //메뉴 슬라이드
    document.querySelector('.close_ham').parentElement.classList.toggle("active");
    moGnb.style.maxWidth = null;
    //메뉴 닫으면 배경 흐림 효과 없애기
    document.querySelector('.mo_gnb').classList.toggle('active');
});

//gnb 스크롤 이벤트

window.addEventListener("scroll", function(){
    let scroll = window.pageYOffset;
    if(scroll > 400) {
        document.querySelector('.gnb_wrap').style.backgroundColor = 'var(--color-white)';
        document.querySelector('.resume').style.visibility = 'visible';
    } else {
        document.querySelector('.gnb_wrap').style.backgroundColor = 'var(--color-white)';
        document.querySelector('.resume').style.visibility = 'hidden';
    }
});

//gnb 클릭했을 때 이동 이벤트
let gnbMove;
let compStyles = window.getComputedStyle(document.querySelector(".pc_gnb"));
let goLocation;

if (compStyles.getPropertyValue('display') == 'flex') {
  // pc_gnb가 block이면,gnbMove에 pc 메뉴를 담고
  gnbMove = document.querySelectorAll('.gnb > li > a');
  //pc_gnb가 none이면 (=햄버거 메뉴가 block일 때)
} else if (compStyles.getPropertyValue('display') == 'none') {
  //gnbMove에 모바일 메뉴를 담는다.
  gnbMove = document.querySelectorAll('.mo_gnb ol a');
}

  //메뉴마다 클릭 이벤트를 달아준다.
  gnbMove.forEach(function (el, index){
    console.log(gnbMove);
    gnbMove[index].addEventListener("click", function(event){
      
      event.preventDefault();
     
      // console.log('지금 클릭한 인덱스는 ' + gnbMove[index]);
      //loacation 변수에 클릭한 메뉴의 인덱스와 일치하는 섹션의 offsetTop값을 넣어준 후
      goLocation = document.querySelector("#trigger0"+[index + 1]).offsetTop;
     
      // console.log(goLocation);
      // 이동한다.
      window.scrollTo({top: goLocation, left:0, behavior:'smooth'});
      document.querySelector('.mo_gnb ol').classList.remove('active');

    });

  });






// ==============================================================
// 두번째 섹션
// ==============================================================


//버튼 클릭시 효과
var numParent = document.querySelector('.profile-num')
var numChild = numParent.getElementsByClassName("numBtn");
//컨텐츠 부모
let contItem = document.querySelector('.cont-right').children;

for (var i = 0; i < numChild.length; i++) {
  numChild[i].addEventListener("click", function(){
    //active 클래스를 추가하기
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    //해당 콘텐츠  display: block
    if (this.id == "pfofile01") {
      contItem.item(0).style.display = 'flex';
      contItem.item(1).style.display = 'none';
      contItem.item(2).style.display = 'none';
    } else if (this.id == "pfofile02") {
      contItem.item(0).style.display = 'none';
      contItem.item(1).style.display = 'flex';
      contItem.item(2).style.display = 'none';
    } else if (this.id == "pfofile03") {
      contItem.item(0).style.display = 'none';
      contItem.item(1).style.display = 'none';
      contItem.item(2).style.display = 'flex';
    }     
  });
}





// ==============================================================
// section03 게시판 필터
// ==============================================================
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("fliterItem");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("filterActive");
    // console.log(current);
    current[0].className = current[0].className.replace(" filterActive", "");
    this.className += " filterActive";
  });
}




// ==============================================================
// section04 
// ==============================================================
// 라이트 박스

//변수 선언

var imgList = document.querySelector('.filter-cont'),
    lightBox = document.getElementById('lightBox'),
    lightImg = document.getElementById('lightImg'),
    newImg = new Image();

 imgList.addEventListener('click', lightbox);


  //data-lightbox의 값을 lightBox src에다가 넣기.
function lightbox(event){
 if (event.target.hasAttribute('data-lightbox')){
     console.log('있다');
     event.preventDefault(); // 일단 링크로 가는 것을 막고
     newImg.onload = function(){ // 로드가 끝나면 newImg 함수가 아래 일을 해주세요.
         lightImg.src = this.src; // lightImg.src에 this의 src를 로딩하세요
     };
     newImg = event.target.getAttribute('data-lightbox');
     lightImg.src = newImg;
     lightBox.classList.add('visible');
 }
}

// 라이트 박스가 작동중일 때, 어느 곳을 누르든 라이트 박스가 꺼진다.
lightBox.addEventListener('click',function(){
    if (event.target.id === 'lightBox' || event.target.id === 'lightImg') {
     lightBox.classList.remove('visible');
    }
})

//close 버튼 누르면 꺼지기.
document.querySelector('.close').addEventListener("click", function(){
  lightBox.classList.remove('visible');
});




// 위로 가기 버튼

  document.getElementById('goTop').addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  });



// ==============================================================
// 공통 애니메이션
// ==============================================================

var controller = new ScrollMagic.Controller();


// 타이틀 애니메이션 변수 설정
var aniTarget = document.querySelectorAll("h2");
var textOpacity = document.querySelectorAll(".sub-text");

//% 숫자 
var numTxt = document.querySelectorAll(".skill_item .item-title");


// 타이틀 해당 변수에 기본 값 부여
TweenMax.set(aniTarget, { opacity: 0, y: 100 });
TweenMax.set(textOpacity, { opacity: 0 });



//foreEach문 시작
// 타이틀 애니메이션
aniTarget.forEach(function (el) {
  var tween1 = new TimelineMax().to(el, 4, {
    opacity: 1,
    y: 0,
    ease: Cubic.easeOut
  });
  var scene1 = new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: 0.8,
    duration: "60%",
    reverse: true
    })
    .setTween(tween1)
    .addTo(controller)
});
//foreEach문 끝


// sub text 애니메이션
textOpacity.forEach(function (el) {
  var tween2 = new TimelineMax().to(el, 10, {
    opacity: 1,
    ease: Cubic.easeOut,
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: el.closest('.container'),
    triggerHook: 0.25,
    duration: '30%',
    reverse: true,
  })
    .setTween(tween2)
    .addTo(controller)
});

//pc 버전 gnb 색상 바뀜 시작

var gnbTarget = document.querySelectorAll(".gnb > li > a");
var sectionTrigger = document.querySelectorAll(".section");

TweenMax.set(gnbTarget, {color: "#000"});

gnbTarget.forEach(function (el, index) {
    //1. sectionTrigger의 인덱스와 일치하는 .gnb > li(gnb)가 색상이 바뀐다.
    var tweenGnb = new TimelineMax()
    .to(gnbTarget[index], 4, {
    color: "#5470F8"
    })
    // console.log(index);
    var scene2 = new ScrollMagic.Scene({
    triggerElement: sectionTrigger[index],
    triggerHook: 0.5,
    duration: "10%",
    reverse: true
    })
    .setTween(tweenGnb)
    .addTo(controller)

    // 2. 이전 메뉴의 색상은 다시 본래 색으로 돌아간다.
    if (index > 0) {
    var tween3 = new TimelineMax()
    .to(gnbTarget[index-1], 4, {
    color: "black"
    })
    var scene3 = new ScrollMagic.Scene({
    triggerElement: sectionTrigger[index],
    triggerHook: 0.5,
    duration: "10%",
    reverse: true
    })
    .setTween(tween3)
    .addTo(controller)

  }
});


//모바일 버전 gnb 색상 바뀜 시작
window.onload = function(){

  let gnbMoTarget = document.querySelectorAll(".mo_gnb ol li a");
  let compStyles = window.getComputedStyle(document.querySelector(".mo_gnb"));
  TweenMax.set(gnbMoTarget, {color: "#000"});
  if (compStyles.getPropertyValue('display') == 'block') {
    
   

    gnbMoTarget.forEach(function (el, index) {


    //1. sectionTrigger의 인덱스와 일치하는 .gnb > li(gnb)가 색상이 바뀐다.
    var tweenGnb = new TimelineMax()
    .to(gnbMoTarget[index], 4, {
    color: "#5470F8"
    })
    var scene2 = new ScrollMagic.Scene({
    triggerElement: sectionTrigger[index],
    triggerHook: 0.5,
    duration: "10%",
    reverse: true
    })
    .setTween(tweenGnb)
    .addTo(controller)

      // 2. 이전 메뉴의 색상은 다시 본래 색으로 돌아간다.
      if (index > 0) {
        var tween3 = new TimelineMax()
        .to(gnbMoTarget[index-1], 4, {
        color: "black"
        })
        var scene3 = new ScrollMagic.Scene({
        triggerElement: sectionTrigger[index],
        triggerHook: 0.5,
        duration: "10%",
        reverse: true
        })
        .setTween(tween3)
        .addTo(controller)

      }
    });
  }
  
}




// ==============================================================
// section01 애니메이션
// ==============================================================

//circle 고정
var controllersection01 = new ScrollMagic.Controller();
TweenMax.set('#animation01', { opacity: 1});
var animation02Tween = new TimelineMax()
.to('#animation01', 10, {delay: 150, opacity: 0, ease: Cubic.easeOut,})
var sceneCircle = new ScrollMagic.Scene({
  triggerElement: '#animation01',
  triggerHook: 0.1,
  duration: '280%',
  reverse: true,
})
.setPin('#animation01')
.setTween(animation02Tween)
.addTo(controllersection01)
//  .addIndicators({
//       name: "원 애니메이션"
//     });


//첫 소개 타이틀 글자 애니메이션

var hiAll = document.querySelectorAll("#animation01 .text_box p:not(first-child)");
var hi01 = document.querySelector("#animation01 .text_box p:first-child");
var hi02 = document.querySelector("#animation01 .text_box p:nth-child(2)");
var hi03 = document.querySelector("#animation01 .text_box p:nth-child(3)");

TweenMax.set(hiAll, { opacity: 0});

var tweenhiAll = new TimelineMax()
.to(hi01, 4, {delay: 40, opacity: 1, ease: Cubic.easeOut,})
.to(hi01, 4, {delay: 80, opacity: 0, ease: Cubic.easeOut,})
.to(hi02, 4, {delay: 40, opacity: 1, ease: Cubic.easeOut,})
.to(hi02, 4, {delay: 80, opacity: 0, ease: Cubic.easeOut,})
.to(hi03, 4, {delay: 40, opacity: 1, ease: Cubic.easeOut,})
.to(hi03, 4, {delay: 80, opacity: 0, ease: Cubic.easeOut,})
var sceneHi02 = new ScrollMagic.Scene({
  triggerElement:'#animation01',
  triggerHook: 0.1,
  duration: '260%',
  reverse: true,
})
  .setTween(tweenhiAll)
  .addTo(controllersection01)

//////나무 애니메이션

var tree = document.querySelectorAll(".tree");

var tweenTree = TweenMax.set(tree, { opacity: 0 });
var tweenTree02 = TweenMax.set(".big-tree", { opacity: 0 });

//foreEach 시작
// 나무 이미지를 순회한다
tree.forEach(function (el) {
  var tweenTree = new TimelineMax().to(el, 4, {
    opacity: 1,
    ease: Cubic.easeOut
  });
  var tweenTree02 = new TimelineMax().to(".big-tree", 4, {
    opacity: 1,
    ease: Cubic.easeOut
  });

  var sceneTree01 = new ScrollMagic.Scene({
    triggerElement: '#animation01',
    triggerHook: 0.05,
    offset: 930,
    duration: '60%',
    reverse: true,
  })
    .setTween(tweenTree02)
    .addTo(controllersection01)
    .setClassToggle('#animation05', 'slideUp')
    // .addIndicators({
    //   name: "이거"
    // });

var sceneTree03 = new ScrollMagic.Scene({
  triggerElement: '#animation01',
  triggerHook: 0.05,
  offset: 1400,
  duration: '60%',
  reverse: true,
})
  .setTween(tweenTree)
  .addTo(controllersection01)
  .setClassToggle('#animation03', 'slideDown')

var sceneTree04 = new ScrollMagic.Scene({
    triggerElement: '#animation01',
    triggerHook: 0.05,
    offset: 1400,
    duration: '60%',
    reverse: true,
  })
    .setTween(tweenTree)
    .addTo(controllersection01)
    .setClassToggle('#animation04', 'slideDown')  

});

// ==============================================================
// section02 애니메이션
// ==============================================================

// 패스 애니메이션

//path의 길이를 구해 style로 지정하는 함수
	var st = document.querySelectorAll(".st");

  st.forEach(function(el){
    var lineLength = el.getTotalLength();
		el.style.strokeDasharray = lineLength + 1;
		el.style.strokeDashoffset = lineLength + 2;
    })

	//strokeDashoffset을 0으로

  var tweenPath = new TimelineMax()
    .add(TweenMax.to(".st1", 0.9, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))
    .add(TweenMax.to(".st1", 1, {
      stroke: "#082B4A",
      ease: Linear.easeNone
    }), 0);
  var scenePath = new ScrollMagic.Scene({
      triggerElement: "#triggerPath",
      duration: "30%",
      triggerHook: 0.4,
      tweenChanges: true
    })
    .setTween(tweenPath)
    .addTo(controllersection01)
   
 
 
    var tweenPath = new TimelineMax()
    .add(TweenMax.to(".st2", 0.9, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))
    .add(TweenMax.to(".st2", 1, {
      stroke: "#023639",
      ease: Linear.easeNone
    }), 0);
  var scenePath = new ScrollMagic.Scene({
      triggerElement: "#triggerPath",
      duration: "40%",
      triggerHook: 0.5,
      tweenChanges: true
    })
    .setTween(tweenPath)
    .addTo(controllersection01)   


  
    //나무 배경 opacity

    var sect02Tree = document.querySelector('.section02 .item .bg-tree');
    TweenMax.set(sect02Tree, { opacity: 0});
    var tweenSect02Tree = new TimelineMax()
    .to(sect02Tree, 20, {
      opacity:1,
      ease: Cubic.easeOut
    })
    .to(sect02Tree, 10, {
      delay: 100,
      opacity:0,
      ease: Cubic.easeOut
    });

    var sceneStar = new ScrollMagic.Scene({
      triggerElement: '#trigger02',
      triggerHook: 0.1,
      duration: "80%",
      reverse: true
    })
    .setTween(tweenSect02Tree)
    .addTo(controllersection01)
    // .addIndicators({name:"나무!"})
   
    // 배경색 바꾸기
    var section01 = document.querySelector('.section01');
    var section02 = document.querySelector('.section02');
    TweenMax.set(section01, { backgroundColor: "transparent"});
    TweenMax.set(section02, { backgroundColor: "transparent"});
    //section01일 때 
    var tweenSe01BgC = new TimelineMax().to(section01, 10, {
      backgroundColor: "#000",
      ease: Cubic.easeOut
    });
    var sceneSe01BgC = new ScrollMagic.Scene({
      triggerElement: '#trigger02',
      triggerHook: 1,
      duration: "60%",
      reverse: true
      })
      .setTween(tweenSe01BgC)
      .addTo(controllersection01)
    //section02일 때 
    var tweenSe02BgC = new TimelineMax().to(section02, 10, {
      backgroundColor: "#000",
      ease: Cubic.easeOut
    });
    var sceneSe02BgC = new ScrollMagic.Scene({
      triggerElement: '#trigger02',
      triggerHook: 1,
      duration: "60%",
      reverse: true
      })
      .setTween(tweenSe02BgC)
      .addTo(controllersection01)
      // .addIndicators({name:"배경색"})

    

// ==============================================================
// section03 애니메이션
// ==============================================================
 //section03일 때 
 var tweenSe03BgC = new TimelineMax().to(section02, 10, {
   backgroundColor: "#fff",
   ease: Cubic.easeOut
 });
 var sceneSe01BgC = new ScrollMagic.Scene({
   triggerElement: '#trigger03',
   triggerHook: 0.6,
   duration: "60%",
   reverse: true
   })
   .setTween(tweenSe03BgC)
   .addTo(controllersection01)
  //  .addIndicators({name:"3번 배경색"})


  //스킬의 숫자 카운트 

  //오브젝트의 절대 위치 알아내기
  var div = document.getElementById('trigger03');
  var divTop = div.getBoundingClientRect().top;
  var absoluteTop = window.pageYOffset + div.getBoundingClientRect().top;

  function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
  };
    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;
    
        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 5);
        }
    
        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 20);
        } else {
            clearTimeout(this.timer);
        }
    };

  window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
  //바디의 스크롤 위치 값이 #trigger03의 절대 위치 값 보다 클 때, 숫자가 카운트 된다.
    if ( scrollY > absoluteTop) {
      
      new numberCounter("count01", 80);
      new numberCounter("count02", 80);
      new numberCounter("count03", 50);
      new numberCounter("count04", 90);
      new numberCounter("count05", 60);
      new numberCounter("count06", 70);
      
    }
});


//1. 스크롤 내렸을 때 텍스트 애니메이션
let section03Target = document.querySelectorAll('.skill .btnTxt');
var tweenStaggerTxt = TweenMax.staggerFromTo(section03Target, 0.2,
  {
    opacity: 0,
    y: 20
  },
  {
    opacity: 1,
    y: 0
  },
  0.4
);
var scenesection03Target = new ScrollMagic.Scene({
  triggerElement: '.cont-right',
  triggerHook: 0.5,
  reverse: false
  })
  .setTween(tweenStaggerTxt)
  .addTo(controllersection01)
  // .addIndicators({name:"시작"})
//2. 아코디언 메뉴 버튼 클릭 했을 때 텍스트 애니메이션

let btnTxt = document.querySelectorAll('.numBtn');
btnTxt.forEach(function (el, index){
  btnTxt[index].addEventListener('click', txtAnimation);
  
});


function txtAnimation() {
  let target;
  if (this.getAttribute('id') === 'pfofile01') {
    new numberCounter("count01", 80);
      new numberCounter("count02", 80);
      new numberCounter("count03", 50);
      new numberCounter("count04", 90);
      new numberCounter("count05", 60);
      new numberCounter("count06", 70);
  } else if (this.getAttribute('id') === 'pfofile02') {
    target = document.querySelectorAll('.iam .btnTxt');
  } else if (this.getAttribute('id') === 'pfofile03') {
    target = document.querySelectorAll('.history .btnTxt');
  }  
  console.log(target);

  TweenMax.staggerFromTo(target, 0.3,
  {
    opacity: 0,
    y: 20
  },
  {
    opacity: 1,
    y: 0
  },
  0.4
);


};

// ==============================================================
// section04 애니메이션
// ==============================================================
let itemTarget;
itemTarget = document.querySelectorAll('.show');
  var tweenShow = TweenMax.staggerFromTo(itemTarget, 0.3,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0
    },
    0.4
  );
var sceneShow = new ScrollMagic.Scene({
  triggerElement: '.filter-cont',
  triggerHook: 0.5,
  reverse: false
  })
  .setTween(tweenShow)
  .addTo(controllersection01)


//필터 버튼 클릭 했을 때

let filterBtn = document.querySelectorAll('.filter > .btn');
filterBtn.forEach(function (el, index){
  filterBtn[index].addEventListener('click', fncFilterBtn);
  
});


function fncFilterBtn() {
  
  target = document.querySelectorAll('.show');
  console.log(target.length);
  TweenMax.staggerFromTo(target, 0.3,
  {
    opacity: 0,
    y: 20
  },
  {
    opacity: 1,
    y: 0
  },
  0.4
);


};

document.querySelector('.resume').addEventListener('click', function(){
   console.log('클릭');
});







  