const calculate = () => {
    let screen = document.querySelector('.screen');
    let btn = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    btn.forEach((btn)=>{
        btn.addEventListener('click', (e) => {
            let value = e.target.dataset.num;      //show the value which is pressed
            screen.value += value;
        });
    });
    equal.addEventListener('click', () => {
        let ans = eval(screen.value);
        screen.value = ans;
    });
    clear.addEventListener('click', () => {
        screen.value = '';
    });
};

calculate()