var a=Object.freeze,m=Object.defineProperty;var o=(t,e)=>a(m(t,"raw",{value:a(e||t.slice())}));var d=class{routes;constructor(t=[]){this.routes=[];for(let e of t)this.register(...e)}register(t,e,n="GET"){this.routes.push({path:new URLPattern({pathname:t}),method:n,handler:e})}handle(t){let{request:e}=t;for(let n of this.routes){if(n.method!==e.method)continue;let i=n.path.exec({pathname:new URL(e.url).pathname});if(i)return n.handler({...t,route:i})}return new Response("Not found",{status:404})}};function l(t,...e){return String.raw({raw:t},...e)}async function c(t){return new Response(t,{headers:{"content-type":"text/html;charset=UTF-8"}})}async function r(t){return typeof t!="string"&&(t=JSON.stringify(t)),new Response(t,{headers:{"content-type":"application/json"}})}var p={styles:`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);color:#fff;border-bottom:1px solid rgba(0,0,0,.12);font-size:40px;font-weight:200;padding:5px 0 5px 20px}.header-buttons{display:flex;margin-right:16px;margin-left:auto}.header-buttons .edit-button{margin:0 0 0 8px}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
`};var w=p.styles,u,y=l(u||(u=o([`
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
        function reload(state) {
          state.onstatechange = () => {
            if (state.state === "installed") {
              location.reload();
            }
          };
        }

        async function registerServiceWorker() {
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
                reload(registration.installing);
              } else if (registration.waiting) {
                console.log("Service worker installed");
                reload(registration.waiting);
              } else if (registration.active) {
                console.log("Service worker active");
                location.reload();
              }
            } catch (error) {
              console.error("Registration failed with" + error);
            }
          }
        }
        registerServiceWorker();
      <\/script>
    </head>
    <body>
      <div
        class="app"
        style="text-align: center; display: flex; justify-content: center; align-items: center; color: white;"
      >
        Loading...
      </div>
    </body>
  </html>
`])),w),g=y;var f={sw:`var P=Object.freeze,Z=Object.defineProperty;var L=(e,t)=>P(Z(e,"raw",{value:P(t||e.slice())}));var $=class{name="";store=Promise.resolve();constructor(t,i){if(console.log("setting up"),i)return i;this.name=t,this.store=new Promise((s,o)=>{let r=indexedDB.open(this.name,1);r.onerror=()=>o(r.error),r.onupgradeneeded=()=>r.result.createObjectStore(this.name),r.onsuccess=()=>s(r.result)})}async get(t){let i=await this.store;return new Promise((s,o)=>{let r=i.transaction(this.name,"readonly"),a=r.objectStore(this.name).get(t);r.oncomplete=()=>s(a.result),r.onerror=()=>o(r.error)})}async put(t,i){let s=await this.store;return new Promise((o,r)=>{let a=s.transaction(this.name,"readwrite"),n=a.objectStore(this.name).put(i,t);a.oncomplete=()=>o(n),a.onerror=()=>r(a.error)})}async delete(t){let i=await this.store;return new Promise((s,o)=>{let r=i.transaction(this.name,"readwrite"),a=r.objectStore(this.name).delete(t);r.oncomplete=()=>s(a),r.onerror=()=>o(r.error)})}},A=$;var H=class{routes;constructor(e=[]){this.routes=[];for(let t of e)this.register(...t)}register(e,t,i="GET"){this.routes.push({path:new URLPattern({pathname:e}),method:i,handler:t})}handle(e){let{request:t}=e;for(let i of this.routes){if(i.method!==t.method)continue;let s=i.path.exec({pathname:new URL(t.url).pathname});if(s)return i.handler({...e,route:s})}return new Response("Not found",{status:404})}};function d(e,...t){return String.raw({raw:e},...t)}function O(e){let t="";do t=Math.random().toString(16).substring(2,15);while(e[t]);return t}async function c(e){return new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"}})}var k=d\`
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
\`,j=d\`
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
\`,E=d\`
  <svg
    fill="#ffffff"
    height="12"
    width="12"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 383.748 383.748"
    xml:space="preserve"
  >
    <g>
      <path
        d="M62.772,95.042C90.904,54.899,137.496,30,187.343,30c83.743,0,151.874,68.13,151.874,151.874h30
		C369.217,81.588,287.629,0,187.343,0c-35.038,0-69.061,9.989-98.391,28.888C70.368,40.862,54.245,56.032,41.221,73.593
		L2.081,34.641v113.365h113.91L62.772,95.042z"
      />
      <path
        d="M381.667,235.742h-113.91l53.219,52.965c-28.132,40.142-74.724,65.042-124.571,65.042
		c-83.744,0-151.874-68.13-151.874-151.874h-30c0,100.286,81.588,181.874,181.874,181.874c35.038,0,69.062-9.989,98.391-28.888
		c18.584-11.975,34.707-27.145,47.731-44.706l39.139,38.952V235.742z"
      />
    </g>
  </svg>
\`;var I={styles:\`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.app{background:#3465a4;height:100vh}.header{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);color:#fff;border-bottom:1px solid rgba(0,0,0,.12);font-size:40px;font-weight:200;padding:5px 0 5px 20px}.header-buttons{display:flex;margin-right:16px;margin-left:auto}.header-buttons .edit-button{margin:0 0 0 8px}.board{height:92%;display:-webkit-flex;display:flex;overflow-x:auto}.add-list{width:272px;margin:10px;-webkit-flex-shrink:0;flex-shrink:0}.add-list-button{background-color:#0000001f;border-radius:4px;cursor:pointer;color:#fff;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;min-height:32px;padding:5px 8px;transition:background-color 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.add-list-button:hover{background-color:#0000003d}.list{background:#dfe3e6;-webkit-flex-shrink:0;flex-shrink:0;width:272px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px 0 10px 10px;border-radius:4px;border:1px solid rgba(0,0,0,.12)}.list-title{cursor:pointer;padding:10px;overflow-wrap:break-word}.toggle-add-card{cursor:pointer;padding:10px;color:#333;border-radius:0 0 4px 4px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;border:none;width:100%}.toggle-add-card:hover{background-color:#092d4221;color:#17394d;text-decoration:underline}.card{position:relative;cursor:grab;background:#fff;margin:5px;padding:10px;border-radius:5px;border:1px solid rgba(0,0,0,.12);box-shadow:0 1px #092d4240;font-size:15px;overflow-wrap:break-word;min-height:18px}.card:hover{background:#f5f6f7}.card-icons{position:absolute;top:5px;right:5px;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-end;justify-content:flex-end}.card-icon,.card-icons{display:-webkit-flex;display:flex}.card-icon{cursor:pointer;width:24px;height:24px;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:5px;margin:1px;color:#00000080;background:#f5f6f7;opacity:.9;border:none}.card-icon:hover{opacity:1;background:#dcdcdc}.edit-card .card{min-height:50px;padding-left:8px;padding-right:15px}.edit-card .card:hover{background:#fff}.edit-card-textarea{width:100%;border:none;resize:none;outline:none;font-size:15px}.edit-buttons{display:-webkit-flex;display:flex}.edit-button{cursor:pointer;box-shadow:0 1px #3f6f21;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 5px 10px;padding:6px 12px;border-radius:5px;border:none;color:#fff;outline:none}.edit-button:hover{opacity:.7}.edit-button-cancel{cursor:pointer;margin-bottom:10px;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:20px;opacity:.5;outline:none;padding:0;border:none}.edit-button-cancel:hover{opacity:1}.list-title-edit{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.list-title-textarea{margin:6px 0 5px 6px;border-radius:3px;border:none;resize:none;outline:none;font-size:15px;padding:5px}.list-title-textarea:focus{box-shadow:inset 0 0 0 2px #0079bf}.add-list-editor{background:#dfe3e6;border-radius:5px;padding:2px}.hidden{display:none}
\`};var et=I.styles,J;function it(e){return d(J||(J=L([\`
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
  \`])),et,e.template)}var M=it;function st(e){let{list:t}=e;return d\`
    <button
      class="toggle-add-card"
      id="btn-add-card-\${t.id}"
      type="button"
      _="on click toggle .hidden on me toggle .hidden on #add-card-\${t.id}"
    >
      \${k}
      <span> Add another card</span>
    </button>
  \`}var S=st;function rt(e){let{list:t}=e;return d\`
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
  \`}var R=rt;var nt=d\`
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
\`,C=nt;function ot(e){let{list:t,card:i}=e;return d\`
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
          \${j}
        </button>
      </div>
      \${i.label}
    </div>
  \`}var v=ot;function at(e){let t=d\`\`;for(let i of e.cards)t+=d\`\${v({list:e,card:i})}\`;return t}function dt(e){let{lists:t}=e,i=d\`\`;for(let s of t)i+=d\`
      <div class="list" draggable="true" id="lists-list-\${s.id}">
        <div class="list-title">\${s.name}</div>

        <div class="list-cards sortable" id="list-\${s.id}">
          \${at(s)}
        </div>
        \${S({list:s})} \${R({list:s})}
      </div>
    \`;return i+=d\` <div class="add-list">\${C}</div> \`,i}var f=dt;var _;function lt(e){return c(M({template:d(_||(_=L([\`
        <div class="app">
          <div class="header">
            htmx Trello Clone
            <div class="header-buttons">
              <button
                class="edit-button"
                type="button"
                style="background-color: #0d6efd;"
                hx-get="/db/lists"
                hx-target="#board"
                hx-swap="innerHTML"
              >
                \`,\` Sync
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
      \`])),E,f(e))}))}var z=lt;function ct(){return c(d\`
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
  \`)}var D=ct;function pt(e){let{list:t,card:i}=e;return d\`
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
            Update
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
  \`}var U=pt;async function q(e){let{env:t}=e;return{lists:JSON.parse(await t.TrelloLists.get("lists"))}}async function B(e){let{route:t,env:i}=e,{list_id:s}=t.pathname.groups,o=JSON.parse(await i.TrelloLists.get("lists"));return o=o.filter(r=>r.id!==s),await i.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function F(e){let{request:t,env:i,route:s}=e,{list_id:o,id:r}=s.pathname.groups,a=new URLSearchParams(await t.text()),n=Object.fromEntries(a),{label:l}=n,p=JSON.parse(await i.TrelloLists.get("lists")),m=p.find(x=>x.id===o),h=m.cards.find(x=>x.id===r);return h.label=l,await i.TrelloLists.put("lists",JSON.stringify(p)),{list:m,card:h}}async function W(e){let{env:t,route:i}=e,{list_id:s,id:o}=i.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),n=a.cards.find(l=>l.id===o);return{list:a,card:n}}async function V(e){let{env:t,route:i}=e,{list_id:s,id:o}=i.pathname.groups,r=JSON.parse(await t.TrelloLists.get("lists")),a=r.find(n=>n.id===s);a.cards=a.cards.filter(n=>n.id!==o),await t.TrelloLists.put("lists",JSON.stringify(r))}async function G(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),o=Object.fromEntries(s),{name:r}=o,a=JSON.parse(await i.TrelloLists.get("lists"));return a.push({name:r,id:O({}),cards:[]}),await i.TrelloLists.put("lists",JSON.stringify(a)),{lists:a}}async function X(e){let{request:t,route:i,env:s}=e,o=JSON.parse(await s.TrelloLists.get("lists")),{list_id:r}=i.pathname.groups,a=new URLSearchParams(await t.text()),l=Object.fromEntries(a)["label-"+r],p=o.find(h=>h.id===r),m={label:l,id:O({}),list:r};return p.cards.push(m),await s.TrelloLists.put("lists",JSON.stringify(o)),{lists:o}}async function K(e){let{env:t,route:i}=e,s=i.pathname.groups.id;return{list:JSON.parse(await t.TrelloLists.get("lists")).find(a=>a.id===s)}}async function Q(e){let{env:t,route:i}=e,{list_id:s,id:o}=i.pathname.groups,a=JSON.parse(await t.TrelloLists.get("lists")).find(l=>l.id===s),n=a.cards.find(l=>l.id===o);return{list:a,card:n}}async function Y(e){let{request:t,env:i}=e,s=new URLSearchParams(await t.text()),o=Object.fromEntries(s),{from:r,to:a,movedCard:n,index:l,prevIndex:p}=o,[,m]=r.split("-"),[,h]=a.split("-"),x=n.replace("card-",""),u=JSON.parse(await i.TrelloLists.get("lists"));try{if(r==="board"&&a==="board"){let g=u[p];u=u.filter(y=>y.id!==g.id),u.splice(l,0,g),await i.TrelloLists.put("lists",JSON.stringify(u))}else{let g=JSON.parse(JSON.stringify(u)),y=g.find(b=>b.id===m),N=y.cards.find(b=>b.id==x);N.list=h,y.cards=y.cards.filter(b=>b.id!=x),g.find(b=>b.id==h).cards.splice(Number(l),0,N),u=g,await i.TrelloLists.put("lists",JSON.stringify(u))}}catch(g){console.error(g)}return{lists:u}}self.addEventListener("install",e=>{});self.addEventListener("activate",e=>{});var T;self.addEventListener("fetch",e=>["https://unpkg.com/hyperscript.org","https://unpkg.com/htmx.org","https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"].includes(e.request.url)?fetch(e.request):e.respondWith((async()=>{T||(T=new A("trelloClone",T));let i=e.request,s={TrelloLists:T},o=void 0,r;try{r=JSON.parse(await s.TrelloLists.get("lists"))}catch{}if(!r){let n=await fetch("/db/lists").then(l=>l.json());await s.TrelloLists.put("lists",JSON.stringify(n))}return new H([["/",async n=>z(await q(n))],["/lists",async n=>c(f(await G(n))),"POST"],["/lists/add",D],["/lists/cancel",()=>c(C)],["/lists/:list_id",async n=>c(f(await B(n))),"DELETE"],["/cards/move",async n=>c(f(await Y(n))),"POST"],["/cards/new/:list_id",async n=>c(f(await X(n))),"POST"],["/cards/cancel/:id",async n=>c(S(await K(n)))],["/cards/edit/:list_id/:id",async n=>c(U(await Q(n)))],["/cards/:list_id/:id",async n=>c(v(await F(n))),"PUT"],["/cards/:list_id/:id",async n=>(await V(n),c("")),"DELETE"],["/cards/cancel-edit/:list_id/:id",async n=>c(v(await W(n)))],["/db/:key",async n=>{let l=n.route.pathname.groups.key,p=await fetch(\`/db/\${l}\`).then(m=>m.json());if(await s.TrelloLists.put(l,JSON.stringify(p)),l==="lists")return c(f({lists:p}))}],["/db/:key",async n=>{let l=n.route.pathname.groups.key,p=await s.TrelloLists.get(l);return await fetch(\`/db/\${l}\`,{headers:{"content-type":"application/json"},body:p,method:"POST"}),c("")},"POST"]]).handle({request:i,env:s,ctx:o})})()));
`};function k(){return new Response(f.sw,{headers:{"content-type":"text/javascript;charset=UTF-8"}})}var h=k;async function b(t){let e='[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]';await t.env.TrelloLists.get("lists")!=e&&await t.env.TrelloLists.put("lists",'[{"name":"To Do","id":"1","cards":[{"id":"2","label":"Second Card","list":"1"},{"id":"1","label":"First Card","list":"1"},{"label":"Third Card","id":"0bfdc1222adc9","list":"1"}]},{"name":"Doing","id":"2","cards":[{"id":"3","label":"First Card","list":2},{"id":"4","label":"Second Card","list":"2"}]}]')}async function s(t){let{route:e,env:n}=t,i=e.pathname.groups.key;return await n.TrelloLists.get(i)}var L=new d([["/",async()=>c(g)],["/sw.js",h],["/db/:key",async t=>r(await s(t))],["/db/:key",async t=>{let e=await t.request.json();return t.env.TrelloLists.put(t.route.pathname.groups.key,JSON.stringify(e)),r(await s(t))},"POST"]]),W={async fetch(t,e,n){return L.handle({request:t,env:e,ctx:n})},async scheduled(t,e,n){return b({event:t,env:e,ctx:n})}};export{W as default};
