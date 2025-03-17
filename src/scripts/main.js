'use strict';

const spider = document.querySelector('.spider');
const parentEl = document.querySelector('.wall');

parentEl.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.top = '50%';
spider.style.left = '50%';
spider.style.transform = 'translate(-50%, -50%)';
