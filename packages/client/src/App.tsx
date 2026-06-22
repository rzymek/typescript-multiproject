import { greetUser, getSystemStatus } from "@workspace/library";

export function App() {
  const greetingMessage = greetUser("World");
  const systemStatus = getSystemStatus();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-850 rounded-xl p-6 shadow-2xl">
        <h1 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Library Resolution Output
        </h1>
        <pre id="pre-output" className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-indigo-300 text-xs overflow-x-auto leading-relaxed">
{JSON.stringify({ greetingMessage, systemStatus }, null, 2)}
        </pre>
      </div>
    </div>
  );
}

