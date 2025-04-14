"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_lib_fetch_ts";
exports.ids = ["_rsc_src_lib_fetch_ts"];
exports.modules = {

/***/ "(rsc)/./src/lib/fetch.ts":
/*!**************************!*\
  !*** ./src/lib/fetch.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils */ \"(rsc)/./src/lib/utils.ts\");\n\nasync function fetchData(url, authToken) {\n    const headers = {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Bearer ${authToken}`\n        }\n    };\n    try {\n        const response = await fetch(url, authToken ? headers : {});\n        const data = await response.json();\n        if (!response.ok) throw new Error(\"Failed to fetch data\");\n        return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.flattenAttributes)(data);\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        throw error; // or return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2ZldGNoLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEO0FBRXpDLGVBQWVDLFVBQVVDLEdBQVcsRUFBRUMsU0FBa0I7SUFFN0QsTUFBTUMsVUFBVTtRQUNkQyxRQUFRO1FBQ1JELFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEJFLGVBQWUsQ0FBQyxPQUFPLEVBQUVILFVBQVUsQ0FBQztRQUN0QztJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1JLFdBQVcsTUFBTUMsTUFBTU4sS0FBS0MsWUFBWUMsVUFBVSxDQUFDO1FBQ3pELE1BQU1LLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQyxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07UUFDbEMsT0FBT1osNkRBQWlCQSxDQUFDUztJQUMzQixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTUEsT0FBTyxrQkFBa0I7SUFDakM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2xpYi9mZXRjaC50cz9jNGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZsYXR0ZW5BdHRyaWJ1dGVzIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEodXJsOiBzdHJpbmcsIGF1dGhUb2tlbj86IHN0cmluZykge1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhUb2tlbn1gLFxuICAgIH0sXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgYXV0aFRva2VuID8gaGVhZGVycyA6IHt9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgIHJldHVybiBmbGF0dGVuQXR0cmlidXRlcyhkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yOyAvLyBvciByZXR1cm4gbnVsbDtcbiAgfVxufSJdLCJuYW1lcyI6WyJmbGF0dGVuQXR0cmlidXRlcyIsImZldGNoRGF0YSIsInVybCIsImF1dGhUb2tlbiIsImhlYWRlcnMiLCJtZXRob2QiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib2siLCJFcnJvciIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/fetch.ts\n");

/***/ })

};
;