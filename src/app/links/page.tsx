"use client";

import { useState } from "react";
import { Card, Title, TextInput, Button } from "@tremor/react";

const linksIniciais = [
  {
    id: 1,
    name: "Líder 1",
    originalLink: "https://wa.me/leader01",
    shortLink: "https://example.com/l1",
  },
  {
    id: 2,
    name: "Líder 2",
    originalLink: "https://wa.me/leader02",
    shortLink: "https://example.com/l2",
  },
];

export default function Links() {
  const [links, setLinks] = useState(linksIniciais);
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkOriginal, setNewLinkOriginal] = useState("");

  const handleAddLink = () => {
    if (newLinkName && newLinkOriginal) {
      const shortLink = `https://example.com/${newLinkName
        .toLowerCase()
        .replace(/\s+/g, "")}`;
      setLinks([
        ...links,
        {
          id: links.length + 1,
          name: newLinkName,
          originalLink: newLinkOriginal,
          shortLink: shortLink,
        },
      ]);
      setNewLinkName("");
      setNewLinkOriginal("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Title className="text-3xl font-bold text-gray-800">Links</Title>
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <div className="space-y-6">
            {/* Formulário para adicionar novo link */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Adicionar Novo Link
              </Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <TextInput
                  placeholder="Nome do Líder"
                  value={newLinkName}
                  onChange={(e) => setNewLinkName(e.target.value)}
                  className="rounded-md border-gray-300"
                />
                <TextInput
                  placeholder="Link original"
                  value={newLinkOriginal}
                  onChange={(e) => setNewLinkOriginal(e.target.value)}
                  className="rounded-md border-gray-300"
                />
              </div>
              <Button
                onClick={handleAddLink}
                className="mt-4 rounded-md w-full md:w-auto"
              >
                Adicionar Link
              </Button>
            </div>

            {/* Lista de links existentes */}
            <div>
              <Title className="text-xl font-semibold text-gray-700">
                Links Existentes
              </Title>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link) => (
                  <Card
                    key={link.id}
                    className="p-4 bg-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-2">
                      <div>
                        <span className="block text-sm text-gray-500">
                          Nome:
                        </span>
                        <span className="block font-medium text-gray-800">
                          {link.name}
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Link Original:
                        </span>
                        <a
                          href={link.originalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-medium text-blue-600 hover:underline"
                        >
                          {link.originalLink}
                        </a>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Link Curto:
                        </span>
                        <a
                          href={link.shortLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-medium text-blue-600 hover:underline"
                        >
                          {link.shortLink}
                        </a>
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
