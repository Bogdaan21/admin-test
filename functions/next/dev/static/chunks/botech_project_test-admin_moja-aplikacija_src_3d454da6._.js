(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/botech/project/test-admin/moja-aplikacija/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: "AIzaSyD8ua7xxmRzuBtwYX9Lc2OThVhBwa8XuFo",
    authDomain: "admin-test-8b79d.firebaseapp.com",
    projectId: "admin-test-8b79d",
    storageBucket: "admin-test-8b79d.firebasestorage.app",
    messagingSenderId: "974056209508",
    appId: "1:974056209508:web:6e1a9b582ea9921a60f371"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ItemDetails() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // ✔ OVO JE KLJUČ
    const slug = params.slug; // tipizirano
    const [item, setItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ItemDetails.useEffect": ()=>{
            if (!slug) return;
            const loadItem = {
                "ItemDetails.useEffect.loadItem": async ()=>{
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "items"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("slug", "==", slug));
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    if (!snapshot.empty) {
                        setItem(snapshot.docs[0].data());
                    }
                }
            }["ItemDetails.useEffect.loadItem"];
            loadItem();
        }
    }["ItemDetails.useEffect"], [
        slug
    ]);
    if (!item) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx",
        lineNumber: 36,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold mb-4",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: [
                    "Slug: ",
                    item.slug
                ]
            }, void 0, true, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4",
                children: [
                    "Created:",
                    " ",
                    item.createdAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"] ? item.createdAt.toDate().toLocaleString() : "—"
                ]
            }, void 0, true, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/items/[slug]/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(ItemDetails, "imp1+e6is9m5o5fzA1HzGrxH6SE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ItemDetails;
var _c;
__turbopack_context__.k.register(_c, "ItemDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=botech_project_test-admin_moja-aplikacija_src_3d454da6._.js.map