var d=Object.freeze,x=Object.defineProperty;var l=(t,e)=>d(x(t,"raw",{value:d(e||t.slice())}));var c=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,n="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:n,handler:e})}handle(t){let{request:e}=t;for(let n of this.routes){if(n.method!==e.method)continue;let r=n.path.exec({pathname:new URL(e.url).pathname});if(r)return n.handler({...t,route:r})}return new Response("Not found",{status:404})}};var p={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};function s(t,...e){return String.raw({raw:t},...e)}async function g(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}async function a(t){return typeof t!="string"&&(t=JSON.stringify(t)),new Response(t,{headers:{"content-type":"application/json"}})}var y=p.styles,u,h=s(u||(u=l([`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>HTMX Trello Clone</title>
      <style>
        `,`
      </style>
      <script>
        const registerServiceWorker = async () => {
          if ("serviceWorker" in navigator) {
            try {
              const registration = await navigator.serviceWorker.register(
                "/sw.js",
                {
                  scope: "/",
                  type: "module",
                },
              );
              if (registration.installing) {
                console.log("Service worker installing");
                registration.installing.onstatechange = () => {
                  if (registration.waiting.state === "installed")
                    location.reload();
                };
              } else if (registration.waiting) {
                console.log("Service worker installed");
                registration.waiting.onstatechange = () => {
                  if (registration.waiting.state === "installed")
                    location.reload();
                };
              } else if (registration.active) {
                console.log("Service worker active");
              }
            } catch (error) {
              console.error("Registration failed with" + error);
            }
          }
        };
        registerServiceWorker();
      <\/script>
    </head>
    <body>
      <div class="app" style="text-align: center;">Loading...</div>
    </body>
  </html>
`])),y);var $=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-plus"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    />
  </svg>
`,H=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
`,z=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
    />
  </svg>
`;var f={sw:`var O=Object.freeze,tt=Object.defineProperty;var y=(e,t)=>O(tt(e,"raw",{value:O(t||e.slice())}));var $=class{name="";store=Promise.resolve();constructor(t,i){if(console.log("setting up"),i)return i;this.name=t,this.store=new Promise((s,n)=>{let r=indexedDB.open(this.name,1);r.onerror=()=>n(r.error),r.onupgradeneeded=()=>r.result.createObjectStore(this.name),r.onsuccess=()=>s(r.result)})}async get(t){let i=await this.store;return new Promise((s,n)=>{let r=i.transaction(this.name,"readonly"),o=r.objectStore(this.name).get(t);r.oncomplete=()=>s(o.result),r.onerror=()=>n(r.error)})}async put(t,i){let s=await this.store;return new Promise((n,r)=>{let o=s.transaction(this.name,"readwrite"),a=o.objectStore(this.name).put(i,t);o.oncomplete=()=>n(a),o.onerror=()=>r(o.error)})}async delete(t){let i=await this.store;return new Promise((s,n)=>{let r=i.transaction(this.name,"readwrite"),o=r.objectStore(this.name).delete(t);r.oncomplete=()=>s(o),r.onerror=()=>n(r.error)})}},N=$;var P=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,i="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:i,handler:t})}handle(e){let{request:t}=e;for(let i of this.routes){if(i.method!==t.method)continue;let s=i.path.exec({pathname:new URL(t.url).pathname});if(s)return i.handler({...e,route:s})}return new Response("Not found",{status:404})}};var j={styles:\`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{background:rgba(0,0,0,.15);color:#fff;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:40px;font-weight:200}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
\`};function d(e,...t){return String.raw({raw:e},...t)}function A(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function c(e){return new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"}})}var I=j.styles,E,vt=d(E||(E=y([\`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>HTMX Trello Clone</title>
      <style>
        \`,\`
      </style>
      <script>
        const registerServiceWorker = async () => {
          if ("serviceWorker" in navigator) {
            try {
              const registration = await navigator.serviceWorker.register(
                "/sw.js",
                {
                  scope: "/",
                  type: "module",
                },
              );
              if (registration.installing) {
                console.log("Service worker installing");
                registration.installing.onstatechange = () => {
                  if (registration.waiting.state === "installed")
                    location.reload();
                };
              } else if (registration.waiting) {
                console.log("Service worker installed");
                registration.waiting.onstatechange = () => {
                  if (registration.waiting.state === "installed")
                    location.reload();
                };
              } else if (registration.active) {
                console.log("Service worker active");
              }
            } catch (error) {
              console.error("Registration failed with" + error);
            }
          }
        };
        registerServiceWorker();
      <\\/script>
    </head>
    <body>
      <div class="app" style="text-align: center;">Loading...</div>
    </body>
  </html>
\`])),I),J;function R(e){return d(J||(J=y([\`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Trello Clone</title>
        <style>
          \`,\`
        </style>
        <script>
          const registerServiceWorker = async () => {
            if ("serviceWorker" in navigator) {
              try {
                const registration = await navigator.serviceWorker.register(
                  "/sw.js",
                  {
                    scope: "/",
                    type: "module",
                  },
                );
                if (registration.installing) {
                  console.log("Service worker installing");
                } else if (registration.waiting) {
                  console.log("Service worker installed");
                } else if (registration.active) {
                  console.log("Service worker active");
                }
              } catch (error) {
                console.error("Registration failed with" + error);
              }
            }
          };
          registerServiceWorker();
        <\\/script>
      </head>
      <body>
        \`,\`
      </body>
    </html>
  \`])),I,e.template)}var k=d\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-plus"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
    />
  </svg>
\`,w=d\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
\`,M=d\`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
    />
  </svg>
\`;function it(e){let{list:t}=e;return d\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${t.id}"
    >
      \${k}
      <span> Add another card</span>
    </button>
  \`}var S=it;function st(e){let{list:t}=e;return d\`
    <div class="edit-card hidden" id="add-card-\${t.id}">
      <div class="card">
        <textarea
          class="edit-card-textarea"
          name="label-\${t.id}"
          placeholder="Enter a title for this card..."
          style="height: 34px;"
          maxlength="300"
          autofocus="true"
        ></textarea>
        <input type="hidden" name="listId" value="\${t.id}" />
      </div>
      <div class="edit-buttons">
        <button
          class="edit-button"
          type="button"
          tabindex="0"
          style="background-color: rgb(90, 172, 68);"
          hx-post="/cards/new/\${t.id}"
          hx-target="#board"
          hx-swap="innerHTML"
          hx-params="label-\${t.id}"
        >
          Add card
        </button>
        <div
          class="edit-button-cancel"
          tabindex="0"
          _="on click toggle .hidden on #add-card-\${t.id} toggle .hidden on #btn-add-card-\${t.id}"
        >
          \${w}
        </div>
      </div>
    </div>
  \`}var _=st;var rt=d\`
  <div
    id="add-list"
    class="add-list-button"
    hx-get="/lists/add"
    hx-swap="outerHTML"
    hx-target="#add-list"
    draggable="false"
  >
    \${k} Add another list
    <div></div>
  </div>
\`,C=rt;function at(e){let{list:t,card:i}=e;return d\`
    <div
      class="card"
      id="card-\${i.id}"
      tabindex="0"
      aria-roledescription="Draggable item. Press space bar to lift"
      draggable="true"
      _="on mouseenter toggle .hidden on #card-edit-\${i.id} until mouseleave"
    >
      <div class="card-icons hidden" id="card-edit-\${i.id}">
        <button
          class="card-icon"
          type="button"
          hx-get="/cards/edit/\${t.id}/\${i.id}"
          hx-target="#card-\${i.id}"
          hx-swap="outerHTML"
        >
          \${M}
        </button>
      </div>
      \${i.label}
    </div>
  \`}var L=at;function nt(e){let t=d\`\`;for(let i of e.cards)t+=d\`\${L({list:e,card:i})}\`;return t}function ot(e){let{lists:t}=e,i=d\`\`;for(let s of t)i+=d\`
      <div class="list" draggable="true" id="lists-list-\${s.id}">
        <div class="list-title">\${s.name}</div>

        <div class="list-cards sortable" id="list-\${s.id}">
          \${nt(s)}
        </div>
        \${S({list:s})} \${_({list:s})}
      </div>
    \`;return i+=d\` <div class="add-list">\${C}</div> \`,i}var h=ot;var z;function dt(e){return c(R({template:d(z||(z=y([\`
        <div class="app">
          <div class="header">
            htmx Trello Clone
            <button
              class="edit-button"
              type="button"
              style="background-color: rgb(90, 172, 68);"
              hx-get="/db/lists"
              hx-target="#board"
              hx-swap="innerHTML"
            >
              Sync
            </button>
            <button
              class="edit-button"
              type="button"
              style="background-color: rgb(90, 172, 68);"
              hx-post="/db/lists"
              hx-swap="none"
            >
              Save
            </button>
          </div>

          <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
            <input id="fromList" type="hidden" name="from" />
            <input id="toList" type="hidden" name="to" />
            <input id="movedCard" type="hidden" name="movedCard" />
            <input id="index" type="hidden" name="index" />
            <input id="prevIndex" type="hidden" name="prevIndex" />
            <div
              id="board"
              class="board"
              _="on end put event.from.id into #fromList.value put event.to.id into #toList.value put event.item.id into #movedCard.value put event.newIndex into #index.value put event.oldIndex into #prevIndex.value then send cardmoved"
            >
              \`,\`
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/htmx.org"><\\/script>
        <script src="https://unpkg.com/hyperscript.org"><\\/script>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\\/script>
        <script>
          htmx.onLoad(function (content) {
            const foo = new Sortable(board, {
              name: "board",
              animation: 150,
              group: "board",
            });
            const cards = document.querySelectorAll(".sortable");
            for (const card of cards) {
              new Sortable(card, {
                animation: 150,
                group: "card",
              });
            }
          });
        <\\/script>
      \`])),h(e))}))}var D=dt;function lt(){return c(d\`
    <div id="add-list" class="add-list-editor">
      <form hx-post="/lists" hx-target="#board">
        <div class="list-title-edit">
          <input
            class="list-title-textarea"
            type="text"
            maxlength="30"
            name="name"
            placeholder="Enter list title..."
            style="width: 245px; height: 17px;"
            autofocus="true"
          />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
          >
            Add list
          </button>
          <button
            class="edit-button-cancel"
            type="button"
            tabindex="0"
            hx-get="/lists/cancel"
            hx-target="#add-list"
            hx-swap="outerHTML"
          >
            \${w}
          </button>
        </div>
      </form>
    </div>
  \`)}var U=lt;function ct(e){let{list:t,card:i}=e;return d\`
    <div id="edit-card" class="edit-card">
      <form
        hx-put="/cards/\${t.id}/\${i.id}"
        hx-target="#edit-card"
        hx-swap="outerHTML"
      >
        <div class="card">
          <textarea
            class="edit-card-textarea"
            name="label"
            style="height: 34px;"
            maxlength="300"
            autofocus="true"
          >
\${i.label}</textarea
          >
          <input type="hidden" name="listId" value="\${t.id}" />
        </div>
        <div class="edit-buttons">
          <button
            class="edit-button"
            type="submit"
            tabindex="0"
            style="background-color: rgb(90, 172, 68);"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Save
          </button>
          <button
            class="edit-button"
            type="button"
            tabindex="0"
            style="background-color: rgb(234, 37, 37);"
            hx-delete="/cards/\${t.id}/\${i.id}"
            _="on htmx:afterOnLoad remove #edit-card"
          >
            Delete
          </button>
          <div
            class="edit-button-cancel"
            tabindex="0"
            hx-get="/cards/cancel-edit/\${t.id}/\${i.id}"
            hx-target="#edit-card"
            hx-swap="outerHTML"
          >
            \${w}
          </div>
        </div>
      </form>
    </div>
  \`}var q=ct;async function W(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function B(e){let{route:t,env:i}=e,{list_id:s}=t.pathname.groups,n=JSON.parse(await i.TrelloLists.get("lists"));return n=n.filter(r=>r.id!==s),await i.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function F(e){let{request:t,env:i,route:s}=e,{list_id:n,id:r}=s.pathname.groups,o=new URLSearchParams(await t.text()),a=Object.fromEntries(o),{label:l}=a,p=JSON.parse(await i.TrelloLists.get("lists")),u=p.find(x=>x.id===n),f=u.cards.find(x=>x.id===r);return f.label=l,await i.TrelloLists.put("lists",JSON.stringify(p)),{list:u,card:f}}async function V(e){let{env:t,route:i}=e,{list_id:s,id:n}=i.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),a=o.cards.find(l=>l.id===n);return{list:o,card:a}}async function X(e){let{env:t,route:i}=e,{list_id:s,id:n}=i.pathname.groups,r=JSON.parse(await t.TrelloLists.get("lists")),o=r.find(a=>a.id===s);o.cards=o.cards.filter(a=>a.id!==n),await t.TrelloLists.put("lists",JSON.stringify(r))}async function G(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),n=Object.fromEntries(s),{name:r}=n,o=JSON.parse(await i.TrelloLists.get("lists"));return o.push({name:r,id:A({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function K(e){let{request:t,route:i,env:s}=e,n=JSON.parse(await s.TrelloLists.get("lists")),{list_id:r}=i.pathname.groups,o=new URLSearchParams(await t.text()),l=Object.fromEntries(o)["label-"+r],p=n.find(f=>f.id===r),u={label:l,id:A({}),list:r};return p.cards.push(u),await s.TrelloLists.put("lists",JSON.stringify(n)),{lists:n}}async function Q(e){let{env:t,route:i}=e,s=i.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(o=>o.id===s)}}async function Y(e){let{env:t,route:i}=e,{list_id:s,id:n}=i.pathname.groups,o=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),a=o.cards.find(l=>l.id===n);return{list:o,card:a}}async function Z(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),n=Object.fromEntries(s),{from:r,to:o,movedCard:a,index:l,prevIndex:p}=n,[,u]=r.split("-"),[,f]=o.split("-"),x=a.replace("card-",""),g=JSON.parse(await i.TrelloLists.get("lists"));try{if(r==="board"&&o==="board"){let m=g[p];g=g.filter(v=>v.id!==m.id),g.splice(l,0,m),await i.TrelloLists.put("lists",JSON.stringify(g))}else{let m=JSON.parse(JSON.stringify(g)),v=m.find(b=>b.id===u),H=v.cards.find(b=>b.id==x);H.list=f,v.cards=v.cards.filter(b=>b.id!=x),m.find(b=>b.id==f).cards.splice(Number(l),0,H),g=m,await i.TrelloLists.put("lists",JSON.stringify(g))}}catch(m){console.error(m)}return{lists:g}}self.addEventListener("install",e=>{});self.addEventListener("activate",e=>{});var T;self.addEventListener("fetch",e=>["https://unpkg.com/hyperscript.org","https://unpkg.com/htmx.org","https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"].includes(e.request.url)?fetch(e.request):e.respondWith((async()=>{T||(T=new N("trelloClone",T));let i=e.request,s={TrelloLists:T},n=void 0,r;try{r=JSON.parse(await s.TrelloLists.get("lists"))}catch{}if(!r){let a=await fetch("/db/lists").then(l=>l.json());await s.TrelloLists.put("lists",JSON.stringify(a))}return new P([["/",async a=>D(await W(a))],["/lists",async a=>c(h(await G(a))),"POST"],["/lists/add",U],["/lists/cancel",()=>c(C)],["/lists/:list_id",async a=>c(h(await B(a))),"DELETE"],["/cards/move",async a=>c(h(await Z(a))),"POST"],["/cards/new/:list_id",async a=>c(h(await K(a))),"POST"],["/cards/cancel/:id",async a=>c(S(await Q(a)))],["/cards/edit/:list_id/:id",async a=>c(q(await Y(a)))],["/cards/:list_id/:id",async a=>c(L(await F(a))),"PUT"],["/cards/:list_id/:id",async a=>(await X(a),c("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async a=>c(L(await V(a)))],["/db/:key",async a=>{let l=a.route.pathname.groups.key,p=await fetch("/db/"+l).then(u=>u.json());if(await s.TrelloLists.put(l,JSON.stringify(p)),l==="lists")return c(h({lists:p}))}],["/db/:key",async a=>{let l=a.route.pathname.groups.key,p=await s.TrelloLists.get(l);return await fetch("/db/"+l,{headers:{"content-type":"application/json"},body:p,method:"POST"}),c("")},"POST"]]).handle({request:i,env:s,ctx:n})})()));
`};function L(){return new Response(f.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var b=L;async function m(t){let e='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await t.env.TrelloLists.get("lists")!=e&&await t.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function o(t){let{route:e,env:n}=t,r=e.pathname.groups.key;return await n.TrelloLists.get(r)}var V={async fetch(t,e,n){return new c([["/",async i=>g(h)],["/sw.js",b],["/db/:key",async i=>a(await o(i))],["/db/:key",async i=>{let w=await i.request.json();return e.TrelloLists.put(i.route.pathname.groups.key,JSON.stringify(w)),a(await o(i))},"POST"]]).handle({request:t,env:e,ctx:n})},async scheduled(t,e,n){return m({event:t,env:e,ctx:n})}};export{V as default};
