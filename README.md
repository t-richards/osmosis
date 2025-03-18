# Shakapacker notes

1. Runs dev server in "slow mode" by default:

```
Started GET "/" for ::1 at 2025-03-18 00:49:41 -0400
Processing by HomeController#index as HTML
  Rendering layout layouts/application.html.erb
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 0.6ms | GC: 0.0ms)
Shakapacker::Compiler - Slow setup for development

Prepare JS assets with either:
1. Running `bin/shakapacker-dev-server`
2. Set `compile` to false in shakapacker.yml and run `bin/shakapacker -w`
[Shakapacker] Compiling...
[Shakapacker] Compiled all packs in /home/tom/projects/osmosis/public/packs
[Shakapacker] asset js/runtime.js 5.16 KiB [compared for emit] (name: runtime) 1 related asset
asset js/application.js 1.44 KiB [emitted] (name: application) 1 related asset
asset manifest.json 374 bytes [compared for emit]
Entrypoint application 6.6 KiB (5.58 KiB) = js/runtime.js 5.16 KiB js/application.js 1.44 KiB 2 auxiliary assets
runtime modules 2.61 KiB 3 modules
./app/javascript/packs/application.js 825 bytes [built] [code generated]
webpack 5.98.0 compiled successfully in 512 ms

  Rendered layout layouts/application.html.erb (Duration: 1691.6ms | GC: 0.0ms)
Completed 200 OK in 1699ms (Views: 1692.0ms | GC: 0.0ms)
```
