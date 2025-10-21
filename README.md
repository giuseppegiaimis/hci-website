# Portfolio HCI Website

Un portfolio moderno con sfondo gradient animato realizzato con Next.js e Tailwind CSS.

## Caratteristiche

- ✨ Sfondo gradient animato fluido
- 🎨 Design moderno e responsive
- ⚡ Performance ottimizzate con Next.js
- 🎯 Accessibilità rispettata (motion-reduce)

## Installazione

```bash
npm install
```

## Avvio del progetto

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il risultato.

## Tecnologie utilizzate

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

## Struttura del progetto

```
├── components/
│   └── AnimatedGradientBg.tsx  # Componente gradient animato
├── pages/
│   ├── index.tsx               # Homepage
│   ├── _app.tsx               # App wrapper
│   └── _document.tsx          # Document head
├── styles/
│   └── globals.css            # Stili globali Tailwind
├── tailwind.config.js         # Configurazione Tailwind
└── package.json              # Dipendenze
```

## Personalizzazione

Per modificare i colori del gradient, edita il componente `AnimatedGradientBg.tsx`:

```tsx
className="
  bg-gradient-to-r
  from-indigo-500 via-fuchsia-500 to-emerald-500
  // Cambia questi colori a piacere!
"
```

Puoi anche usare colori personalizzati con la sintassi `from-[#hexcolor]`.
