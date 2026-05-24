# Marketing Page Preloader

## Overview
Immersive preloader khusus untuk marketing page yang memastikan semua asset sudah ter-load sebelum ditampilkan ke user, mencegah layout shift dan janky animations.

## Features

### ✓ Progressive Loading
- **0-25%**: Theme initialization
- **25-50%**: Font loading (Inter)
- **50-75%**: WebGL context preparation
- **75-100%**: Image preloading

### ✓ Visual Design
- Custom animated SVG logo (stylized "J" with accent lines)
- Rotating outer ring animation
- Circular progress indicator
- Real-time percentage counter
- Dynamic loading status messages
- Smooth gradient background with ambient glow

### ✓ Technical Implementation
- Tracks font loading via `document.fonts.ready`
- Preloads critical images (logos, icons)
- Checks WebGL context availability
- Monitors theme CSS variables
- Smooth progress animation with easing
- Respects reduced motion preferences

### ✓ User Experience
- Shows on every visit
- No minimum display time (hides as soon as ready)
- Keeps progress at 100% briefly to indicate completion
- 600ms fade-out transition
- Continues waiting indefinitely (no timeout)

## Files Created

```
lib/preloader-utils.ts          - Asset loading utilities
hooks/use-preloader.ts          - Preloader state management
app/(marketing)/_components/
  └── marketing-preloader.tsx   - Main preloader component
```

## Files Modified

```
app/(marketing)/layout.tsx      - Integrated preloader + forced dark mode
app/(marketing)/_components/
  └── navbar.tsx                - Removed ModeToggle
app/globals.css                 - Added spin-slow animation
```

## Dark Mode Lock

Marketing page sekarang terkunci di dark mode:
- `useEffect` di layout menambahkan class `dark` ke `document.documentElement`
- ModeToggle dihapus dari navbar marketing
- Theme toggle tetap tersedia di halaman documents

## Usage

Preloader akan otomatis berjalan setiap kali user mengakses marketing page (`/`). Tidak perlu konfigurasi tambahan.

## Customization

### Mengubah Progress Weights
Edit `lib/preloader-utils.ts`:
```typescript
const weights = {
  fonts: 25,    // Font loading weight
  images: 35,   // Image loading weight
  theme: 20,    // Theme initialization weight
  webgl: 20,    // WebGL context weight
};
```

### Menambah Images untuk Preload
Edit `lib/preloader-utils.ts`:
```typescript
export const getMarketingImages = (): string[] => {
  return [
    "/assets/icons/logo.svg",
    "/your-new-image.png",
    // Add more images here
  ];
};
```

### Mengubah Animasi Logo
Edit `app/(marketing)/_components/marketing-preloader.tsx` di bagian SVG logo.

### Mengubah Loading Messages
Edit kondisi di bagian progress text:
```typescript
{progress < 25 && "Your message..."}
{progress >= 25 && progress < 50 && "Your message..."}
```

## Performance

- Build size: ~34.7 kB untuk marketing page
- First Load JS: ~220 kB
- Typical loading time: 1-3 seconds
- No blocking operations
- Parallel asset loading

## Browser Support

- Modern browsers with ES6+ support
- WebGL 2.0 / WebGL 1.0 fallback
- Font Loading API (graceful degradation)
- CSS custom properties (required)

## Notes

- Preloader menggunakan `position: fixed` dengan `z-index: 9999`
- Tidak memblokir interaksi setelah page loaded
- Theme-aware (respects dark mode colors)
- Accessible (no motion for reduced-motion users)
