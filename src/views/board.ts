import { IconEdit } from "./mixins";
import ToggleAddCard from "./toggle_add_card";
import AddCard from "./add_card";
import NewList from "./new_list";
import Lists from "../data/list";
import { Card, List } from "../types";

function Board(params: any): string {
  const { request, route } = params; // will need env for KV store as well
  let lists: List[];
  try {
    // if any of the below are not in the request, this should fail; for the move function specifically; should split into separate function.
    const { from, to, movedCard } = JSON.parse(request.body);
    const [, fromId] = from.split("-");
    const [, toId] = to.split("-");
    const cardId = movedCard.replace("card-", "");

    // TODO: fetch lists from storage and update storage after changes
    lists = Lists as List[];

    const fromList = lists.find((l) => l.id == fromId);
    const card = fromList!.cards.find((c) => c.id == cardId);
    card!.list = toId;
    fromList!.cards = fromList!.cards.filter((c) => c.id != cardId);

    const toList = lists.find((l) => l.id == toId);
    toList!.cards.push(card as Card);
  } catch {
    lists = Lists;
  }

  let template = ``;

  for (const list of lists) {
    template += `
<div class="list" draggable="true">
  <div class="list-title">
    ${list.name}
    <div class="list-cards sortable" id="list-${list.id}">
    `;
    for (const card of list.cards) {
      template += `
<div 
  class="card" 
  id="card-${card.id}" 
  tabindex="0" 
  aria-roledescription="Draggable item. Press space bar to lif" 
  draggable="true"
  _="on mouseenter toggle .hidden on #card-edit-${card.id} until mouseleave"
  >
  <div class="card-icons hidden" id="card-edit-${card.id}">
    <button class="card-icon" type="button" hx-get="/cards/edit/${list.id}/${card.id}" hx-target"#card-${card.id}" hx-swap="outerHTML">
      ${IconEdit}
    </button>
  </div>
  ${card.label}
</div>
      `;
    }
    template += `
    </div>
  </div>
  ${ToggleAddCard({ list })}
  ${AddCard({ list })}
</div>
    `;
  }

  template += `
<div class="add-list">
  ${NewList}
</div>
  `;

  return template;
}

export default Board;
