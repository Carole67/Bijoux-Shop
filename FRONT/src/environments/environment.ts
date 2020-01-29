// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  products: 'http://localhost/back_v2/api/products',
  productById: 'http://localhost/back_v2/products/details',
  signIn: 'http://localhost/back_v2/api/signIn',
  signUp: 'http://localhost/back_v2/api/signUp',
  getUserInfo:'http://localhost/back_v2/auth/userInfo',
  deleteUser: 'http://localhost/back_v2/auth/deleteUser',
  updateUser: 'http://localhost/back_v2/auth/updateUser',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
