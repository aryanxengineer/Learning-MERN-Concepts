// Event Loop Phases → Node event loop executes tasks in fixed phases (timers → callbacks → poll → check → close) to manage async execution deterministically.
// There are multiple fixed phases followed by event loop, it goes in every phase which phase is ready it execute that and move to next phase orderly.
// -------------------------------------------------------------------------------------------------


// Microtasks vs Macrotasks → Microtasks (Promises, nextTick) run immediately after current execution, before macrotasks (timers, I/O).
// -------------------------------------------------------------------------------------------------

// process.nextTick() → Executes before any other microtask queue, potentially starving the event loop if overused.
// -------------------------------------------------------------------------------------------------

// setImmediate() vs setTimeout() → setImmediate() runs in check phase after I/O, while setTimeout() runs in timers phase based on delay.
// -------------------------------------------------------------------------------------------------

// Single-threaded Model → Node runs JS on a single thread but achieves concurrency via async delegation, not parallel execution.
// -------------------------------------------------------------------------------------------------

// Internal Thread Usage → Node uses libuv thread pool for blocking ops (file system, crypto, DNS) behind the scenes.
// CPU-bound Limitation → Heavy synchronous computations block the event loop, degrading throughput.
// libuv Role → libuv implements the event loop, thread pool, and async I/O abstraction across OS.
// Thread Pool → Default 4 threads handle blocking tasks asynchronously, configurable via UV_THREADPOOL_SIZE.
// Non-blocking I/O → Node delegates I/O to OS or threads and continues execution without waiting for completion.
// Blocking vs Non-blocking → Blocking halts execution until done, while non-blocking registers callback and proceeds.
// Callback Queue → Stores completed async callbacks waiting to be executed in event loop phases.
// Microtask Queue Priority → Microtasks (Promises) execute fully before moving to next event loop phase.
// Timers Internals → Timers are scheduled in heap-based structures and executed when threshold time is reached.
// Timer Drift → Timers are not exact due to event loop delays and system load.
// Process Lifecycle → process emits lifecycle events (beforeExit, exit) for cleanup and shutdown logic.
// Error Handling → Uncaught exceptions and unhandled rejections can crash the process if not handled properly.
// Concurrency vs Parallelism → Node handles concurrency via async I/O but requires workers/cluster for parallelism.
// Worker Threads → Separate threads for CPU-heavy tasks enabling parallel execution without blocking main loop.
// Shared Memory → Workers can share memory using SharedArrayBuffer for efficient communication.
// Cluster Module → Spawns multiple Node processes to utilize multi-core CPUs with load balancing.
// Stateless Requirement → Clustering requires stateless design since memory is not shared across processes.
// I/O Operations → Network and DB calls are async and handled via OS, while file system uses thread pool.
// Streams → Streams process data in chunks instead of loading entire payload into memory.
// Backpressure → Mechanism to control data flow when consumer is slower than producer.
// Memory Model → Stack stores execution context, heap stores objects and closures.
// Garbage Collection → V8 automatically reclaims unused memory using generational GC.
// Memory Leaks → Caused by lingering references (closures, global vars, event listeners).
// V8 Engine → Compiles JS into optimized machine code using JIT compilation.
// Optimization → Hidden classes and inline caching improve performance, but can deopt on misuse.
// Async Patterns → Evolution from callbacks → Promises → async/await improves readability and error handling.
// Async Error Handling → Use try/catch in async/await and .catch() in Promises to avoid crashes.
// Performance Bottlenecks → Blocking code or heavy sync operations increase event loop latency.
// Event Loop Lag → Delay in processing tasks indicates performance issues or overload.
// EventEmitter → Implements pub-sub pattern where listeners react to emitted events.
// Max Listeners Warning → Too many listeners may indicate memory leak risk.
// Scalability Advantage → Node excels in handling high concurrent I/O-bound requests efficiently.
// CPU Work Limitation → Requires workers or external services for compute-heavy workloads.
// Debugging Tools → Tools like perf_hooks, clinic.js, and inspector help trace performance issues.
// Event Loop Debugging → Async hooks and profiling identify blocking operations and slow callbacks.
// Security Risk (Event Loop Blocking) → Large payloads or sync loops can block loop leading to DoS vulnerability.
// Safe Patterns → Use streaming, validation, and async processing to prevent blocking and crashes.