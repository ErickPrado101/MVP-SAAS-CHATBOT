import { Card } from "@tremor/react"

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Admin",
  company: "Acme Inc.",
  joinDate: "2023-01-01",
}

export default function Conta() {
  const detalhesUsuario = [
    { label: "Nome", value: user.name },
    { label: "Email", value: user.email },
    { label: "Função", value: user.role },
    { label: "Empresa", value: user.company },
    { label: "Data de Entrada", value: user.joinDate },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Informações da Conta</h1>
        <Card className="p-6 bg-white rounded-lg shadow-md">
          <ul className="divide-y divide-gray-200">
            {detalhesUsuario.map((item) => (
              <li key={item.label} className="py-4 flex justify-between">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-900">{item.value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
