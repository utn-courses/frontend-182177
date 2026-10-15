# Clase 4 — HTML Semántico + Formularios + Multimedia + Git básico

## Consigna

Crear una página web para promocionar un **evento, producto, curso o actividad** de elección.

La página debe estar desarrollada utilizando **HTML semántico**, incorporar un **formulario** y contenido **multimedia**.

Una vez terminada, el proyecto deberá ser gestionado con **Git** y subido a un repositorio remoto de GitHub.

---

## Requisitos

### 1. HTML semántico

La página debe utilizar, como mínimo:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

El contenido debe estar organizado de manera lógica utilizando estas etiquetas según corresponda.

### 2. Formulario

Incluir un formulario de inscripción o contacto que contenga:

- Un campo de texto.
- Un campo de email.
- Un campo de número o fecha.
- Un `select`.
- Un grupo de `radio` o un `checkbox`.
- Un `textarea`.
- Un botón para enviar el formulario.

Utilizar correctamente `label`, `id`, `name` y `required` cuando corresponda.

### 3. Multimedia

La página debe incluir:

- Al menos una imagen utilizando `img`.
- Al menos un elemento multimedia: `audio` o `video`.

Las imágenes deben utilizar el atributo `alt`.

### 4. Git

Una vez terminado el proyecto:

1. Inicializar Git en la carpeta del proyecto.
2. Verificar el estado del repositorio.
3. Agregar los archivos al staging.
4. Crear un primer commit.
5. Crear un repositorio remoto en GitHub.
6. Vincular el repositorio local con el repositorio remoto.
7. Subir el proyecto a GitHub.

Comandos mínimos esperados:

```bash
git init
git status
git add .
git commit -m "Crear página del evento"
git remote add origin URL_DEL_REPOSITORIO
git branch -M main
git push -u origin main
```

---

## Segundo commit

Realizar al menos una modificación en la página después del primer commit.

Por ejemplo:

- Agregar contenido.
- Modificar el formulario.
- Agregar una imagen.
- Incorporar estilos básicos.
- Corregir algún elemento HTML.

Luego registrar el cambio con un segundo commit:

```bash
git add .
git commit -m "Mejorar página"
git push
```

Finalmente, comprobar el historial:

```bash
git log --oneline
```

---

## Estructura sugerida

```text
proyecto/
├── index.html
├── imagen.jpg
├── audio.mp3
└── video.mp4
```

Los archivos multimedia son opcionales según el elemento elegido. No es necesario utilizar todos los formatos.

---

## Entrega

Entregar el enlace al **repositorio de GitHub**.

Link: https://forms.gle/BcYnwAhvxT4HCWLG9

El repositorio debe contener:

- El archivo `index.html`.
- Los archivos multimedia utilizados.
- Al menos **2 commits**.
- La versión final del proyecto funcionando correctamente.

## Objetivo

El objetivo de la actividad es integrar los conceptos de **HTML semántico, formularios y multimedia**, y comenzar a utilizar **Git para registrar y compartir la evolución de un proyecto web**.
