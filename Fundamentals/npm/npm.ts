// package.json → Project ka central config file hai jisme metadata, scripts aur dependency definitions hoti hain.
// dependencies vs devDependencies vs peerDependencies → Runtime packages (dependencies), development-only tools (devDependencies), aur required external compatibility packages (peerDependencies).
// package-lock.json → Exact dependency versions lock karta hai taaki har environment me same install ho (deterministic builds).
// Module Resolution → Node modules ko current folder → parent folders → global scope me search karke resolve karta hai.
// node_modules Structure → Har package apni dependencies ke saath nested ya flattened structure me store hota hai.
// Semantic Versioning (SemVer) → Versioning major.minor.patch follow karti hai jisme breaking, feature, aur bug fix changes define hote hain.
// Version Ranges (^, ~) → ^ minor updates allow karta hai, ~ sirf patch updates allow karta hai.
// Local vs Global Install → Local project-specific hota hai, global CLI tools ke liye use hota hai.
// Exact Install → --save-exact version ko lock karta hai bina range ke (no auto updates).
// Scripts (npm run) → Automation layer hai jisse build, start, test jaise workflows define aur run hote hain.
// Pre/Post Hooks → Scripts ke pehle/baad automatically execute hone wale lifecycle hooks hote hain.
// npx → Package ko bina install kiye directly execute karne ka tool hai (temporary usage).
// Dependency Management → Packages add/update/remove karke project ko optimized aur up-to-date rakhna.
// Dependency Bloat → Unnecessary packages performance aur security risk badhate hain.
// npm audit → Known vulnerabilities scan karta hai aur fix suggestions deta hai.
// Transitive Dependencies → Indirect dependencies bhi security risk create kar sakti hain.
// NPM Cache → Downloaded packages cache me store hote hain jisse future installs fast hote hain.
// Workspaces → Ek hi repo me multiple packages manage karne ka built-in monorepo feature hai.
// Environment Config → .env files se environment-specific variables securely manage kiye jate hain.
// Scoped Packages → @org/package format me organization-level package isolation hota hai.
// Publishing Packages → Package ko npm registry pe upload karke reuse/share kiya jata hai.
// Version Bumping → npm version se controlled version increment hota hai deployment ke liye.
// Yarn vs npm vs pnpm → Different package managers hain jisme pnpm disk-efficient aur fast installs deta hai.
// Dependency Tree Debugging → npm ls se dependency hierarchy aur conflicts analyze kiye jate hain.
// npm ci vs npm install → npm ci clean, fast, aur lock-file based install karta hai (CI/CD ke liye best).
// Global Packages Use Case → Sirf CLI tools ke liye use karein, application dependencies ke liye nahi.
// Lifecycle Scripts Risk → install/postinstall scripts malicious code execute kar sakte hain.
// Bundle Optimization → Unused dependencies remove karke build size aur performance improve hoti hai.
// .npmrc Config → Registry URL, auth tokens, aur install behavior configure karta hai.
// Backend Impact → Dependency size, security, aur version stability directly production performance aur reliability ko affect karte hain.