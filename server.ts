import 'zone.js/dist/zone-node';
    
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';

import 'localstorage-polyfill';
const domino = require('domino');
let distFolder = join(process.cwd(), '../spa/browser');
const template = readFileSync(join(distFolder, 'index.html')).toString();
const win = domino.createWindow(template);
win.Object = Object;
win.Math = Math;
global['window'] = win;
global['document'] = win.document;
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;
global['localStorage'] = localStorage;

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';

export function app(): express.Express {
  const server = express();
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  server.get(
    '*',
    (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';