const workflow = [
  "Source",
  "Ingest",
  "Normalize",
  "Index",
  "Reason",
  "Act",
  "Audit",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">AI PROJECT HUB · FOUNDATION</p>
        <h1>Projektová paměť, která vždy ukáže svůj zdroj.</h1>
        <p className="lead">
          Sjednoťte dokumenty, AI konverzace, výzkum, design a kód do jednoho
          auditovatelného projektového kontextu.
        </p>
        <div className="actions">
          <button type="button">Vytvořit projekt</button>
          <a href="https://github.com/filipreads/ai-project-hub">Otevřít GitHub</a>
        </div>
      </section>

      <section className="workflow" aria-label="Zpracování znalostí">
        {workflow.map((step, index) => (
          <div className="step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </section>

      <section className="principles">
        <article>
          <h2>Provenance všude</h2>
          <p>Každý claim lze dohledat ke zdroji, verzi, času a transformaci.</p>
        </article>
        <article>
          <h2>AI navrhuje</h2>
          <p>Rozhodnutí a externí akce potvrzuje člověk, ne skrytá automatizace.</p>
        </article>
        <article>
          <h2>Bez vendor lock-inu</h2>
          <p>Kanonický model a export zachovávají přenositelnost projektových dat.</p>
        </article>
      </section>
    </main>
  );
}
