# LT90 - Premium Collective Platform

Una aplicación React completamente navegable que representa el ecosistema LT90: una colección premium exclusiva.

## Arquitectura General

### Rutas Principales

- **`/`** - Landing Page: Presentación con video de fondo, countdown timer y CTA
- **`/drop`** - Drop Actual: Colección WORLD con productos 90/90 limitados
- **`/core`** - Core LT90: Colección permanente de piezas premium
- **`/archive`** - Archivo Histórico: Histórico de drops y colecciones pasadas
- **`/club`** - Club LT90: Portal exclusivo para socios (requiere autenticación)
- **`/account`** - Mi Cuenta: Login, gestión de perfil e historial de pedidos
- **`/admin`** - LT90 Control Center: Panel administrativo profesional

## Sistema de Autenticación

La aplicación implementa un sistema de roles de usuario:

### Tipos de Usuario

1. **Guest (Invitado)**
   - Acceso a Landing Page
   - Puede ver Drops, Core, Archivo
   - NO puede comprar
   - NO acceso a Club
   - NO acceso a Panel Admin

2. **Socio LT90**
   - Acceso completo a todas las secciones
   - Acceso al Club y beneficios exclusivos
   - Puede ver Pasaporte y historial
   - NO acceso a Panel Admin

3. **Administrador**
   - Acceso a todo
   - Acceso al LT90 Control Center
   - Panel administrativo profesional

## Componentes Principales

### Navegación
- **`components/navigation.tsx`** - Barra de navegación minimalista y reactiva
  - Se adapta según el rol del usuario
  - Muestra/oculta opciones según autenticación

### Autenticación
- **`lib/auth-context.tsx`** - Context API para gestión de estado de usuario
  - Estados: guest, socio, admin
  - Mock login (preparado para integración backend)

### Páginas

1. **Landing Page** (`app/page.tsx`)
   - Hero con video de fondo
   - Countdown timer funcional
   - CTA que navega a `/drop` cuando expira

2. **Drop Page** (`app/drop/page.tsx`)
   - Colección de productos limitados 90/90
   - Vista grid y detalle
   - Carrito (estructura lista para backend)

3. **Core Page** (`app/core/page.tsx`)
   - Colección permanente
   - Grid de piezas premium

4. **Archive Page** (`app/archive/page.tsx`)
   - Horizontal scroll de drops históricos
   - Visualización de colecciones pasadas

5. **Club Page** (`app/club/page.tsx`)
   - Portal exclusivo para socios
   - Links a todas las secciones
   - Información del Pasaporte LT90

6. **Account Page** (`app/account/page.tsx`)
   - Formulario de login
   - Perfil de usuario (cuando autenticado)
   - Historial de pedidos

7. **Admin Panel** (`app/admin/page.tsx`)
   - Dashboard con estadísticas
   - Gestión de Drops, Core, Usuarios, etc.
   - Diseño profesional estilo Nike/Apple/Vercel

## Diseño y Estética

- **Fondo Negro**: Paleta oscura (#050505) en todo
- **Minimalismo Premium**: Mucho espacio, tipografía limpia
- **Micro-animaciones**: Transiciones suaves, hover effects elegantes
- **Aspecto Exclusivo**: Se siente como un club privado, no una tienda

### Colores
- Negro absoluto (#050505)
- Blanco (#FFFFFF)
- Grises (White/60, White/10, etc.)
- Acentos: Azul eléctrico, Dorado, Rojo oscuro

## Características Implementadas

✅ Navegación completamente funcional  
✅ Sistema de autenticación con roles  
✅ Countdown timer dinámico  
✅ Rutas públicas y protegidas  
✅ Responsive design  
✅ Admin panel completo  
✅ Club portal exclusivo  
✅ Todas las páginas existentes preservadas  

## Próximos Pasos para Desarrollo

1. **Backend**
   - Integrar database (Neon, Supabase, etc.)
   - Implementar autenticación real
   - API endpoints para productos, pedidos, usuarios

2. **Pagos**
   - Integración Stripe
   - Checkout funcional

3. **Contenido**
   - CMS para gestionar productos
   - Upload de imágenes y videos
   - Gestión de drops

4. **Notificaciones**
   - Email transaccionales
   - Push notifications

5. **Analytics**
   - Tracking de conversiones
   - Dashboard de métricas

## Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar dev server
pnpm dev

# Build para producción
pnpm build
```

## Estructura de Archivos

```
app/
├── page.tsx              # Landing page
├── drop/page.tsx         # Drop page
├── core/page.tsx         # Core page
├── archive/page.tsx      # Archive page
├── club/page.tsx         # Club page
├── account/page.tsx      # Account/Login page
├── admin/page.tsx        # Admin panel
└── layout.tsx            # Root layout con providers

components/
├── navigation.tsx        # Main navbar
├── hero.tsx             # Hero section
├── collection.tsx       # Drops/products
├── historical-archive.tsx # Archive display
├── countdown-timer.tsx   # Timer component
├── marquee-banner.tsx    # Scrolling banner
├── admin/               # Admin components
│   ├── admin-layout.tsx
│   ├── admin-header.tsx
│   ├── admin-sidebar.tsx
│   ├── dashboard.tsx
│   └── ... (otros componentes admin)
└── ... (otros componentes)

lib/
└── auth-context.tsx     # Authentication context

styles/
└── globals.css          # Estilos globales
```

## Notas Importantes

- La autenticación es un mock preparado para integración backend
- Todos los datos son estáticos pero la estructura está lista para dinámicos
- El panel admin es una interfaz completa lista para conexión a backend
- Todas las rutas están optimizadas para Next.js 16 con App Router
- El diseño es 100% responsive y accesible

---

**LT90 - Premium Collective** | Diseñado para exclusividad, construido para escala.
