const btns = document.querySelectorAll('.Btn')
const miniBox = document.querySelectorAll('.miniBox')

let selectedBtn = null;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataAli = btn.getAttribute('data-align')
        const dataDec = btn.getAttribute('data-direction')

        if (dataAli) {
            document.querySelector('.box').style.alignItems = dataAli;
        }

        if (dataDec) {
            document.querySelector('.box').style.flexDirection = dataDec;
        }

        if(selectedBtn){
            selectedBtn.style.color = '';
        }

        btn.style.color = 'red';
        selectedBtn = btn;
    })
})


miniBox.forEach(Mnb => {
    Mnb.addEventListener('click', () => {
        Mnb.classList.toggle('miniBox-hover')
    })
})