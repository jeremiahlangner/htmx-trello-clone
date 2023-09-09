/// <reference types="@cloudflare/workers-types" />
interface Environment {
    Data: KVNamespace;
}
interface Params {
    request: Request;
    env: Environment;
    ctx: ExecutionContext;
    route: URLPattern;
}
interface Card {
    id: string;
    label: string;
    list: number;
}
interface List {
    name: string;
    id: number;
    cards: Card[];
}
export { Params, Environment, Card, List };
