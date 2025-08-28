const Navigation = () => {
  const navItems = [
    { name: "Home", active: true },
    { name: "Sentiment Analysis", active: false },
    { name: "Summaries", active: false },
    { name: "Word Cloud", active: false },
    { name: "Reports", active: false },
  ];

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">
          E-Consultation Feedback Analysis - MCA
        </h1>
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                item.active
                  ? "text-foreground border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;