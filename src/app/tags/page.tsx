"use client";

import { useState } from "react";
import { Card, Title, TextInput, Button } from "@tremor/react";

const etiquetasIniciais = [
  {
    id: 1,
    name: "interessado",
    description: "Usuário demonstrou interesse em nossos produtos",
  },
  {
    id: 2,
    name: "lead",
    description: "Cliente potencial",
  },
  {
    id: 3,
    name: "cliente",
    description: "Adquiriu nossos produtos",
  },
  {
    id: 4,
    name: "produto A",
    description: "Interessado no Produto A",
  },
  {
    id: 5,
    name: "produto B",
    description: "Interessado no Produto B",
  },
  {
    id: 6,
    name: "produto C",
    description: "Interessado no Produto C",
  },
];

export default function Etiquetas() {
  const [tags, setTags] = useState(etiquetasIniciais);
  const [newTagName, setNewTagName] = useState("");
  const [newTagDescription, setNewTagDescription] = useState("");

  const handleAddTag = () => {
    if (newTagName && newTagDescription) {
      setTags([
        ...tags,
        {
          id: tags.length + 1,
          name: newTagName,
          description: newTagDescription,
        },
      ]);
      setNewTagName("");
      setNewTagDescription("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">Etiquetas</Title>
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-6">
            {/* Formulário para adicionar nova etiqueta */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Adicionar Nova Etiqueta
              </Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <TextInput
                  placeholder="Nome da etiqueta"
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                  className="rounded-md border-gray-300"
                  aria-label="Nome da etiqueta"
                />
                <TextInput
                  placeholder="Descrição da etiqueta"
                  value={newTagDescription}
                  onChange={(e) => setNewTagDescription(e.target.value)}
                  className="rounded-md border-gray-300"
                  aria-label="Descrição da etiqueta"
                />
              </div>
              <Button
                onClick={handleAddTag}
                disabled={!newTagName || !newTagDescription}
                className="mt-4 rounded-md w-full md:w-auto"
              >
                Adicionar Etiqueta
              </Button>
            </div>

            {/* Lista de etiquetas existentes */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Etiquetas Existentes
              </Title>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tags.map((tag) => (
                  <Card
                    key={tag.id}
                    className="p-4 bg-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {tag.name}
                      </h3>
                      <p className="text-sm text-gray-600">{tag.description}</p>
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
