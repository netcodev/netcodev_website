export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            netcodev
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A collection of open-source projects and tools built by contributors.
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-500">Explore our work:</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/netcodev"
              className="text-gray-400 hover:text-lighter transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/KH6QfPHZHZ"
              className="text-gray-400 hover:text-lighter transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
