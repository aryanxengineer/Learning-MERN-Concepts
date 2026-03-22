// Purpose of versioning (backward compatibility, safe evolution of APIs)
// Breaking vs non-breaking changes (clear differentiation)
// Versioning strategies (URI, Header, Query param, Content negotiation)
// URI versioning (/api/v1/...) — most common in production
// Header versioning (Accept: application/vnd.app.v1+json)
// Query versioning (?version=1) — less preferred
// When to version (only on breaking changes)
// Avoid unnecessary version increments (maintain stability)
// Definition of breaking change (response structure, field removal, behavior change)
// Backward compatibility strategies (additive changes only)
// Deprecation policy (mark old versions, don’t remove immediately)
// Sunset strategy (graceful removal with timeline)
// Maintaining multiple versions (code organization per version)
// Version-specific controllers/services (avoid mixing logic)
// Shared business logic reuse across versions
// API contract management (strict schema consistency per version)
// DTO versioning (separate request/response schemas per version)
// Documentation per version (Swagger/OpenAPI)
// Routing strategy for versions (separate routers like /v1, /v2)
// Middleware-based version handling (header/query parsing)
// Testing across versions (regression testing for old versions)
// Contract testing (ensure old clients don’t break)
// Monitoring version usage (track which clients use which version)
// Logging version in request metadata
// Gradual migration strategy (encourage clients to upgrade)
// Feature flags for controlled rollout of new versions
// Handling database changes with versioning (schema evolution without breaking APIs)
// Avoid tight coupling between DB schema and API response
// Semantic versioning awareness (major.minor.patch mindset)
// Version naming consistency (v1, v2, not random naming)
// Performance considerations (avoid duplicating heavy logic across versions)
// Cache versioned responses separately
// Security updates across all active versions (no version left vulnerable)
// Authentication/authorization consistency across versions
// API gateway support for version routing (advanced architectures)
// Canary releases for new versions
// Documentation clarity (mention deprecated endpoints clearly)
// Changelog maintenance for versions
// Clean architecture alignment (version → controller → service → repo)
// Thin controllers, version-specific mapping layer
// Real-world practice (keep max 2–3 active versions)
// Remove dead versions to reduce maintenance cost