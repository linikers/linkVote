"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vote)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Vote({ onOpenSnackBar  }) {
    const { 0: totalVotes , 1: setTotalVotes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: voteValues , 1: setVoteValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        anatomy: 0,
        creativity: 0,
        pigmentation: 0,
        traces: 0,
        readability: 0,
        visualImpact: 0
    });
    const { 0: votingUserId , 1: setVotingUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchUsers = async ()=>{
            try {
                setLoading(true);
                const response = await fetch("/api/list");
                if (!response.ok) {
                    throw new Error("Erro ao listar competidores");
                }
                const data = await response.json();
                setUsers(data);
                const total = data.reduce((acc, user)=>acc + user.votes, 0);
                setTotalVotes(total);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                onOpenSnackBar("Erro ao listar competidores");
            } finally{
                setLoading(false);
            }
        };
        fetchUsers();
    }, [
        onOpenSnackBar
    ]);
    const handleVoteChange = (e)=>{
        setVoteValues({
            ...voteValues,
            [e.target.name]: parseInt(e.target.value, 10)
        });
    };
    const handleVote = async (userId)=>{
        setVotingUserId(userId);
        try {
            setLoading(true);
            const response = await fetch("/api/vote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...voteValues,
                    userId
                })
            });
            if (!response.ok) {
                throw new Error("Erro ao registrar voto");
            }
            const updatedUser = await response.json();
            const updatedUsers = users.map((user)=>user.id === updatedUser.id ? updatedUser : user);
            setUsers(updatedUsers);
            const newTotalVotes = updatedUsers.reduce((acc, user)=>acc + user.votes, 0);
            setTotalVotes(newTotalVotes);
            setVoteValues({
                anatomy: 0,
                creativity: 0,
                pigmentation: 0,
                traces: 0,
                readability: 0,
                visualImpact: 0
            });
            onOpenSnackBar("Voto registrado com sucesso");
        } catch (error) {
            console.error("Erro ao votar:", error);
            onOpenSnackBar("Erro ao registrar voto");
        } finally{
            setLoading(false);
            setVotingUserId(null);
        }
    };
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        children: "Carregando..."
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        sx: {
            margin: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "320px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "h4",
                    gutterBottom: true,
                    style: {
                        marginBottom: "6rem"
                    },
                    children: "Vote Agora"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                style: {
                    width: "100%"
                },
                onSubmit: (e)=>{
                    e.preventDefault();
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 3,
                    sx: {
                        width: "100%"
                    },
                    children: users.length > 0 ? users.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            xs: 12,
                            item: true,
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                backgroundColor: "#6c757d",
                                padding: "1rem",
                                borderRadius: "8px",
                                marginBottom: "1rem",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                minWidth: "320px",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0 16px rgba(0,0,0, 0.2)"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    children: user.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    style: {
                                        color: "#757575"
                                    },
                                    children: user.work
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Anatomia",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.anatomy,
                                    onChange: handleVoteChange,
                                    name: "anatomy",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Criatividade",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.creativity,
                                    onChange: handleVoteChange,
                                    name: "creativity",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Pigmenta\xe7\xe3o",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.pigmentation,
                                    onChange: handleVoteChange,
                                    name: "pigmentation",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Tra\xe7os",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.traces,
                                    onChange: handleVoteChange,
                                    name: "traces",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Legibilidade",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.readability,
                                    onChange: handleVoteChange,
                                    name: "readability",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                    label: "Impacto Visual",
                                    type: "number",
                                    inputProps: {
                                        min: 1,
                                        max: 10
                                    },
                                    value: voteValues.visualImpact,
                                    onChange: handleVoteChange,
                                    name: "visualImpact",
                                    style: {
                                        marginBottom: "0.5rem"
                                    },
                                    fullWidth: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.LinearProgress, {
                                    variant: "determinate",
                                    value: totalVotes > 0 ? user.votes / totalVotes * 100 : 0,
                                    sx: {
                                        backgroundColor: "#414141",
                                        marginTop: "0.5rem",
                                        height: "10px",
                                        borderRadius: "8px",
                                        "& .MuiLinearProgress-bar": {
                                            backgroundColor: "#3f51b5"
                                        }
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "caption",
                                    style: {
                                        display: "block",
                                        marginTop: "0.5rem"
                                    },
                                    children: [
                                        user.votes,
                                        " votos (",
                                        totalVotes > 0 ? (user.votes / totalVotes * 100).toFixed(2) : 0,
                                        " %)"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "contained",
                                    color: "primary",
                                    onClick: ()=>handleVote(user.id),
                                    style: {
                                        marginTop: "1rem"
                                    },
                                    disabled: votingUserId === user.id,
                                    children: "Votar"
                                })
                            ]
                        }, user.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body1",
                        children: "Nenhum participante cadastrado"
                    })
                })
            })
        ]
    });
}


/***/ })

};
;