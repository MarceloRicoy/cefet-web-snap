let balao = document.querySelector('#balaozinho');
let marcacoes = document.getElementsByClassName('marcacao');

balao.innerHTML = '';
for(let m of marcacoes){
	m.addEventListener('mouseenter',(e) =>{

		const titulo = e.target.attributes['data-titulo'].value;

        const conteudo = e.target.attributes['data-conteudo'].value;
        balao.innerHTML = `<h2> ${titulo} </h2> <p> ${conteudo} </p> `;

        const cor = e.target.attributes['data-cor'].value;
        balao.style.color = cor;

	})

	 m.addEventListener('mouseout', () => {
        balao.innerHTML = '';
    });


    m.addEventListener('mousemove', (e) => {
        balao.style.top = `${e.pageY}px`;
        balao.style.left = `${e.pageX}px`;
    })

}