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
"[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botech/project/test-admin/moja-aplikacija/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
function AddPage() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [slug, setSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Slug generator
    const generateSlug = (text)=>{
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
    };
    const handleNameChange = (value)=>{
        setName(value);
        setSlug(generateSlug(value));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "items"), {
                name,
                slug,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            alert("Item added successfully!");
            setName("");
            setSlug("");
        } catch (error) {
            console.error("Error adding document:", error);
            alert("Failed to add.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold mb-6",
                children: "Add New Item"
            }, void 0, false, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: name,
                                onChange: (e)=>handleNameChange(e.target.value),
                                className: "w-full border px-4 py-2 rounded",
                                placeholder: "Enter name…",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botech$2f$project$2f$test$2d$admin$2f$moja$2d$aplikacija$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400",
                        children: loading ? "Saving..." : "Save"
                    }, void 0, false, {
                        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botech/project/test-admin/moja-aplikacija/src/app/add/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(AddPage, "/ZkL5y/oxM7YuT5S5NNEEC54UHw=");
_c = AddPage;
var _c;
__turbopack_context__.k.register(_c, "AddPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=botech_project_test-admin_moja-aplikacija_src_a2413ef8._.js.map