"use client";

import { useState } from "react";
import { Card, Title, TextInput, Button } from "@tremor/react";

const respostasIniciais = [
  {
    id: 1,
    trigger: "Olá",
    response: "Oi! Como posso ajudar você hoje?",
  },
  {
    id: 2,
    trigger: "Preço",
    response:
      "Nossos preços começam a partir de R$9,99 por mês. Gostaria de mais detalhes?",
  },
  {
    id: 3,
    trigger: "Suporte",
    response:
      "Para suporte, envie um e-mail para suporte@example.com ou ligue para 1-800-123-4567.",
  },
];

export default function ConfiguracaoChatbot() {
  const [respostas, setRespostas] = useState(respostasIniciais);
  const [trigger, setTrigger] = useState("");
  const [response, setResponse] = useState("");

  const handleAddResponse = () => {
    if (trigger && response) {
      setRespostas([...respostas, { id: respostas.length + 1, trigger, response }]);
      setTrigger("");
      setResponse("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">
          Configuração do Chatbot
        </Title>
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-6">
            {/* Formulário para adicionar nova resposta */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Adicionar Nova Resposta
              </Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <TextInput
                  placeholder="Palavra ou frase de gatilho"
                  value={trigger}
                  onChange={(e) => setTrigger(e.target.value)}
                  className="rounded-md"
                />
                <TextInput
                  placeholder="Resposta do bot"
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  className="rounded-md"
                />
              </div>
              <Button className="mt-4 w-full md:w-auto" onClick={handleAddResponse}>
                Adicionar Resposta
              </Button>
            </div>

            {/* Lista de respostas existentes */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Respostas Existentes
              </Title>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {respostas.map((item) => (
                  <Card
                    key={item.id}
                    className="p-4 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-500">Gatilho:</span>
                        <span className="block font-medium text-gray-800">
                          {item.trigger}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Resposta:</span>
                        <span className="block font-medium text-gray-800">
                          {item.response}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
