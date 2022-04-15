let btnAdd = document.querySelector('.data-add');
let inputData = document.querySelector('.input');
let list = document.querySelector('ul');
let listBorder = document.querySelector('.list')
let deleteData = document.querySelector('.delete');
let listArr = [];
btnAdd.addEventListener("click", () => {
    listArr.push(inputData.value);
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
    })
    list.innerHTML = space;
    listBorder.style.border = '1px solid #C4C4C4';
    listBorder.style.margin = '20px 0';
});

function del(index) {
    listArr.splice(index, 1)
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
    })
    list.innerHTML = space;

    if (space == "") {
        listBorder.style.border = "none";
        listBorder.style.margin = '0';
    }
};

deleteData.addEventListener("click", () => {
    inputData.value = ""
})