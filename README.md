# Example of development on low tier models

A reference example of running a local LLM workload on consumer-grade hardware.

This project demonstrates how a modern web interface can be powered by a small language model running entirely on a single GPU with limited memory. It is meant to be a starting point for building real applications that need private, on-device AI inference without cloud dependencies.

## Hardware profile

The setup is tuned to run comfortably on a **6 GB VRAM** GPU:

| Metric | Target |
| --- | --- |
| Model size | ~4 billion parameters (4B) |
| Generation speed | ~30 tokens per second |
| Context window | 100,000 tokens |
| VRAM budget | 6 GB |

These numbers show that useful LLM features — long-document chat, summarization, code completion — are achievable with quantized 4B-class models on entry-level GPUs.

## Stack

- **React 19** with Vite for the frontend
- **Tailwind CSS 4** for styling
- Oxlint for linting

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint
