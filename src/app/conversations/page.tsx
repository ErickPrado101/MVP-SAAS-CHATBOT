"use client";

import { useState } from "react";
import { Card, Title, TextInput, Button } from "@tremor/react";

const mensagensIniciais = [
  { id: 1, text: "Olá! Como posso ajudar você hoje?", sender: "bot" },
  { id: 2, text: "Tenho uma pergunta sobre o seu produto.", sender: "user" },
  { id: 3, text: "Claro, ficarei feliz em ajudar. O que você gostaria de saber?", sender: "bot" },
];

export default function Conversas() {
  const [messages, setMessages] = useState(mensagensIniciais);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
      setInput("");
      // Simula a resposta do bot após 1 segundo
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "Obrigado pela sua mensagem. Como mais posso ajudar você?",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">Conversas</Title>
        <Card className="h-[600px] flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-xl shadow transition-all duration-200 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <TextInput
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-md border-gray-300"
              />
              <Button onClick={handleSend} className="rounded-md">
                Enviar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
