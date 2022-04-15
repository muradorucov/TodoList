let btnAdd = document.querySelector('.data-add');
let inputData = document.querySelector('.input');
let list = document.querySelector('ul');
let deleteData = document.querySelector('.delete');
let listArr = [];
btnAdd.addEventListener("click", () => {
    listArr.push(inputData.value);
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/icon2.png" /></li>`
    })
    list.innerHTML = space;
});

function del(index) {
    listArr.splice(index, 1)
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/icon2.png" /></li>`
    })
    list.innerHTML = space;

    if (space == "") {
        list.style.border = "none"
    }
};

deleteData.addEventListener("click", () => {
    inputData.value = ""
})