const cardsWrapper = document.querySelector('.cards-wrapper');
const body = document.querySelector('body');
let data;

//cards variables
const templ = document.querySelector('#card');
const nameCard = templ.content.querySelector('.text-heading-3');
const description = templ.content.querySelector('.text-medium');
const price = templ.content.querySelector('.price');
const img = templ.content.querySelector('img');

//cards modal variables
const templModal = document.querySelector('#card-modal');
const closeBtn1 = templModal.content.querySelector('.close-btn');
const modalWrap1 = templModal.content.querySelector('.modal-wrap');
const nameCardModal = templModal.content.querySelector('.text-heading-3');
const descriptionModal = templModal.content.querySelector('.text-medium');
const priceModal = templModal.content.querySelector('.dollar');
const imgModal = templModal.content.querySelector('img');
let sizeBtns = templModal.content.querySelector('.menu-select');
let additivesBtns = templModal.content.querySelector('.additives');
let checkbox = templModal.content.querySelectorAll('.checkbox');
let s = templModal.content.querySelector('.s');
let m = templModal.content.querySelector('.m');
let l = templModal.content.querySelector('.l');
let ad1 = templModal.content.querySelector('.ad1');
let ad2 = templModal.content.querySelector('.ad2');
let ad3 = templModal.content.querySelector('.ad3');

//buttons
const coffeeBtn = document.querySelector('.coffee-select');
const teaBtn = document.querySelector('.tea-select');
const dessertBtn = document.querySelector('.dessert-select');


let coffeeItems;
let teaItems;
let dessertsItems;

// Функция обработки клика карточки для вызова модального окна
window.onload = function () { 
    update()   
}

function update(){
    let nodes = cardsWrapper.children;
    let cardsArray = Array.from(nodes);
    console.log(nodes);
    
    cardsArray.forEach(el => {
        el.addEventListener('click', (e) => {
            console.log(el.id)
            let modalProduct = data.filter(item => item.name === el.id);
            console.log(modalProduct[0])
            showCardModal(modalProduct[0])
        })
    });
}

        //Отрисовка modal и их содержимого
        function showCardModal(i) {
            let modalCard = templModal.content.cloneNode(true);

            //modal buttons
            modalWrap = modalCard.querySelector('.modal-wrap');
            closeBtn = modalCard.querySelector('.close-btn');
            let nameCard = modalCard.querySelector('.text-heading-3');
            let description = modalCard.querySelector('.text-medium');
            let price = modalCard.querySelector('.dollar');
            let img = modalCard.querySelector('img');
            let sizeBtns = modalCard.querySelector('.menu-select');
            let additivesBtns = modalCard.querySelector('.additives');
            let checkbox = modalCard.querySelectorAll('.checkbox');
            let s = modalCard.querySelector('.s');
            let m = modalCard.querySelector('.m');
            let l = modalCard.querySelector('.l');
            let ad1 = modalCard.querySelector('.ad1');
            let ad2 = modalCard.querySelector('.ad2');
            let ad3 = modalCard.querySelector('.ad3');
            body.append(modalCard);
            nameCard.innerHTML = i.name;
            description.innerHTML = i.description;
            price.innerHTML = `$${i.price}`; 
            img.src = i.img;
            s.innerHTML = i.sizes.s.size;
            m.innerHTML = i.sizes.m.size;
            l.innerHTML = i.sizes.l.size;
            ad1.innerHTML = i.additives[0].name;
            ad2.innerHTML = i.additives[1].name;
            ad3.innerHTML = i.additives[2].name;
            let newPrice =  (Number(i.price)).toFixed(2);
            let additivesPrice = 0;
            let resPrice = 0;
            let sizePrice = (Number(i.price)).toFixed(2);

            function printPrice(){
                resPrice = (Number(sizePrice) + Number(additivesPrice)).toFixed(2);
                price.innerHTML = '$' + resPrice;
                console.log(resPrice)
            }

            function chooseSize(){
                let nodes = sizeBtns.children;
                let btnArray = Array.from(nodes);

                btnArray.forEach(el => {
                el.addEventListener('click', (e) => {
                    if(el.id === 's')  {
                        sizePrice = (Number(i.sizes.s.addprice) + Number(newPrice)).toFixed(2);
                        printPrice()
                    }
                    if(el.id === 'm')  {
                        sizePrice = (Number(i.sizes.m.addprice) + Number(newPrice)).toFixed(2);
                        printPrice() 
                    }
                    if(el.id === 'l')  {
                        sizePrice = (Number(i.sizes.l.addprice) + Number(newPrice)).toFixed(2);
                        printPrice()
                    }
                    btnArray.forEach(function(btn) {
                        btn.firstElementChild.classList.remove('active-img');
                        btn.lastElementChild.classList.remove('active-txt');
                        btn.classList.remove('active-cont');
                    });
                    current = e.currentTarget;
                    current.classList.add('active-cont');
                    current.firstElementChild.classList.add('active-img');
                    current.lastElementChild.classList.add('active-txt');
                    
                    
                })
                }
                );
                
            }
            chooseSize()
            
            function chooseAdditives(){
                let nodes = additivesBtns.children;
                let btnArray = Array.from(nodes);

                checkbox.forEach(el => {
                el.addEventListener('click', (e) => {
                
                    if(el.id === "additive1" && el.checked)  {
                       e.currentTarget.parentNode.classList.add('active-cont');
                       additivesPrice = Number(additivesPrice) + Number(i.additives[0].addprice);
                       printPrice()
                    } else if ( !el.checked) {
                        additivesPrice = Number(additivesPrice) - Number(i.additives[0].addprice);
                        printPrice()
                    }
                    if(el.id === "additive2" && el.checked)  {
                        e.currentTarget.parentNode.classList.add('active-cont');
                        
                        additivesPrice = Number(additivesPrice) + Number(i.additives[1].addprice);
                        printPrice()
                    }
                    if(el.id === "additive3" && el.checked)  {
                        e.currentTarget.parentNode.classList.add('active-cont');
                        additivesPrice = Number(additivesPrice) + Number(i.additives[2].addprice);
                        printPrice()
                    }

                    for(let k=0; k< checkbox.length; k++){
                        if(checkbox[k].checked){
                        checkbox[k].parentNode.classList.add('active-cont');
                    } else {
                        checkbox[k].parentNode.classList.remove('active-cont');
                    }}

                    console.log(`${additivesPrice}addit`);

                })
                }
                );
                
            }
            chooseAdditives()
            closeBtn.addEventListener('click', hideModal);
            body.classList.add('noscroll');
            
        }

// Функции показать и скрыть модальное окно
function hideModal(){
    modalWrap.style.visibility = 'hidden';
    modalWrap.style.display = 'none';
    body.classList.remove('noscroll');
}

// BURGER MENU

const hamb = document.querySelector(".burger");
hamb.addEventListener("click", toggle);

const hamb2 = document.querySelector(".nav-wrap");
hamb2.addEventListener("click", toggle);

function toggle(e) {
    hamb.classList.toggle("open");
    hamb2.classList.toggle("open");
}

window.addEventListener('click', e => { 
const target = e.target;
if (!target.closest('.nav-wrap') && !target.closest('.burger')) {
    hamb2.classList.remove('open');
    hamb.classList.remove('open');
}
})
    
//Отрисовка карточек и их содержимого
function showCard(i) {
    let li = templ.content.cloneNode(true);
    let nameCard = li.querySelector('.text-heading-3');
    let description = li.querySelector('.text-medium');
    let price = li.querySelector('.price');
    let img = li.querySelector('img');
    let card = li.querySelector('.card');
    cardsWrapper.append(li);
    nameCard.innerHTML = i.name;
    description.innerHTML = i.description;
    price.innerHTML = `$${i.price}`; 
    img.src = i.img;
    card.id = i.name;
}


    
// Получение данных от JSON
async function getData() {
    const res = await fetch('./products.json');
    data = await res.json();
    console.log(data);

    coffeeItems = data.filter(item => item.category === "coffee");
    teaItems = data.filter(item => item.category === "tea");
    dessertsItems = data.filter(item => item.category === "dessert");

    coffeeItems.map((i) => showCard(i));
} 
getData();
    
// Кнопки переключения и выбора товаров
coffeeBtn.addEventListener('click', ()=>{
    cardsWrapper.innerHTML = '';
    coffeeItems.map((i) => showCard(i));
    update()
})

teaBtn.addEventListener('click', ()=>{
    cardsWrapper.innerHTML = '';
    teaItems.map((i) => showCard(i)); 
    update() 
})

dessertBtn.addEventListener('click', ()=>{
    cardsWrapper.innerHTML = '';
    dessertsItems.map((i) => showCard(i));
    update()
})
    
// Функция смены стиля кнопок при выборе категории товара
function change(){
let buttons = document.querySelectorAll('.menu-select-cont');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
    buttons.forEach(function(btn) {
        btn.firstElementChild.classList.remove('active-img');
        btn.lastElementChild.classList.remove('active-txt');
        btn.classList.remove('active-cont');
    });
    current = event.currentTarget;
    current.classList.add('active-cont');
    current.firstElementChild.classList.add('active-img');
    current.lastElementChild.classList.add('active-txt');
    });
});
}

change();