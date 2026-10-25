// src/host.ts
var PLUGIN_ID = "@dsh-workbench/module-hello";
var UNIT_ID = "hello";
var helloHost = {
  unit: UNIT_ID,
  mount: () => ({ routes: {}, registerTools: () => [] })
};
var name = PLUGIN_ID;
var inject = ["workbenchUnits"];
function apply(ctx) {
  const units = ctx.get("workbenchUnits");
  if (units === void 0) {
    ctx.logger?.warn?.(`[${UNIT_ID}] \u5916\u58F3\u6CA1\u6709\u63D0\u4F9B workbenchUnits \u670D\u52A1\uFF1A\u8FD9\u4E2A\u6A21\u5757\u88C5\u4E0D\u8FDB\u6765`);
    return;
  }
  ctx.effect(() => units.register(helloHost), `module-hello: \u6CE8\u518C ${UNIT_ID}`);
}
export {
  apply,
  inject,
  name
};
