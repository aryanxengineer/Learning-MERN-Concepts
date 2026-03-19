// TypeScript vs JavaScript — TypeScript is a statically typed superset of JavaScript that adds compile-time type checking, interfaces, and tooling to catch errors early and improve maintainability in large-scale backend systems.
// ------------------------------------------------------------------------------------------------------------------------

// Type inference — TypeScript automatically deduces variable/function types based on assigned values, reducing explicit annotations while still enforcing type safety.
// ------------------------------------------------------------------------------------------------------------------------

// Basic types — Core primitive types (number, string, boolean, null, undefined, symbol, bigint) used to define strict data contracts and avoid runtime surprises.
// ------------------------------------------------------------------------------------------------------------------------

// any vs unknown vs never — any disables type checking, unknown forces validation before use (safer), and never represents impossible values (e.g., functions that never return).
// let data: any = "hello";
// data = 42;          // allowed
// data.toUpperCase(); // no error at compile time ❌ (runtime crash possible)

// let data: unknown = "hello";
// // data.toUpperCase(); ❌ Error
// if (typeof data === "string") {
//   console.log(data.toUpperCase()); // ✅ safe
// }

// function throwError(message: string): never {
//   throw new Error(message); // function never returns
// }
// ------------------------------------------------------------------------------------------------------------------------

// Arrays and tuples — Arrays define homogeneous collections (number[]), while tuples enforce fixed-length, ordered types ([string, number]) useful for structured data.
// let numbers: number[] = [1, 2, 3];
// numbers.push(4);        // ✅ allowed
// numbers.push("hello");  // ❌ Error (only numbers allowed)

// let user: [string, number] = ["Arya", 21];
// user = [21, "Arya"]; ❌ Error (order matters)
// ------------------------------------------------------------------------------------------------------------------------

// Enums — Enums provide named constant sets (numeric or string) for readable, constrained values, with const enum optimizing away at compile time.
// enum Status {
//   SUCCESS,  // 0
//   ERROR,    // 1
//   PENDING   // 2
// } // Default behaviour - autoincrement value

// console.log(Status[0]); // "SUCCESS"

// enum HttpStatus {
//   OK = 200,
//   BAD_REQUEST = 400,
//   NOT_FOUND = 404
// }

// enum Role {
//   ADMIN = "ADMIN",
//   USER = "USER",
//   GUEST = "GUEST"
// }
// ------------------------------------------------------------------------------------------------------------------------

// Type aliases — Custom reusable type definitions (type User = {...}) for simplifying complex type structures and improving readability.
// type UserDTO = {
//   id: string;
//   email: string;
// };

// type ServiceResponse<T> = {
//   status: "success" | "error";
//   data?: T;
//   message?: string;
// };

// function getUser(): ServiceResponse<UserDTO> {
//   return {
//     status: "success",
//     data: { id: "1", email: "arya@gmail.com" }
//   };
// }

// type ID = string | number;

// function getUser(id: ID) {
//   console.log(id);
// }

// type AddFn = (a: number, b: number) => number;

// const add: AddFn = (a, b) => a + b;
// ------------------------------------------------------------------------------------------------------------------------

// Interfaces — Define object shape contracts with support for extension and merging, widely used for API models and service contracts.
// interface PaymentService {
//   process(amount: number): boolean;
// }

// class StripeService implements PaymentService {
//   process(amount: number): boolean {
//     return true;
//   }
// }

// interface ApiResponse<T> {
//   success: boolean;
//   data: T;
// }

// const res: ApiResponse<{ name: string }> = {
//   success: true,
//   data: { name: "Arya" }
// };
// ------------------------------------------------------------------------------------------------------------------------

// Optional & readonly properties — ? allows optional fields, readonly ensures immutability, improving data integrity in domain models.
// ------------------------------------------------------------------------------------------------------------------------

// Function typing — Explicitly define parameter and return types, including overloads, ensuring predictable function contracts.
// ------------------------------------------------------------------------------------------------------------------------

// Default, optional, rest parameters — Enable flexible function APIs while preserving type safety for optional and variable-length arguments.
// function getUsers(limit: number = 10, offset?: number) {
//   return { limit, offset };
// }

// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// sum(1, 2, 3, 4); // 10
// ------------------------------------------------------------------------------------------------------------------------

// Union types — Allow a variable to hold multiple possible types (string | number), useful for flexible APIs and responses.
// ------------------------------------------------------------------------------------------------------------------------

// Intersection types — Combine multiple types into one (A & B), useful for composing complex domain objects.
// ------------------------------------------------------------------------------------------------------------------------

// Literal types — Restrict values to exact constants ("GET" | "POST"), useful for enforcing strict API contracts.
// ------------------------------------------------------------------------------------------------------------------------

// Type narrowing — Refining types at runtime using checks (typeof, instanceof) to safely operate on unions.
// function process(value: string | number) {
//   if (typeof value === "string") {
//     return value.toUpperCase(); // ✅ string methods allowed
//   } else {
//     return value.toFixed(2);    // ✅ number methods allowed
//   }
// }

// class User {
//   constructor(public name: string) {}
// }

// class Admin {
//   constructor(public role: string) {}
// }

// function handle(entity: User | Admin) {
//   if (entity instanceof User) {
//     return entity.name; // ✅ User
//   } else {
//     return entity.role; // ✅ Admin
//   }
// }
// ------------------------------------------------------------------------------------------------------------------------

// Type assertions — Override inferred types (as Type) when developer knows more than compiler, but should be used cautiously.
// 🚨 Senior-Level Takeaways
// Narrowing = safe, defensive programming mindset
// as = escape hatch, not default tool
// Overusing as = TypeScript ka benefit khatam
// Strong backend engineers:
// treat all external data as unknown
// validate first, assert later (if unavoidable)
// ------------------------------------------------------------------------------------------------------------------------

// Non-null assertion operator (!) — Tells compiler a value isn’t null/undefined, bypassing checks (risky if misused).
// let value: string | null = "hello";
// console.log(value!.toUpperCase()); // ✅ telling TS it's not null
// By passing null check of compiler - and It is your responsibility, runtime safety.
// ------------------------------------------------------------------------------------------------------------------------

// Generics — Enable reusable, type-safe components/functions (<T>), critical for scalable abstractions like repositories.

// Generic constraints — Restrict generics using extends to enforce required structure on generic types.

// Utility types — Built-in helpers (Partial, Pick, etc.) to transform types efficiently without rewriting structures.

// Advanced utility types — Types like Exclude, ReturnType enable meta-programming and dynamic type transformations.

// Mapped types — Transform each property of a type programmatically ({ [K in keyof T]: ... }).

// Conditional types — Define types based on conditions (T extends U ? X : Y) enabling dynamic type logic.

// keyof operator — Produces union of keys from a type, useful for building dynamic, type-safe access patterns.

// typeof operator (type context) — Extracts type from variables/functions for reuse in type definitions.

// Indexed access types — Access specific property types (User['name']) for precise type reuse.

// Template literal types — Create dynamic string types (user_${string}) for advanced type-safe string patterns.

// Discriminated unions — Use a common literal field to safely distinguish between union members (common in API responses).

// Type guards — Custom functions that validate types (value is Type) enabling safe runtime checks.

// Modules & namespaces — Organize code; modern TS prefers ES modules over legacy namespaces.

// ES module support — Use import/export for modular, scalable code aligned with Node.js and modern bundlers.

// Declaration files (.d.ts) — Provide type definitions for JavaScript libraries, enabling type safety without source code.

// Third-party type definitions — @types/* packages supply typings for external libraries like Express.

// Type compatibility & structural typing — TS uses shape-based typing (duck typing), meaning compatibility depends on structure, not explicit declarations.

// Classes with TypeScript — Add OOP features with type safety, used in service layers and structured architectures.

// Access modifiers — public, private, protected control visibility, enforcing encapsulation in class design.

// Readonly & parameter properties — Simplify class property declaration and enforce immutability directly in constructors.

// Abstract classes — Define base classes with partial implementation, enforcing structure for subclasses.

// Implementing interfaces — Classes can implement interfaces to guarantee contract adherence.

// Decorators — Meta-programming feature (experimental) used in frameworks like NestJS for DI, routing, etc.

// TSConfig fundamentals — tsconfig.json controls compilation behavior and project structure.

// Compiler options — Settings like target, module, outDir define output JS and environment compatibility.

// Strict type checking — Options like strictNullChecks, noImplicitAny enforce rigorous type safety.

// Path aliases — Simplify imports (@services/...) improving maintainability in large codebases.

// Source maps — Map compiled JS back to TS for easier debugging in production.

// Node.js + TypeScript setup — Configure TS with Node runtime using tools like ts-node or build pipelines.

// Type-safe Express APIs — Define request/response schemas to ensure consistent and reliable API contracts.

// Request/Response typing — Strongly type req, res objects to prevent runtime bugs in controllers.

// Middleware typing — Ensure middleware functions follow correct signature and data flow.

// Environment variable typing — Type process.env to avoid undefined or incorrect config usage.

// Error handling with types — Use typed error classes and responses for predictable failure handling.

// Async/await typing — Use Promise<T> to ensure async functions return expected data types.

// Database typing — Enforce schema types (Mongoose/Prisma) to prevent data inconsistencies.

// DTO patterns — Define strict input/output contracts between layers for validation and maintainability.

// Validation libraries with TS — Use Zod/Joi with types to validate runtime data and infer types.

// API response typing — Standardize response formats for frontend/backend consistency.

// Code organization with types — Use types across layers (models, services, controllers) for scalable architecture.

// Dependency Injection — Decouple components by injecting dependencies, improving testability and modularity.

// Type-safe configuration management — Strongly type config files to prevent misconfiguration in production.

// Logging & monitoring typings — Structure logs with typed schemas for observability systems.

// Testing with TypeScript — Use typed tests (Jest) to catch contract violations during testing.

// Linting & formatting — Enforce consistent, error-free code using ESLint with TypeScript rules.

// Build tools — Tools like tsc, esbuild, swc compile TS efficiently for production.

// Monorepo basics — Manage multiple services/packages with shared types in a single repository.

// Performance considerations — Optimize build time and runtime using type-only imports and efficient compiler settings.
