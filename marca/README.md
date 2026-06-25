# Manual de marca — EOG Topografía

**Nombre:** EOG Topografía · **Eslogan:** *Levantando futuro*
(*levantar* = juego con "levantamiento topográfico" → construir/elevar el futuro)

El símbolo son **montañas verdes minimalistas** en capas: representan el terreno,
la elevación y las curvas de nivel — el corazón de la topografía.

---

## 📁 Contenido de la carpeta
```
marca/
├─ README.md                         ← esta guía
├─ logo/
│  ├─ eog-isotipo.svg                ← solo las montañas (vector)
│  ├─ eog-logo-horizontal.svg        ← logo + texto + eslogan (fondos claros)
│  ├─ eog-logo-horizontal-blanco.svg ← versión blanca (fondos oscuros/fotos)
│  └─ png/
│     ├─ eog-isotipo-1024.png / -512.png
│     ├─ eog-logo-horizontal-1024.png
│     └─ eog-logo-horizontal-blanco-1024.png
└─ estampados/
   ├─ camiseta-1-forest.png   + print-1-lockup-blanco.png
   ├─ camiseta-2-crema.png    + print-2-isotipo.png
   └─ camiseta-3-olivo.png    + print-3-frase.png
```
- **SVG** = vectorial, escala infinita (úsalo para web, imprenta, letreros).
- **PNG** = mapa de bits con fondo transparente (úsalo donde no acepten SVG).
- Los `print-*.png` son el **arte listo para estampar** (transparente); los
  `camiseta-*.png` son la previsualización sobre la prenda.

---

## 🎨 Colores
| Uso | Nombre | HEX |
|---|---|---|
| Verde principal (marca, botones) | accent | `#6F8F2F` |
| Verde oscuro (hover, sombra del símbolo) | accent-dark | `#5C7726` |
| Verde claro (detalles, sobre oscuro) | accent-light | `#8FAE4D` |
| Verde bosque (fondos oscuros) | forest | `#2B3227` |
| Crema (fondos claros) | cream | `#F4F1E8` |
| Tinta (texto/títulos) | ink | `#262A24` |
| Gris texto secundario | muted | `#6C7065` |
| Línea/bordes | line | `#E4E0D4` |

## 🔤 Tipografía
- **Títulos y wordmark:** **Manrope** (pesos 700–800).
- **Texto:** **Inter** (pesos 400–600).
- El eslogan va en **mayúsculas** con tracking amplio (~0.18em).
> Nota: en los PNG de mockup se usó *Segoe UI* como sustituto. Para piezas
> finales usa **Manrope/Inter**. En SVG, convierte el texto a **curvas/outlines**
> (Illustrator/Inkscape) antes de enviar a imprenta para evitar fallos de fuente.

---

## 🧭 Uso del logo
- **Isotipo solo** (montañas): favicon, fotos de perfil, sellos pequeños, marca de agua.
- **Logo horizontal**: uso principal (web, documentos, firmas de correo, facturas).
- **Versión blanca**: sobre fondos oscuros, fotografías o el verde bosque.
- **Área de protección:** deja alrededor un margen mínimo igual a la altura de la “E”.
- **Tamaño mínimo:** isotipo ≥ 24 px; logo horizontal ≥ 120 px de ancho.

### No hagas ❌
- No deformes ni estires el logo (mantén proporción).
- No cambies los colores ni el orden de las capas.
- No lo rotes ni le agregues sombras/contornos.
- No lo pongas sobre fondos con poco contraste (usa la versión blanca).

---

## 👕 Estampados (3 propuestas)
1. **Camiseta verde bosque** — logo completo (montañas + EOG TOPOGRAFÍA + eslogan) en blanco. Corporativa, sobria.
2. **Camiseta crema** — isotipo grande + wordmark oscuro. Minimalista, elegante.
3. **Camiseta olivo** — frase **“LEVANTANDO FUTURO”** tipográfica con el símbolo pequeño. Statement / informal.

Para imprenta: usa los `print-*.png` (300 dpi, ~26 cm de ancho) o pide el SVG si el
taller trabaja con vectores. Técnicas recomendadas: serigrafía o DTF/transfer.

---

## 🔗 De dónde sale el logo
El símbolo está definido como SVG en el código del sitio:
`src/components/Logo.jsx` (3 capas de triángulos con los verdes de la paleta).
Esta carpeta es la versión **exportada y documentada** de esa misma marca.
