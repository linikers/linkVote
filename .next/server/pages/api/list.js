"use strict";
(() => {
var exports = {};
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 610:
/***/ ((module) => {

module.exports = import("@vercel/postgres");;

/***/ }),

/***/ 22:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__]);
_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/pages/api/list.ts

const pool = (0,_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__.createPool)({
    connectionString: process.env.POSTGRES_URL
});
async function handler(request, response) {
    try {
        if (request.method === "GET") {
            try {
                const result = await pool.query("SELECT * FROM competidores");
                return response.status(200).json(result.rows);
            } catch (error) {
                console.error("Erro ao listar competidores:", error);
                return response.status(500).json({
                    error: "Erro ao listar competidores."
                });
            }
        } else {
            response.setHeader("Permitido", [
                "GET"
            ]);
            return response.status(405).end(`Method ${request.method} Sem permissão`);
        }
    } catch (error1) {
        console.error("Erro na API handler:", error1);
        return response.status(500).json({
            error: "Erro interno do servidor."
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(22));
module.exports = __webpack_exports__;

})();