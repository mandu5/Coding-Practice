'use strict';

const menus = document.querySelector('.menus');

// 1. 조상 요소로부터 버튼에게 이벤트 위임
menus.addEventListener('click', function(e) {
  e.preventDefault();
  const curTarget = e.target;
  if (!curTarget.classList.contains('btn')) return;

// 2. 버튼의 해당 섹션 id값을 가져와 일치하는 DOM 요소를 변수 할당
  const currentSection = document.querySelector(`#${curTarget.dataset.sec}`);

  // 3. 원하는 위치로 스크롤링
  window.scrollTo({
    top: currentSection.getBoundingClientRect().top + window.pageYOffset,
    behavior: 'smooth',
  })  
})