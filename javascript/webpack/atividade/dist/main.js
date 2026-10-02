/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js"
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buscarFilmesESeries: () => (/* binding */ buscarFilmesESeries)\n/* harmony export */ });\nasync function buscarFilmesESeries(termo) {\r\n  if (!termo.trim()) {\r\n    throw new Error('Por favor, digite o nome de um filme ou série.');\r\n  }\r\n\r\n  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`;\r\n  const resposta = await fetch(url);\r\n\r\n  if (!resposta.ok) {\r\n    throw new Error('Erro ao conectar com a API de filmes.');\r\n  }\r\n\r\n  const dados = await resposta.json();\r\n\r\n  if (dados.length === 0) {\r\n    throw new Error('Nenhum filme ou série encontrado com esse nome.');\r\n  }\r\n\r\n  return dados.map(item => ({\r\n    id: item.show.id,\r\n    titulo: item.show.name,\r\n    imagem: item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295?text=Sem+Capa',\r\n    nota: item.show.rating?.average || 'N/A',\r\n    generos: item.show.genres && item.show.genres.length > 0 ? item.show.genres.join(', ') : 'Gênero não informado',\r\n    ano: item.show.premiered ? item.show.premiered.split('-')[0] : 'N/A'\r\n  }));\r\n}\n\n//# sourceURL=webpack://atividade/./src/api.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   exibirMensagem: () => (/* binding */ exibirMensagem),\n/* harmony export */   renderizarCatalogo: () => (/* binding */ renderizarCatalogo)\n/* harmony export */ });\nfunction renderizarCatalogo(container, lista) {\r\n  container.innerHTML = '';\r\n\r\n  lista.forEach(item => {\r\n    const card = document.createElement('div');\r\n    card.className = 'card-filme';\r\n\r\n    card.innerHTML = `\r\n      <div class=\"card-imagem\">\r\n        <img src=\"${item.imagem}\" alt=\"${item.titulo}\">\r\n        <span class=\"nota\">⭐ ${item.nota}</span>\r\n      </div>\r\n      <div class=\"card-conteudo\">\r\n        <h3>${item.titulo} (${item.ano})</h3>\r\n        <p class=\"generos\"><strong>Gênero:</strong> ${item.generos}</p>\r\n      </div>\r\n    `;\r\n\r\n    container.appendChild(card);\r\n  });\r\n}\r\n\r\nfunction exibirMensagem(container, mensagem, tipo = 'info') {\r\n  container.innerHTML = `<p class=\"mensagem ${tipo}\">${mensagem}</p>`;\r\n}\n\n//# sourceURL=webpack://atividade/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const formBusca = document.getElementById('form-busca');\r\n  const inputBusca = document.getElementById('input-busca');\r\n  const catalogoContainer = document.getElementById('catalogo');\r\n\r\n  formBusca.addEventListener('submit', async (evento) => {\r\n    evento.preventDefault();\r\n    const termo = inputBusca.value;\r\n\r\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.exibirMensagem)(catalogoContainer, 'Buscando títulos...', 'info');\r\n\r\n    try {\r\n      const resultados = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.buscarFilmesESeries)(termo);\r\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderizarCatalogo)(catalogoContainer, resultados);\r\n    } catch (erro) {\r\n      ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.exibirMensagem)(catalogoContainer, erro.message, 'erro');\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://atividade/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;