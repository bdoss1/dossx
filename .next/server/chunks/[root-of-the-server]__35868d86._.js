module.exports = {

"[project]/.next-internal/server/app/api/newsletter/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/newsletter/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/server.js [app-route] (ecmascript)");
;
// Optional: Resend email notification
let Resend = null;
try {
    // Lazy import so the route works even if 'resend' isn't installed
    // npm i resend  (if you want email notifications)
    // @ts-ignore
    Resend = (await __turbopack_context__.r("[project]/node_modules/.pnpm/resend@4.6.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/resend/dist/index.mjs [app-route] (ecmascript, async loader)")(__turbopack_context__.i)).Resend;
} catch  {}
function sanitize(s) {
    return (s || "").trim().slice(0, 500);
}
function validEmail(e) {
    return !!e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
async function POST(req) {
    try {
        const { email, name, source } = await req.json();
        const cleanEmail = sanitize(email);
        const cleanName = sanitize(name);
        const cleanSource = sanitize(source || "footer-newsletter");
        if (!validEmail(cleanEmail)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Please provide a valid email."
            }, {
                status: 400
            });
        }
        // 1) Try Supabase insert if env is present
        const supabaseUrl = ("TURBOPACK compile-time value", "https://xcykateuyjucovryppnb.supabase.co");
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        let savedToSupabase = false;
        if (supabaseUrl && supabaseKey) {
            // Assumes you have a public table 'newsletter_subscribers' with RLS disabled or a policy for service role
            const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${supabaseKey}`,
                    "Prefer": "return=representation"
                },
                body: JSON.stringify({
                    email: cleanEmail,
                    name: cleanName || null,
                    source: cleanSource,
                    created_at: new Date().toISOString()
                })
            });
            // 201/200 expected for insert
            if (res.ok) savedToSupabase = true;
            else {
                const txt = await res.text().catch(()=>"");
                console.warn("Supabase insert failed:", res.status, txt);
            }
        }
        // 2) If not saved to Supabase, try sending a Resend notification
        let emailed = false;
        if (!savedToSupabase && process.env.RESEND_API_KEY && Resend) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const to = process.env.SALES_EMAIL || process.env.FROM_EMAIL || "hello@dossx.com";
            try {
                await resend.emails.send({
                    from: process.env.FROM_EMAIL || "no-reply@dossx.com",
                    to,
                    subject: "New Newsletter Subscriber",
                    html: `
            <p><b>Email:</b> ${cleanEmail}</p>
            <p><b>Name:</b> ${cleanName || "-"}</p>
            <p><b>Source:</b> ${cleanSource}</p>
            <p><i>Stored via email fallback (Resend)</i></p>
          `
                });
                emailed = true;
            } catch (e) {
                console.warn("Resend email failed:", e?.message || e);
            }
        }
        // 3) Final response
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "You're subscribed! Thanks for joining DossX Insights.",
            stored: savedToSupabase ? "supabase" : emailed ? "email-fallback" : "none"
        });
    } catch (e) {
        console.error("Newsletter route error:", e?.message || e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_sass$40$1$2e$89$2e$2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unable to process your subscription right now."
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__35868d86._.js.map