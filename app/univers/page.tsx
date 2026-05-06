import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const values = [
  {
    title: "Précision",
    text: "Une exigence de chaque détail, une attention portée à chaque doigt, à chaque finition.",
  },
  {
    title: "Tendance",
    text: "Toujours à l'écoute des dernières inspirations beauté, nous façonnons les codes du moment.",
  },
  {
    title: "Confiance",
    text: "Un cocon où vous vous sentez écoutée, comprise et accompagnée à chaque rendez-vous.",
  },
  {
    title: "Élégance",
    text: "Une signature reconnaissable : un style raffiné, féminin, intemporel.",
  },
]

export default function UniversPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24">
          <div className="md:col-span-6">
            <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — À propos
            </span>
            <h1 className="animate-reveal-left delay-100 mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-8xl">
              Beauty by Lys,
              <br />
              <span className="italic text-accent">une signature.</span>
            </h1>
            <p className="animate-reveal-left delay-200 mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Beauty by Lys est née d&apos;une passion : celle de sublimer
              les femmes et les hommes à Libreville. Un salon pensé comme un
              écrin de luxe, où la coiffure haute couture et l&apos;onglerie deviennent un art.
            </p>
          </div>
          <div className="animate-zoom-in delay-300 relative aspect-[4/4] overflow-hidden rounded-2xl md:col-span-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — Notre vision
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Faire de la beauté un
              <span className="italic text-accent"> rituel</span>, pas une
              routine.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-pretty leading-relaxed md:text-lg">
              Beauty by Lys, c&apos;est un univers feutré où le temps
              ralentit. Une philosophie qui place la qualité au cœur de
              chaque geste, et qui célèbre l&apos;élégance moderne.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Inspirée par les codes du luxe et l&apos;énergie des réseaux
              sociaux, notre approche allie précision technique, créativité
              sans limite et écoute attentive. Le résultat : une expérience
              qui se vit autant qu&apos;elle se voit.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <span className="animate-reveal-left text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Nos valeurs
          </span>
          <h2 className="animate-reveal-left delay-100 mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
            Quatre piliers,
            <br />
            <span className="italic text-accent">une promesse.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`animate-reveal-up flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 ${
                i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : i === 3 ? "delay-500" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl italic text-accent">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-border ml-4" />
              </div>
              <h3 className="font-serif text-2xl">{v.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IDENTITY BAND */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <Image
            src="/images/salon-interior.jpg"
            alt="Intérieur du salon Beauty by Lys"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
            <div className="max-w-3xl">
              <p className="font-serif text-3xl italic leading-tight text-background md:text-5xl">
                « Une signature, c&apos;est avant tout une émotion qu&apos;on
                emporte avec soi. »
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-background/70">
                — Lys, fondatrice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <h2 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
          Envie de découvrir
          <span className="italic text-accent"> notre univers</span>&nbsp;?
        </h2>
        <Link
          href="/reservation"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-background transition-all hover:bg-accent"
        >
          Prendre rendez-vous
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  )
}
