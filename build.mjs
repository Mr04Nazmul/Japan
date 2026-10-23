import {build} from 'esbuild';
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,format:'esm',target:['es2020'],outfile:'assets/app.js',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'});
