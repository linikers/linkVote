"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Register({ onRegister  }) {
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        id: "",
        name: "",
        work: "",
        votes: 0,
        percent: 0,
        anatomy: 0,
        creativity: 0,
        pigmentation: 0,
        traces: 0,
        readability: 0,
        visualImpact: 0,
        totalScore: 0
    });
    const { 1: setSnackbarMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 1: setSnackbarSeverity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("success");
    const { 1: setSnackbarOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prevState)=>({
                ...prevState,
                [name]: name === "votes" || name === "anatomy" || name === "creativity" || name === "pigmentation" || name === "traces" || name === "readability" || name === "visualImpact" || name === "totalScore" ? parseFloat(value) : value
            }));
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("/api/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const error = await response.json();
                setSnackbarMessage(`Erro ao salvar: ${error.message}`);
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                return;
            }
            const savedUser = await response.json();
            setSnackbarMessage("Registrado com sucesso!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            onRegister();
            setFormData({
                id: "",
                name: "",
                work: "",
                votes: 0,
                percent: 0,
                anatomy: 0,
                creativity: 0,
                pigmentation: 0,
                traces: 0,
                readability: 0,
                visualImpact: 0,
                totalScore: 0
            });
            savedUser();
        } catch (error1) {
            setSnackbarMessage("Erro ao salvar");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleRegister,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 2,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        style: {
                            margin: "1rem"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                            label: "Nome",
                            name: "name",
                            value: formData.name,
                            color: "secondary",
                            onChange: handleInputChange,
                            fullWidth: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        style: {
                            margin: "1rem"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                            label: "Est\xfadio",
                            name: "work",
                            value: formData.work,
                            onChange: handleInputChange,
                            fullWidth: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        style: {
                            margin: "2rem"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "contained",
                            color: "primary",
                            type: "submit",
                            children: "Salvar"
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;