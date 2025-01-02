// const result=document.querySelector('results')

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) / 100;
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Pleae give valid height';
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Pleaase give valid weight';
    } else {
        const bmi = (weight / (height * height)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
