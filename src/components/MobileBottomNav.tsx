import { Home, Trophy, Clock, HelpCircle, Users, MapPin } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Prizes", href: "#prizes", icon: Trophy },
  { name: "Timeline", href: "#timeline", icon: Clock },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  { name: "Team", href: "#team", icon: Users },
  { name: "Location", href: "#location", icon: MapPin },
];

export const MobileBottomNav = () => {
  const handleClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-card mx-2 mb-2 rounded-2xl px-2 py-2 border border-border/50">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-muted-foreground 
                         active:bg-primary/20 active:text-primary active:scale-95
                         transition-all duration-150 touch-manipulation"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
