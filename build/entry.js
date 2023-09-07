var a=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,r="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:r,handler:e})}handle(t){let{request:e}=t;for(let r of this.routes){if(r.method!==e.method)continue;if(r.path.exec({pathname:new URL(e.url).pathname}))return r.handler(t)}return new Response("Not found",{status:404})}};function l(o){let{request:t,ctx:e,env:r}=o,s=[];for(let d of s){let h=`
<div class="list" draggable="true">
  <div class="list-title" id="${d.name}"></div>
</div>
  `}}var n=l;function c(o){let{request:t,ctx:e,env:r}=o,s=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Serverless Trello in HTMX</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div id="board" class="board sortable">
          ${n({request:t,ctx:e,env:r})}
        </div>
      </form>
      
    </div>
    <script src="https://unpkg.com/htmx.org"><\/script>
    <script src="https://unpkg.com/hyperscript.org"><\/script>
    <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"><\/script>
    <script>
      htmx.onLoad(function(content) {
        let sortables = content.querySelectorAll(".sortable");
        for(const sortable of sortables) {
          new Sortable(sortable, {
            animation: 150,
            group: 'shared'
          });
        }
      });
  </body>
</html>
  `;return new Response(s,{})}var i=c;var m=new a([["/",i],["/",n,"POST"]]),g=m.handle;export{g as default};
