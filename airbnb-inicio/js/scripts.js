// Btn flotante en el footer

document.addEventListener('DOMContentLoaded', () => {
 const btnFlotante = document.querySelector('.btn-flotante');
 btnFlotante.addEventListener('click', (e) => {
	 e.preventDefault();

	 // Prevenimos default pero ejecutamos el sig código

	const footer = document.querySelector('#footer');
        if(footer.classList.contains('activo')){
		// Ejecuta este codigo
		footer.classList.remove('activo');
		btnFlotante.classList.remove('activo');
		btnFlotante.innerText = 'Idioma y moneda';
	}else{

		footer.classList.add('activo');
		btnFlotante.classList.add('activo');
		btnFlotante.innerText = 'Cerrar';
	}
 });
});
