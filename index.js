const inputNode = document.querySelector('.js-input');
const outputNode = document.querySelector('.js-output');
const selectorNode = document.querySelector('.js-selector');

outputNode.style.outline = 'none';

function render(){
    const man = Number(inputNode.value);
    const currency = selectorNode.value;
    const result = convert(man,currency);
    const output = outputNode.value = result;
};

inputNode.addEventListener('input', function(){
    render();
});

selectorNode.addEventListener('change', function(){
    render();
});