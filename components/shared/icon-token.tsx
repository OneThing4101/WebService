import type { LucideProps } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Cable,
  CircuitBoard,
  Factory,
  HandCoins,
  Headphones,
  Lightbulb,
  PackageSearch,
  PlugZap,
  ScanSearch,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  badge: BadgeCheck,
  bolt: Zap,
  boxes: Boxes,
  briefcase: BriefcaseBusiness,
  building: Building2,
  cable: Cable,
  circuit: CircuitBoard,
  factory: Factory,
  "hand-coins": HandCoins,
  headphones: Headphones,
  lightbulb: Lightbulb,
  package: PackageSearch,
  plug: PlugZap,
  scan: ScanSearch,
  shield: ShieldCheck,
  truck: Truck,
  wrench: Wrench,
} as const;

interface IconTokenProps extends LucideProps {
  name: keyof typeof iconMap;
  className?: string;
  wrapperClassName?: string;
}

export function IconToken({
  name,
  className,
  wrapperClassName,
  ...props
}: IconTokenProps) {
  const Icon = iconMap[name];

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
        wrapperClassName,
      )}
    >
      <Icon className={cn("h-5 w-5", className)} {...props} />
    </span>
  );
}
