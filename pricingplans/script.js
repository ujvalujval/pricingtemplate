
const wholebtn = document.getElementById('whole_btn');
const closeBtn = document.getElementById('close_it');
const pressBtn = document.getElementById('press_btn');
const pressBtn2 = document.getElementById('press_btn2');
const cancelBtn = document.getElementById('cancel_btn');
const popupBtn = document.getElementById('pop_up');
const sucessBtn = document.getElementById('sucess_id');
const gobackBtn = document.getElementById('go_back');
const paymentOutline = document.getElementById('payment_outline');
const alreadyActivatedError = document.getElementById('alreadyActivatedError');
const clickImg = document.querySelectorAll('#click_images');
const selectPlan = document.querySelectorAll('#selectPlan');
const planName = document.getElementById('planName')


var planBuyed = true


selectPlan.forEach((plan) => {
    plan.addEventListener('click', () => {
        wholebtn.style.display = 'grid';
        document.body.style.overflowX = "hidden";
        paymentOutline.style.display = 'flex'
        alreadyActivatedError.style.display = 'none'
        pressBtn.style.display = 'grid';
        pressBtn.style.placeContent = 'center';


        planName.innerHTML = plan.parentElement.previousElementSibling.firstChild.nextSibling.innerHTML; 
        

        // displayCenter.classList.toggle('active')
        for (let i = 0; i < clickImg.length; i++) {
            clickImg[i].classList.remove('click_img')
        }
        gobackBtn.addEventListener('click', () => {
            // pressBtn2.style.cursor = 'wait';
            wholebtn.style.display = 'none'
            sucessBtn.style.display = 'none';
            pressBtn2.style.display = 'none';
            pressBtn.style.backgroundColor = 'green';

            plan.parentElement.previousElementSibling.children[1].style.display = 'grid'
        })
    })
})

closeBtn.addEventListener('click', () => {
    wholebtn.style.display = 'none';
    wholebtn.style.transition = '5s';
    pressBtn2.style.display = 'none';

})

cancelBtn.addEventListener('click', () => {
    wholebtn.style.display = 'none';
    wholebtn.style.transition = '3s';
    pressBtn2.style.display = 'none';
    pressBtn.style.backgroundColor = 'green';
})



pressBtn.addEventListener('click', () => {

    if (planBuyed) {
        var flag = 0;

        // pressBtn.style.display = 'none'
        for (let i = 0; i < clickImg.length; i++) {

            if (clickImg[i].classList.contains('click_img')) {
                flag = 1;
                // pressBtn2.style.display = 'grid';
                // pressBtn.style.backgroundColor = 'gray';
                // pressBtn2.style.cursor = 'wait'; 
                pressBtn.style.display = 'none'
                pressBtn2.style.display = 'grid';
                break;
            }
        }
        if (flag == 0) {
            popupBtn.style.visibility = "visible"
            
            // pressBtn.style.display = 'grid';
            pressBtn.style.placeContent = 'center';
            // planBuyed = true
        }
    }
    else {
        paymentOutline.style.display = 'none'
        alreadyActivatedError.style.display = 'grid'

        setTimeout(() => {
            wholebtn.style.display = 'none'
        }, 2000)
    }

})

pressBtn2.addEventListener('click', () => {

    if (planBuyed) {
        sucessBtn.style.display = 'grid';
        planBuyed = false
    }

})


clickImg.forEach(img => {

    img.addEventListener('click', () => {
        for (let i = 0; i < clickImg.length; i++) {
            clickImg[i].classList.remove('click_img')
        }
        img.classList.add('click_img')
    })
})

