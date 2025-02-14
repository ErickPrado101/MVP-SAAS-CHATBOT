import Link from "next/link"
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
  TagIcon,
  MegaphoneIcon,
  LinkIcon,
} from "@heroicons/react/24/outline"

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, href: "/" },
    { name: "Conversations", icon: ChatBubbleLeftRightIcon, href: "/conversations" },
    { name: "Account", icon: UserIcon, href: "/account" },
    { name: "Chatbot Config", icon: CogIcon, href: "/chatbot-config" },
    { name: "Reports", icon: ChartBarIcon, href: "/reports" },
    { name: "Tags", icon: TagIcon, href: "/tags" },
    { name: "Campaigns", icon: MegaphoneIcon, href: "/campaigns" },
    { name: "Links", icon: LinkIcon, href: "/links" },
  ]

  return (
    <div className="bg-white w-64 h-full shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">SaaS MVP</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <item.icon className="h-6 w-6 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

