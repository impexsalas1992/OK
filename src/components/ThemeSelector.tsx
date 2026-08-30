import React, { useState, useRef, useEffect } from 'react';
import { ColorTheme } from '../types';
import { Palette, Check, Sparkles } from 'lucide-react';

interface ThemeOption {
  id: ColorTheme;
  name: string;
  label: string;
  primaryColor: string;
  badgeBg: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'emerald',
    name: 'Emerald',
    label: 'Esmeralda Clásico',
    primaryColor: '#10b981',
    badgeBg: 'bg-emerald-500',
    description: 'Pizarra oscuro con acentos verde esmeralda contable',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    label: 'Azul Océano',
    primaryColor: '#0ea5e9',
    badgeBg: 'bg-sky-500',
    description: 'Azul marino profundo con zafiro y cian brillante',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    label: 'Medianoche Cósmica',
    primaryColor: '#8b5cf6',
    badgeBg: 'bg-purple-500',
    description: 'Obsidiana profunda con destellos violeta e índigo',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    label: 'Ámbar Atardecer',
    primaryColor: '#f59e0b',
    badgeBg: 'bg-amber-500',
    description: 'Carbón volcánico con oro cálido y ámbar radiante',
  },
];

interface ThemeSelectorProps {
  currentTheme: ColorTheme;
  onThemeChange: (theme: ColorTheme) => void;
  compact?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (themeId: ColorTheme) => {
    onThemeChange(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition shadow-sm touch-manipulation ${
          isOpen
            ? 'bg-slate-700 text-white border-slate-500 ring-2 ring-emerald-500/30'
            : 'bg-slate-850 hover:bg-slate-750 text-slate-200 border-slate-700 hover:text-white'
        }`}
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.85)',
        }}
        title={`Tema de color actual: ${activeOption.name} (${activeOption.label})`}
        aria-label="Seleccionar tema de color"
      >
        <Palette className="w-3.5 h-3.5 text-slate-400" />
        <span
          className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
          style={{ backgroundColor: activeOption.primaryColor }}
        />
        {!compact && (
          <span className="hidden sm:inline font-medium text-slate-200">
            {activeOption.name}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-2 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 border-b border-slate-800 flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Tema de Color
            </span>
            <span className="text-[10px] text-slate-500 font-mono">localStorage</span>
          </div>

          <div className="mt-1.5 space-y-1">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition text-left ${
                    isSelected
                      ? 'bg-slate-800 text-white font-bold border border-slate-600 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow border border-white/20"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold">{theme.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          ({theme.label})
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {theme.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
