# Ejercicio práctico — Mi primer repositorio con Git

## Objetivo

Crear una página web sencilla, utilizar Git para guardar diferentes versiones del proyecto y subir el repositorio a GitHub.

## Consigna

Crear una página web llamada **“Mi presentación”**.

El proyecto debe tener esta estructura:

```text
mi-presentacion/
├── index.html
├── styles.css
└── README.md
```

La página debe contener:

- Un título con tu nombre.
- Una breve descripción sobre vos.
- Una lista con **3 intereses o hobbies**.
- Una sección con **3 tecnologías que te gustaría aprender o mejorar**.
- Un botón o enlace de contacto.

### Estilos con CSS

Todavía no trabajamos CSS en clase, por lo que deberán **investigar cómo vincular un archivo CSS con HTML** y aplicar algunos estilos básicos.

La página debe tener, como mínimo:

- Un color de fondo.
- Un color diferente para los títulos.
- Una tipografía o tamaño de texto diferente.
- Un espacio interno (`padding`) en alguna sección.
- Un borde o fondo diferente para una sección.
- El botón o enlace de contacto debe tener algún estilo visual.

No es necesario realizar un diseño complejo. El objetivo es experimentar y aprender a modificar la apariencia de una página utilizando CSS.

## README.md

El archivo `README.md` debe explicar brevemente el proyecto:

```text
# Mi presentación

Breve descripción del proyecto.

## Tecnologías utilizadas

- HTML
- CSS
- Git
```

## Parte 1 — Crear el repositorio

Desde la carpeta del proyecto:

```bash
git init
```

Comprobar el estado:

```bash
git status
```

Agregar los archivos:

```bash
git add .
```

Crear el primer commit:

```bash
git commit -m "Crear proyecto inicial"
```

## Parte 2 — Hacer una modificación

Modificar la página después del primer commit.

Por ejemplo, agregar una nueva sección:

```html
<section>
  <h2>Mis objetivos</h2>
  <p>Quiero seguir aprendiendo desarrollo web.</p>
</section>
```

Comprobar los cambios:

```bash
git status
```

Ver qué cambió:

```bash
git diff
```

Guardar la modificación:

```bash
git add .
git commit -m "Agregar sección de objetivos"
```

Al finalizar deben tener **al menos 2 commits**.

## Parte 3 — Crear el repositorio remoto

Crear un repositorio nuevo en GitHub con el nombre:

```text
mi-presentacion
```

Vincularlo con el proyecto local:

```bash
git remote add origin URL_DEL_REPOSITORIO
```

Comprobar:

```bash
git remote -v
```

Subir el proyecto:

```bash
git push -u origin master
```

## Entrega

El repositorio debe quedar **público** en GitHub y contener:

- `index.html`
- `styles.css`
- `README.md`
- Al menos **2 commits**
- Los estilos CSS solicitados.
- El proyecto funcionando correctamente.

Finalmente, completar el siguiente formulario con los datos solicitados:

**Formulario de entrega:**  
https://forms.gle/ttQS4GmxGaW7hZvaA

## Checklist

- [ ] La página funciona.
- [ ] El repositorio es público.
- [ ] Están los 3 archivos.
- [ ] Hay al menos 2 commits.
- [ ] Se utilizó CSS para aplicar estilos básicos.
- [ ] El proyecto está subido a GitHub.
- [ ] Se completó el formulario de entrega.
