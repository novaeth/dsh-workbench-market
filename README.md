# dsh-workbench market

Test index for the desktop smoke: `market.json` lists `@dsh-workbench/module-hello`.

The entry points at the npm package (current published stable), not at a git artifact, so the
index does not need rebuilding when the workbench ships. Keep `version` on the published stable
and `metadata.unit` equal to the module's unit id (`hello`); the cross-platform smoke installs
this entry from the workbench's Discover page.
