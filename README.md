# 📊 Control de Ventas & Gastos con IA (SALAS IMPORTACIONES & EXPORTACIONES S.A.C.)

Sistema integral y moderno de gestión financiera, escaneo inteligente de comprobantes (Facturas, Boletas, Honorarios), decodificación QR SUNAT, reportes ejecutivos e integración bidireccional en tiempo real con **Google Sheets** y **Google Drive**.

---

## 🌐 Publicación Fácil y Rápida (Hosting)

### 🚀 Opción 1: GitHub Pages (100% Automático con GitHub Actions)
Este repositorio ya cuenta con el flujo automatizado configurado en `.github/workflows/deploy.yml` y rutas relativas en `vite.config.ts`.

1. **Sube o sincroniza tus cambios a GitHub**:
   - Haz clic en **Export to GitHub** desde Google AI Studio, o haz `git push origin main`.
2. **Activa GitHub Pages en tu repositorio**:
   - En tu repositorio de GitHub, ve a **Settings** (Ajustes) > **Pages** (en el menú lateral izquierdo).
   - En **Build and deployment** > **Source**, selecciona **`GitHub Actions`**.
3. ¡Listo! Cada vez que subas cambios a `main`, GitHub compilará y publicará tu web automáticamente en:
   `https://<tu-usuario>.github.io/<tu-repositorio>/`

---

### ⚡ Opción 2: Vercel o Netlify (Gratis y en 1 Clic)
1. Conecta tu cuenta de GitHub a [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
2. Selecciona este repositorio.
3. Configuración del proyecto:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build:client` (o `npm run build`)
   - **Output Directory**: `dist`
4. Haz clic en **Deploy**.

---

### 🖥️ Opción 3: Render / Railway / Servidor Full-Stack
Si deseas hospedar también el servidor Node.js/Express incluido:
1. En [Render.com](https://render.com), crea un **Web Service**.
2. Conecta el repositorio de GitHub.
3. Configura:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. En **Environment Variables**, añade:
   - `GEMINI_API_KEY`: Tu clave de Google AI Studio / Gemini.
   - `NODE_ENV`: `production`

---

## 🛠️ Ejecución Local en tu Computadora

```bash
# 1. Clonar el repositorio
git clone <URL_DE_TU_REPOSITORIO>
cd <CARPETA>

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor local de desarrollo
npm run dev

# 4. Compilar para producción
npm run build
```

---

## 📁 Estructura del Proyecto

```text
├── .github/workflows/deploy.yml  # Automatización de despliegue a GitHub Pages
├── src/                          # Código fuente React + TypeScript + Tailwind
│   ├── components/               # Módulos (Ventas, Gastos, Reportes, Dashboard, Modales)
│   ├── types/                    # Tipos e interfaces TypeScript
│   ├── utils/                    # Servicios IA Gemini, sincronización Google Sheets & Storage
│   ├── App.tsx                   # Componente principal de la aplicación
│   ├── main.tsx                  # Punto de entrada de React
│   └── index.css                 # Estilos Tailwind CSS y temas de color
├── index.html                    # Entrada HTML principal
├── package.json                  # Dependencias y scripts de construcción
├── server.ts                     # Servidor backend Express + proxies
├── vite.config.ts                # Configuración de compilación Vite (base: './')
└── metadata.json                 # Metadatos del proyecto
```
