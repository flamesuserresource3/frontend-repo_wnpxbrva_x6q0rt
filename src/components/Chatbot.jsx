import { useState } from 'react';
import { Bot, Send } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hey, I’m Jayesh’s AI assistant — ask me anything about his work!" },
  ]);
  const [input, setInput] = useState('');

  const onSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: 'user', text: input }]);
    setInput('');
    // Mock response for demo
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: 'Thanks! Jayesh will reach out soon. Meanwhile, check Projects and Research above.' }]);
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-white animate-pulse hover:animate-none"
        aria-label="Open chat"
      >
        <Bot />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/95 backdrop-blur">
          <div className="px-4 py-3 border-b border-white/10 text-white font-medium">Jayesh’s AI Assistant</div>
          <div className="max-h-80 overflow-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm px-3 py-2 rounded-xl ${m.from === 'bot' ? 'bg-white/5 text-slate-200' : 'bg-cyan-600/20 text-cyan-200 ml-auto w-fit'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={onSend} className="flex items-center gap-2 p-3 border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none"
            />
            <button type="submit" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"><Send size={18} /></button>
          </form>
        </div>
      )}
    </>
  );
}
