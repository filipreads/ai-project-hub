# System Architecture

## Cíl

AI Project Hub je neutrální orchestration a knowledge vrstva nad externími nástroji. Core doména nesmí obsahovat provider-specific business logiku.

## Tok dat

```text
Client
  → API/BFF
  → Auth + workspace authorization
  → Core domain services
  → PostgreSQL / object storage
  → Outbox / queue
  → Workers
  → Parser / normalizer / extractor
  → Lexical + semantic index
  → Retrieval / AI orchestrator
  → Citation-backed response
```

## Moduly

- Identity and workspace
- Projects
- Source registry
- Ingestion
- Parser and normalizer
- Search and retrieval
- AI orchestrator
- Connector gateway
- Automation engine
- Audit and export

## Invarianty

1. Raw source representation je neměnné.
2. Vendor ID nikdy není interní primary key.
3. Každá mutace podporuje idempotency key.
4. Každý odvozený objekt nese lineage a verzi transformační logiky.
5. Autorizace probíhá před retrievalem a před sestavením AI kontextu.
6. Externí zápisy vyžadují approval policy.
7. Dlouhé operace běží asynchronně a zobrazují průběh, retry a chybu.
8. Mazání se propaguje do indexů, vektorů, cache a odvozených objektů.

## První vertikální řez

```text
Create project
→ Upload file
→ Store immutable raw artifact
→ Hash and deduplicate
→ Parse and chunk
→ Index lexical + semantic
→ Ask project question
→ Return claims with fragment citations
→ Export project
```

## Connector contract

Každý adapter implementuje autentizaci, discovery, fetch, normalizaci, health check a capability discovery. Core pracuje pouze s kanonickými eventy, například `source.updated`, `source.sync.completed` a `source.sync.failed`.

## Observability

Každý request a background job používá correlation ID. Minimální metriky zahrnují sync success rate, parse failure rate, retrieval precision, citation correctness, AI cost per project a deletion propagation success.
