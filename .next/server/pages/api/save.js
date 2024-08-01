"use strict";
(() => {
var exports = {};
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 610:
/***/ ((module) => {

module.exports = import("@vercel/postgres");;

/***/ }),

/***/ 963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__]);
_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = (0,_vercel_postgres__WEBPACK_IMPORTED_MODULE_0__.createPool)({
    connectionString: process.env.POSTGRES_URL
});
const createTableIfNotExists = async ()=>{
    try {
        await client.query(`
      CREATE TABLE IF NOT EXISTS competidores (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        work VARCHAR(255) NOT NULL,
        votes INTEGER NOT NULL DEFAULT 0,
        percent DECIMAL(5, 2) DEFAULT 0,
        anatomy INTEGER DEFAULT 0,
        creativity INTEGER DEFAULT 0,
        pigmentation INTEGER DEFAULT 0,
        traces INTEGER DEFAULT 0,
        readability INTEGER DEFAULT 0,
        visualImpact INTEGER DEFAULT 0,
        totalScore INTEGER DEFAULT 0
      );
    `);
        console.log("Tabela competidores verificada/criada.");
    } catch (error) {
        console.error("Erro ao criar a tabela competidores:", error);
    }
};
async function handler(request, response) {
    try {
        await createTableIfNotExists();
        if (request.method === "POST") {
            const { name , work , votes  } = request.body;
            if (!name || !work || votes === undefined) {
                return response.status(400).json({
                    error: "Dados incompletos: name, work e votes s\xe3o obrigat\xf3rios."
                });
            }
            try {
                const result = await client.query("INSERT INTO competidores (name, work, votes) VALUES($1, $2, $3) RETURNING *", [
                    name,
                    work,
                    votes
                ]);
                return response.status(201).json(result.rows[0]);
            } catch (error) {
                console.error("Erro ao inserir competidor:", error);
                return response.status(500).json({
                    error: "Erro ao cadastrar competidor."
                });
            }
        } else {
            response.setHeader("Permitido", [
                "POST"
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
var __webpack_exports__ = (__webpack_exec__(963));
module.exports = __webpack_exports__;

})();