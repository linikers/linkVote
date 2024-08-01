"use strict";(()=>{var e={};e.id=750,e.ids=[750],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3610:e=>{e.exports=import("@vercel/postgres")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},2615:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>E,routeModule:()=>u});var a=t(1802),n=t(7153),i=t(6249),s=t(1639),c=e([s]);s=(c.then?(await c)():c)[0];let E=(0,i.l)(s,"default"),d=(0,i.l)(s,"config"),u=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/save",pathname:"/api/save",bundlePath:"",filename:""},userland:s});o()}catch(e){o(e)}})},1639:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{default:()=>i});var a=t(3610),n=e([a]);a=(n.then?(await n)():n)[0];let s=(0,a.createPool)({connectionString:process.env.POSTGRES_URL}),c=async()=>{try{await s.query(`
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
    `),console.log("Tabela competidores verificada/criada.")}catch(e){console.error("Erro ao criar a tabela competidores:",e)}};async function i(e,r){try{if(await c(),"POST"!==e.method)return r.setHeader("Permitido",["POST"]),r.status(405).end(`Method ${e.method} Sem permiss\xe3o`);{let{name:t,work:o,votes:a}=e.body;if(!t||!o||void 0===a)return r.status(400).json({error:"Dados incompletos: name, work e votes s\xe3o obrigat\xf3rios."});try{let e=await s.query("INSERT INTO competidores (name, work, votes) VALUES($1, $2, $3) RETURNING *",[t,o,a]);return r.status(201).json(e.rows[0])}catch(e){return console.error("Erro ao inserir competidor:",e),r.status(500).json({error:"Erro ao cadastrar competidor."})}}}catch(e){return console.error("Erro na API handler:",e),r.status(500).json({error:"Erro interno do servidor."})}}o()}catch(e){o(e)}})},7153:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=2615);module.exports=t})();