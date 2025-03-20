import NavBar from "@/components/navBar/navBar"

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex">
          {/* Conteúdo principal ocupando o restante da tela */}
          <div className="flex-1 p-4">
              {children}
          </div>

            {/* Navbar fixa na lateral esquerda */}
            <div className="w-64 h-screen bg-gray-800 text-white p-4">
              <NavBar />
          </div>
        </div>
    )
  }