# Security Policy

## Reporting

Bezpečnostní problém neposílejte do veřejného issue. Použijte GitHub private vulnerability reporting nebo kontakt vlastníka repozitáře.

## Baseline controls

- Least-privilege OAuth/GitHub App scopes
- Server-side encrypted connector credentials
- Workspace and project tenant isolation
- Signed webhook verification
- Rate limiting and replay protection
- Malware scanning for uploads
- Audit events for external writes
- Secret scanning in CI
- Tested deletion propagation and retention

Do klientského bundle, logů ani fixtures nepatří reálné tokeny, osobní data nebo produkční dokumenty.
