import React from "react";
import ServiceCard from "./ServiceCard";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const services = [
    {
      icon: "💧",
      title: "Čistenie kanalizácií vysokotlakovým strojom",
      price: "od 120 €",
      description: "Účinné čistenie potrubia vysokotlakovou technológiou",
    },
    {
      icon: "🪠",
      title: "Krtkovanie",
      price: "od 90 €",
      description: "Rýchle odstránenie upchatia",
    },
    {
      icon: "📹",
      title: "Monitoring potrubí",
      price: "od 120 €",
      description: "Presná diagnostika kamerou",
    },
    {
      icon: "🌧️",
      title: "Čistenie rín a odkvapových rúr",
      price: "od 80 €",
      description: "Profesionálne čistenie odkvapov a drenáže",
    },
  ];

  return (
    <section id="sluzby" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Naše služby</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
