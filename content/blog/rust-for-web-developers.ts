export const content = `
# Rust for Web Developers

Coming from Ruby and JavaScript, Rust felt like learning to code all over again. The compiler was strict, the concepts were foreign, but the payoff was worth it.

## Why Rust?

I wanted to build [Magda](https://github.com/sidneip/magda), a desktop client for Apache Cassandra. I needed:

- Cross-platform native performance
- Small binary sizes
- Memory safety without garbage collection

Rust checked all the boxes.

## The Learning Curve

Let's be honest—Rust is hard at first. Concepts like ownership, borrowing, and lifetimes don't exist in higher-level languages.

\`\`\`rust
// The borrow checker will teach you humility
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is no longer valid!
    // println!("{}", s1); // This won't compile
}
\`\`\`

## What Helped Me Learn

1. **The Rust Book** - Start here. Read it cover to cover.
2. **Rustlings** - Small exercises that build intuition
3. **Building something real** - Theory only gets you so far

## Web Development with Rust

The ecosystem has matured significantly:

- **Axum/Actix** for HTTP servers
- **SQLx** for database access
- **Tauri** for desktop apps (what I used for Magda)
- **WASM** for browser integration

## The Payoff

Once you "get" Rust, the benefits are real:

- Confidence in your code (if it compiles, it usually works)
- Performance without thinking about it
- Amazing tooling (cargo, clippy, rust-analyzer)

## Should You Learn Rust?

If you're a web developer curious about systems programming, Rust is the most approachable path. The community is welcoming, the documentation is excellent, and the skills transfer to other areas.

It's not going to replace TypeScript for web UIs anytime soon. But for CLI tools, backends requiring high performance, and native applications—it's a powerful option to have.

---

*Learning Rust? Check out my project [Magda](https://github.com/sidneip/magda) for a real-world example.*
`;
