import { Card, Title, AreaChart } from "@tremor/react";

const dadosDoGrafico = [
  { date: "2023-01-01", Usuários: 100 },
  { date: "2023-02-01", Usuários: 150 },
  { date: "2023-03-01", Usuários: 200 },
  { date: "2023-04-01", Usuários: 300 },
  { date: "2023-05-01", Usuários: 400 },
];

const lideres = [
  { name: "John Doe", region: "Norte", employees: 10 },
  { name: "Jane Smith", region: "Sul", employees: 8 },
  { name: "Bob Johnson", region: "Leste", employees: 12 },
  { name: "Alice Brown", region: "Oeste", employees: 9 },
];

const funcionarios = [
  { name: "Mike Wilson", leader: "John Doe", region: "Norte" },
  { name: "Sarah Davis", leader: "Jane Smith", region: "Sul" },
  { name: "Tom Lee", leader: "Bob Johnson", region: "Leste" },
  { name: "Emily Clark", leader: "Alice Brown", region: "Oeste" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="space-y-8 max-w-7xl mx-auto">
        <Title className="text-3xl font-bold text-gray-800">Painel de Controle</Title>

        {/* Gráfico de Registros de Usuários */}
        <Card className="p-6 bg-white rounded-xl shadow-md">
          <Title className="text-xl font-semibold text-gray-700">Novos Registros de Usuários</Title>
          <AreaChart
            className="h-72 mt-4"
            data={dadosDoGrafico}
            index="date"
            categories={["Usuários"]}
            colors={["blue"]}
          />
        </Card>

        {/* Tabelas de Líderes e Funcionários */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tabela de Líderes */}
          <Card className="p-6 bg-white rounded-xl shadow-md">
            <Title className="text-xl font-semibold text-gray-700">Líderes</Title>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Região</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funcionários</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lideres.map((lider) => (
                    <tr key={lider.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{lider.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{lider.region}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{lider.employees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Tabela de Funcionários */}
          <Card className="p-6 bg-white rounded-xl shadow-md">
            <Title className="text-xl font-semibold text-gray-700">Funcionários</Title>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Líder</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Região</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {funcionarios.map((funcionario) => (
                    <tr key={funcionario.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{funcionario.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{funcionario.leader}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{funcionario.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
