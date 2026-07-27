import { specialties } from "@/data/content";
import { iconMap } from "@/lib/icons";
import Reveal from "@/components/Reveal";

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-surface pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1140px] sm:px-6">
        <div className="grid grid-cols-1 gap-0 border-0 border-ink/15 sm:-mt-[140px] sm:grid-cols-3 sm:border">
          {specialties.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isFirst = index === 0;
            return (
              <Reveal
                direction="up"
                delay={index * 100}
                key={item.title}
                className={`border-ink/15 p-10 text-left sm:border-t-0 sm:border-l first:border-l-0 ${
                  index >= 2 ? "border-t" : ""
                } ${isFirst ? "bg-gold-bright" : "bg-white"}`}
              >
                {Icon && (
                  <Icon
                    className={isFirst ? "text-white" : "text-gold-bright"}
                    size={40}
                    strokeWidth={1.5}
                  />
                )}
                <h3
                  className={`mt-6 font-playfair text-2xl font-semibold ${
                    isFirst ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 font-heebo text-base font-light leading-relaxed ${
                    isFirst ? "text-white/90" : "text-muted"
                  }`}
                >
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
