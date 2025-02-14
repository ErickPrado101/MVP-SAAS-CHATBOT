"use client";

import { useState } from "react";
import { Card, Title, TextInput } from "@tremor/react";

const usuariosIniciais = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    tags: ["interessada", "produto A"],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    tags: ["lead", "produto B"],
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    tags: ["cliente", "produto A", "produto C"],
  },
  {
    id: 4,
    name: "David Lee",
    email: "david@example.com",
    tags: ["lead", "produto B"],
  },
];

export default function Relatorios() {
  const [searchTerm, setSearchTerm] = useState("");
  const usuariosFiltrados = usuariosIniciais.filter(
    (usuario) =>
      usuario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">Relatórios</Title>
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-6">
            <TextInput
              placeholder="Buscar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border-gray-300"
              aria-label="Buscar usuários"
            />
            {usuariosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {usuariosFiltrados.map((usuario) => (
                  <Card
                    key={usuario.id}
                    className="p-4 bg-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {usuario.name}
                      </h3>
                      <p className="text-sm text-gray-600">{usuario.email}</p>
                      <div className="flex flex-wrap gap-2">
                        {usuario.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">Nenhum usuário encontrado.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
