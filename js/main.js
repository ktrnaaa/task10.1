const elBTN = document.querySelector(".btn")
const elClearBTN = document.querySelector(".clearBtn")
let namesList = document.querySelector(".ListOf")
const html = []

const elGenderList = document.getElementById("gender")
const elFemaleAnswer = document.querySelector(".femaleanswer")
const elMaleAnswer = document.getElementById("year")



elBTN.addEventListener('click', () => {

    let elInput = document.querySelector(".nameOf").value;

    html.push(elInput)
    
    const newArr = html.map((item) => {

        let list = `<li>${item}</li>`
        return list
        
        
    })
    console.log(newArr)

    const list = newArr.join ('');
    console.log(list)

    let namesList = document.querySelector(".ListOf > ol")
    namesList.innerHTML = list;


})


elClearBTN.addEventListener('click', () => {

    html.length = 0;
    console.log(html)


    namesList.innerHTML = html
})




