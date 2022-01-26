const oid = document.getElementById('me');
const tid = document.getElementById('portfolio');
const thid = document.getElementById('skills');
const fid = document.getElementById('contact');
const elemarr = [oid, tid, thid, fid];
const navStar = document.getElementById('nav');
const main = document.querySelector('main');
let arcnet = document.getElementById('arcnet');
var tab = document.getElementById('info-tab');
const resume = document.querySelector('.me .resume');
const vew = document.querySelector('.me .view');

window.addEventListener("resize", ()=>{
  let widthi = window.innerWidth;
  let heighti = window.innerHeight;
  let tabheighti = tab.offsetHeight;
  if (tab.classList.contains('show')) {
    if (widthi >= 992 || heighti >= 992) {
      if (widthi < 992) {
        tab.style.maxWidth = `${screen.width * .7632}px`;
      }
      if (widthi >= 992){
        tab.style.maxWidth = `${screen.width * .8356}px`;
      }
    }
    if (widthi < 992 && heighti < 992) {
      if (tabheighti <= (heighti * .8) || tabheighti > (heighti -navStar.offsetHeight)) {
        tab.style.maxHeight = `${heighti - navStar.offsetHeight - 25}px`;
      }
      if(widthi > heighti) {
        navStar.classList.add('landscape');
        tab.style.maxHeight = `${heighti - 10}px`;
        tab.style.maxWidth = `${widthi * .7665}px`;
        console.log('hi');
      }
      if (widthi < heighti && navStar.classList.contains('landscape')){
        navStar.classList.remove('landscape');
          tab.style.maxHeight = `${heighti - navStar.offsetHeight - 25}px`;
      }
    }
  }
});

function magicDisplay(elem, event) {
  arcnet = document.getElementById('arcnet');
  const id = elem;
  const navi = document.getElementById(id);
  const outer = document.querySelector(`#${id} .outer`);
  const inner = document.querySelector(`#${id} .inner`);
  const outers = document.querySelectorAll(`.outer`);
  const inners = document.querySelectorAll(`.inner`);
  let toppy = arcnet.offsetTop;
  let lefty = arcnet.offsetLeft;
  let heighty = arcnet.offsetHeight;
  let widthy = arcnet.offsetWidth;
  let lefter = outer.offsetLeft;
  let widther = outer.offsetWidth;
  let widder = inner.offsetWidth;
  let mainywidth = main.offsetWidth;
  let mainyheit = main.offsetHeight;
  let mainytop = main.offsetTop;
  var finleft, finheit;
  let smlefeffy = (navi.offsetWidth/2) - (widthy/4);
  let smriteffy = (navi.offsetWidth/2) - (widthy/4);
  let roheit = (heighty + toppy) + 20;
  let rtheit = (heighty + toppy) + navi.offsetHeight + 20;
  let mqroheit = navi.offsetHeight/2;
  let mqroleft = navi.offsetWidth + (navi.offsetWidth - outer.offsetLeft) + (arcnet.offsetLeft - navStar.offsetWidth - navStar.offsetLeft);
  let mqrtheit = navi.offsetHeight/2;
  let mqrtleft = (navStar.offsetWidth - outer.offsetLeft) + (arcnet.offsetLeft - navStar.offsetWidth - navStar.offsetLeft);
  let bordRadius = 50;
  console.log(outer.offsetLeft, navStar.offsetWidth, outer.offsetLeft)
  movetoArcnet(id, outer, navi, arcnet, roheit, rtheit, mqroleft, mqrtleft, mqroheit, mqrtheit);
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    setTimeout(()=>{
      setBorderradius(bordRadius, outers, inners, elemarr)
    }, 800);
    setTimeout(() => {
      setClickerwidth(widthy, widther, widder, outers, inners, elemarr)
    }, 1000);
    setTimeout(() =>{
      bigReveal(arcnet, outer)
    }, 1600);
    setTimeout(() =>{
      expand(arcnet)
    }, 2000);
    setTimeout(() =>{
      setPropertiesone(elemarr, navStar, main, navi, inners, arcnet)
    }, 3000);
    setTimeout(() =>{
      setClose(navi, elemarr)
    }, 3000);
    setTimeout(()=> {
      flyIn(id);
    }, 3400)
    setTimeout(() =>{
      setHeight(navStar, main)
    }, 4000);
  }

if (window.innerWidth >= 992 || window.innerHeight >= 992) {
  console.log('heyl')
  setTimeout(()=>{
    setSize(navi, arcnet, outer, inner, outers, inners)
  }, 1000)
  setTimeout(() =>{
    bigReveal(arcnet, outer)
  }, 2000);
  setTimeout(()=>{
    setNav(navStar, navi, elemarr);
  }, 2400)
  setTimeout(() =>{
    expand(arcnet)
  }, 3400);
  setTimeout(()=>{
    setClose(navi, elemarr);
  }, 4400)
  setTimeout(()=> {
    flyIn(id);
  }, 4400)
  setTimeout(()=>{
    setWidth();
  }, 5000)
}



  // if (document.getElementsByTagName('style') == false) {
  //   let styl = document.getElementsByTagName('style')[0];
  //   styl[0].parentNode.removeChild(styl[0]);
  //   console.log(document.getElementsByTagName('style') != undefined)
  // }
}

function movetoArcnet(id, outer, navi, arcnet, roheit, rtheit, mqroleft, mqrtleft, mqroheit, mqrtheit){
  let outerLeft = outer.offsetLeft;
  let outerWit = outer.offsetWidth;
  let naviWidth = navi.offsetWidth;
  let lLeft = naviWidth - outerLeft - (outer.offsetWidth / 2);
  let rLeft = (navStar.offsetWidth / 2) - outerLeft - (outer.offsetWidth / 2);
  var finheit, finleft;

  if (window.innerWidth < 992 && window.innerHeight < 992) {
    if (id == 'me' || id =='skills') { finleft = lLeft; }
      if (id == 'portfolio' || id =='contact') {finleft = `${rLeft}`;}
      if (id == 'me' || id =='portfolio') { finheit = roheit; }
      if (id == 'skills' || id =='contact') {finheit = rtheit;}
      console.log(rLeft, outer.offsetLeft, outer.offsetWidth, finheit);
      let style = document.createElement('style');
      style.type = 'text/css'
      let keyframe = `@keyframes totheArc {
                          100% {
                            transform: translate(${finleft}px, -${finheit}px)
                          }
                      }`
      style.innerHTML = keyframe;
      document.head.appendChild(style);
      outer.style.animation = 'totheArc .4s forwards';
  }
  if (window.innerWidth > 992 || window.innerHeight >= 992) {
      if (id == 'me' || id =='skills') { finleft = mqroleft; }
      if (id == 'portfolio' || id =='contact') {finleft = mqrtleft;}
      if (id == 'me' || id =='portfolio') { finheit = mqroheit; }
      if (id == 'skills' || id =='contact') {finheit = `-${mqrtheit}`;}
      let style = document.createElement('style');
      style.type = 'text/css'
      let keyframe = `@keyframes toArc {
                          100% {
                            transform: translate(${finleft}px, ${finheit}px)
                          }
                      }`
      style.innerHTML = keyframe;
      document.head.appendChild(style);
      outer.style.animation = 'toArc .4s forwards';
      removeAttr(elemarr)
    }
}

function setSize(navi, arcnet, outer, inner, outers, inners) {
  tabi = document.getElementById('info-tab');
  bordRadius = 50;
  widder = outer.offsetWidth;
  widthe = inner.offsetWidth;

  setRadius = setInterval(()=> {
    if (bordRadius == 7) {clearInterval(setRadius);}
    bordRadius--;
      navi.style.borderRadius = `${bordRadius}%`;
      outer.style.borderRadius = `${bordRadius}%`;
      inner.style.borderRadius = `${bordRadius}%`;
  }, 30)

  if (widder > 160) {
    setNavSz = setInterval(()=> {
      widder--;
      widthe--;
      elemarr.forEach((item) => {
        item.style.width = `${widder}px`;
        item.style.height = `${widder}px`;
      });
      outers.forEach((item) => {
        item.style.width = `${widder}px`;
        item.style.height = `${widder}px`;
      });
      inners.forEach((item) => {
        item.style.width = `${widthe}px`;
        item.style.height = `${widthe}px`;
    });
    if (widder == 130){clearInterval(setNavSz)};
  }, 30)
}
  tabi.style.width = `${outer.offsetWidth}px`;
  tabi.style.height = `${outer.offsetWidth}px`;
}

function removeAttr(elemarr) {
  elemarr.forEach((item) => {
    item.removeAttribute('onclick')
  });
}

function setClickerwidth(widthy, widther, widder, outers, inners, elemarr){
  if (widthy < widther) {
    let wsetter = setInterval(() => {
      widther--;
      widder--;
      if (widther === 75) {clearInterval(wsetter);}
      outers.forEach((item) => {
        item.style.width = `${widther}px`;
        item.style.height = `${widther}px`;
      });
      inners.forEach((item) => {
        item.style.width = `${widder}px`;
        item.style.height = `${widder}px`;
      });
      elemarr.forEach((item) => {
        item.style.width = `${widther}px`;
        item.style.height = `${widther}px`;
      })
    }, 10)
  }
}

function setPropertiesone(elemarr, navStar, main, navi, inners, arcnet){
    elemarr.forEach((item) => {
      item.style.flexGrow = '1';
      item.style.flexBasis = '20%';
    })
    inners.forEach((item) => {
      item.style.fontSize = '.8em';
    });

    navStar.style.alignItems = 'flex-end';
    navStar.style.marginBottom = '0px';
    main.style.paddingBottom = '5px';
}

function setNav(navStar, navi, elemarr){
  let widte = navStar.offsetWidth;
  let lefte = navStar.offsetLeft;

  widthy = navi.offsetWidth;

  let setNavW = setInterval(()=>{
    widthy -=2;
    navStar.style.minWidth = `${widthy}px`;
    if (widthy <= 130) {clearInterval(setNavW)}
  })

  let setW = setInterval(()=>{
    widte -= 2;
    navStar.style.width = `${widte}px`;
    if (widte <= 140) {clearInterval(setW)}
  })
  let setMleft = setInterval(()=>{
    lefte--;
    navStar.style.marginLeft = `${lefte}px`;
    if (lefte == 0) {clearInterval(setMleft)}
  })
}


function bigReveal(arcnet, outer) {
  let otterArche = document.querySelector('#arcnet .outer-arc')
  let tip = arcnet.offsetTop + otterArche.offsetTop + 20;
  let bit = arcnet.offsetLeft + otterArche.offsetLeft;
  const tab = document.getElementById('info-tab');

  tab.style.top = `${tip}px`;
  tab.style.left = `${bit}px`;
  tab.classList.replace('fade', 'reveal')
  tab.classList.replace('hide', 'show');
  outer.classList.add('fade');
  outer.classList.replace('show', 'hide')

}

function expand(arcnet) {
  let tabi = document.getElementById('info-tab');
  tabi.classList.add('expand');
  tabi.style.top = '30px';
  arcnet.classList.add('fade');
  arcnet.classList.replace('show', 'hide');
}

function flyIn(id){
  let text = document.querySelector(`.${id}`);
  text.classList.replace('hide', 'megshow');
  if (text.classList.contains('takeout')) {
    text.classList.replace('takeout', 'bringit');
  } else {
    text.classList.add('bringit');
  }
}

function flyAway(id) {
  let text = document.querySelector(`.${id}`);
  if (text.classList.contains('bringit')){
    text.classList.replace('bringit', 'takeout');
  } else {
    text.classList.add('takeout');
  }
  setTimeout(()=>{
    text.classList.replace('megshow', 'hide');
    text.classList.remove('takeout');
  },1500)

}

function setWidth(){
  tabi = document.getElementById('info-tab');
  let objWidth = tabi.offsetWidth;
  let objLeft = 2.5;
  let tWidth = objWidth - 130;
  let targMarg = oid.offsetWidth;

  let setWidty = setInterval(()=>{
    objWidth--;
    tabi.style.maxWidth = `${objWidth}px`;
    if(tWidth == objWidth) {clearInterval(setWidty)}
  },40)

  let setLefti = setInterval(()=>{
    objLeft++;
    tabi.style.marginLeft = `${objLeft}px`;
    if (objLeft >= targMarg) {clearInterval(setLefti)}
  }, 40)
  tabi.style.top = '45px';
}

function setHeight(navStar, main){
  const inftab = document.getElementById('info-tab');
  let objHeight = inftab.offsetHeight;
  let tHeight = window.innerHeight - (navStar.offsetHeight + 5 + 25);

  let setHetty = setInterval(()=>{
    objHeight--;
    inftab.style.maxHeight = `${objHeight}px`;
    if(tHeight == objHeight) {clearInterval(setHetty)}
  },40)
}

function setClose(navi, elemarr){
  let xid = navi.id;
  let outArc = document.createElement('div')
  outArc.id = 'archy';
  outArc.className = 'outer-arc';
  if (window.innerWidth < 992 && window.innerHeight < 992 ) {
    outArc.style.width = '62px';
    outArc.style.height = '62px';
  } else {
    outArc.style.width = '120px';
    outArc.style.height = '120px';
  }

  navi.appendChild(outArc)
  let inArc = document.createElement('div');
  inArc.className = 'inner-arc';
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    inArc.style.width = '62px';
    inArc.style.height = '62px';
  } else {
    inArc.style.width = '118px';
    inArc.style.height = '118px';
  }

  outArc.appendChild(inArc)
  let close = document.createElement('h3');
  close.textContent = 'X';
  inArc.appendChild(close);

  addonClickAttr(elemarr, xid, navi);

}

function addonClickAttr(elemarr, xid, navi) {
  elemarr.forEach((item) => {
    item.setAttribute('onclick', `rainData('${xid}', '${item.id}', event)`)
  });
  navi.removeAttribute('onclick');
  navi.setAttribute('onclick', `setsmDisplay('${xid}', event)`)
}

function setBorderradius(bordRadius, outers, inners, elemarr) {
  let setRadius = setInterval(()=> {
    if (bordRadius == 7) {clearInterval(setRadius);}
    bordRadius--;
    outers.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    });
    inners.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    });
    elemarr.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    })
  }, 30)
}

function setOrigonclick(elemarr) {
  elemarr.forEach((item) => {
    item.setAttribute('onclick', `magicDisplay('${item.id}', event)`);
  });

}

function rainData(xid, id, event){
  let primId = document.getElementById(id);
  let xId = document.getElementById(xid);
  let arcNet = document.getElementById('archy');
  let nav = document.getElementById('nav');

  if (window.innerWidth < 992 && window.innerHeight < 992) {
    flyArcnet(primId, xId, arcNet);
    setTimeout(()=>{nestnXmove(primId, xId, arcNet)}, 2000)
    setTimeout(()=>{flyAway(xid)}, 500)
    setTimeout(()=>{flyIn(id)}, 2000)
  }
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    flyArcnet(primId, xId, arcNet);
    setTimeout(()=>{nestnXmove(primId, xId, arcNet)}, 2000)
    setTimeout(()=>{flyAway(xid)}, 500)
    setTimeout(()=>{flyIn(id)}, 2000)
  }
}

function flyArcnet(primId, xId, arcNet) {
  let primLefty = primId.offsetLeft;
  let primTop = primId.offsetTop;
  let xLeft = xId.offsetLeft;
  let xTop = xId.offsetTop;
  let arcTop = arcNet.offsetTop;
  let arcLeft = arcNet.offsetLeft;
  let totLef =  primLefty + (arcLeft - xLeft);
  let totTop = primTop + (xTop - arcTop);
  let targL = 0;
  var loafy;
  xId.style.zIndex = '1';
  arcNet.style.position = 'absolute';

  if ( window.innerWidth < 992 && window.innerHeight < 992 && window.innerWidth < window.innerHeight) {
    console.log('ki')
    if ( primLefty > xLeft) {
      loafy = setInterval(()=>{
        arcLeft++;
        arcNet.style.left = `${arcLeft}px`;
        if (arcLeft == totLef) {clearInterval(loafy)}
      },5)
    } else if ( primLefty < xLeft ) {
        loafy = setInterval(()=>{
        arcLeft--;
        arcNet.style.left = `${arcLeft}px`;
        if (arcLeft == totLef) {clearInterval(loafy)}
      },5)
    } else { return null; }
  }

  if (window.innerWidth >= 992 || window.innerHeight >= 992 || window.innerWidth > window.innerHeight) {
    console.log('hi')
    if ( primTop > xTop) {
      var toafy = setInterval(()=>{
        arcTop++;
        arcNet.style.top = `${arcTop}px`;
        if (arcTop == totTop) {clearInterval(toafy)}
      },5)
    } else if ( primTop < xTop ) {
        toafy = setInterval(()=>{
        arcTop--;
        arcNet.style.top = `${arcTop}px`;
        if (arcTop == totTop) {clearInterval(toafy)}
      },5)
    } else { return null; }
  }
}

function nestnXmove(primId, xId, arcNet) {
  let archie = arcNet.cloneNode(true);
  let pOtter = document.querySelector(`#${primId.id} .outer`);
  let xOtter = document.querySelector(`#${xId.id} .outer`);
  inner = document.querySelector(`#${xId.id} .inner`);
  xOtter.removeAttribute('style');
  if ( window.innerWidth < 992 && window.innerHeight < 992) {
    xOtter.style.borderRadius = '7%';
    xOtter.style.width = '75px';
    xOtter.style.height = '75px';
    archie.removeAttribute('style');
    setTimeout(()=>{
      pOtter.classList.replace('show', 'hide');
      arcNet.remove();
      primId.appendChild(archie);
    }, 1000)
  }
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    xOtter.style.width = '130px';
    xOtter.style.height = '130px';
    inner.style.borderRadius = '50%';
    setTimeout(()=>{
      pOtter.classList.replace('show', 'hide');
      arcNet.remove();
      primId.appendChild(archie);
      archie.style.width = "120px";
      archie.style.height = '120px';
      archie.style.top = `${primId.offsetTop}px`;
    }, 1000)
  }
  pOtter.classList.add('fade');
  xOtter.classList.replace('hide', 'show');
  xOtter.classList.replace('fade', 'reveal');

  removeAttr(elemarr);
  addonClickAttr(elemarr, primId.id, primId);
}

function setsmDisplay(xid, event) {
  xId = document.getElementById(xid);
  arcNet = document.querySelector(`#archy`);
  xOtter = document.querySelector(`#${xid} .outer`);
  pArcNet = document.getElementById('arcnet');
  outers = document.querySelectorAll('.outer');
  inners = document.querySelectorAll('.inner');
  removeAttr(elemarr);
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    flyAway(xid);
    setTimeout(()=>{setBox(xId, arcNet, xOtter)}, 500);
    setTimeout(()=>{roundNavitems(pArcNet, outers, inners, elemarr)}, 1500);
    setTimeout(()=>{shrinkWidth(pArcNet)},2000)
    setTimeout(()=>{vanishInfobox()}, 3800)
    setTimeout(()=>{setProptwo(outers, inners, elemarr)}, 4400)
    setTimeout(()=>{setPropthree(pArcNet, navStar, main)}, 4000)
  }
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    flyAway(xid);
    setTimeout(()=>{setBox(xId, arcNet, xOtter)}, 500);
    setTimeout(()=>{origNavSize(pArcNet)}, 2500);
    setTimeout(()=>{shrinkWidth(pArcNet)},1000)
    setTimeout(()=>{origSetNav(navStar)}, 2500)
    setTimeout(()=>{vanishInfobox()}, 4000)
    // setTimeout(()=>{setProptwo(outers, inners, elemarr)}, 4400)
    setTimeout(()=>{setPropthree(pArcNet, navStar, main)}, 5000)
  }
}

function origNavSize(pArcNet) {
  tabi = document.getElementById('info-tab');
  pArcNet.classList.replace('hide', 'show');
  pArcNet.classList.replace('fade', 'reveal');
  setNavSz = setInterval(()=> {
    widder++;
    widthe++;
    console.log(widder, widthe);
    elemarr.forEach((item) => {
      item.style.width = `${widder}px`;
      item.style.height = `${widder}px`;
    });
    outers.forEach((item) => {
      item.style.width = `${widder}px`;
      item.style.height = `${widder}px`;
    });
    inners.forEach((item) => {
      item.style.width = `${widthe}px`;
      item.style.height = `${widthe}px`;
    });
    if (widder == 200){clearInterval(setNavSz)};
  }, 30)
}

function setBox(xId, arcNet, xOtter){
  arcNet.classList.add('fade');
  xOtter.removeAttribute('style');
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    setTimeout(()=>{
      xOtter.style.borderRadius = '6%';
      xOtter.style.width = '75px';
      xOtter.style.height = '75px';
      xOtter.classList.replace('fade', 'reveal');
      xOtter.classList.replace('hide', 'show');
      arcNet.remove();
    }, 400)
  }
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    pArcNet.classList.replace('hide', 'show');
    pArcNet.classList.replace('fade', 'reveal');
    inner = document.querySelector(`#${xId.id} .inner`);
    setTimeout(()=>{
      inner.removeAttribute('style');
      inner.style.width = '122px';
      inner.style.height = '122px';
      xOtter.style.width = '130px';
      xOtter.style.height = '130px';
      xOtter.classList.replace('fade', 'reveal');
      xOtter.classList.replace('hide', 'show');
      arcNet.remove();
    }, 400)
  }
}

function roundNavitems(pArcNet, outers, inners, elemarr){
  pArcNet.classList.replace('hide', 'show');
  pArcNet.classList.replace('fade', 'reveal');
  if (navStar.classList.contains('landscape')) {
    navStar.classList.remove('landscape');
  }
  bordRadius = 7;
  setRadius = setInterval(()=> {
    if (bordRadius == 50) {clearInterval(setRadius);}
    bordRadius++;
    outers.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    });
    inners.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    });
    elemarr.forEach((item) => {
      item.style.borderRadius = `${bordRadius}%`;
    })
  }, 30)
}

function shrinkWidth(pArcNet) {
  let taby = document.getElementById('info-tab');
  let tabLeft = taby.offsetLeft;
  let arcMLeft = pArcNet.offsetLeft;
  let widthe = taby.offsetWidth;
  var wSetter, mSetter, mTopSet;
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    wSetter = setInterval(()=>{
      widthe -= 1.25;
      taby.style.maxWidth = `${widthe}px`;
      if ( widthe <= 62 ) {clearInterval(wSetter)}
    }, 1)
    mSetter = setInterval(()=>{
      tabLeft++;
      taby.style.marginLeft = `${tabLeft}px`;
      if ( tabLeft == (arcMLeft - 20) ) {clearInterval(mSetter)}
    }, 1)
  }

  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    wSetter = setInterval(()=>{
      widthe -= 2.5;
      taby.style.maxWidth = `${widthe}px`;
      if ( widthe <= 200 ) {clearInterval(wSetter)}
    }, 1)
    mSetter = setInterval(()=>{
      tabLeft += 2.5;
      taby.style.marginLeft = `${tabLeft}px`;
      if ( tabLeft >= (arcMLeft - 20) ) {clearInterval(mSetter)}
    }, 1)
  }
  shrinkHeight();
}

function shrinkHeight(){
  let taby = document.getElementById('info-tab');
  let tabyTop = taby.offsetTop;
  let arcOtter = document.querySelector(`#arcnet .outer-arc`);
  arcTop = arcnet.offsetTop;
  let otterTop = arcOtter.offsetTop;
  let heighte = taby.offsetHeight;
  var hSetter, topSetter;

  if (window.innerWidth < 992 && window.innerHeight < 992) {
    hSetter = setInterval(()=>{
      heighte -= 2;
      taby.style.maxHeight = `${heighte}px`;
      if ( heighte <= 62 ) {clearInterval(hSetter)}
    }, 1);
    topSetter = setInterval(()=>{
      tabyTop += .5;
      taby.style.top = `${tabyTop}px`;
      if ( tabyTop >= (otterTop + 40) ) {clearInterval(topSetter)}
    }, 3)
  }
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    hSetter = setInterval(()=>{
      heighte -= 2.5;
      taby.style.maxHeight = `${heighte}px`;
      if ( heighte <= 200 ) {clearInterval(hSetter)}
    }, 1);
    let topiSetter = setInterval(()=>{
      tabyTop += 1;
      taby.style.top = `${tabyTop}px`;
      if ( tabyTop >= (arcTop + 20) ) {clearInterval(topiSetter)}
    }, 3)
  }
}

function origSetNav(navStar){
  let widte = navStar.offsetWidth;
  let lefte = navStar.offsetLeft;
  let targWidth = window.innerWidth * .5625;
  targL = window.innerWidth * .0375;

  setNavW = setInterval(()=>{
    widte +=2;
    navStar.style.minWidth = `${widte}px`;
    navStar.style.maxWidth = `${widte}px`;
    if (widte >= targWidth) {clearInterval(setNavW)}
  }, 5)

  // setMleft = setInterval(()=>{
  //   lefte++;
  //   navStar.style.marginLeft = `${lefte}px`;
  //   if (lefte == targL) {clearInterval(setMleft)}
  // }, 5)
}

function vanishInfobox() {
  taby = document.getElementById('info-tab');
  taby.classList.replace('reveal', 'fade');
  setTimeout(()=>{taby.classList.replace('show', 'hide')},200);
}

function setProptwo(outers, inners, elemarr) {
  elemarr.forEach((item) => {
    let basis = 20;
    let baseSet = setInterval(()=>{
      basis++;
      item.style.flexBasis = `${basis}%`;
      if (basis == 50) {clearInterval(baseSet)}
    },20)
    item.style.flexGrow = '2';
  })

  widther = outers[0].offsetWidth;
  widder = inners[0].offsetWidth;

  wsetter = setInterval(() => {
    widther++;
    widder++;
    outers.forEach((item) => {
      item.style.width = `${widther}px`;
      item.style.height = `${widther}px`;
    });
    inners.forEach((item) => {
      item.style.width = `${widder}px`;
      item.style.height = `${widder}px`;
    });
    elemarr.forEach((item) => {
      item.style.width = `${widther}px`;
      item.style.height = `${widther}px`;
    })
    if (widther === 130) {clearInterval(wsetter);}
  }, 20)
}

function cardDisplay(id, event) {
  let parent = document.getElementById(id);
  let targ = document.querySelector(`#${parent.id} .info-card`);
  let targ2 = document.querySelector(`#${parent.id} #rev-card`);
  let img = document.querySelector(`#${parent.id} img`);
  let card = document.querySelectorAll('.card');

  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    card.forEach((item, i) => {
      if (item.classList.contains('card-show')) {
        item.classList.remove('card-show');
        item.removeAttribute('style');
        let item1 = document.querySelector(`#${item.id} .info-card`);
        let item2 = document.querySelector(`#${item.id} #rev-card`);
        item1.classList.replace('show', 'hide');
        item1.classList.remove('info-show');
        item1.removeAttribute('style');
        item2.classList.replace('show', 'hide');
        item2.classList.remove('rev-show');
      }
    });
    let haiti = img.offsetHeight;
    let topi = img.offsetTop;
    let witi = img.offsetWidth;
    targ.style.height = `${haiti}px`;
    parent.style.maxWidth = '100%';
    targ.classList.replace('hide', 'show');
    targ.classList.add('info-show');
    setTimeout(()=>{
      parent.classList.add('card-show');
      targ2.classList.replace('hide', 'show');
      targ2.classList.add('rev-show');
    }, 3000)
  }
  if (window.innerWidth < 992 && window.innerHeight < 992) {
    card.forEach((item, i) => {
      if (item.classList.contains('card-show')) {
        item.classList.remove('card-show');
        item.removeAttribute('style');
        let item1 = document.querySelector(`#${item.id} .info-card`);
        let item2 = document.querySelector(`#${item.id} #rev-card`);
        item1.classList.replace('show', 'hide');
        item1.classList.remove('info-mob');
        item1.removeAttribute('style');
        item2.classList.replace('show', 'hide');
        item2.classList.remove('rev-show');
      }
    });
    haiti = img.offsetHeight;
    topi = img.offsetTop;
    witi = img.offsetWidth;
    targ.style.position = 'absolute';
    targ.style.top = `${topi}px`;
    targ.style.minWidth = `${witi}px`;
    targ.style.maxWidth = `${witi}px`;
    targ.classList.replace('hide', 'show');
    targ.classList.add('info-mob');

    heiti = 0;
    let setHaiti = setInterval(()=>{
      heiti++;
      targ.style.maxHeight = `${heiti}px`;
      targ.style.minHeight = `${heiti}px`;
      if (heiti === haiti){clearInterval(setHaiti)}
    }, 1);
    setTimeout(()=>{
      parent.classList.add('card-show');
      targ2.classList.replace('hide', 'show');
      targ2.classList.add('rev-show');
    }, 3000)
  }
}

function viewResume() {
  console.log(vew, resume);
  if (vew.textContent == 'View') {
    resume.classList.replace('hide', 'megshow');
    vew.textContent = '';
    vew.textContent = 'Close';
    vew.removeAttribute('onclick');
    vew.setAttribute('onclick', 'closeResume()');
  }
}

function closeResume() {
  if (vew.textContent == 'Close') {
    resume.classList.replace('megshow', 'hide');
    vew.textContent = '';
    vew.textContent = 'View';
    vew.removeAttribute('onclick');
    vew.setAttribute('onclick', 'viewResume()');
  }
}

function printResume() {
  window.open('resume.html');
}

function setPropthree(pArcNet, navStar, main){
  taby = document.getElementById('info-tab');
  navStar.removeAttribute('style');
  main.removeAttribute('style');
  pArcNet.classList.remove('reveal')
  taby.removeAttribute('style');
  taby.classList.remove('expand');
  if (window.innerWidth >= 992 || window.innerHeight >= 992) {
    elemarr.forEach((item) => {
      item.removeAttribute('style');
    });
    outers.forEach((item) => {
      item.removeAttribute('style');
      if (item.classList.contains('reveal')){
        item.classList.remove('reveal');
      }
    });
    inners.forEach((item) => {
      item.removeAttribute('style');
    });
  }
  setOrigonclick(elemarr);
}
