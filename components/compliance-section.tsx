import React from "react";
import { useId } from "react";

export function ComplianceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Trust NexUp AI with your most sensitive data. We maintain the highest security standards and regulatory compliance to protect your business.
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-2 max-w-7xl mx-auto">
            {grid.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <Grid size={20} />
                <p className="text-sm sm:text-base font-bold text-neutral-800 dark:text-white relative z-20">
                  {feature.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4 text-sm sm:text-base font-normal relative z-20">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const grid = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "GDPR Compliant",
    description:
      "Full compliance with EU data protection regulations, including data residency and privacy controls.",
  },
  {
    title: "ISO 27001 Certified",
    description:
      "International standard for information security management systems and best practices.",
  },
  {
    title: "CCPA Compliant",
    description:
      "California Consumer Privacy Act compliance with data transparency and user rights.",
  },
  {
    title: "PIPEDA Compliant",
    description:
      "Personal Information Protection and Electronic Documents Act compliance for Canadian data protection.",
  },
  {
    title: "Regular Security Audits",
    description:
      "Continuous monitoring and third-party security assessments to maintain compliance standards.",
  },
  {
    title: "Data Encryption",
    description:
      "End-to-end encryption with 256-bit security to protect your sensitive information at all times.",
  },
  {
    title: "Access Controls",
    description:
      "Advanced access management and authentication systems to ensure only authorized personnel can access data.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
