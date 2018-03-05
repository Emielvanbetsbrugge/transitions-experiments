'use strict';
import Smooth from 'smooth-scrolling';
import charming from 'charming';

const letters = () => {
  let h1 = document.querySelector('h1');
  charming(h1, {
    tagName: 'b', // defaults to 'span'
    classPrefix: 'letter' // defaults to 'char'
  })

  var letterItems = document.querySelectorAll('h1 b');
  TweenMax.staggerFromTo(letterItems, .5, {opacity:0}, {opacity:1, delay: 1}, 0.05);
}

const init = () => {

  const smoothContainer = document.querySelector('.smooth');
  const smooth = new Smooth({
    native: true,
    section: smoothContainer,
    ease: 0.03,
    noscrollbar: true,
  })

  smooth.init();
  letters();

}

init();
