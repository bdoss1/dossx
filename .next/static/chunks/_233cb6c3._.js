(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/shared/SmoothScroll.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lenis@1.3.4_react@19.1.0/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SmoothScrollProvider = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            lenis?.scrollTo(0, {
                immediate: true
            });
        }
    }["SmoothScrollProvider.useEffect"], [
        pathname,
        searchParams,
        lenis
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            if (!lenis) return;
            const handleClick = {
                "SmoothScrollProvider.useEffect.handleClick": (ele)=>{
                    lenis.scrollTo(ele.getAttribute('href') ?? '', {
                        offset: -100
                    });
                }
            }["SmoothScrollProvider.useEffect.handleClick"];
            const elements = document.querySelectorAll('.lenis-scroll-to');
            const clickHandler = {
                "SmoothScrollProvider.useEffect.clickHandler": (e)=>handleClick(e.target)
            }["SmoothScrollProvider.useEffect.clickHandler"];
            elements.forEach({
                "SmoothScrollProvider.useEffect": (ele)=>{
                    ele.addEventListener('click', clickHandler);
                }
            }["SmoothScrollProvider.useEffect"]);
            return ({
                "SmoothScrollProvider.useEffect": ()=>{
                    elements.forEach({
                        "SmoothScrollProvider.useEffect": (ele)=>{
                            ele.removeEventListener('click', clickHandler);
                        }
                    }["SmoothScrollProvider.useEffect"]);
                }
            })["SmoothScrollProvider.useEffect"];
        }
    }["SmoothScrollProvider.useEffect"], [
        lenis,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            duration: 1.1
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/shared/SmoothScroll.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(SmoothScrollProvider, "XNQIATnn/YD5nQiX4G2TXl27Uwk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$4_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = SmoothScrollProvider;
const __TURBOPACK__default__export__ = SmoothScrollProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothScrollProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/Providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeModeProvider": (()=>ThemeModeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeModeProvider({ children, ...props }) {
    _s();
    const [mount, setMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeModeProvider.useEffect": ()=>{
            setMount(true);
            return ({
                "ThemeModeProvider.useEffect": ()=>{
                    setMount(false);
                }
            })["ThemeModeProvider.useEffect"];
        }
    }["ThemeModeProvider.useEffect"], []);
    if (!mount) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "dark",
        forcedTheme: "dark",
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/utils/Providers.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ThemeModeProvider, "6c6m0GH11LgWT2FZYRjVMf7X+ts=");
_c = ThemeModeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeModeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/animation/SplashCursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SplashCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function pointerPrototype() {
    return {
        id: -1,
        texcoordX: 0,
        texcoordY: 0,
        prevTexcoordX: 0,
        prevTexcoordY: 0,
        deltaX: 0,
        deltaY: 0,
        down: false,
        moved: false,
        color: {
            r: 0,
            g: 0,
            b: 0
        }
    };
}
function SplashCursor({ SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 2, PRESSURE = 0.1, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = 0.2, SPLAT_FORCE = 6000, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
    r: 0.5,
    g: 0,
    b: 0
}, TRANSPARENT = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashCursor.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            let pointers = [
                pointerPrototype()
            ];
            let config = {
                SIM_RESOLUTION: SIM_RESOLUTION,
                DYE_RESOLUTION: DYE_RESOLUTION,
                CAPTURE_RESOLUTION: CAPTURE_RESOLUTION,
                DENSITY_DISSIPATION: DENSITY_DISSIPATION,
                VELOCITY_DISSIPATION: VELOCITY_DISSIPATION,
                PRESSURE: PRESSURE,
                PRESSURE_ITERATIONS: PRESSURE_ITERATIONS,
                CURL: CURL,
                SPLAT_RADIUS: SPLAT_RADIUS,
                SPLAT_FORCE: SPLAT_FORCE,
                SHADING,
                COLOR_UPDATE_SPEED: COLOR_UPDATE_SPEED,
                PAUSED: false,
                BACK_COLOR,
                TRANSPARENT
            };
            const { gl, ext } = getWebGLContext(canvas);
            if (!gl || !ext) return;
            if (!ext.supportLinearFiltering) {
                config.DYE_RESOLUTION = 256;
                config.SHADING = false;
            }
            function getWebGLContext(canvas) {
                const params = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false
                };
                let gl = canvas.getContext("webgl2", params);
                if (!gl) {
                    gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
                }
                if (!gl) {
                    throw new Error("Unable to initialize WebGL.");
                }
                const isWebGL2 = "drawBuffers" in gl;
                let supportLinearFiltering = false;
                let halfFloat = null;
                if (isWebGL2) {
                    gl.getExtension("EXT_color_buffer_float");
                    supportLinearFiltering = !!gl.getExtension("OES_texture_float_linear");
                } else {
                    halfFloat = gl.getExtension("OES_texture_half_float");
                    supportLinearFiltering = !!gl.getExtension("OES_texture_half_float_linear");
                }
                gl.clearColor(0, 0, 0, 1);
                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES || 0;
                let formatRGBA;
                let formatRG;
                let formatR;
                if (isWebGL2) {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
                } else {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                }
                return {
                    gl,
                    ext: {
                        formatRGBA,
                        formatRG,
                        formatR,
                        halfFloatTexType,
                        supportLinearFiltering
                    }
                };
            }
            function getSupportedFormat(gl, internalFormat, format, type) {
                if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                    if ("drawBuffers" in gl) {
                        const gl2 = gl;
                        switch(internalFormat){
                            case gl2.R16F:
                                return getSupportedFormat(gl2, gl2.RG16F, gl2.RG, type);
                            case gl2.RG16F:
                                return getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, type);
                            default:
                                return null;
                        }
                    }
                    return null;
                }
                return {
                    internalFormat,
                    format
                };
            }
            function supportRenderTextureFormat(gl, internalFormat, format, type) {
                const texture = gl.createTexture();
                if (!texture) return false;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
                const fbo = gl.createFramebuffer();
                if (!fbo) return false;
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                return status === gl.FRAMEBUFFER_COMPLETE;
            }
            function hashCode(s) {
                if (!s.length) return 0;
                let hash = 0;
                for(let i = 0; i < s.length; i++){
                    hash = (hash << 5) - hash + s.charCodeAt(i);
                    hash |= 0;
                }
                return hash;
            }
            function addKeywords(source, keywords) {
                if (!keywords) return source;
                let keywordsString = "";
                for (const keyword of keywords){
                    keywordsString += `#define ${keyword}\n`;
                }
                return keywordsString + source;
            }
            function compileShader(type, source, keywords = null) {
                const shaderSource = addKeywords(source, keywords);
                const shader = gl.createShader(type);
                if (!shader) return null;
                gl.shaderSource(shader, shaderSource);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.trace(gl.getShaderInfoLog(shader));
                }
                return shader;
            }
            function createProgram(vertexShader, fragmentShader) {
                if (!vertexShader || !fragmentShader) return null;
                const program = gl.createProgram();
                if (!program) return null;
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.trace(gl.getProgramInfoLog(program));
                }
                return program;
            }
            function getUniforms(program) {
                let uniforms = {};
                const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for(let i = 0; i < uniformCount; i++){
                    const uniformInfo = gl.getActiveUniform(program, i);
                    if (uniformInfo) {
                        uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
                    }
                }
                return uniforms;
            }
            class Program {
                program;
                uniforms;
                constructor(vertexShader, fragmentShader){
                    this.program = createProgram(vertexShader, fragmentShader);
                    this.uniforms = this.program ? getUniforms(this.program) : {};
                }
                bind() {
                    if (this.program) gl.useProgram(this.program);
                }
            }
            class Material {
                vertexShader;
                fragmentShaderSource;
                programs;
                activeProgram;
                uniforms;
                constructor(vertexShader, fragmentShaderSource){
                    this.vertexShader = vertexShader;
                    this.fragmentShaderSource = fragmentShaderSource;
                    this.programs = {};
                    this.activeProgram = null;
                    this.uniforms = {};
                }
                setKeywords(keywords) {
                    let hash = 0;
                    for (const kw of keywords){
                        hash += hashCode(kw);
                    }
                    let program = this.programs[hash];
                    if (program == null) {
                        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                        program = createProgram(this.vertexShader, fragmentShader);
                        this.programs[hash] = program;
                    }
                    if (program === this.activeProgram) return;
                    if (program) {
                        this.uniforms = getUniforms(program);
                    }
                    this.activeProgram = program;
                }
                bind() {
                    if (this.activeProgram) {
                        gl.useProgram(this.activeProgram);
                    }
                }
            }
            const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `);
            const copyShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `);
            const clearShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `);
            const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
            const splatShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `);
            const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `, ext.supportLinearFiltering ? null : [
                "MANUAL_FILTERING"
            ]);
            const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `);
            const curlShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `);
            const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `);
            const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `);
            const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `);
            const blit = ({
                "SplashCursor.useEffect.blit": ()=>{
                    const buffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                        -1,
                        -1,
                        -1,
                        1,
                        1,
                        1,
                        1,
                        -1
                    ]), gl.STATIC_DRAW);
                    const elemBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elemBuffer);
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                        0,
                        1,
                        2,
                        0,
                        2,
                        3
                    ]), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(0);
                    return ({
                        "SplashCursor.useEffect.blit": (target, doClear = false)=>{
                            if (!gl) return;
                            if (!target) {
                                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                            } else {
                                gl.viewport(0, 0, target.width, target.height);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                            }
                            if (doClear) {
                                gl.clearColor(0, 0, 0, 1);
                                gl.clear(gl.COLOR_BUFFER_BIT);
                            }
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                        }
                    })["SplashCursor.useEffect.blit"];
                }
            })["SplashCursor.useEffect.blit"]();
            let dye;
            let velocity;
            let divergence;
            let curl;
            let pressure;
            const copyProgram = new Program(baseVertexShader, copyShader);
            const clearProgram = new Program(baseVertexShader, clearShader);
            const splatProgram = new Program(baseVertexShader, splatShader);
            const advectionProgram = new Program(baseVertexShader, advectionShader);
            const divergenceProgram = new Program(baseVertexShader, divergenceShader);
            const curlProgram = new Program(baseVertexShader, curlShader);
            const vorticityProgram = new Program(baseVertexShader, vorticityShader);
            const pressureProgram = new Program(baseVertexShader, pressureShader);
            const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
            const displayMaterial = new Material(baseVertexShader, displayShaderSource);
            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
                const fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);
                const texelSizeX = 1 / w;
                const texelSizeY = 1 / h;
                return {
                    texture,
                    fbo,
                    width: w,
                    height: h,
                    texelSizeX,
                    texelSizeY,
                    attach (id) {
                        gl.activeTexture(gl.TEXTURE0 + id);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        return id;
                    }
                };
            }
            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                const fbo1 = createFBO(w, h, internalFormat, format, type, param);
                const fbo2 = createFBO(w, h, internalFormat, format, type, param);
                return {
                    width: w,
                    height: h,
                    texelSizeX: fbo1.texelSizeX,
                    texelSizeY: fbo1.texelSizeY,
                    read: fbo1,
                    write: fbo2,
                    swap () {
                        const tmp = this.read;
                        this.read = this.write;
                        this.write = tmp;
                    }
                };
            }
            function resizeFBO(target, w, h, internalFormat, format, type, param) {
                const newFBO = createFBO(w, h, internalFormat, format, type, param);
                copyProgram.bind();
                if (copyProgram.uniforms.uTexture) gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
                blit(newFBO, false);
                return newFBO;
            }
            function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                if (target.width === w && target.height === h) return target;
                target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
                target.write = createFBO(w, h, internalFormat, format, type, param);
                target.width = w;
                target.height = h;
                target.texelSizeX = 1 / w;
                target.texelSizeY = 1 / h;
                return target;
            }
            function initFramebuffers() {
                const simRes = getResolution(config.SIM_RESOLUTION);
                const dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = ext.formatRGBA;
                const rg = ext.formatRG;
                const r = ext.formatR;
                const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
                gl.disable(gl.BLEND);
                if (!dye) {
                    dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                } else {
                    dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                }
                if (!velocity) {
                    velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                } else {
                    velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                }
                divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
            }
            function updateKeywords() {
                const displayKeywords = [];
                if (config.SHADING) displayKeywords.push("SHADING");
                displayMaterial.setKeywords(displayKeywords);
            }
            function getResolution(resolution) {
                const w = gl.drawingBufferWidth;
                const h = gl.drawingBufferHeight;
                const aspectRatio = w / h;
                let aspect = aspectRatio < 1 ? 1 / aspectRatio : aspectRatio;
                const min = Math.round(resolution);
                const max = Math.round(resolution * aspect);
                if (w > h) {
                    return {
                        width: max,
                        height: min
                    };
                }
                return {
                    width: min,
                    height: max
                };
            }
            function scaleByPixelRatio(input) {
                const pixelRatio = window.devicePixelRatio || 1;
                return Math.floor(input * pixelRatio);
            }
            updateKeywords();
            initFramebuffers();
            let lastUpdateTime = Date.now();
            let colorUpdateTimer = 0.0;
            function updateFrame() {
                const dt = calcDeltaTime();
                if (resizeCanvas()) initFramebuffers();
                updateColors(dt);
                applyInputs();
                step(dt);
                render(null);
                requestAnimationFrame(updateFrame);
            }
            function calcDeltaTime() {
                const now = Date.now();
                let dt = (now - lastUpdateTime) / 1000;
                dt = Math.min(dt, 0.016666);
                lastUpdateTime = now;
                return dt;
            }
            function resizeCanvas() {
                const width = scaleByPixelRatio(canvas.clientWidth);
                const height = scaleByPixelRatio(canvas.clientHeight);
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    return true;
                }
                return false;
            }
            function updateColors(dt) {
                colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
                if (colorUpdateTimer >= 1) {
                    colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
                    pointers.forEach({
                        "SplashCursor.useEffect.updateColors": (p)=>{
                            p.color = generateColor();
                        }
                    }["SplashCursor.useEffect.updateColors"]);
                }
            }
            function applyInputs() {
                for (const p of pointers){
                    if (p.moved) {
                        p.moved = false;
                        splatPointer(p);
                    }
                }
            }
            function step(dt) {
                gl.disable(gl.BLEND);
                curlProgram.bind();
                if (curlProgram.uniforms.texelSize) {
                    gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (curlProgram.uniforms.uVelocity) {
                    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                }
                blit(curl);
                vorticityProgram.bind();
                if (vorticityProgram.uniforms.texelSize) {
                    gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (vorticityProgram.uniforms.uVelocity) {
                    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                }
                if (vorticityProgram.uniforms.uCurl) {
                    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                }
                if (vorticityProgram.uniforms.curl) {
                    gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                }
                if (vorticityProgram.uniforms.dt) {
                    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                }
                blit(velocity.write);
                velocity.swap();
                divergenceProgram.bind();
                if (divergenceProgram.uniforms.texelSize) {
                    gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (divergenceProgram.uniforms.uVelocity) {
                    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                }
                blit(divergence);
                clearProgram.bind();
                if (clearProgram.uniforms.uTexture) {
                    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                }
                if (clearProgram.uniforms.value) {
                    gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                }
                blit(pressure.write);
                pressure.swap();
                pressureProgram.bind();
                if (pressureProgram.uniforms.texelSize) {
                    gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (pressureProgram.uniforms.uDivergence) {
                    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                }
                for(let i = 0; i < config.PRESSURE_ITERATIONS; i++){
                    if (pressureProgram.uniforms.uPressure) {
                        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    }
                    blit(pressure.write);
                    pressure.swap();
                }
                gradienSubtractProgram.bind();
                if (gradienSubtractProgram.uniforms.texelSize) {
                    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (gradienSubtractProgram.uniforms.uPressure) {
                    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                }
                if (gradienSubtractProgram.uniforms.uVelocity) {
                    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                }
                blit(velocity.write);
                velocity.swap();
                advectionProgram.bind();
                if (advectionProgram.uniforms.texelSize) {
                    gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                if (!ext.supportLinearFiltering && advectionProgram.uniforms.dyeTexelSize) {
                    gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
                }
                const velocityId = velocity.read.attach(0);
                if (advectionProgram.uniforms.uVelocity) {
                    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                }
                if (advectionProgram.uniforms.uSource) {
                    gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                }
                if (advectionProgram.uniforms.dt) {
                    gl.uniform1f(advectionProgram.uniforms.dt, dt);
                }
                if (advectionProgram.uniforms.dissipation) {
                    gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                }
                blit(velocity.write);
                velocity.swap();
                if (!ext.supportLinearFiltering && advectionProgram.uniforms.dyeTexelSize) {
                    gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                }
                if (advectionProgram.uniforms.uVelocity) {
                    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                }
                if (advectionProgram.uniforms.uSource) {
                    gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                }
                if (advectionProgram.uniforms.dissipation) {
                    gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                }
                blit(dye.write);
                dye.swap();
            }
            function render(target) {
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                drawDisplay(target);
            }
            function drawDisplay(target) {
                const width = target ? target.width : gl.drawingBufferWidth;
                const height = target ? target.height : gl.drawingBufferHeight;
                displayMaterial.bind();
                if (config.SHADING && displayMaterial.uniforms.texelSize) {
                    gl.uniform2f(displayMaterial.uniforms.texelSize, 1 / width, 1 / height);
                }
                if (displayMaterial.uniforms.uTexture) {
                    gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
                }
                blit(target, false);
            }
            function splatPointer(pointer) {
                const dx = pointer.deltaX * config.SPLAT_FORCE;
                const dy = pointer.deltaY * config.SPLAT_FORCE;
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
            }
            function clickSplat(pointer) {
                const color = generateColor();
                color.r *= 10;
                color.g *= 10;
                color.b *= 10;
                const dx = 10 * (Math.random() - 0.5);
                const dy = 30 * (Math.random() - 0.5);
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
            }
            function splat(x, y, dx, dy, color) {
                splatProgram.bind();
                if (splatProgram.uniforms.uTarget) {
                    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                }
                if (splatProgram.uniforms.aspectRatio) {
                    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                }
                if (splatProgram.uniforms.point) {
                    gl.uniform2f(splatProgram.uniforms.point, x, y);
                }
                if (splatProgram.uniforms.color) {
                    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0);
                }
                if (splatProgram.uniforms.radius) {
                    gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100));
                }
                blit(velocity.write);
                velocity.swap();
                if (splatProgram.uniforms.uTarget) {
                    gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                }
                if (splatProgram.uniforms.color) {
                    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                }
                blit(dye.write);
                dye.swap();
            }
            function correctRadius(radius) {
                const aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) radius *= aspectRatio;
                return radius;
            }
            function updatePointerDownData(pointer, id, posX, posY) {
                pointer.id = id;
                pointer.down = true;
                pointer.moved = false;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1 - posY / canvas.height;
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.deltaX = 0;
                pointer.deltaY = 0;
                pointer.color = generateColor();
            }
            function updatePointerMoveData(pointer, posX, posY, color) {
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1 - posY / canvas.height;
                pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
                pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
                pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
                pointer.color = color;
            }
            function updatePointerUpData(pointer) {
                pointer.down = false;
            }
            function correctDeltaX(delta) {
                const aspectRatio = canvas.width / canvas.height;
                if (aspectRatio < 1) delta *= aspectRatio;
                return delta;
            }
            function correctDeltaY(delta) {
                const aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) delta /= aspectRatio;
                return delta;
            }
            function generateColor() {
                const c = HSVtoRGB(Math.random(), 1.0, 1.0);
                c.r *= 0.15;
                c.g *= 0.15;
                c.b *= 0.15;
                return c;
            }
            function HSVtoRGB(h, s, v) {
                let r = 0, g = 0, b = 0;
                const i = Math.floor(h * 6);
                const f = h * 6 - i;
                const p = v * (1 - s);
                const q = v * (1 - f * s);
                const t = v * (1 - (1 - f) * s);
                switch(i % 6){
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                }
                return {
                    r,
                    g,
                    b
                };
            }
            function wrap(value, min, max) {
                const range = max - min;
                if (range === 0) return min;
                return (value - min) % range + min;
            }
            window.addEventListener("mousedown", {
                "SplashCursor.useEffect": (e)=>{
                    const pointer = pointers[0];
                    const posX = scaleByPixelRatio(e.clientX);
                    const posY = scaleByPixelRatio(e.clientY);
                    updatePointerDownData(pointer, -1, posX, posY);
                    clickSplat(pointer);
                }
            }["SplashCursor.useEffect"]);
            function handleFirstMouseMove(e) {
                const pointer = pointers[0];
                const posX = scaleByPixelRatio(e.clientX);
                const posY = scaleByPixelRatio(e.clientY);
                const color = generateColor();
                updateFrame();
                updatePointerMoveData(pointer, posX, posY, color);
                document.body.removeEventListener("mousemove", handleFirstMouseMove);
            }
            document.body.addEventListener("mousemove", handleFirstMouseMove);
            window.addEventListener("mousemove", {
                "SplashCursor.useEffect": (e)=>{
                    const pointer = pointers[0];
                    const posX = scaleByPixelRatio(e.clientX);
                    const posY = scaleByPixelRatio(e.clientY);
                    const color = pointer.color;
                    updatePointerMoveData(pointer, posX, posY, color);
                }
            }["SplashCursor.useEffect"]);
            function handleFirstTouchStart(e) {
                const touches = e.targetTouches;
                const pointer = pointers[0];
                for(let i = 0; i < touches.length; i++){
                    const posX = scaleByPixelRatio(touches[i].clientX);
                    const posY = scaleByPixelRatio(touches[i].clientY);
                    updateFrame();
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
                document.body.removeEventListener("touchstart", handleFirstTouchStart);
            }
            document.body.addEventListener("touchstart", handleFirstTouchStart);
            window.addEventListener("touchstart", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    const pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        const posX = scaleByPixelRatio(touches[i].clientX);
                        const posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                    }
                }
            }["SplashCursor.useEffect"], false);
            window.addEventListener("touchmove", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    const pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        const posX = scaleByPixelRatio(touches[i].clientX);
                        const posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerMoveData(pointer, posX, posY, pointer.color);
                    }
                }
            }["SplashCursor.useEffect"], false);
            window.addEventListener("touchend", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.changedTouches;
                    const pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        updatePointerUpData(pointer);
                    }
                }
            }["SplashCursor.useEffect"]);
        }
    }["SplashCursor.useEffect"], [
        SIM_RESOLUTION,
        DYE_RESOLUTION,
        CAPTURE_RESOLUTION,
        DENSITY_DISSIPATION,
        VELOCITY_DISSIPATION,
        PRESSURE,
        PRESSURE_ITERATIONS,
        CURL,
        SPLAT_RADIUS,
        SPLAT_FORCE,
        SHADING,
        COLOR_UPDATE_SPEED,
        BACK_COLOR,
        TRANSPARENT
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 z-50 pointer-events-none w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            id: "fluid",
            className: "w-screen h-screen block"
        }, void 0, false, {
            fileName: "[project]/components/animation/SplashCursor.tsx",
            lineNumber: 1514,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/animation/SplashCursor.tsx",
        lineNumber: 1513,
        columnNumber: 5
    }, this);
}
_s(SplashCursor, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = SplashCursor;
var _c;
__turbopack_context__.k.register(_c, "SplashCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_233cb6c3._.js.map