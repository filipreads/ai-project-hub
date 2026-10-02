# AI Project Hub

Modulární znalostní a projektová platforma pro sjednocení AI konverzací, dokumentů, výzkumu, designu a zdrojového kódu s úplnou proveniencí.

## Produktový princip

```text
SOURCE → INGEST → NORMALIZE → CLASSIFY → INDEX → LINK → REASON → ACT → AUDIT
```

AI Project Hub není náhradou za GitHub, Google Drive, Notion nebo AI chaty. Funguje jako neutrální projektová a důkazní vrstva nad těmito službami.

## MVP

- Workspaces a projekty
- Import PDF, Markdown, TXT, JSON a CSV
- Neměnné raw artefakty
- Normalizace, chunking a deduplikace
- Lexikální a sémantické vyhledávání
- AI Q&A s citacemi na přesné zdrojové fragmenty
- Extrakce rozhodnutí a úkolů ke schválení
- Kanonický export JSON + Markdown + assets
- Audit ingestu a AI operací

## Architektura

Monorepo používá pnpm workspaces a Turborepo.

```text
apps/
  web/       Next.js aplikace a API/BFF
  worker/    asynchronní ingest a AI joby
packages/
  domain/    kanonické doménové typy
  schemas/   validační schémata a kontrakty
  ui/        sdílené UI komponenty
docs/
  adr/       architecture decision records
  architecture.md
```

Podrobnosti jsou v [architektonickém přehledu](docs/architecture.md).

## Lokální spuštění

Požadavky: Node.js 22+, pnpm 9+.

```bash
cp .env.example .env
pnpm install
pnpm dev
```

Web poběží na `http://localhost:3000`.

## Kontroly

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Bezpečnostní zásady

- Konektorové tokeny zůstávají pouze na serveru a jsou šifrované.
- Autorizace probíhá na úrovni workspace a projektu ještě před retrievalem.
- AI výstup není databázová pravda bez validace a případného schválení.
- Externí zápisy používají tok `READ → DRAFT → APPROVAL → WRITE → VERIFY`.
- Každý zdrojový objekt zachovává původ, verzi, čas a transformaci.

## Stav

Projekt je v iniciační fázi. První implementační řez je:

```text
PROJECT → FILE IMPORT → PROVENANCE → SEARCH → CITED ANSWER → EXPORT
```
