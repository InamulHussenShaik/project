import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export default function App() {
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Welcome to the Home Page" }), _jsx(Link, { to: "/dashboard", className: "text-blue-600 underline", children: "Go to Dashboard" })] }));
}
