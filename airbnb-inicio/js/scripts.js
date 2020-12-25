document.addEventListener('DOMContentLoaded', () => {

    /** Obtiene el hero con las imagenes */
    const imagenHero = document.querySelector('.hero');
    console.log(imagenHero);

    /** Arreglo de imagenes con fondo */
    const imagenes = ['arriba2.jpg', 'arriba.jpg' ];

    /**Inicializadores */
    let i = 0;
    let tiempo = 0;
    setInterval( () => {
        imagenHero.style.backgroundPositionY =  '-'+tiempo+'px';
        // console.log(tiempo);
        if(tiempo > 40) {
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";
            
            if(i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }
        
        tiempo += 1;
    }, 100);
});







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
