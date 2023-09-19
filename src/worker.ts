import { Router } from "simple-worker-router";
import { NoSW } from "./templates/mixins";
import AddList from "./templates/add_list";
import Board from "./templates/board";
import EditCard from "./templates/edit_card";
import Card from "./templates/card";
import NewList from "./templates/new_list";
import ToggleAddCard from "./templates/toggle_add_card";
import { HTMLResponse, JSONResponse } from "./util";
import { Environment, HandlerArgs } from "./types";
import ServiceWorker from "./service-worker";
import {
  addList,
  newCard,
  putCard,
  deleteCard,
  editCard,
  cancelCard,
  cancelEdit,
  getLists,
  deleteList,
  move,
  resetData,
  jsonHandler,
} from "./handlers";

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    // await resetData({ env } as any);
    const router = new Router([
      ["/", async (args) => HTMLResponse(NoSW)],
      ["/sw.js", ServiceWorker],
      [
        "/lists",
        async (args) => HTMLResponse(Board(await addList(args as HandlerArgs))),
        "POST",
      ],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
      [
        "/lists/:list_id",
        async (args) => {
          return HTMLResponse(Board(await deleteList(args as HandlerArgs)));
        },
        "DELETE",
      ],
      [
        "/cards/move",
        async (args) => HTMLResponse(Board(await move(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/new/:list_id",
        async (args) => HTMLResponse(Board(await newCard(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/cancel/:id",
        async (args) =>
          HTMLResponse(ToggleAddCard(await cancelCard(args as HandlerArgs))),
      ],
      [
        "/cards/edit/:list_id/:id",
        async (args) =>
          HTMLResponse(EditCard(await editCard(args as HandlerArgs))),
      ],
      [
        "/cards/:list_id/:id",
        async (args) => HTMLResponse(Card(await putCard(args as HandlerArgs))),
        "PUT",
      ],
      [
        "/cards/:list_id/:id",
        async (args) => {
          await deleteCard(args as HandlerArgs);
          return HTMLResponse("");
        },
        "DELETE",
      ],
      [
        "/cards/cancel-edit/:list_id/:id",
        async (args) =>
          HTMLResponse(Card(await cancelEdit(args as HandlerArgs))),
      ],
      [
        "/db/:key",
        async (args) => {
          if (request.headers.get("Hx-Target") === "board") {
            return HTMLResponse(Board(await getLists(args as HandlerArgs)));
          } else {
            return JSONResponse(await jsonHandler(args as HandlerArgs));
          }
        },
      ],
      [
        "/db/:key",
        async (args: any) => {
          try {
            const body = await args.request.json();
            env.TrelloLists.put(
              args.route.pathname.groups.key,
              JSON.stringify(body),
            );
            return JSONResponse(await jsonHandler(args as HandlerArgs));
          } catch (e) {
            return HTMLResponse("");
          }
        },
        "POST",
      ],
    ]);
    return router.handle({ request, env, ctx });
  },
  async scheduled(event: any, env: Environment, ctx: ExecutionContext) {
    return resetData({ event, env, ctx });
  },
};
