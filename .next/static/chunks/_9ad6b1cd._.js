(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9ad6b1cd._.js", {

"[project]/hooks/useRevealAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const useRevealAnimation = (options = {})=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useRevealAnimation.useGSAP": ()=>{
            const element = elementRef.current;
            if (!element) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(element, {
                opacity: 0,
                y: 95,
                rotation: 2,
                filter: 'blur(10px)'
            }, {
                opacity: 1,
                y: 0,
                rotation: 0,
                filter: 'blur(0px)',
                duration: options.duration ?? 0.9,
                delay: options.delay ?? 0,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 86%',
                    end: 'top 50%',
                    scrub: false,
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        }
    }["useRevealAnimation.useGSAP"], {
        dependencies: [
            options.delay,
            options.duration
        ],
        scope: elementRef
    });
    return elementRef;
};
_s(useRevealAnimation, "AAL48gGA8YKg7IpHojjGrGu12/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
const __TURBOPACK__default__export__ = useRevealAnimation;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/cn.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/animation/RevealWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRevealAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const RevealWrapper = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ as: Component = 'div', className, children, delay = 0, duration = 0.9, ...props }, ref)=>{
    _s();
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        delay,
        duration
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: animationRef || ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/animation/RevealWrapper.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
}, "LFyyXHuS+sb95xs3ZDtWfmRHKoY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "LFyyXHuS+sb95xs3ZDtWfmRHKoY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = RevealWrapper;
RevealWrapper.displayName = 'RevealWrapper';
const __TURBOPACK__default__export__ = RevealWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "RevealWrapper$forwardRef");
__turbopack_context__.k.register(_c1, "RevealWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/CounterAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CounterAnimation = ({ number, duration = 2000 })=>{
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isCounting, setIsCounting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const counterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CounterAnimation.useEffect": ()=>{
            const currentRef = counterRef.current;
            const observer = new IntersectionObserver({
                "CounterAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsCounting(true);
                        startTimeRef.current = Date.now();
                    } else {
                        setIsCounting(false);
                        startTimeRef.current = null;
                    }
                }
            }["CounterAnimation.useEffect"], {
                threshold: 0.5
            });
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "CounterAnimation.useEffect": ()=>{
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            })["CounterAnimation.useEffect"];
        }
    }["CounterAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CounterAnimation.useEffect": ()=>{
            if (isCounting && count < number) {
                const animate = {
                    "CounterAnimation.useEffect.animate": ()=>{
                        if (!startTimeRef.current) return;
                        const elapsedTime = Date.now() - startTimeRef.current;
                        const progress = Math.min(elapsedTime / duration, 1);
                        // Use easeOutQuad for smoother animation
                        const easeOutProgress = 1 - Math.pow(1 - progress, 2);
                        const currentValue = Math.round(easeOutProgress * number);
                        setCount(currentValue);
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                }["CounterAnimation.useEffect.animate"];
                requestAnimationFrame(animate);
            }
        }
    }["CounterAnimation.useEffect"], [
        isCounting,
        number,
        duration,
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "counter",
        ref: counterRef,
        children: [
            count.toLocaleString(),
            ' '
        ]
    }, void 0, true, {
        fileName: "[project]/utils/CounterAnimation.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(CounterAnimation, "s7rT0elbelY8MabMUN0B/nsddC8=");
_c = CounterAnimation;
const __TURBOPACK__default__export__ = CounterAnimation;
var _c;
__turbopack_context__.k.register(_c, "CounterAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/animation/TextAppearAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TextAppearAnimation = ({ children, animationOptions = {} })=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordSplitRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const hasAnimatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const animationOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(animationOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextAppearAnimation.useEffect": ()=>{
            animationOptionsRef.current = animationOptions;
        }
    }["TextAppearAnimation.useEffect"], [
        animationOptions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TextAppearAnimation.useGSAP": ()=>{
            const element = elementRef.current;
            if (!element) return;
            if (hasAnimatedRef.current) return;
            const setupSplitType = {
                "TextAppearAnimation.useGSAP.setupSplitType": ()=>{
                    titleTextRef.current?.revert();
                    wordSplitRefs.current.forEach({
                        "TextAppearAnimation.useGSAP.setupSplitType": (split)=>split.revert()
                    }["TextAppearAnimation.useGSAP.setupSplitType"]);
                    wordSplitRefs.current = [];
                    const titleText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](element, {
                        types: 'lines',
                        lineClass: 'line'
                    });
                    titleTextRef.current = titleText;
                    const lines = titleText.lines ?? [];
                    if (!lines.length) {
                        console.warn('SplitType failed to create lines');
                        return null;
                    }
                    const wordsSplits = lines.map({
                        "TextAppearAnimation.useGSAP.setupSplitType.wordsSplits": (line)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](line, {
                                types: 'words',
                                wordClass: 'word'
                            })
                    }["TextAppearAnimation.useGSAP.setupSplitType.wordsSplits"]);
                    wordSplitRefs.current = wordsSplits;
                    const allWords = wordsSplits.flatMap({
                        "TextAppearAnimation.useGSAP.setupSplitType.allWords": (split)=>split.words || []
                    }["TextAppearAnimation.useGSAP.setupSplitType.allWords"]);
                    if (!allWords.length) {
                        console.warn('SplitType failed to create words');
                        return null;
                    }
                    return allWords;
                }
            }["TextAppearAnimation.useGSAP.setupSplitType"];
            const createAnimation = {
                "TextAppearAnimation.useGSAP.createAnimation": (words)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(words, {
                        y: 120,
                        rotation: 21,
                        opacity: 0
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(words, {
                        y: 0,
                        rotation: 0,
                        opacity: 1,
                        stagger: 0.02,
                        duration: 0.7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 65%',
                            end: 'top 30%',
                            scrub: false,
                            once: true,
                            markers: false,
                            onEnter: {
                                "TextAppearAnimation.useGSAP.createAnimation": ()=>{
                                    hasAnimatedRef.current = true;
                                }
                            }["TextAppearAnimation.useGSAP.createAnimation"]
                        },
                        ...animationOptionsRef.current
                    });
                }
            }["TextAppearAnimation.useGSAP.createAnimation"];
            const words = setupSplitType();
            if (!words) return;
            const timeline = createAnimation(words);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "TextAppearAnimation.useGSAP": ()=>{
                    if (timeline && typeof timeline.kill === 'function') {
                        timeline.kill();
                    }
                }
            })["TextAppearAnimation.useGSAP"];
        }
    }["TextAppearAnimation.useGSAP"], {
        scope: elementRef,
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextAppearAnimation.useEffect": ()=>{
            return ({
                "TextAppearAnimation.useEffect": ()=>{
                    titleTextRef.current?.revert();
                    wordSplitRefs.current.forEach({
                        "TextAppearAnimation.useEffect": (split)=>split.revert()
                    }["TextAppearAnimation.useEffect"]);
                    hasAnimatedRef.current = false;
                    if (elementRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                            "TextAppearAnimation.useEffect": (trigger)=>{
                                if (trigger.vars.trigger === elementRef.current) {
                                    trigger.kill();
                                }
                            }
                        }["TextAppearAnimation.useEffect"]);
                    }
                }
            })["TextAppearAnimation.useEffect"];
        }
    }["TextAppearAnimation.useEffect"], []);
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
            ref: elementRef,
            className: `${children.props.className ?? ''}`.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('span', {
        ref: elementRef
    }, children);
};
_s(TextAppearAnimation, "8d0uBS3LVQv0gevprMdssfbofUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TextAppearAnimation;
const __TURBOPACK__default__export__ = TextAppearAnimation;
var _c;
__turbopack_context__.k.register(_c, "TextAppearAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/animation/TextAppearAnimation02.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const TextAppearAnimation02 = ({ children, animationOptions = {} })=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TextAppearAnimation02.useGSAP": ()=>{
            const element = elementRef.current;
            if (!element) return;
            titleTextRef.current?.revert();
            wordsRef.current.forEach({
                "TextAppearAnimation02.useGSAP": (word)=>word.revert()
            }["TextAppearAnimation02.useGSAP"]);
            wordsRef.current = [];
            const titleText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](element, {
                types: 'lines',
                lineClass: 'line'
            });
            titleTextRef.current = titleText;
            if (!titleText.lines?.length) {
                console.warn('SplitType failed to create lines');
                return;
            }
            const words = [];
            titleText.lines.forEach({
                "TextAppearAnimation02.useGSAP": (line)=>{
                    const lineText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](line, {
                        types: 'words',
                        wordClass: 'word'
                    });
                    words.push(lineText);
                }
            }["TextAppearAnimation02.useGSAP"]);
            wordsRef.current = words;
            const allWords = words.flatMap({
                "TextAppearAnimation02.useGSAP.allWords": (word)=>word.words || []
            }["TextAppearAnimation02.useGSAP.allWords"]);
            if (!allWords.length) {
                console.warn('SplitType failed to create words');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(allWords, {
                y: 120,
                rotation: 21,
                opacity: 0
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(allWords, {
                y: 0,
                rotation: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    end: 'top 30%',
                    scrub: false,
                    once: true,
                    markers: false
                },
                ...animationOptions
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "TextAppearAnimation02.useGSAP": ()=>{
                    titleTextRef.current?.revert();
                    wordsRef.current.forEach({
                        "TextAppearAnimation02.useGSAP": (word)=>word.revert()
                    }["TextAppearAnimation02.useGSAP"]);
                    tl?.scrollTrigger?.kill();
                    tl?.kill();
                }
            })["TextAppearAnimation02.useGSAP"];
        }
    }["TextAppearAnimation02.useGSAP"], {
        dependencies: [
            animationOptions
        ],
        scope: elementRef
    });
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
            ref: elementRef,
            className: `${children.props.className ?? ''}`.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('span', {
        ref: elementRef
    }, children);
};
_s(TextAppearAnimation02, "K4NEl2IWZHh8r/r5nOBywjsqRE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TextAppearAnimation02;
const __TURBOPACK__default__export__ = TextAppearAnimation02;
var _c;
__turbopack_context__.k.register(_c, "TextAppearAnimation02");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/homepage-18/TestimonialV10.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animation$2f$TextAppearAnimation02$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animation/TextAppearAnimation02.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animation$2f$RevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animation/RevealWrapper.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const data = [
    {
        id: 1,
        reviewText: "The team delivered an outstanding promotional video that perfectly captured our brand's essence. Highly recommend!",
        authorName: 'Sarah Johnson',
        authorRole: 'CEO of Bright Solutions'
    },
    {
        id: 2,
        reviewText: 'Their creativity and attention to detail made our campaign a huge success. Truly a pleasure to work with!',
        authorName: 'Michael Carter',
        authorRole: 'Marketing Director at Innovate Inc.'
    },
    {
        id: 3,
        reviewText: 'The video they created for us went viral and brought in a ton of new customers. Absolutely thrilled with the results!',
        authorName: 'Emily Davis',
        authorRole: 'Founder of Green Earth'
    },
    {
        id: 4,
        reviewText: 'Working with this team was a game changer for our business. Their insights and creativity were invaluable!',
        authorName: 'John Smith',
        authorRole: 'Product Manager at Tech Innovations'
    },
    {
        id: 5,
        reviewText: 'Their professionalism and expertise made the entire process seamless. The final product was beyond our expectations!',
        authorName: 'David Martinez',
        authorRole: 'COO of TechNova'
    },
    {
        id: 6,
        reviewText: "The support and guidance we received throughout the project were exceptional. We couldn't have asked for a better partner!",
        authorName: 'Lisa White',
        authorRole: 'Head of Operations at Future Tech'
    },
    {
        id: 7,
        reviewText: 'The video they produced for us was engaging, creative, and perfectly aligned with our brand. Highly recommend their services!',
        authorName: 'Laura Bennett',
        authorRole: 'Head of Marketing at Stellar Co.'
    },
    {
        id: 8,
        reviewText: 'Their innovative solutions and proactive approach have helped us achieve our goals faster than we anticipated.',
        authorName: 'Michael Brown',
        authorRole: 'Product Owner, NextGen Solutions'
    },
    {
        id: 9,
        reviewText: 'The team was incredibly responsive and attentive to our needs, making the collaboration enjoyable and productive.',
        authorName: 'Anna Taylor',
        authorRole: 'Creative Director at Visionary Media'
    },
    {
        id: 10,
        reviewText: "Their insights and creativity transformed our vision into reality, and we couldn't be happier with the outcome.",
        authorName: 'James Wilson',
        authorRole: 'CEO of Creative Minds'
    }
];
const TestimonialV10 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16 flex flex-col items-start justify-center gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animation$2f$TextAppearAnimation02$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-appear-2",
                                    children: [
                                        "What our",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-instrument italic",
                                            children: " clients say"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-md:w-full md:max-w-[470px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animation$2f$TextAppearAnimation02$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right",
                                    children: "Our commitment to excellence has earned us accolades from the industry's most prestigious organizations."
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animation$2f$RevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    spaceBetween: 30,
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    navigation: {
                        prevEl: '.swiper-prev-btn',
                        nextEl: '.swiper-next-btn'
                    },
                    pagination: {
                        clickable: true
                    },
                    slidesPerView: 4,
                    className: "!pl-[20%]",
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        }
                    },
                    children: [
                        data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative min-h-[370px] max-w-full border p-8 dark:border-dark 2xl:max-w-[360px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 20,
                                                    height: 15,
                                                    viewBox: "0 0 20 15",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10.875 12.75V4.5C10.8762 3.30691 11.3507 2.16303 12.1944 1.31939C13.038 0.475744 14.1819 0.00124073 15.375 0C15.5739 0 15.7647 0.0790167 15.9053 0.219669C16.046 0.360322 16.125 0.551087 16.125 0.75C16.125 0.948913 16.046 1.13968 15.9053 1.28033C15.7647 1.42098 15.5739 1.5 15.375 1.5C14.5794 1.5 13.8163 1.81607 13.2537 2.37868C12.6911 2.94129 12.375 3.70435 12.375 4.5V5.25H18C18.3978 5.25 18.7794 5.40804 19.0607 5.68934C19.342 5.97064 19.5 6.35218 19.5 6.75V12.75C19.5 13.1478 19.342 13.5294 19.0607 13.8107C18.7794 14.092 18.3978 14.25 18 14.25H12.375C11.9772 14.25 11.5956 14.092 11.3143 13.8107C11.033 13.5294 10.875 13.1478 10.875 12.75ZM1.5 14.25H7.125C7.52282 14.25 7.90436 14.092 8.18566 13.8107C8.46696 13.5294 8.625 13.1478 8.625 12.75V6.75C8.625 6.35218 8.46696 5.97064 8.18566 5.68934C7.90436 5.40804 7.52282 5.25 7.125 5.25H1.5V4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5C4.69891 1.5 4.88968 1.42098 5.03033 1.28033C5.17098 1.13968 5.25 0.948913 5.25 0.75C5.25 0.551087 5.17098 0.360322 5.03033 0.219669C4.88968 0.0790167 4.69891 0 4.5 0C3.30691 0.00124073 2.16303 0.475744 1.31939 1.31939C0.475744 2.16303 0.00124168 3.30691 0 4.5V12.75C0 13.1478 0.158035 13.5294 0.439341 13.8107C0.720644 14.092 1.10217 14.25 1.5 14.25Z",
                                                        className: "fill-secondary dark:fill-backgroundBody"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-20 mt-10 text-lg leading-[1.6]",
                                                children: item.reviewText
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                className: "absolute bottom-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                        className: "mb-[2px] text-[22px] leading-[1.2]",
                                                        children: item.authorName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[15px] leading-[1.6] text-secondary/30 dark:text-backgroundBody/30",
                                                        children: item.authorRole
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "swiper-prev-btn size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: 32,
                                        height: 33,
                                        viewBox: "0 0 32 33",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M27 16.25H5",
                                                className: "stroke-secondary dark:stroke-backgroundBody",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 7.25L5 16.25L14 25.25",
                                                className: "stroke-secondary dark:stroke-backgroundBody",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "swiper-next-btn group size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: 32,
                                        height: 33,
                                        viewBox: "0 0 32 33",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 16.25H27",
                                                className: "stroke-secondary dark:stroke-backgroundBody",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 7.25L27 16.25L18 25.25",
                                                className: "stroke-secondary dark:stroke-backgroundBody",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/homepage-18/TestimonialV10.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
};
_c = TestimonialV10;
const __TURBOPACK__default__export__ = TestimonialV10;
var _c;
__turbopack_context__.k.register(_c, "TestimonialV10");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/shared/CtaImageSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CtaImageSlider = ({ slides })=>{
    _s();
    const ctaSlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaImageSlider.useEffect": ()=>{
            let currentSlide = 0;
            const totalSlides = slides.length;
            const nextSlide = {
                "CtaImageSlider.useEffect.nextSlide": ()=>{
                    currentSlide = (currentSlide + 1) % totalSlides;
                    if (ctaSlider.current) {
                        ctaSlider.current.style.transform = `translateY(-${currentSlide * 150}px)`;
                    }
                }
            }["CtaImageSlider.useEffect.nextSlide"];
            const intervalId = setInterval(nextSlide, 3000);
            return ({
                "CtaImageSlider.useEffect": ()=>clearInterval(intervalId)
            })["CtaImageSlider.useEffect"];
        }
    }["CtaImageSlider.useEffect"], [
        slides.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cta-slider-container translate-y-2 max-sm:mb-5 max-sm:mt-2.5 max-sm:block sm:!mx-5 sm:inline-block sm:translate-y-[20px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ctaSlider,
            className: "cta-inline-slider transition-transform duration-500 ease-in-out",
            children: slides?.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "slide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: slide.img,
                        alt: `cta-slide-img-${index + 1}`,
                        width: 240,
                        height: 100,
                        priority: index === 0
                    }, void 0, false, {
                        fileName: "[project]/components/shared/CtaImageSlider.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, slide.id, false, {
                    fileName: "[project]/components/shared/CtaImageSlider.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/shared/CtaImageSlider.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CtaImageSlider.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(CtaImageSlider, "LwVMHMBUnVxnJ7E3Gxmsui5k8yg=");
_c = CtaImageSlider;
const __TURBOPACK__default__export__ = CtaImageSlider;
var _c;
__turbopack_context__.k.register(_c, "CtaImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/logo-white.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo-white.a2d4800a.png");}}),
"[project]/public/images/logo-white.png.mjs { IMAGE => \"[project]/public/images/logo-white.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/logo-white.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 136,
    height: 136,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqklEQVR42o3OsQqDMBAGYJX6HoKhKBl06pq1ID5FoSC4FARJMnQKnfIqXUqmTJ1Cp9Ahr1KTTDVL6FT84eA4Pu4uSbYkXVNVFRjH8TwMw6ksyyLMIoAQ7rXWL++9DaWUegIAigjmeb445xbG2JVzfgt92BQBIWSy1i6U0gkhdBBC3Pu+P0bQti00xrxX9JFSPrquQ3me7yLIsixtmgZijKdwrq5r8Pvj33wBP3tA4AU8sTcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo.d66f0644.png");}}),
"[project]/public/images/logo.png.mjs { IMAGE => \"[project]/public/images/logo.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 136,
    height: 136,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAYUlEQVR42o3OMQqAMBBE0QgexEJs0tvaeo+AfcDe0tvYeAJLSy+jlvmBIYRUGXgkLMOyxlSmQY8FDp1mKQNu/HKplOLxYcOuv8sLq4bxHXFgzgsWD16cmNCWR1pt8Dq4LgE8sw/AgWCqlgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/navbarCompo/social-icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SocialIcons": (()=>SocialIcons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function SocialIcons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.facebook.com/staticmania",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13.125 6.875H11.875C11.3777 6.875 10.9008 7.07254 10.5492 7.42418C10.1975 7.77581 10 8.25272 10 8.75V17.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.5 11.25H12.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.youtube.com/channel/UCAaNCn1kzI1fXD4-fPD157Q",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12.5 10L8.75 7.5V12.5L12.5 10Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M1.875 9.99998C1.875 12.3246 2.11517 13.6886 2.29774 14.3896C2.34654 14.581 2.44026 14.7581 2.57114 14.9061C2.70201 15.0541 2.86627 15.1688 3.0503 15.2407C5.66569 16.2457 10 16.2181 10 16.2181C10 16.2181 14.3343 16.2457 16.9497 15.2407C17.1337 15.1688 17.298 15.0541 17.4288 14.9061C17.5597 14.7581 17.6534 14.581 17.7022 14.3896C17.8848 13.6886 18.125 12.3246 18.125 9.99998C18.125 7.67533 17.8848 6.3114 17.7023 5.6104C17.6535 5.41894 17.5597 5.24188 17.4289 5.09386C17.298 4.94585 17.1337 4.83115 16.9497 4.75927C14.3343 3.75422 10 3.78181 10 3.78181C10 3.78181 5.66574 3.75422 3.05033 4.75926C2.86629 4.83114 2.70203 4.94584 2.57116 5.09385C2.44029 5.24186 2.34656 5.41893 2.29776 5.61038C2.11518 6.31138 1.875 7.67533 1.875 9.99998Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.instagram.com/staticmania",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z",
                                strokeMiterlimit: "10"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13.4375 2.8125H6.5625C4.49143 2.8125 2.8125 4.49143 2.8125 6.5625V13.4375C2.8125 15.5086 4.49143 17.1875 6.5625 17.1875H13.4375C15.5086 17.1875 17.1875 15.5086 17.1875 13.4375V6.5625C17.1875 4.49143 15.5086 2.8125 13.4375 2.8125Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.0625 6.875C14.5803 6.875 15 6.45527 15 5.9375C15 5.41973 14.5803 5 14.0625 5C13.5447 5 13.125 5.41973 13.125 5.9375C13.125 6.45527 13.5447 6.875 14.0625 6.875Z",
                                fill: "#565656"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://dribbble.com/staticmania/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.55078 16.037C6.66328 14.1939 8.23315 12.6697 10.1082 11.6119C11.9832 10.5542 14.0997 9.99896 16.2524 10C16.6741 10 17.0905 10.0206 17.5017 10.0616",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.6894 4.14795C13.5183 5.58738 12.0409 6.74742 10.3647 7.54356C8.68846 8.3397 6.85577 8.75188 5.00011 8.75007C4.20969 8.75045 3.42101 8.67625 2.64453 8.52846",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.71484 3.25684C8.59445 4.35971 10.1529 5.93502 11.2355 7.82638C12.3181 9.71775 12.8871 11.8594 12.8861 14.0387C12.8869 15.0598 12.7627 16.0771 12.5165 17.0681",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.figma.com/@staticmania",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12.6562 12.6562C14.1233 12.6562 15.3125 11.467 15.3125 10C15.3125 8.53299 14.1233 7.34375 12.6562 7.34375C11.1892 7.34375 10 8.53299 10 10C10 11.467 11.1892 12.6562 12.6562 12.6562Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 7.34368V2.03125H7.34375C6.63927 2.03125 5.96364 2.3111 5.4655 2.80925C4.96735 3.30739 4.6875 3.98302 4.6875 4.6875C4.6875 5.39198 4.96735 6.06761 5.4655 6.56575C5.96364 7.0639 6.63927 7.34375 7.34375 7.34375L10 7.34368Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 12.6562V7.34375H7.34375C6.63927 7.34375 5.96364 7.6236 5.4655 8.12175C4.96735 8.61989 4.6875 9.29552 4.6875 10C4.6875 10.7045 4.96735 11.3801 5.4655 11.8783C5.96364 12.3764 6.63927 12.6562 7.34375 12.6562L10 12.6562Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 7.34368V2.03125H12.6562C13.3607 2.03125 14.0364 2.3111 14.5345 2.80925C15.0326 3.30739 15.3125 3.98302 15.3125 4.6875C15.3125 5.39198 15.0326 6.06761 14.5345 6.56575C14.0364 7.0639 13.3607 7.34375 12.6562 7.34375L10 7.34368Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 12.6562V15.3125C10 15.8379 9.84423 16.3515 9.55236 16.7883C9.26049 17.2251 8.84564 17.5656 8.36028 17.7666C7.87491 17.9677 7.34083 18.0203 6.82556 17.9178C6.3103 17.8153 5.837 17.5623 5.46551 17.1908C5.09402 16.8194 4.84104 16.3461 4.73854 15.8308C4.63605 15.3155 4.68865 14.7814 4.88969 14.2961C5.09074 13.8107 5.4312 13.3959 5.86801 13.104C6.30483 12.8121 6.81839 12.6563 7.34375 12.6563L10 12.6562Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://discord.gg/fSxDJyvJmr",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.5 12.1875C8.01777 12.1875 8.4375 11.7678 8.4375 11.25C8.4375 10.7322 8.01777 10.3125 7.5 10.3125C6.98223 10.3125 6.5625 10.7322 6.5625 11.25C6.5625 11.7678 6.98223 12.1875 7.5 12.1875Z",
                                fill: "#565656"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12.5 12.1875C13.0178 12.1875 13.4375 11.7678 13.4375 11.25C13.4375 10.7322 13.0178 10.3125 12.5 10.3125C11.9822 10.3125 11.5625 10.7322 11.5625 11.25C11.5625 11.7678 11.9822 12.1875 12.5 12.1875Z",
                                fill: "#565656"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.8125 6.24985C7.16746 5.82575 8.58012 5.6149 9.99987 5.62485C11.4196 5.6149 12.8322 5.82575 14.1872 6.24983",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.1871 13.75C12.8322 14.1741 11.4195 14.3849 9.99981 14.375C8.58008 14.3849 7.16744 14.1741 5.8125 13.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12.1148 14.2255L13.0542 16.1044C13.1168 16.2306 13.2204 16.3319 13.348 16.3916C13.4756 16.4513 13.6196 16.466 13.7567 16.4333C15.6737 15.9646 17.3264 15.1474 18.5301 14.1012C18.622 14.0221 18.6892 13.9182 18.7234 13.802C18.7577 13.6857 18.7576 13.562 18.7232 13.4457L16.069 4.59837C16.0422 4.50915 15.9959 4.42704 15.9334 4.35799C15.8708 4.28894 15.7937 4.2347 15.7076 4.19922C14.9577 3.89221 14.1822 3.65213 13.39 3.48181C13.2391 3.44873 13.0813 3.47261 12.9469 3.54884C12.8125 3.62508 12.711 3.74829 12.662 3.89481L12.0391 5.76353",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7.88822 14.2255L6.94874 16.1044C6.88614 16.2306 6.78258 16.3319 6.65499 16.3916C6.5274 16.4513 6.38332 16.466 6.2463 16.4333C4.32922 15.9646 2.67656 15.1474 1.47286 14.1012C1.38094 14.0222 1.31381 13.9182 1.27955 13.802C1.24529 13.6857 1.24536 13.562 1.27974 13.4457L3.93395 4.59836C3.96074 4.50915 4.00709 4.42703 4.06961 4.35798C4.13214 4.28894 4.20927 4.2347 4.29539 4.19921C5.04524 3.8922 5.82077 3.65213 6.61293 3.48181C6.76385 3.44873 6.92168 3.47261 7.05607 3.54884C7.19046 3.62508 7.29194 3.74829 7.34099 3.89481L7.9639 5.76353",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.linkedin.com/company/staticmania/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-[#565656] duration-200 hover:stroke-white",
                        width: "23",
                        height: "23",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.375 8.75V13.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.875 8.75V13.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.375 10.9375C9.375 10.3573 9.60547 9.80094 10.0157 9.3907C10.4259 8.98047 10.9823 8.75 11.5625 8.75C12.1427 8.75 12.6991 8.98047 13.1093 9.3907C13.5195 9.80094 13.75 10.3573 13.75 10.9375V13.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.875 7.1875C7.39277 7.1875 7.8125 6.76777 7.8125 6.25C7.8125 5.73223 7.39277 5.3125 6.875 5.3125C6.35723 5.3125 5.9375 5.73223 5.9375 6.25C5.9375 6.76777 6.35723 7.1875 6.875 7.1875Z",
                                fill: "#565656"
                            }, void 0, false, {
                                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbarCompo/social-icons.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbarCompo/social-icons.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbarCompo/social-icons.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navbarCompo/social-icons.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SocialIcons;
var _c;
__turbopack_context__.k.register(_c, "SocialIcons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/navbarCompo/menu-list.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MenuList": (()=>MenuList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const menuItems = [
    {
        title: 'Home',
        url: '#',
        items: [
            {
                title: 'Homepage 01 - Design Agency',
                url: '/'
            },
            {
                title: 'Homepage 02- Digital Solutions Agency',
                url: '/home-02'
            },
            {
                title: 'Homepage 03 -  Portfolio',
                url: '/home-03'
            },
            {
                title: 'Homepage 04 -  Photography Studio',
                url: '/home-04'
            },
            {
                title: 'Homepage 05 -  SEO Agency',
                url: '/home-05'
            },
            {
                title: 'Homepage 06 -  Creative Agency',
                url: '/home-06'
            },
            {
                title: 'Homepage 07 -  Design Studio',
                url: '/home-07'
            },
            {
                title: 'Homepage 08 -  Business Solutions',
                url: '/home-08'
            },
            {
                title: 'Homepage 09 -  Personal Branding',
                url: '/home-09'
            },
            {
                title: 'Homepage 10 -  Full Service Agency',
                url: '/home-10'
            },
            {
                title: 'Homepage 11 -  Video Production',
                url: '/home-11'
            },
            {
                title: 'Homepage 12 -  AI Agency',
                url: '/home-12'
            },
            {
                title: 'Homepage 13 -  Travel Agency',
                url: '/home-13'
            },
            {
                title: 'Homepage 14 -  Film Production Agency',
                url: '/home-14'
            },
            {
                title: 'Homepage 15 -  Branding Agency',
                url: '/home-15'
            },
            {
                title: 'Homepage 16 -  Marketing Agency',
                url: '/home-16'
            },
            {
                title: 'Homepage 17 -  App Development Agency',
                url: '/home-17'
            },
            {
                title: 'Homepage 18 -  Copywriting Agency',
                url: '/home-18'
            },
            {
                title: 'Homepage 19 -  Brand Strategy',
                url: '/home-19'
            },
            {
                title: 'Homepage 20 -  Social Media Agency',
                url: '/home-20'
            },
            {
                title: 'Homepage 21 -  Law Firm Agency',
                url: '/home-21'
            },
            {
                title: 'Homepage 22 -  Event Planning Agency',
                url: '/home-22'
            },
            {
                title: 'Homepage 23 -  Insurance Agency',
                url: '/home-23'
            },
            {
                title: 'Homepage 24 -  Management Agency',
                url: '/home-24'
            },
            {
                title: 'Homepage 25 -  Communications Agency',
                url: '/home-25'
            }
        ]
    },
    {
        title: 'About',
        url: '#',
        items: [
            {
                title: 'About',
                url: '/about'
            },
            {
                title: 'About 02',
                url: '/about-02'
            }
        ]
    },
    {
        title: 'Services',
        url: '#',
        items: [
            {
                title: 'Services',
                url: '/services'
            },
            {
                title: 'Services Details',
                url: '/services/media'
            }
        ]
    },
    {
        title: 'Blog',
        url: '#',
        items: [
            {
                title: 'AI Blog',
                url: '/ai-blog'
            },
            {
                title: 'SEO Blog',
                url: '/seo-blog'
            },
            {
                title: 'Blog Details',
                url: '/seo-blog/the-evolution-of-minimalist-design'
            }
        ]
    },
    {
        title: 'Projects',
        url: '#',
        items: [
            {
                title: 'Design Agency',
                url: '/design-agency'
            },
            {
                title: 'Digital Agency',
                url: '/digital-agency/project'
            },
            {
                title: 'Case Study',
                url: '/portfolio-agency/case-study'
            },
            {
                title: 'Project Details',
                url: '/design-agency/project-nexus'
            },
            {
                title: 'Project Details 02',
                url: '/digital-agency/project/project-nexus'
            }
        ]
    }
];
const MenuList = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((props, ref)=>{
    _s();
    const { onItemClick } = props;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeItems, setActiveItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [initialLoad, setInitialLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const dropdownRefsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    //  initial active item current path
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuList.useEffect": ()=>{
            let foundParent = false;
            menuItems.forEach({
                "MenuList.useEffect": (item)=>{
                    if (item.items) {
                        const activeSubItem = item.items.find({
                            "MenuList.useEffect.activeSubItem": (subItem)=>pathname === subItem.url || pathname.startsWith(subItem.url + '/')
                        }["MenuList.useEffect.activeSubItem"]);
                        if (activeSubItem) {
                            setActiveItems([
                                item.title
                            ]);
                            foundParent = true;
                        }
                    }
                }
            }["MenuList.useEffect"]);
            // If no parent found but we're on a top-level path
            if (!foundParent) {
                const topLevelMatch = menuItems.find({
                    "MenuList.useEffect.topLevelMatch": (item)=>pathname === item.url || item.url !== '#' && pathname.startsWith(item.url + '/')
                }["MenuList.useEffect.topLevelMatch"]);
                if (topLevelMatch) {
                    setActiveItems([
                        topLevelMatch.title
                    ]);
                }
            }
            if (pathname === '/') {
                setActiveItems([
                    'Home'
                ]);
            }
            setInitialLoad(false);
        }
    }["MenuList.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuList.useEffect": ()=>{
            if (initialLoad && pathname === '/') {
                setActiveItems([
                    'Home'
                ]);
                setTimeout({
                    "MenuList.useEffect": ()=>{
                        const homeDropdown = dropdownRefsMap.current.get('Home');
                        if (homeDropdown) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(homeDropdown, {
                                display: 'block',
                                autoAlpha: 1,
                                x: 0
                            });
                        }
                    }
                }["MenuList.useEffect"], 100);
            }
        }
    }["MenuList.useEffect"], [
        initialLoad,
        pathname
    ]);
    // Handle dropdown animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuList.useEffect": ()=>{
            menuItems.forEach({
                "MenuList.useEffect": (item)=>{
                    const dropdownRef = dropdownRefsMap.current.get(item.title);
                    if (dropdownRef) {
                        if (activeItems.includes(item.title)) {
                            // Show dropdown
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(dropdownRef, {
                                display: 'block',
                                autoAlpha: 0,
                                x: 10
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownRef, {
                                autoAlpha: 1,
                                x: 0,
                                duration: 0.2,
                                ease: 'power3.in',
                                stagger: {
                                    amount: 0.1,
                                    ease: 'back.out(1.7)'
                                }
                            });
                        } else {
                            // Hide dropdown
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dropdownRef, {
                                autoAlpha: 0,
                                x: 10,
                                duration: 0.1,
                                ease: 'power3.out',
                                onComplete: {
                                    "MenuList.useEffect": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(dropdownRef, {});
                                    }
                                }["MenuList.useEffect"]
                            });
                        }
                    }
                }
            }["MenuList.useEffect"]);
        }
    }["MenuList.useEffect"], [
        activeItems
    ]);
    const handleDropdownClick = (title)=>{
        if (window.innerWidth > 368) {
            setActiveItems((prev)=>prev.includes(title) ? [] : [
                    title
                ]);
        } else {
            setActiveItems((prev)=>prev.includes(title) ? prev.filter((item)=>item !== title) : [
                    ...prev,
                    title
                ]);
        }
    };
    const setDropdownRef = (el, title)=>{
        if (el) {
            dropdownRefsMap.current.set(title, el);
            // If this is the Home dropdown and we're on the homepage, make it visible immediately
            if (title === 'Home' && pathname === '/' && initialLoad) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                    display: 'block',
                    autoAlpha: 1,
                    x: 0
                });
            }
        }
    };
    const isLinkActive = (url)=>{
        return pathname === url || pathname.startsWith(url + '/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        className: "menu-list",
        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: `menu-list-item menu-list-item-anchor ${activeItems.includes(item.title) ? 'active' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.url,
                        onClick: (e)=>{
                            e.preventDefault();
                            handleDropdownClick(item.title);
                        },
                        className: "menu-list-item-text text-[28px] leading-[70px] text-white md:text-[42px] xl:text-[56px] xl:leading-[90px]",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/components/navbarCompo/menu-list.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    item.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        ref: (el)=>setDropdownRef(el, item.title),
                        className: `menu-list-item-dropdown relative left-0 h-fit max-h-[60vh] w-full gap-x-4 overflow-y-auto md:absolute md:left-[48%] md:max-h-none md:w-[350px] md:overflow-visible md:pb-0 lg:left-[33%] lg:w-[650px] xl:left-[44%] ${item.title === 'Home' ? '!grid !grid-cols-1 lg:-mt-[70px] lg:!grid-cols-2' : '!grid !grid-cols-1 lg:top-5'} ${activeItems.includes(item.title) || item.title === 'Home' && pathname === '/' && initialLoad ? 'block' : 'hidden'} `,
                        children: item.items.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: subItem.url,
                                    onClick: ()=>{
                                        onItemClick && onItemClick();
                                    },
                                    className: `menu-list-item-dropdown-list inline-block pb-1 pl-3 text-base leading-8 text-white md:text-lg md:leading-[50px] ${isLinkActive(subItem.url) ? 'active' : ''}`,
                                    children: subItem.title.includes('-') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            subItem.title.split('-')[0],
                                            "-",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "font-instrument italic text-inherit",
                                                children: subItem.title.split('-')[1]
                                            }, void 0, false, {
                                                fileName: "[project]/components/navbarCompo/menu-list.tsx",
                                                lineNumber: 233,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true) : subItem.title
                                }, void 0, false, {
                                    fileName: "[project]/components/navbarCompo/menu-list.tsx",
                                    lineNumber: 222,
                                    columnNumber: 19
                                }, this)
                            }, subItem.title, false, {
                                fileName: "[project]/components/navbarCompo/menu-list.tsx",
                                lineNumber: 221,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/navbarCompo/menu-list.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, this)
                ]
            }, item.title, true, {
                fileName: "[project]/components/navbarCompo/menu-list.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/navbarCompo/menu-list.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}, "yNOzZ4mM9hLU8BBgKQSanMcW75M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
})), "yNOzZ4mM9hLU8BBgKQSanMcW75M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = MenuList;
MenuList.displayName = 'MenuList';
var _c, _c1;
__turbopack_context__.k.register(_c, "MenuList$forwardRef");
__turbopack_context__.k.register(_c1, "MenuList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/shared/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo-white.png.mjs { IMAGE => "[project]/public/images/logo-white.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo.png.mjs { IMAGE => "[project]/public/images/logo.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbarCompo$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbarCompo/social-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbarCompo$2f$menu$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbarCompo/menu-list.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuOverflowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isMenuOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Navbar.useLayoutEffect": ()=>{
            if (menuRef.current) {
                menuRef.current.style.visibility = 'hidden';
                menuRef.current.style.opacity = '0';
            }
            if (menuOverflowRef.current) {
                menuOverflowRef.current.style.visibility = 'hidden';
                menuOverflowRef.current.style.opacity = '0';
            }
        }
    }["Navbar.useLayoutEffect"], []);
    const openMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[openMenu]": ()=>{
            if (menuOverflowRef.current && openBtnRef.current && menuRef.current && timelineRef.current) {
                isMenuOpenRef.current = true;
                scrollPositionRef.current = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollPositionRef.current}px`;
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menuOverflowRef.current, {
                    scale: 0.98
                });
                openBtnRef.current.classList.add('opacity-0');
                timelineRef.current.timeScale(1).play();
                menuRef.current.style.pointerEvents = 'auto';
            }
        }
    }["Navbar.useCallback[openMenu]"], []);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[closeMenu]": ()=>{
            if (openBtnRef.current && menuRef.current && timelineRef.current) {
                isMenuOpenRef.current = false;
                const scrollY = Number.parseInt(document.body.style.top || '0') * -1;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, Math.abs(scrollY));
                openBtnRef.current.classList.remove('opacity-1');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(openBtnRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'back.out(1.7)'
                });
                timelineRef.current.timeScale(1.2).reverse();
                menuRef.current.style.pointerEvents = 'none';
            }
        }
    }["Navbar.useCallback[closeMenu]"], []);
    // Close menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isMenuOpenRef.current) {
                closeMenu();
            }
        }
    }["Navbar.useEffect"], [
        pathname,
        closeMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerEase('custom', {
                "Navbar.useEffect": (progress)=>progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            }["Navbar.useEffect"]);
            if (menuRef.current && menuOverflowRef.current && menuItemsRef.current && closeBtnRef.current && openBtnRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menuRef.current, {
                    pointerEvents: 'none',
                    autoAlpha: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menuOverflowRef.current, {
                    pointerEvents: 'none',
                    autoAlpha: 0,
                    y: -30,
                    rotate: -1,
                    scale: 0.98
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menuItemsRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    scale: 0.95
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(closeBtnRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    scale: 0.95
                });
                timelineRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                    paused: true,
                    defaults: {
                        ease: 'custom',
                        duration: 0.8
                    },
                    onReverseComplete: {
                        "Navbar.useEffect": ()=>{
                            if (menuRef.current) {
                                menuRef.current.style.pointerEvents = 'none';
                            }
                        }
                    }["Navbar.useEffect"]
                });
                timelineRef.current.to(menuRef.current, {
                    autoAlpha: 1,
                    pointerEvents: 'auto',
                    duration: 0.5,
                    ease: 'power2.out'
                }, 0).to(menuOverflowRef.current, {
                    autoAlpha: 1,
                    pointerEvents: 'auto',
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'custom'
                }, 0.1).to(menuItemsRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    stagger: {
                        amount: 0.4,
                        ease: 'power2.out'
                    },
                    duration: 0.7,
                    ease: 'custom'
                }, 0.2).to(closeBtnRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'back.out(1.7)'
                }, 0.3).to(openBtnRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    scale: 0.95,
                    duration: 0.5,
                    delay: 0.3,
                    ease: 'back.out(1.7)'
                }, 0.1);
            }
            return ({
                "Navbar.useEffect": ()=>{
                    if (timelineRef.current) {
                        timelineRef.current.kill();
                    }
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isMenuOpenRef.current) {
                closeMenu();
            }
        }
    }["Navbar.useEffect"], [
        pathname,
        closeMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const controlNavbar = {
                "Navbar.useEffect.controlNavbar": ()=>{
                    if (window.scrollY > lastScrollY.current && window.scrollY > 200) {
                        // Scrolling down & past threshold
                        setIsVisible(false);
                    } else {
                        // Scrolling up
                        setIsVisible(true);
                    }
                    lastScrollY.current = window.scrollY;
                }
            }["Navbar.useEffect.controlNavbar"];
            window.addEventListener('scroll', controlNavbar);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', controlNavbar)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: "fixed z-[9999] w-full transition-transform duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `pointer-events-none fixed top-0 z-[21] h-[155px] w-full transition duration-300 ease-linear will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0",
                                style: {
                                    backdropFilter: 'blur(0px)',
                                    WebkitBackdropFilter: 'blur(0px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                                style: {
                                    maskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
                                    WebkitMaskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
                                    backdropFilter: 'blur(-7px)',
                                    WebkitBackdropFilter: 'blur(-7px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                                style: {
                                    maskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.66666666666666%)',
                                    WebkitMaskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.66666666666666%)',
                                    backdropFilter: 'blur(2px)',
                                    WebkitBackdropFilter: 'blur(2px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                                style: {
                                    maskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 0) 83.33333333333333%)',
                                    WebkitMaskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 0) 83.33333333333333%)',
                                    backdropFilter: 'blur(4px)',
                                    WebkitBackdropFilter: 'blur(4px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                                style: {
                                    maskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 0) 100%)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                                style: {
                                    maskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.66666666666666%)',
                                    WebkitMaskImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.66666666666666%)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `fixed z-[1000] w-full px-5 pt-1 transition duration-300 ease-linear will-change-transform sm:px-8 sm:pt-5 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "inline-block max-h-[68px] w-auto dark:hidden",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "logo",
                                            width: 136,
                                            height: 68,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "hidden max-h-[68px] w-auto dark:inline-block",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "logo",
                                            width: 136,
                                            height: 68,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: openBtnRef,
                                        onClick: openMenu,
                                        className: "menu-open relative h-[68px] w-[68px] cursor-pointer before:absolute before:left-1/2 before:top-[28px] before:h-0.5 before:w-9 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-300 before:content-[''] after:absolute after:bottom-[28px] after:left-1/2 after:h-0.5 after:w-9 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:before:top-[25px] hover:after:bottom-[25px] dark:before:bg-white dark:after:bg-white",
                                        "aria-label": "Open Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/Navbar.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: menuRef,
                "data-lenis-prevent": "true",
                className: "menu fixed right-6 top-0 z-[99999] min-h-screen w-full overflow-y-auto opacity-0 before:absolute before:top-0 before:w-[1px] before:bg-backgroundBody before:bg-opacity-10 before:content-none md:before:left-[40%] md:before:h-screen md:before:content-[''] lg:before:left-[32%] lg:before:h-[calc(100vh-87px)] xl:before:left-[40%] xl:before:h-[calc(100vh-94px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: closeBtnRef,
                        onClick: closeMenu,
                        className: "menu-close sticky left-[89%] top-9 h-[40px] w-[40px] cursor-pointer text-white sm:left-[90%] md:left-[93%] lg:left-[94.7%] xl:left-[96.5%] 2xl:left-[97%]",
                        "aria-label": "Close Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            viewBox: "0 0 50 50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z",
                                fill: "#fff"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-wrapper relative z-[99999] mx-auto flex max-h-[90vh] max-w-[300px] flex-col gap-8 overflow-y-auto overflow-x-hidden pb-4 sm:max-w-[400px] md:top-14 md:max-h-none md:max-w-[580px] md:gap-16 md:overflow-visible md:pt-0 lg:max-w-[900px] xl:max-w-[1030px] 2xl:top-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbarCompo$2f$menu$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuList"], {
                            ref: menuItemsRef,
                            onItemClick: closeMenu
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-footer fixed bottom-0 w-full border-t border-white border-opacity-10 max-lg:hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-footer-content mx-auto flex max-w-[300px] flex-col justify-between py-8 sm:max-w-[400px] md:max-w-[600px] md:flex-row lg:max-w-[900px] xl:max-w-[1130px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 w-full text-sm text-white md:mb-0 md:w-auto",
                                    children: "2261 Market Street #5039 San Francisco, CA 94114"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbarCompo$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialIcons"], {}, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/Navbar.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuOverflowRef,
                className: "menu-overflow pointer-events-none fixed inset-0 z-[9999] bg-[rgba(10,10,10,0.95)] backdrop-blur-[25px]"
            }, void 0, false, {
                fileName: "[project]/components/shared/Navbar.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "PIloMy1NudjSCjlTM9bRmYE78nE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_9ad6b1cd._.js.map