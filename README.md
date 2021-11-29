# Jorge Adriano's Shop

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Este proyecto fue hecho con Create React App.
Esta desarollado para funcionar como una pagina padron de tienda online.
Es facilmente adaptable y escalable.

Fue utilizado React-Dom-Router para las rotas funcionaren correctamente. Y ahorrar render.

El CSS esta puro y podra ser mejorado con SASS o librarias.

## Alertas para futuros desarooladores

El React-Route-Dom tuvo problemas con la version. Fue cambiado lo codigo para mejor funcionamento.
En lugar de tener "Switch" hay "Routes". Ademas, las rotas fueran escritas de acuerdo a la nueva version.
Si deseas escribir como estabas acostumbrado poderá seguir los seguintes pasos
* Entrar en el terminal con la rota correcta del arquivo
* Seguir los comandos en orden:
** npm uninstall react-router-dom
** npm install react-router-dom@5.2.0
* Arreglar el code


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

El link arriba funcionar para visualizar la pagina. Y es actualizado siempre que salves nuevos arquivos.


# Actualizar

En public/index.html agregas el nombre a tu tienda.
En components/ agregas nuevos componentes. Deberas agregar en app.js y hacer su rota correctamente. Si deseas agregar en un components ya existente, es solamente hacer su rota.
En products/products.js poderás agregar nuevos productos

## Manutension

En components/ItemListContainer/Card esta la configuracion de los cards para demonstracion de lo productos en home.
En components/ItemListContainer/ esta la organizacion de los cards en la pantallas. El ItemListContainerCategory es la herramienta de busqueda. Podras eligir un layout nuevo solamente para las busquedas.
En components/ItemDetailContainer esta el layout de Description de los products. Hay un error en el button para agregar y yer al carrito. Fue declarado en la linea 34 y 37 pero no fue utilizado las lineas 56 e 58. Entonces hubo duplicidad de codigo.


# Librarias

## React Route Dom
React Route Dom fue utilizado para hacer los links de la aplicacion.
He posibilitado la criacion de las paginas con lo detalle del producto
Ademas, ahorra que el browser quede carregando las paginas.

## Firebase
Firebase fue utilizado como base dados

# Pagina
## Productos
Los productos son listados en la pagina inicial y podran ser filtrado por categoria.
La informacion vien de Firebase
### Detalles
La pagina de detalle sirvé para agregar itens al carrito
## Carrito
El carrito envia informaciones para la base (Firebase)
### Admin
Despues de enviar la informacion para la base, la pagina carga en http://localhost:3000/admin todos los compradores.
