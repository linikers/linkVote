"use strict";(()=>{var e={};e.id=750,e.ids=[750],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3610:e=>{e.exports=import("@vercel/postgres")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2615:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>A,default:()=>c,routeModule:()=>d});var o=r(1802),n=r(7153),i=r(6249),E=r(1639),s=e([E]);E=(s.then?(await s)():s)[0];let c=(0,i.l)(E,"default"),A=(0,i.l)(E,"config"),d=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/save",pathname:"/api/save",bundlePath:"",filename:""},userland:E});a()}catch(e){a(e)}})},1639:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>s});var o=r(3610),n=e([o]);let i=new(o=(n.then?(await n)():n)[0]).Pool({connectionString:process.env.DATABASE}),E=async()=>{try{await i.query(`
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
    `)}catch(e){console.error("Erro ao criar a tabela competidores:",e)}},s=async(e,t)=>{if(await E(),"POST"===e.method){let{name:r,work:a,votes:o}=e.body;try{let e=await i.query("INSERT INTO competidores(name, work, votes) VALUES($1, $2, $3) RETURNING *",[r,a,o]);t.status(201).json(e.rows[0])}catch(e){t.status(500).json({error:"Erro ao cadastrar competidor"})}}else t.setHeader("allow",["POST"]),t.status(405).end(`Method ${e.method} Not Allowed`)};a()}catch(e){a(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2615);module.exports=r})();