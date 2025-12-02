# Sistema de Internacionalización (i18n) - Winnix

Este documento explica cómo funciona el sistema de internacionalización implementado en la aplicación Winnix.

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Arquitectura](#arquitectura)
- [Configuración](#configuración)
- [Uso Básico](#uso-básico)
- [Traducción de Estados](#traducción-de-estados)
- [Cambiar Idioma](#cambiar-idioma)
- [Estructura de Archivos](#estructura-de-archivos)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Mejores Prácticas](#mejores-prácticas)

---

## 📖 Descripción General

El sistema de i18n utiliza **react-i18next** junto con **expo-localization** para proporcionar:

- ✅ **Detección automática** del idioma del dispositivo
- ✅ **Soporte multi-idioma** (Español e Inglés)
- ✅ **Traducción de estados** del backend (ej: "published" → "Publicado")
- ✅ **Namespaces** organizados por módulos
- ✅ **TypeScript** con tipos seguros

---

## 🏗️ Arquitectura

```
i18n/
├── config/
│   └── i18n.config.ts          # Configuración principal de i18next
├── locales/
│   ├── es/                     # Traducciones en Español
│   │   ├── common.json
│   │   ├── auth.json
│   │   ├── tournaments.json
│   │   └── status.json
│   └── en/                     # Traducciones en Inglés
│       ├── common.json
│       ├── auth.json
│       ├── tournaments.json
│       └── status.json
├── hooks/
│   └── useTranslation.ts       # Hook personalizado
└── utils/
    └── translateStatus.ts      # Utilidad para traducir estados
```

### Namespaces

- **common**: Textos comunes (botones, mensajes generales)
- **auth**: Autenticación (login, registro)
- **tournaments**: Torneos y competencias
- **status**: Estados del sistema (published, draft, etc.)

---

## ⚙️ Configuración

El sistema se inicializa automáticamente en `app/_layout.tsx`:

```typescript
import "@/i18n/config/i18n.config";
```

La configuración detecta automáticamente el idioma del dispositivo usando `expo-localization` y establece:

- **Idioma por defecto**: Español (`es`)
- **Idioma de fallback**: Español (`es`)
- **Idiomas soportados**: `["es", "en"]`

---

## 🚀 Uso Básico

### En Componentes React

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation("tournaments");

  return <Text>{t("ourTournaments.title")}</Text>;
};
```

### Con Namespace Específico

```typescript
// Usar namespace específico
const { t } = useTranslation("auth");

// Traducir clave del namespace
const title = t("login.title"); // "Bienvenid@" o "Welcome"
```

### Acceder a Otro Namespace

```typescript
const { t } = useTranslation("tournaments");

// Acceder a otro namespace usando notación de dos puntos
const error = t("common:error"); // "Error"
```

---

## 🏷️ Traducción de Estados

### Problema

El backend devuelve estados en inglés como `"published"`, `"draft"`, pero necesitamos mostrarlos en español: `"Publicado"`, `"Borrador"`.

### Solución

Usa la función `translateStatus()` del hook personalizado:

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const TournamentItem = ({ status }: { status: string }) => {
  const { translateStatus } = useTranslation();

  return (
    <Text>{translateStatus(status)}</Text>
    // Si status = "published" → muestra "Publicado" (es) o "Published" (en)
  );
};
```

### Fuera de Componentes

Si necesitas traducir estados fuera de un componente React:

```typescript
import { translateStatus } from "@/i18n/utils/translateStatus";

const status = "published";
const translated = translateStatus(status); // "Publicado" o "Published"
```

---

## 🌐 Cambiar Idioma

### Desde un Componente

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const LanguageSelector = () => {
  const { changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = async (lang: "es" | "en") => {
    await changeLanguage(lang);
  };

  return (
    <View>
      <Text>Idioma actual: {currentLanguage}</Text>
      <Button title='Español' onPress={() => handleLanguageChange("es")} />
      <Button title='English' onPress={() => handleLanguageChange("en")} />
    </View>
  );
};
```

### Verificar Idioma Actual

```typescript
const { currentLanguage, isSpanish, isEnglish } = useTranslation();

if (isSpanish) {
  // Lógica para español
}

if (isEnglish) {
  // Lógica para inglés
}
```

---

## 📁 Estructura de Archivos

### Archivo de Traducción (JSON)

```json
{
  "ourTournaments": {
    "title": "Mis Torneos",
    "createTournament": "Crear Torneo",
    "active": "Activos",
    "finished": "Finalizados"
  }
}
```

### Uso

```typescript
const { t } = useTranslation("tournaments");
t("ourTournaments.title"); // "Mis Torneos"
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Componente de Login

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <View>
      <Text>{t("login.title")}</Text>
      <Input label={t("login.emailLabel")} placeholder={t("login.emailPlaceholder")} />
      <Button label={t("login.submitButton")} />
    </View>
  );
};
```

### Ejemplo 2: Lista de Torneos con Estados

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const TournamentList = ({ tournaments }) => {
  const { t, translateStatus } = useTranslation("tournaments");

  return (
    <View>
      <Text>{t("ourTournaments.title")}</Text>
      {tournaments.map((tournament) => (
        <View key={tournament.id}>
          <Text>{tournament.name}</Text>
          <Text>{translateStatus(tournament.status)}</Text>
          {/* Si status = "published" → muestra "Publicado" */}
        </View>
      ))}
    </View>
  );
};
```

### Ejemplo 3: Botones con Traducciones

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const ActionButtons = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Button label={t("common:save")} />
      <Button label={t("common:cancel")} />
      <Button label={t("common:delete")} />
    </View>
  );
};
```

### Ejemplo 4: Mensajes de Error

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";
import { Alert } from "react-native";

const handleError = () => {
  const { t } = useTranslation("auth");

  Alert.alert(t("common:error"), t("login.invalidCredentials"));
};
```

### Ejemplo 5: Formulario Completo

```typescript
import { useTranslation } from "@/i18n/hooks/useTranslation";

const CreateTournament = () => {
  const { t } = useTranslation("tournaments");

  return (
    <View>
      <Text>{t("ourTournaments.createTournament")}</Text>
      <Input label={t("ourTournaments.tournamentName")} placeholder={t("ourTournaments.tournamentNamePlaceholder")} />
      <Button label={t("common:save")} />
      <Button label={t("common:cancel")} />
    </View>
  );
};
```

---

## ✅ Mejores Prácticas

### 1. Usa Namespaces Apropiados

✅ **Bien:**

```typescript
const { t } = useTranslation("auth");
t("login.title");
```

❌ **Evitar:**

```typescript
const { t } = useTranslation();
t("auth:login:title"); // Más verboso
```

### 2. Traduce Estados del Backend

✅ **Bien:**

```typescript
const { translateStatus } = useTranslation();
<Text>{translateStatus(item.status)}</Text>;
```

❌ **Evitar:**

```typescript
<Text>{item.status}</Text> // Muestra "published" en lugar de "Publicado"
```

### 3. Organiza Traducciones por Módulo

✅ **Bien:**

```
tournaments.json → Todo lo relacionado con torneos
auth.json → Todo lo relacionado con autenticación
```

### 4. Usa Claves Descriptivas

✅ **Bien:**

```json
{
  "ourTournaments": {
    "createTournament": "Crear Torneo"
  }
}
```

❌ **Evitar:**

```json
{
  "ct": "Crear Torneo" // No es descriptivo
}
```

### 5. Mantén Consistencia

Usa las mismas claves para conceptos similares:

- `common:save` para todos los botones de guardar
- `common:cancel` para todos los botones de cancelar

---

## 🔧 Agregar Nuevas Traducciones

### Paso 1: Agregar al JSON

**`i18n/locales/es/tournaments.json`**

```json
{
  "ourTournaments": {
    "newKey": "Nuevo Texto"
  }
}
```

**`i18n/locales/en/tournaments.json`**

```json
{
  "ourTournaments": {
    "newKey": "New Text"
  }
}
```

### Paso 2: Usar en el Componente

```typescript
const { t } = useTranslation("tournaments");
<Text>{t("ourTournaments.newKey")}</Text>;
```

---

## 🐛 Troubleshooting

### El texto no se traduce

1. Verifica que el namespace esté correcto
2. Verifica que la clave exista en ambos archivos (es y en)
3. Verifica que i18n esté inicializado en `app/_layout.tsx`

### El estado no se traduce

1. Verifica que el estado exista en `status.json`
2. Usa `translateStatus()` en lugar de mostrar el estado directamente

### El idioma no cambia

1. Verifica que el idioma esté en `supportedLngs` en `i18n.config.ts`
2. Usa `await changeLanguage()` (es asíncrono)

---

## 📚 Recursos Adicionales

- [Documentación de react-i18next](https://react.i18next.com/)
- [Documentación de expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- [i18next Documentation](https://www.i18next.com/)

---

## 🎯 Resumen Rápido

```typescript
// 1. Importar hook
import { useTranslation } from "@/i18n/hooks/useTranslation";

// 2. Usar en componente
const { t, translateStatus } = useTranslation("tournaments");

// 3. Traducir texto
<Text>{t("ourTournaments.title")}</Text>

// 4. Traducir estado del backend
<Text>{translateStatus("published")}</Text> // "Publicado"

// 5. Cambiar idioma
await changeLanguage("en");
```

---
