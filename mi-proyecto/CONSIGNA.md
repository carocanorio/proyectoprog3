

Programación III
Proyecto Integrador React
Primera entrega
Fecha de entrega: 19 de septiembre.
Condiciones generales
El proyecto integrador es grupal y se realiza de a grupos de 2 o 3 personas. Los alumnos pueden elegir sus compañeros de trabajo libremente. 
 La fecha  de entrega del proyecto integrador será el  19 de septiembre. Las presentaciones se harán en forma presencial por turnos en Digital House. Cada equipo dispondrá de un tiempo máximo para presentar y defender su proyecto. Queda a criterio de los alumnos si desean agregar recursos o soporte como PPTs para sus exposiciones siempre y cuando su incorporación no extienda el tiempo asignado para exponer. 
El equipo deberá organizarse para que cada integrante individualmente y de manera equilibrada con el resto del equipo pueda sin excepción:
Contar funcionalidades incluidas en una o varias secciones de la aplicación.
Explicar técnicamente en detalle una sección del código hecha por quien expone. La exposición implica contar que va haciendo el código línea por línea incluyendo los conceptos teóricos que lo respaldan. Serán inválidas las exposiciones que carezcan de sustento teórico y/o no puedan detallar paso a paso lo que sucede. Durante la presentación los profesores podrán hacer preguntas individuales a los alumnos para precisar conceptos o validar información que hayan expresado. 
La nota de la presentación oral es individual* mientras que la del trabajo en si es grupal. La entrega se realizará mediante repositorio del proyecto en Github.
Es importante que utilicen GIT durante el proyecto y no únicamente para la entrega. Estaremos observando el commit log y quienes realizan dichos commits. Esto afecta tanto a la nota del trabajo como a la nota de concepto.
(*)Nota: La aprobación de la presentación individual es condición excluyente para la aprobación de la entrega. La desaprobación de la presentación individual inhabilita el cómputo de los puntos obtenidos en la realización del proyecto.
Consignas
El proyecto consiste en realizar una aplicación en REACT que deberá obtener información de una API y sumar funcionalidades.
A su vez:
La estructura de archivos deberá respetar el formato y orden vistos en clase.
La estética del sitio debe respetarse en todos los componentes creados. (mantener coherencia estética) y deberá respetar diseño responsive. Deberá verse bien en dispositivos desktop y celulares.
El footer deberá ser actualizado con la información correspondiente de cada grupo.
El proyecto debe realizarse SIN EXCEPCIÓN con las estructuras de contenido vistas durante el curso.


Punto 1 - API
La información a mostrar en la aplicación se obtendrá de las APIs vistas en Programación 1. Las APIs a utilizar son las de TMDB y Deezer. Cada grupo elegirá UNA de las 2 para trabajar y los endpoint necesarios.

TMDB API
Para trabajar con la API deberán crear una cuenta en  https://www.themoviedb.org/login y buscar la API Key en https://www.themoviedb.org/settings/api 
Recuerden que la API Key debe colocarse como parte de la url del endpoint consultado. En cada endpoint tiene la opción “send request” con el modelo de url. Ante cualquier duda, consulten con sus profesores.
La documentación de los endpoints la encontrarán en la columna de la izquierda en el siguiente link: https://developers.themoviedb.org/3/movies/get-popular-movies.
En este link encontrarán información sobre como construir la url para que se vean las fotos. Por ejemplo, el link a la medida “w342” podría funcionar bien en el tamaño de tarjetas a 4 columnas: https://image.tmdb.org/t/p/w342/nombreDelArchivoDeLaImagen.jpg

DEEZER API
Para trabajar con la API deberán crear una cuenta en  https://developers.deezer.com/ 

La documentación de los endpoints se encuentra en:  https://developers.deezer.com/api
Para poder utilizar la API sin problemas deben agregar este proxy (https://thingproxy.freeboard.io/fetch/) previo a la url del endpoint. Por ejemplo para traer 10 top tracks:
https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10   
En caso de que el proxy presente problemas, por favor, informarlo a la cátedra.

Punto 2 - Header y Footer
La aplicación tendrá un header y un footer común a todas las páginas.
Header debe tener un logo o nombre que identifique la aplicación y una barra de navegación con links a Home, a Favoritos y a cada una de las secciones "Ver todas" del punto 3.
Footer debe tener el nombre de los integrantes del equipo.

Punto 3 - Home
La home page de la aplicación debe mostrar:
Un formulario de búsqueda.
2 listados de elementos generados con contenido proveniente cada uno de endpoints diferentes. Por ejemplo si usan TMDB podrían mostrar "Películas más populares" y "Películas en cartel". 
Cada listado debe tener un link o botón a 'Ver todas' que llevará a una nueva página en donde se muestren todos los contenidos.

Cada elemento del listado de contenido debe tener:
Foto.
Nombre o título.
Una descripción. La descripción iniciará oculta.
Link o botón "ver más" que debe mostrar/ ocultar la descripción.
Link o botón “ir a detalle” para ir a la página de detalle del elemento.
Link, botón o ícono "agregar/ quitar de favoritos".

Punto 4 - Página "Ver todas"
La página debe mostrar todos los contenidos de la sección clickeada en home y tener las funcionalidades:
Cargar más información.
Un formulario de un campo que permita filtrar contenido cargado.
Punto 5 - Detalle de un contenido del listado
La página de detalle debe obtener de la API la información del contenido clickeado. Dependiendo de la API elegida el detalle deberá mostrar:
Para TMDB

Detalle de una película:
Foto de la portada.
Nombre o título.
Calificación (rating).
Fecha de estreno.
Duración.
Sinópsis.
Género al que pertenece la película.
link o botón agregar a “favoritos”.
Detalle de una serie:
Foto de la portada.
Nombre o título.
Calificación (rating).
Fecha de estreno.
Sinópsis.
Género al que pertenece la serie.
La posibilidad de agregar la serie a “favoritos”.


Para Deezer:

Detalle de una canción
Foto de la tapa del disco que contiene la canción.
Nombre de la canción.
Nombre del artista.
Nombre del disco al que pertenece la canción.
El player para escuchar la canción.

Detalle del  álbum:
Foto de la tapa del disco.
Nombre del disco.
Nombre del artista.
Nombre del Género al que pertenece el artista.
Fecha de publicación.
Lista de canciones del disco.

Ante cualquier duda sobre los datos consultar con la cátedra.
Punto 5 - Favoritos
La página debe mostrar el listado de elementos seleccionados como favoritos.
Los elementos mostrados deben permitir navegar hasta su detalle. 
Cada elemento debe permitir eliminarse de la lista de favoritos.
Punto 6 - Resultados de búsqueda
La página deberá mostrar los resultados de búsqueda. Los resultados deben provenir del correspondiente endpoint de búsqueda.
Punto 7 - Not Found
La aplicación debe mostrar una página del tipo 404 Contenido Inexistente si el usuario ingresa una url inexistente.
Punto 8 - Loader
Previo a la carga de contenidos en cualquiera de las páginas debe verse un gif animado, spiner de carga o una leyenda “Cargando…” en caso de que el endpoint demore en responder.

