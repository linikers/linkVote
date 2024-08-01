"use strict";
(() => {
var exports = {};
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 610:
/***/ ((module) => {

module.exports = import("@vercel/postgres");;

/***/ }),

/***/ 875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handlerVote)
/* harmony export */ });
/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__]);
_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = (0,_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__.createPool)({
    connectionString: process.env.POSTGRES_URL
});
async function handlerVote(request, response) {
    console.log(request.method);
    if (request.method === "POST") {
        const { userId , anatomy , creativity , pigmentation , traces , readability , visualImpact  } = request.body;
        console.log("antes do try");
        console.log(request.body);
        try {
            // Verifica se o usuário existe
            const userResult = await client.query("SELECT id FROM competidores WHERE id = $1", [
                userId
            ]);
            console.log(userId);
            if (userResult.rowCount === 0) {
                return response.status(404).json({
                    error: "Usu\xe1rio n\xe3o encontrado"
                });
            }
            // Atualiza os votos
            const updateResult = await client.query(`
        UPDATE competidores
        SET 
          anatomy = COALESCE($2, anatomy),
          creativity = COALESCE($3, creativity),
          pigmentation = COALESCE($4, pigmentation),
          traces = COALESCE($5, traces),
          readability = COALESCE($6, readability),
          visualimpact = COALESCE($7, visualimpact)
        WHERE id = $1
        RETURNING *
        `, [
                userId,
                anatomy,
                creativity,
                pigmentation,
                traces,
                readability,
                visualImpact
            ]);
            console.log(response);
            response.status(200).json(updateResult.rows[0]);
        } catch (error) {
            console.log(response);
            console.error("Erro ao atualizar os votos:", error);
            response.status(500).json({
                error: "Erro ao atualizar os votos"
            });
        }
    } else {
        response.setHeader("Allow", [
            "POST"
        ]);
        response.status(405).end(`Método ${request.method} não permitido`);
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
var __webpack_exports__ = (__webpack_exec__(875));
module.exports = __webpack_exports__;

})();