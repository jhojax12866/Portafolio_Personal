# 🚀 Portfolio Personal - Johan Fernando Burbano

Portafolio web moderno y tecnológico desarrollado con Next.js 15, React 18 y TailwindCSS v4. Diseñado para mostrar mis habilidades, experiencia y proyectos como Desarrollador Frontend.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- **🎨 Diseño Tecnológico**: Tema oscuro navy blue con efectos galácticos y animaciones de partículas
- **🌐 Multiidioma**: Soporte completo para Español, Inglés y Portugués
- **📱 Responsive Design**: Adaptado perfectamente a todos los dispositivos
- **⚡ Animaciones Avanzadas**: Efectos de glassmorphism, hover effects y transiciones suaves con Framer Motion
- **🎯 Navegación Intuitiva**: Menú lateral desplegable con scroll suave entre secciones
- **📄 Descarga de CV**: Botón para descargar curriculum vitae en PDF
- **🎭 Componentes Interactivos**: Tabs, Accordions, Dialogs y Hover Cards para mejor UX

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React con App Router
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **TailwindCSS v4** - Framework de CSS utility-first

### UI/UX
- **Framer Motion** - Biblioteca de animaciones para React
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconos modernos y personalizables
- **React Icons** - Colección de iconos populares

### Herramientas
- **Git** - Control de versiones
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS

## 📂 Estructura del Proyecto

\`\`\`
portfolio/
│
├── app/
│   ├── layout.tsx              # Layout principal con providers
│   ├── page.tsx                # Página principal del portafolio
│   └── globals.css             # Estilos globales y tema
│
├── components/
│   ├── navbar.tsx              # Barra de navegación superior
│   ├── navigation.tsx          # Menú lateral desplegable
│   ├── hero-section.tsx        # Sección hero con animaciones
│   ├── about-section.tsx       # Sección sobre mí
│   ├── skills-section.tsx      # Habilidades con tabs y progress bars
│   ├── experience-section.tsx  # Experiencia laboral con accordion
│   ├── education-section.tsx   # Educación con timeline
│   ├── projects-section.tsx    # Proyectos con dialogs
│   ├── certificates-section.tsx # Certificados con hover cards
│   ├── contact-section.tsx     # Información de contacto
│   ├── tech-background.tsx     # Fondo animado con partículas
│   └── ui/                     # Componentes UI reutilizables
│
├── lib/
│   ├── i18n.ts                 # Traducciones multiidioma
│   ├── language-provider.tsx   # Provider de idioma
│   └── utils.ts                # Utilidades y helpers
│
└── public/
    ├── cv-johan-burbano.pdf    # Curriculum vitae
    └── *.jpg                   # Imágenes de proyectos
\`\`\`

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/jhojax12866/portfolio.git
cd portfolio
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
# o
yarn install
# o
pnpm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
# o
yarn dev
# o
pnpm dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🌟 Secciones del Portafolio

### 1. Hero Section
Presentación principal con efecto de typing y animaciones de entrada.

### 2. Sobre Mí
Descripción profesional con estadísticas y objetivos.

### 3. Habilidades
Organización por categorías (Frontend, Backend, Herramientas) con barras de progreso animadas.

### 4. Experiencia Laboral
Timeline interactivo con accordion para ver detalles de cada posición.

### 5. Educación
Historial académico con información detallada de cada institución.

### 6. Proyectos
Galería de proyectos con modals para ver información completa y enlaces.

### 7. Certificados
Colección de certificaciones con hover cards informativos.

### 8. Contacto
Información de contacto con enlaces directos a redes sociales y email.

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `app/globals.css` para modificar el tema de colores:

\`\`\`css
@theme inline {
  --color-background: 10 25 47;
  --color-primary: 100 255 218;
  /* ... más colores */
}
\`\`\`

### Agregar/Modificar Traducciones

Edita el archivo `lib/i18n.ts` para agregar o modificar traducciones:

\`\`\`typescript
export const translations = {
  es: { /* traducciones en español */ },
  en: { /* traducciones en inglés */ },
  pt: { /* traducciones en portugués */ }
}
\`\`\`

### Actualizar Contenido

Modifica los componentes individuales en la carpeta `components/` para actualizar tu información personal, proyectos, experiencia, etc.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Johan Fernando Burbano**

- GitHub: [@jhojax12866](https://github.com/jhojax12866)
- LinkedIn: [Johan Fernando Burbano](https://www.linkedin.com/in/jhojan-fernando-burbano-6968ab324/)
- Email: Jhojanfer12@gmail.com


## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com/) por el hosting y deployment
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Radix UI](https://www.radix-ui.com/) por los componentes accesibles

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

Desarrollado con ❤️ por Johan Fernando Burbano



