import { Router } from "simple-worker-router";
import Index from "./templates/index";
import AddList from "./templates/add_list";
import Board from "./templates/board";
import NewCard from "./templates/new_card";
import AddCard from "./templates/add_card";
import EditCard from "./templates/edit_card";
import _Card from "./templates/card";
import NewList from "./templates/new_list";
import ToggleAddCard from "./templates/toggle_add_card";
import { HTMLResponse } from "./util";
import { Environment, HandlerArgs } from "./types";
import {
  addList,
  newCard,
  putCard,
  deleteCard,
  editCard,
  addCard,
  cancelCard,
  cancelEdit,
  getLists,
  moveCard,
} from "./handlers";

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    console.log(request.method, request.url);
    const router = new Router([
      ["/", async (args) => Index(await getLists(args as HandlerArgs))],
      [
        "/lists",
        async (args) => HTMLResponse(Board(await addList(args as HandlerArgs))),
        "POST",
      ],
      ["/lists/add", AddList],
      ["/lists/cancel", () => HTMLResponse(NewList)],
      [
        "/cards/move",
        async (args) =>
          HTMLResponse(Board(await moveCard(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/new/:list_id",
        async (args) =>
          HTMLResponse(NewCard(await newCard(args as HandlerArgs))),
        "POST",
      ],
      [
        "/cards/cancel/:id",
        async (args) =>
          HTMLResponse(ToggleAddCard(await cancelCard(args as HandlerArgs))),
      ],
      [
        "/cards/add/:id",
        async (args) =>
          HTMLResponse(AddCard(await addCard(args as HandlerArgs))),
      ],
      [
        "/cards/edit/:list_id/:id",
        async (args) =>
          HTMLResponse(EditCard(await editCard(args as HandlerArgs))),
      ],
      [
        "/cards/:list_id/:id",
        async (args) => HTMLResponse(_Card(await putCard(args as HandlerArgs))),
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
          HTMLResponse(_Card(await cancelEdit(args as HandlerArgs))),
      ],
    ]);
    return router.handle({ request, env, ctx });
  },
};
