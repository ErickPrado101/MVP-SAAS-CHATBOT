import Link from "next/link";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
  TagIcon,
  MegaphoneIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { name: "Painel", icon: HomeIcon, href: "/" },
    { name: "Conversas", icon: ChatBubbleLeftRightIcon, href: "/conversations" },
    { name: "Conta", icon: UserIcon, href: "/account" },
    { name: "Configuração do Chatbot", icon: CogIcon, href: "/chatbot-config" },
    { name: "Relatórios", icon: ChartBarIcon, href: "/reports" },
    { name: "Etiquetas", icon: TagIcon, href: "/tags" },
    { name: "Campanhas", icon: MegaphoneIcon, href: "/campaigns" },
    { name: "Links", icon: LinkIcon, href: "/links" },
  ];

  return (
    <div className="bg-white w-64 h-full shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">SaaS MVP</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <item.icon className="h-6 w-6 mr-4 text-gray-500 group-hover:text-gray-800 transition-colors duration-200" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
