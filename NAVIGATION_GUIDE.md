# LT90 Platform - Guía de Navegación

## Estado: Guest (Sin Autenticación)

### Navegación Disponible
- `LT90` → Home/Landing
- `DROPS` → /drop (colección actual)
- `ARCHIVO` → /archive (histórico)
- `CORE` → /core (permanente)
- `ENTRAR` → Botón de login

### Acciones Disponibles
- Ver landing page con countdown timer
- Cuando expire el timer → "Acudir al Llamado" navega a /drop
- Ver productos en DROPS, CORE y ARCHIVO
- Hacer clic en "ENTRAR" para ir a /account (login)

### Restricciones
- ❌ NO acceso a Club
- ❌ NO ver "Mi Cuenta" en nav
- ❌ NO acceso a /admin
- ❌ NO poder comprar

---

## Estado: Socio LT90 (Autenticado)

### Credenciales de Prueba
- Email: `test@lt90.com` (cualquier email funciona en modo mock)
- Contraseña: `password123` (cualquier contraseña funciona)

### Cambios en Navegación
- `CLUB` aparece en la navegación
- `ENTRAR` cambia a `MI CUENTA` y `SALIR`
- Aparece opción "Panel" si eres admin

### Rutas Accesibles

#### / (Landing)
- Countdown timer funcionando
- Botón "Acudir al Llamado" navega a /drop cuando expira

#### /drop (Drop Actual)
- Grid de productos 90/90 limitados
- Click en producto → detalle completo
- Selector de tallas
- Botón "Adquirir Pieza"
- Información de pre-orden
- Volver al grid con botón "Volver"

#### /core (Core LT90)
- Colección permanente
- Descripción de la colección
- Grid de piezas core

#### /archive (Archivo Histórico)
- Histórico de drops pasados
- Scroll horizontal
- "Rueda del ratón para navegar"

#### /club (Club LT90)
- Descripción del club
- Grid de opciones:
  - Drops
  - Core
  - Archivo
  - Pasaporte LT90
  - Convocatorias
  - Beneficios
- Tu Pasaporte LT90 (info de socio)

#### /account (Mi Cuenta)
- Perfil con nombre, email, estado
- Historial de pedidos simulado
- Botón "Cerrar Sesión"
- Botón "Panel Admin" (si eres admin)

---

## Estado: Administrador

### Cómo Acceder a Admin
Para pruebas: cambiar manualmente el rol en auth-context.tsx

### /admin (LT90 Control Center)

#### Dashboard Principal
Estadísticas:
- Drop Activo: WORLD (90/90 Unidades)
- Core Products: 24 (Productos activos)
- Miembros LTeam: 90 (Socios activos)
- Convocatorias Abiertas: 3 (En progreso)
- Ventas del Mes: €4,240 (+12% vs mes anterior)
- Visitas: 2,847 (En últimos 7 días)

#### Sidebar de Navegación
- Dashboard
- Drops
- Core
- Convocatorias
- Archivo Histórico
- Miembros
- Pasaportes
- Inventario
- Contenido
- Correos
- Broadcast
- Analíticas
- Configuración

#### Secciones Funcionando
- Drops: Listado de drops con estado
- Core: Gestión de productos core
- Convocatorias: Llamadas abiertas
- Archivo Histórico: Grid de drops históricos
- Miembros: Tabla de socios

---

## User Flow Completo

### Flujo 1: Nuevo Visitante
1. Llega a `/` (Landing)
2. Ve countdown timer
3. Cuando expira, puede ir a `/drop`
4. Explora DROPS, CORE, ARCHIVO
5. Cuando hace click en "ENTRAR" va a /account
6. Hace login
7. Recibe acceso a CLUB y poder comprar

### Flujo 2: Socio Activo
1. Navega por DROPS, CORE, ARCHIVO
2. Accede a CLUB para ver beneficios
3. Ve su Mi Cuenta con historial
4. Puede hacer logout desde cualquier página

### Flujo 3: Administrador
1. Accede a /admin
2. Ve dashboard con todas las métricas
3. Navega por sidebar para gestionar:
   - Drops activos
   - Productos core
   - Usuarios/Socios
   - Pedidos
   - Contenido
   - Y mucho más

---

## Características Técnicas

### Autenticación
- Context API para estado global
- Mock login (preparado para backend real)
- Roles: guest, socio, admin
- Persiste en sesión (no en localStorage)

### Navegación
- Next.js App Router
- Links prefetch automático
- Rutas protegidas por rol
- Cambios dinámicos en nav según rol

### Diseño
- Totalmente responsive
- Black background (#050505)
- Color tokens: blanco, grises, acentos
- Microanimaciones suaves

### Performance
- Static generation de todas las rutas
- Código split automático
- Lazy loading de componentes

---

## Testing Quick Checklist

- [ ] Landing page carga con video y timer
- [ ] Timer cuenta hacia atrás
- [ ] Boton "Acudir al Llamado" deshabilitado hasta expira
- [ ] Click en DROPS navega a /drop
- [ ] Click en CORE navega a /core
- [ ] Click en ARCHIVO navega a /archive
- [ ] Click en ENTRAR navega a /account
- [ ] Login sin credenciales válidas (mock)
- [ ] Después de login, CLUB aparece en nav
- [ ] MI CUENTA y SALIR aparecen en nav
- [ ] Click en CLUB navega a /club
- [ ] Click en SALIR hace logout
- [ ] Admin panel accesible en /admin
- [ ] Sidebar admin funciona correctamente
- [ ] Todas las secciones cargan contenido

---

## Notas de Desarrollo

### Para Cambiar a Admin (Temporalmente)
En `lib/auth-context.tsx`:
```tsx
// Cambiar setRole('guest') a setRole('admin') en línea de inicialización
```

### Para Agregar Nuevas Rutas
1. Crear carpeta en `app/nueva-ruta/`
2. Crear `page.tsx` dentro
3. Agregar link en `components/navigation.tsx` si es necesario
4. Actualizar condiciones de auth si es protegida

### Para Conectar Backend
1. Reemplazar mock en `lib/auth-context.tsx`
2. Agregar llamadas a API
3. Conectar database para usuarios
4. Implementar pagos con Stripe

---

**Estado Actual**: ✅ Totalmente navegable y funcional

Versión: 1.0.0 - LT90 Platform MVP
