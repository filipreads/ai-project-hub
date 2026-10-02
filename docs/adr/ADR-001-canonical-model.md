# ADR-001: Canonical data model and provenance

- Status: Accepted
- Date: 2026-10-03

## Context

Projekt integruje zdroje s odlišnými identifikátory, verzováním, oprávněními a datovými formáty. Přímé používání vendor modelů v doménové vrstvě by vytvořilo lock-in a nekonzistentní chování.

## Decision

Systém používá vlastní kanonický model s interními UUID/ULID. Raw reprezentace zdrojů se ukládá neměnně do object storage. Každý odvozený objekt obsahuje provenance zahrnující zdroj, zdrojovou verzi, čas transformace, typ transformace a případně model a verzi promptu.

Znalostní tvrzení se klasifikují jako `FACT`, `SUMMARY`, `INFERENCE`, `USER_DECISION` nebo `AI_SUGGESTION`. UI i API tyto třídy zachovávají.

## Consequences

- Nové konektory lze přidat bez změny core domény.
- Reprocessing je auditovatelný a historické AI výsledky zůstávají dohledatelné.
- Implementace vyžaduje explicitní normalizační adaptéry a schema versioning.
- Storage náklady budou vyšší, protože raw data nejsou přepisována.
