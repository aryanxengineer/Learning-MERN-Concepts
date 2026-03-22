// Resource-based design (nouns, not verbs → /users, /orders)
// Proper HTTP methods (GET, POST, PUT, PATCH, DELETE semantics)
// Idempotency (PUT/DELETE idempotent, POST non-idempotent)
// Statelessness (no server-side session dependency)
// Client–server separation (frontend/backend decoupling)
// Uniform interface constraint (consistent API structure)
// Proper URI design (hierarchical, predictable, no verbs)
// Plural resource naming (/users not /user)
// Nested resources (/users/:id/orders)
// Query parameters for filtering, sorting, pagination
// Versioning strategy (/api/v1/..., header-based optional)
// HTTP status codes correctness (2xx, 4xx, 5xx usage)
// Consistent response format (success, data, error, meta)
// Use of standard error response structure (code, message, details)
// HATEOAS (optional but good to know for maturity)
// Request validation at boundary (schema validation)
// Response schema consistency (avoid breaking contracts)
// DTO pattern (separate internal models from API contracts)
// Pagination strategies (limit-offset, cursor-based for scale)
// Filtering (?status=active)
// Sorting (?sort=createdAt,-price)
// Field selection (?fields=name,email)
// Authentication (JWT, OAuth basics)
// Authorization (RBAC/ABAC via middleware)
// Secure endpoints (protected routes)
// Rate limiting (prevent abuse)
// Input sanitization (prevent injection/XSS)
// Caching strategies (HTTP caching, ETag, Cache-Control)
// Conditional requests (If-None-Match, If-Modified-Since)
// CDN compatibility awareness
// API documentation (OpenAPI/Swagger)
// Self-descriptive messages (clear errors, messages)
// Contract-first vs code-first API design
// Performance considerations (minimize payload size)
// Compression (gzip/brotli)
// Avoid over-fetching & under-fetching
// Batch endpoints when needed
// Consistency across endpoints (naming, structure, behavior)
// Backward compatibility (never break existing clients)
// Deprecation strategy (graceful version transitions)
// Logging (request/response metadata)
// Monitoring (latency, error rate, throughput)
// Correlation IDs for tracing requests
// Testing (unit + integration for APIs)
// Mock APIs for frontend parallel development
// Security best practices (HTTPS only, no sensitive data in URL)
// Proper use of headers (Authorization, Content-Type)
// CORS policy handling
// Error handling strategy (centralized, predictable)
// Distinguish operational vs system errors
// Retry-safe API design
// Bulk operations support (/bulk-create, /bulk-update)
// Idempotency keys for critical operations (payments, retries)
// Timezone & date handling (ISO 8601 standard)
// Localization support if needed
// Clean architecture alignment (controller → service → repository)
// Thin controllers, reusable business logic
// Separation of concerns (no DB logic in routes)
// API gateway awareness (for microservices)
// Rate limiting per user/API key
// Circuit breaker patterns (advanced systems)
// Real-world readiness (graceful degradation, fallback handling)
// SLA awareness (latency + uptime targets)
// Observability-first mindset (logs + metrics + traces)