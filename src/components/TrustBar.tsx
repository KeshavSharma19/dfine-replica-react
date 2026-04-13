import { Globe, RotateCcw, ShieldCheck, Lock, CheckCircle } from "lucide-react";

const badges = [
  { icon: Globe, label: "Free Shipping World Wide" },
  { icon: RotateCcw, label: "30 Days Return" },
  { icon: CheckCircle, label: "Google Top Quality Store" },
  { icon: Lock, label: "100% Secure Shopping" },
  { icon: ShieldCheck, label: "Our Zero Risk Policy" },
];

const TrustBar = () => {
  return (
    <div className="bg-trust overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...Array(4)].map((_, setIdx) =>
          badges.map((badge, i) => (
            <div key={`${setIdx}-${i}`} className="flex items-center gap-2 mx-10">
              <badge.icon className="w-5 h-5 text-trust-foreground flex-shrink-0" />
              <span className="text-sm font-medium text-trust-foreground tracking-wide">
                {badge.label}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrustBar;
