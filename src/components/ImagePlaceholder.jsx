import React, { useState } from 'react';
import { Image as ImageIcon, UploadCloud } from 'lucide-react';

/**
 * ImagePlaceholder:
 * Menampilkan gambar jika tersedia, dan otomatis beralih ke placeholder visual yang rapi
 * jika file belum ada atau terjadi error load.
 * Memudahkan pengguna untuk mengganti nama file / path sesuai kebutuhan.
 */
export default function ImagePlaceholder({
  src,
  alt = 'Placeholder Gambar',
  className = '',
  aspectRatio = 'aspect-video',
  placeholderTitle = 'Placeholder Gambar',
  fileNameHint = 'public/images/nama-file.jpg',
  badgeText = 'Ganti Gambar',
  objectFit = 'object-cover',
  imgClassName = '',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const showFallback = !src || hasError;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-amber-300/80 bg-amber-50/60 transition-all hover:border-amber-400 ${aspectRatio} ${className}`}
    >
      {!showFallback ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full transition-opacity duration-500 ${objectFit} ${imgClassName} ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle overlay badge indicating file name on hover */}
          <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[11px] font-medium text-white/90 backdrop-blur-xs opacity-0 transition-opacity hover:opacity-100">
            {fileNameHint}
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center p-4 text-center">
          <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shadow-xs">
            <ImageIcon className="h-6 w-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            {badgeText}
          </span>
          <p className="mt-1 text-sm font-bold text-neutral-800">
            {placeholderTitle}
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-white/90 px-2.5 py-1 text-xs text-neutral-600 shadow-xs">
            <UploadCloud className="h-3.5 w-3.5 text-amber-600" />
            <code className="text-[11px] text-amber-900 font-mono">{fileNameHint}</code>
          </div>
          <span className="mt-1 text-[10px] text-neutral-600">
            Letakkan file di folder public dan sesuaikan nama filenya
          </span>
        </div>
      )}
    </div>
  );
}
