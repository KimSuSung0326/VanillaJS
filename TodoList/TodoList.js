const form = document.querySelector('form') // form 태크 선택
const taskList = document.querySelector('#task-List')// Ul 테그 선택

function addTask(task){
    const ListItem = document.createElement('li') //할 일 목록인 li 태그 선택
    ListItem.innerHTML = `<input type = "checkbox" id = "check" /> <span>${task} </span> <button> 삭제</button>` // li 태그 출력
    taskList.appendChild(ListItem); //Ul 테그의 자식으로 li 추가
}

form.addEventListener('submit', (event) => { // input 테그에 작성하면
    event.preventDefault();// 페이지가 리로드 되는 것을 방지
    const input = document.querySelector("#task-input");// input 테그 선택
    const task = input.value; // input 태그의 값 저장
    addTask(task);// input 값을 addTask() 함수에 매개변수로 넣어주기
    input.value= ''// input 값 초기화
})
taskList.addEventListener('click', (event) => { // Ul 태그 클릭되면
    if(event.target.tagName === "BUTTON"){ // 버튼이라면
        const ListItem = event.target.parentElement// 버튼의 부모인 li태그를 선택
        taskList.removeChild(ListItem); //Ul 태그에서 li 태그 삭제
    }

})
 // 체크박스가 클릭된다면 span 태그 디자인 바꾸기
//1. 체크박스는 이벤트 리스너 , span 디자인 바꾸기는 함수
function clickBox (event){
    // 체크 버튼이 클릭 된다면
    const check = event.target;
    const span = check.nextElementSibling;// 체크 박스의 다음 형제 노드 선택
    if(check.checked){
        span.classList.add("checked");
    }else{
        span.classList.remove("checked");
    }
}
taskList.addEventListener('change', (event) =>{ //Ul값이 바뀐다면
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        clickBox(event);
    }
})