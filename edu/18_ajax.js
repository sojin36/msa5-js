// 1. Html 문서에서 <form> 태그를 찾아서 변수에 담아둠
const form = document.querySelector('form');


// 2. 폼이 제출될 때 일어날 일을 감지하는 이벤트 리스너를 붙임
// 비동기 통신(axios) 사용위해 함수 앞에 async붙임
form.addEventListener('submit', async (e) => {
  // 3. 폼을 제출하면 페이지가 새로고침되는 기본 동작을 막아줍니다. (새로고침 방지!)
  e.preventDefault(); // 기존 이벤트 취소

  // 4. 사진을 가져올 기본 인터넷 주소(서버 대문 주소) 변수에 담음
  const baseURL = 'https://picsum.photos';
  // 5. 사진 창고 안에서 목록을 가져오는 상세 경로(방 이름) 변수에 담음
  const path = '/v2/list';


  // 6. 사용자가 입력창에 적은 page와 limit값을 가져옴 (항상 문자열 형태로!)
  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;


  // 7. 기본주소, 경로, 사용자가 고른 조건(페이지, 개수)합쳐서 최종 주문서 주소 완성
  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;


  try {
    // 8. 배달원(axios)에게 방금 만든 주소를 주면서 사진 가져와달라 부탁하고
    //    도착할 때까지 기다림(await)
    const response = await axios.get(url);

    // 9. 완성된 카드들을 쏙쏙 담아둘 화면 속 빈 상자(컨테이너) 선택
    const cardContainer = document.querySelector('.card-container');
    // 10. 새로운 사진을 그리기 전에, 화면에 남나있던 예전 카드들을 깨끗하게 지워줌
    cardContainer.textContent = '';


    // 11. 배달 온 사진 상자(response.data)안의 사진들을 하나씩 꺼내서 반복(forEach)
    response.data.forEach((item, idx) => {
      // [1단계] 사진을 보여줄 배경 이미지용 <div> 상자 만들고 클래스(.card-img)붙임
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      // 데이터에 들어있는 사진 주소(download_url)배경 이미지 넣어줌
      cardImg.style.backgroundImage = `url('${item.download_url}')`;



      // [2단계] 작가 이름과 ID적을 <p>태그 만들고 클래스(.card-text)붙임
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      // 글자 내용으로 아이디와 작가 이름을 보기 좋게 적어줌
      cardText.textContent = `${item.id}: ${item.author}`;

      // [3단계] 이 모든 걸 감싸줄 가장 큰 '카드 껍데기' <div> 상자를 만듦
      const card = document.createElement('div');
      card.classList.add('card'); // card.classList = 'card' 이렇게 넣으면 class에 들어있는 거 덮어씌우는 거라 xx
      //카드 껍데기 안에 아까 만든 사진(cardImg) 글씨(cardText) 자식으로 쏙 집어넣음
      card.appendChild(cardImg);
      card.appendChild(cardText);


      // [4단계] 다 조립된 완성품 카드 상자를 전체 컨테이너(.card-container) 쏙 담아서 화면에 띄움
      cardContainer.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
});

// const response = {
//   config: {},
//   data: [
//     {
//       author:"sdsd",
//       do
//     }
//   ]
// }