import { heroFeatures } from "../../data/header";

export default function FeatureMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#edf2d8] py-4">
      <div className="feature-marquee flex w-max items-center">
        {[...heroFeatures, ...heroFeatures].map((feature, index) => (
          <div
            key={`${feature}-${index}`}
            className="flex shrink-0 items-center gap-12 px-8"
          >
            <span className="whitespace-nowrap text-sm text-[#53604d]">
              {feature}
            </span>

            <span className="text-[11px] text-[#53604d]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}