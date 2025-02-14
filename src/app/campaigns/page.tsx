"use client";

import { useState } from "react";
import { Card, Title, TextInput, DatePicker, Button } from "@tremor/react";

const campanhasIniciais = [
  { id: 1, nome: "Promoção de Verão", inicio: new Date("2023-06-01"), fim: new Date("2023-06-30"), intervalo: "1h" },
  { id: 2, nome: "Volta às Aulas", inicio: new Date("2023-08-15"), fim: new Date("2023-09-15"), intervalo: "2h" },
];

export default function Campanhas() {
  const [campanhas, setCampanhas] = useState<
    { id: number; nome: string; inicio: Date; fim: Date; intervalo: string }[]
  >(campanhasIniciais);

  const [novaCampanha, setNovaCampanha] = useState<{
    nome: string;
    inicio: Date | null;
    fim: Date | null;
    intervalo: string;
  }>({
    nome: "",
    inicio: null,
    fim: null,
    intervalo: "",
  });

  const handleAddCampanha = () => {
    if (
      novaCampanha.nome &&
      novaCampanha.inicio instanceof Date &&
      novaCampanha.fim instanceof Date &&
      novaCampanha.intervalo
    ) {
      setCampanhas((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          nome: novaCampanha.nome,
          inicio: novaCampanha.inicio as Date, // Garante que é um Date
          fim: novaCampanha.fim as Date, // Garante que é um Date
          intervalo: novaCampanha.intervalo,
        },
      ]);
      setNovaCampanha({ nome: "", inicio: null, fim: null, intervalo: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">Campanhas</Title>

        {/* Card do formulário */}
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <Title className="text-xl font-semibold text-gray-700">
            Adicionar Nova Campanha
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <TextInput
              placeholder="Nome da campanha"
              value={novaCampanha.nome}
              onChange={(e) =>
                setNovaCampanha({ ...novaCampanha, nome: e.target.value })
              }
              className="rounded-md"
            />
            <DatePicker
              placeholder="Data de início"
              value={novaCampanha.inicio ?? undefined}
              onValueChange={(value) =>
                setNovaCampanha({ ...novaCampanha, inicio: value || null })
              }
              className="rounded-md"
            />
            <DatePicker
              placeholder="Data de término"
              value={novaCampanha.fim ?? undefined}
              onValueChange={(value) =>
                setNovaCampanha({ ...novaCampanha, fim: value || null })
              }
              className="rounded-md"
            />
            <TextInput
              placeholder="Intervalo (ex.: 1h, 2h)"
              value={novaCampanha.intervalo}
              onChange={(e) =>
                setNovaCampanha({ ...novaCampanha, intervalo: e.target.value })
              }
              className="rounded-md"
            />
          </div>
          <Button className="mt-4 w-full md:w-auto" onClick={handleAddCampanha}>
            Adicionar Campanha
          </Button>
        </Card>

        {/* Lista de campanhas */}
        <div>
          <Title className="text-xl font-semibold text-gray-700 mb-4">
            Campanhas Existentes
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campanhas.map((campanha) => (
              <Card
                key={campanha.id}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col space-y-2">
                  <div>
                    <span className="block text-sm text-gray-500">Nome</span>
                    <span className="block font-medium text-gray-800">
                      {campanha.nome}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Início</span>
                    <span className="block font-medium text-gray-800">
                      {campanha.inicio.toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Término</span>
                    <span className="block font-medium text-gray-800">
                      {campanha.fim.toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Intervalo</span>
                    <span className="block font-medium text-gray-800">
                      {campanha.intervalo}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
