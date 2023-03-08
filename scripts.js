var decreaseBtn = document.getElementById('decrease');
var resetBtn = document.getElementById('reset');
var increaseBtn = document.getElementById('increase');
var currentValue = document.getElementById('current-value');

var count = 0;
currentValue.innerHTML = `${count}`;

resetBtn.addEventListener('click', function() {
    count = 0;
    currentValue.innerHTML = `${count}`;
    valueCheck(count);
})

decreaseBtn.addEventListener('click', function() {
    count--;
    currentValue.innerHTML = `${count}`;
    valueCheck(count);
})

increaseBtn.addEventListener('click', function() {
    count++;
    currentValue.innerHTML = `${count}`;
    valueCheck(count);
})

var valueCheck = function(value){
    var propertiesList = currentValue.classList;
    if (value > 0 && !propertiesList.contains('text-green-500')) {
        currentValue.classList.add('text-green-500');
    }
    else if (value < 0 && !propertiesList.contains('text-red-500')) {
        currentValue.classList.add('text-red-500');
    }
    else if (value == 0) {
        if (currentValue.classList.contains('text-green-500')) {
            currentValue.classList.remove('text-green-500');
        }
        else {
            currentValue.classList.remove('text-red-500');
        }
    
    }
}
