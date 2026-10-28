const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기존 이벤트 취소

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
});