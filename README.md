# NORA Components

Dit is een Vite project waarin verschillende componenten van het NORA Design System ontwikkeld worden en voor de NORA MediaWiki UI gestyled worden.

## Styling en Componenten

Versie 0.2 bevat:
- CSS Custom Properties van het NORA Theme
- Basisonderdelen zoals
  - Typografie
  - en diverse resets
- NORA Design System Components:
  - Footer
  - Navigation Bar
  - Page Section Article
  - Anchor Navigation
  - Breadcrumbs Navigation
  - Breadcrumbs + Tools Bar
  - Information Panel
  - Heading
  - Paragraph
  - Unordered List
  - Ordered List
  - Link
  - Table
  - Figure
  - Avatar
  - Data Summary
  - Label Link

## Gebruik

- Laad `dist/mw-nora-components.css` in
- Zorg dat de `assets` directory beschikbaar is in de root

(`dist/index.html` en `dist/mw-custom.css` zijn alleen voor ontwikkel- en preview-doeleinden)

## Development

1. **Installeer afhankelijkheden**:
   ```bash
   npm install
   ```

2. **Start de ontwikkelserver**:
   ```bash
   npm run dev
   ```

3. **Maak een productie build**:
   ```bash
   npm run build
   ```

4. **Preview de productie build**:
   ```bash
   npm run preview
   ```

