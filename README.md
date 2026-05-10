# SmartTutor Hub - Frontend

Frontend desarrollado con React + Vite + TailwindCSS.

## Requisitos

- Node.js 18+
- Backend corriendo en `http://localhost:8000`

## Instalación

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:8000
```

## Scripts

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Previsualizar build
```

## Estructura

```
src/
├── components/   # Componentes reutilizables
├── pages/       # Páginas principales
├── services/    # API calls
├── layouts/     # Layouts
└── App.jsx      # Configuración de rutas
```

## Características

- Chat interactivo con el asistente
- Visualización de fuentes consultadas
- Panel de administración de documentos
- Subir/eliminar documentos PDF
- Diseño responsive moderno