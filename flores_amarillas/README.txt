# 🌻 Flores Amarillas

Página web romántica interactiva hecha únicamente con HTML, CSS y JavaScript.

## Estructura

```text
flores_amarillas/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── foto.jpg       ← coloca aquí tu fotografía
    └── musica.mp3     ← coloca aquí tu canción
```

## Cómo ejecutarla

No requiere instalación.

1. Copia una fotografía a `assets/foto.jpg`.
2. Opcionalmente copia una canción MP3 a `assets/musica.mp3`.
3. Abre `index.html` con Chrome, Edge o cualquier navegador moderno.

## Personalizar el mensaje

Abre `script.js` y modifica:

```javascript
const CONFIG = {
  title: "Mi lugar favorito",
  message: `Tu mensaje aquí...`,
  signature: "Con cariño ❤️"
};
```

## Personalizar la foto

La página busca exactamente:

```text
assets/foto.jpg
```

Puedes reemplazar ese archivo por otra imagen manteniendo el mismo nombre.

## Música

Por restricciones de los navegadores, la música no comienza automáticamente en todos los dispositivos.

Agrega:

```text
assets/musica.mp3
```

y pulsa el botón 🎵.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Sin frameworks
- Sin dependencias
- Sin servidor
- Funciona localmente
- Diseño adaptable para celular y PC
