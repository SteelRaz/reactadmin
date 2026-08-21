import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveToken } from "../auth";

function LoginKasirPage() {
  const nav = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ username: "", password: "" });

  const from = location.state?.from?.pathname || "/Content";

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /auth/login, lalu ganti token dummy ini dengan token dari server
    saveToken("dummy-token");
    nav(from, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 pt-10 pb-48">
      <div className="w-full max-w-sm">
        <div className="mb-11 flex items-center justify-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-[9px] bg-orange-600 text-sm font-bold text-white">S</div>
          <span className="text-[15px] font-semibold tracking-tight">Sumber Bangunan</span>
        </div>
        <h1 className="mb-2 text-center text-[32px] font-semibold leading-tight tracking-tight text-neutral-900">Masuk ke kasir</h1>
        <p className="mb-8 text-left text-sm text-neutral-500">Kasir toko bahan bangunan. Gunakan akun yang diberikan admin.</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-[13px] font-medium">
            Username
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="admin"
              required
              className="h-[38px] rounded-[10px] border border-neutral-200 px-3 text-sm outline-none focus:border-neutral-400 focus:ring-4 focus:ring-black/5"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-medium">
            Password
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              required
              className="h-[38px] rounded-[10px] border border-neutral-200 px-3 text-sm outline-none focus:border-neutral-400 focus:ring-4 focus:ring-black/5"
            />
          </label>
          <button type="submit" className="mt-1.5 h-10 cursor-pointer rounded-[10px] bg-orange-600 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginKasirPage;
