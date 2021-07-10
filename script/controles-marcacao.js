let checkBox = document.querySelector('#visibilidade-das-marcacoes');
let bodyToggle = document.querySelector('.foto-anotada');
  
checkBox.addEventListener('click',(e)=>{
    bodyToggle.classList.toggle(e.target.value);
});     

let formato = document.querySelectorAll('input[name="formato-da-marcacao"]');
let boxSelector = formato[0];
let edgeSelector = formato[1];



for(let marcacao of marcacoes){

	 marcacao.addEventListener('click', (e) => {

	 	const selectedElement = document.querySelector('.marcacao.selecionada');
	    selectedElement.classList.toggle('selecionada');
	    e.target.classList.toggle('selecionada');

		const xPosition = document.querySelector('#x-da-marcacao');
		xPosition.value = parseInt(e.target.style.left);

		const yPosition = document.querySelector('#y-da-marcacao');
		yPosition.value = parseInt(e.target.style.top);

		const widthPosition = document.querySelector('#largura-da-marcacao');
		widthPosition.value = parseInt(e.target.style.width);

		const heightPosition = document.querySelector('#altura-da-marcacao');
		heightPosition.value = parseInt(e.target.style.height);

		const titleAttribute = document.querySelector('#titulo-da-marcacao');
		titleAttribute.value = e.target.attributes['data-titulo'].value;

		const contentAttribute = document.querySelector('#conteudo-da-marcacao');
		contentAttribute.value = e.target.attributes['data-conteudo'].value;

		const colorAttribute = document.querySelector('#cor-da-marcacao');
		colorAttribute.value = e.target.attributes['data-cor'].value;

	
		 if(e.target.attributes['data-formato'].value === 'formato-oval') {
            boxSelector.checked = false;
            edgeSelector.checked = true;
        } else {
            boxSelector.checked = true;
            edgeSelector.checked = false;
        }
	});


}

const xPosition = document.getElementById('x-da-marcacao');
xPosition.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.style.left = `${e.target.value}px`
});

const yPosition = document.getElementById('y-da-marcacao');
yPosition.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.style.top = `${e.target.value}px`
});

const heightPosition = document.getElementById('altura-da-marcacao');
heightPosition.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.style.height = `${e.target.value}px`
});

const widthPosition = document.getElementById('largura-da-marcacao');
widthPosition.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.style.width = `${e.target.value}px`
});

const titleAttribute = document.getElementById('titulo-da-marcacao');
titleAttribute.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.setAttribute('data-titulo', e.target.value);
});

const contentAttribute = document.getElementById('conteudo-da-marcacao');
contentAttribute.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.setAttribute('data-conteudo', e.target.value);
});

const colorAttribute = document.getElementById('cor-da-marcacao');
colorAttribute.addEventListener('input', (e) => {
    const selectedElement = document.querySelector('.marcacao.selecionada');
    selectedElement.setAttribute('data-cor', e.target.value);
});

document.addEventListener('change', function(e) {

	const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
    const value = e.target.value;
    if (e.target === edgeSelector && edgeSelector.checked)
    {
     	marcacaoSelecionada.classList.add('formato-oval'); 
     	marcacaoSelecionada.setAttribute('data-formato','formato-oval');
    }
    if (e.target === boxSelector && boxSelector.checked)
    {
    	marcacaoSelecionada.classList.remove('formato-oval');
    	marcacaoSelecionada.setAttribute('data-formato','formato-retangular');
    }
})

 