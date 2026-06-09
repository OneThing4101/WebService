import { cn } from "@/lib/utils";

interface NetworkBackgroundProps {
  className?: string;
  opacity?: number;
}

export function NetworkBackground({
  className,
  opacity = 0.42,
}: NetworkBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="networkGlow" cx="0" cy="0" r="1">
            <stop stopColor="#7dd3fc" stopOpacity="0.42" />
            <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="networkLine" x1="196" y1="114" x2="1188" y2="572">
            <stop stopColor="#0f5cc0" stopOpacity="0.34" />
            <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.46" />
            <stop offset="1" stopColor="#f28c28" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <circle cx="1138" cy="118" r="310" fill="url(#networkGlow)" />
        <circle cx="170" cy="610" r="260" fill="url(#networkGlow)" opacity="0.45" />

        <g stroke="url(#networkLine)" strokeWidth="1.4">
          <path d="M104 512L238 394L386 432L540 312L714 338L864 206L1032 244L1222 146" />
          <path d="M218 162L384 226L540 312L704 158L864 206L1004 96" opacity="0.7" />
          <path d="M386 432L486 552L686 508L864 402L1032 244" opacity="0.62" />
          <path d="M714 338L864 402L1050 500L1268 426" opacity="0.54" />
        </g>

        <g fill="#0f5cc0">
          {[
            [104, 512],
            [238, 394],
            [386, 432],
            [540, 312],
            [714, 338],
            [864, 206],
            [1032, 244],
            [1222, 146],
            [218, 162],
            [384, 226],
            [704, 158],
            [1004, 96],
            [486, 552],
            [686, 508],
            [864, 402],
            [1050, 500],
            [1268, 426],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </g>

        <g fill="#38bdf8" opacity="0.7">
          <circle cx="540" cy="312" r="9" />
          <circle cx="864" cy="206" r="8" />
          <circle cx="1032" cy="244" r="7" />
        </g>
      </svg>
    </div>
  );
}
