// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 	1-1. 다음 페이지를 가져올 때 기존 데이터는 지워지지 않습니다.
// 	1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 	2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- paramers:
// 	  - page: number
// 	  - limit: number

let page = 1;

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

  // 3. 사용하는 API는 아래와 같습니다.
  const baseURL = 'https://picsum.photos';
  const path = '/v2/list';

  const clickedBtn = e.submitter;


  // const page = e.submitter.value;
  const limit = 3;

  // 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
  const url = `${baseURL}${path}?page=${page}&limit=${limit}`

  try {

    const response = await axios.get(url); // 방금 만든 주소로 가서 데이터를 가져다줘 (택배 주문 요청 코드)

    // 카드를 넣을 컨데이너 요소
    const cardContainer = document.querySelector('.card-container');
    // cardContainer.textContent = '';

    response.data.forEach((item, idx) => {
      // 2. card-img 요소 생성
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 3. card-text 요소 생성
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${item.id}: ${item.author}`;

      // 1. card 요소 생성
      const card = document.createElement('div');
      card.classList.add('card'); // card.classList = 'card' 이렇게 넣으면 class에 들어있는 거 덮어씌우는 거라 xx
      card.appendChild(cardImg);
      card.appendChild(cardText);


      // 4. card-container에 생성한 요소 담는다
      cardContainer.appendChild(card);
    });

    page++;

  } catch (error) {
    console.error(error);
  }
});


// 초기화 버튼 새로 만든 거!
form.addEventListener('reset', async(e)=>{
  // 화면에 쌓여있던 카드를 싹 비움
  const cardContainer = document.querySelector('.card-container');
  cardContainer.textContent = '';

  page = 1;
})

