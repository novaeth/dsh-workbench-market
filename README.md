# dsh-workbench market

Test index for the desktop smoke: `market.json` lists `@dsh-workbench/module-hello`.

The entry points at a **built module committed in this repo** (`packages/module-hello/`, which is
the shape the workbench's own publish flow produces): `dist/host.js`, `client.js`,
`cordis.patch.yml` and `package.json` with `dsh.workbench.apiVersion: 3` and
`peerDependencies["@dsh-workbench/core"]: ^1.0.0`.

To publish a new build: replace `packages/module-hello/`, commit, then point the entry's
`source.commit` at that commit. **Do not** point the entry at unbuilt sources — install reads this
package as-is. Updating this repo is data maintenance; the desktop smoke does not need changes.
