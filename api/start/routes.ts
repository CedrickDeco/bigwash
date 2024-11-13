/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller';
import { HttpContext } from "@adonisjs/core/http";

// Cette fonction est exécutée dans un contexte où HttpContext peut être directement utilisé.
router.post('/register', async (ctx :HttpContext) => {
  const authController = new AuthController();
   // Extraction de request et response à partir de ctx
  const { request, response } = ctx; 
  const result = await authController.register(request, response);
  return response.send(result);
});

router.post('/login', async (ctx :HttpContext) => {
  const authController = new AuthController();
  // Extraction de request et response à partir de ctx
  const { request, response } = ctx; 
  const result = await authController.login(request);
  return response.send(result);
});

// router.post('/register', async (ctx) => {
//   const authController = new AuthController();
//   return authController.register(ctx);
// });

// router.post('/login', async (ctx) => {
//   const authController = new AuthController();
//   return authController.login(ctx);
// });

// router.get('/', async () => {
//   return {
//     hello: 'world',
//   }
// })
