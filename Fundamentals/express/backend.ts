// Core architecture: middleware-based request–response lifecycle, req, res, next flow control
// App vs Router: modular routing using express.Router() for scalable codebase
// Middleware types: application-level, router-level, error-handling, built-in, third-party
// Custom middleware: logging, auth, request validation, rate limiting
// Routing patterns: RESTful APIs, route params, query params, route chaining
// Request handling: parsing body (express.json, urlencoded), headers, cookies
// Response handling: status codes, JSON responses, streaming, file sending
// Error handling: centralized error middleware, async error handling pattern (next(err))
// Async patterns: handling promises, avoiding unhandled rejections, wrapper utilities
// Validation layer: schema validation using libraries (Joi / Zod) before controller logic
// Authentication: JWT-based auth, session-based auth, middleware protection
// Authorization: role-based access control (RBAC), permission checks
// Security best practices: helmet, CORS config, input sanitization, XSS/CSRF protection
// Rate limiting & throttling: protect APIs from abuse (express-rate-limit)
// Logging: structured logging (winston/pino), request tracing, correlation IDs
// Environment config: .env, config management, separation of dev/staging/prod
// File uploads: handling multipart data using multer, cloud storage integration
// API design: versioning (/api/v1), consistent response format, pagination
// Performance optimization: compression, caching headers, avoiding blocking code
// Caching strategies: Redis integration for API caching, response caching
// Scalability: stateless APIs, load balancing readiness, clustering (PM2 / Node cluster)
// Modular architecture: controller-service-repository pattern (separation of concerns)
// Dependency injection pattern (basic level for maintainability/testability)
// Database integration: clean separation from Express layer (no direct DB logic in routes)
// Testing: unit testing (Jest), integration testing (Supertest)
// API documentation: Swagger/OpenAPI integration
// Monitoring: health checks, metrics (Prometheus), observability basics
// Error classification: operational vs programmer errors (production stability)
// Graceful shutdown: handling SIGTERM, closing DB connections properly
// Deployment readiness: reverse proxy (NGINX), HTTPS, production configs
// Microservices readiness: API gateway pattern basics, service-to-service communication
// Code structure: scalable folder structure (routes/controllers/services/models/utils)
// Best practices: DRY, clean code, reusable middleware, consistent naming conventions