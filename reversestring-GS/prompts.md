# Prompts utilizados — Reverse String

**Chatbot utilizado:** Claude Sonnet 4.6 (claude.ai)

---

## Prompt 1 — Solución base

> Tengo que hacer un ejercicio para mi master de AI4Devs. El objetivo es crear una página web con lógica en JavaScript que invierta el orden de una cadena de texto. Ejemplo: si introduzco "AI4Devs" debe devolver "sveD4IA".
>
> El template del repositorio tiene un `index.html` minimalista que carga un `script.js` vacío. Necesito que completes ambos archivos con la solución.
>
> Requisitos del nivel opcional también:
> - El botón solo debe aparecer cuando haya más de 3 letras en el input.
> - El resultado debe mostrarse en tiempo real, sin necesidad de pulsar el botón.
>
> Hazlo con un diseño cuidado y profesional.

**Resultado:** Claude generó el `index.html` completo con estilos CSS integrados y el `script.js` con toda la lógica, incluyendo los dos requisitos del nivel opcional (visibilidad del botón y actualización en tiempo real mediante el evento `input`).

---

## Prompt 2 — Modificación con toggle de modo

> Es posible que hagamos una pequeña modificación? Podemos poner una especie de toggle arriba, con opción botón y real time? De esa forma pueden evaluar todo por separado?

**Resultado:** Claude añadió un toggle en la parte superior de la card que permite cambiar entre dos modos:
- **Modo Botón**: el botón aparece solo cuando hay más de 3 caracteres; el resultado se muestra al pulsarlo.
- **Modo Tiempo Real**: el botón desaparece y el resultado se actualiza con cada tecla. El label activo se resalta visualmente.

---

## Prompt final (para el comentario del Pull Request)

> Using Claude Sonnet 4.6: build a reverse string web page based on the repo template (index.html + script.js). Requirements: invert character order in real time on input event; show the reverse button only when input length > 3 (optional level). Apply a polished dark-theme UI with Space Mono + Syne fonts.
