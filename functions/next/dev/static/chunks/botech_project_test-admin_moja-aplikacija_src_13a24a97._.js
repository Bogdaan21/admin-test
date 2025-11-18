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
"[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TablePage() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TablePage.useEffect": ()=>{
            const loadData = {
                "TablePage.useEffect.loadData": async ()=>{
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "items"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    const data = snapshot.docs.map({
                        "TablePage.useEffect.loadData.data": (doc)=>{
                            const d = doc.data();
                            return {
                                id: doc.id,
                                ...d
                            };
                        }
                    }["TablePage.useEffect.loadData.data"]);
                    setItems(data);
                }
            }["TablePage.useEffect.loadData"];
            loadData();
        }
    }["TablePage.useEffect"], []);
    const openDetails = (slug)=>{
        router.push(`/items/${slug}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold mb-6",
                children: "All Items"
            }, void 0, false, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse border border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2 text-left",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2 text-left",
                                    children: "Slug"
                                }, void 0, false, {
                                    fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2 text-left",
                                    children: "Created"
                                }, void 0, false, {
                                    fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                onClick: ()=>openDetails(item.slug),
                                className: "cursor-pointer hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: item.slug
                                    }, void 0, false, {
                                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: item.createdAt?.toDate ? item.createdAt.toDate().toLocaleString() : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500 mt-6",
                children: "No items found."
            }, void 0, false, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/table/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(TablePage, "lsdMfw2fvd08XmKM5WVbnPbBszs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TablePage;
var _c;
__turbopack_context__.k.register(_c, "TablePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=botech_project_test-admin_moja-aplikacija_src_13a24a97._.js.map