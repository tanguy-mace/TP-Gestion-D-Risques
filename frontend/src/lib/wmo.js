/**
 * WMO Weather interpretation codes (WW)
 * Reference: Open-Meteo & World Meteorological Organization
 */

export const WMO_CODES = {
  0: { label: 'Ciel dégagé', type: 'clear', icon: '☀️', skyDay: 0x60a5fa, skyNight: 0x0f172a, lightColor: 0xfff7ed },
  1: { label: 'Principalement dégagé', type: 'clear', icon: '🌤️', skyDay: 0x7dd3fc, skyNight: 0x0f172a, lightColor: 0xffedd5 },
  2: { label: 'Partiellement nuageux', type: 'partly_cloudy', icon: '⛅', skyDay: 0x93c5fd, skyNight: 0x111827, lightColor: 0xfde68a },
  3: { label: 'Couvert', type: 'cloudy', icon: '☁️', skyDay: 0x94a3b8, skyNight: 0x1e293b, lightColor: 0xe2e8f0 },
  45: { label: 'Brouillard', type: 'fog', icon: '🌫️', skyDay: 0xa8a29e, skyNight: 0x1c1917, lightColor: 0xd6d3d1 },
  48: { label: 'Brouillard givrant', type: 'fog', icon: '🌫️❄️', skyDay: 0x9ca3af, skyNight: 0x111827, lightColor: 0xe5e7eb },
  51: { label: 'Bruine légère', type: 'rain', icon: '🌦️', skyDay: 0x64748b, skyNight: 0x0f172a, lightColor: 0xbfdbfe },
  53: { label: 'Bruine modérée', type: 'rain', icon: '🌧️', skyDay: 0x475569, skyNight: 0x0f172a, lightColor: 0x93c5fd },
  55: { label: 'Bruine dense', type: 'rain', icon: '🌧️', skyDay: 0x334155, skyNight: 0x090d16, lightColor: 0x60a5fa },
  56: { label: 'Bruine verglaçante légère', type: 'rain', icon: '🌧️❄️', skyDay: 0x475569, skyNight: 0x090d16, lightColor: 0xbfdbfe },
  57: { label: 'Bruine verglaçante dense', type: 'rain', icon: '🌧️❄️', skyDay: 0x334155, skyNight: 0x090d16, lightColor: 0x93c5fd },
  61: { label: 'Pluie faible', type: 'rain', icon: '🌧️', skyDay: 0x475569, skyNight: 0x0b1120, lightColor: 0xbfdbfe },
  63: { label: 'Pluie modérée', type: 'rain', icon: '🌧️', skyDay: 0x334155, skyNight: 0x090d16, lightColor: 0x93c5fd },
  65: { label: 'Pluie forte', type: 'rain', icon: '🌧️🌊', skyDay: 0x1e293b, skyNight: 0x060911, lightColor: 0x60a5fa },
  66: { label: 'Pluie verglaçante', type: 'rain', icon: '🌧️🧊', skyDay: 0x334155, skyNight: 0x090d16, lightColor: 0x93c5fd },
  67: { label: 'Forte pluie verglaçante', type: 'rain', icon: '🌧️🧊', skyDay: 0x1e293b, skyNight: 0x060911, lightColor: 0x60a5fa },
  71: { label: 'Chutes de neige faibles', type: 'snow', icon: '🌨️', skyDay: 0x94a3b8, skyNight: 0x1e293b, lightColor: 0xffffff },
  73: { label: 'Chutes de neige modérées', type: 'snow', icon: '❄️', skyDay: 0xcbd5e1, skyNight: 0x1e293b, lightColor: 0xffffff },
  75: { label: 'Chutes de neige fortes', type: 'snow', icon: '❄️🌨️', skyDay: 0xe2e8f0, skyNight: 0x334155, lightColor: 0xffffff },
  77: { label: 'Grains de neige', type: 'snow', icon: '❄️', skyDay: 0x94a3b8, skyNight: 0x1e293b, lightColor: 0xffffff },
  80: { label: 'Averses légères', type: 'rain', icon: '🌦️', skyDay: 0x64748b, skyNight: 0x0f172a, lightColor: 0xbfdbfe },
  81: { label: 'Averses modérées', type: 'rain', icon: '🌧️', skyDay: 0x475569, skyNight: 0x0b1120, lightColor: 0x93c5fd },
  82: { label: 'Averses violentes', type: 'rain', icon: '⛈️', skyDay: 0x1e293b, skyNight: 0x05070e, lightColor: 0x60a5fa },
  85: { label: 'Averses de neige légères', type: 'snow', icon: '🌨️', skyDay: 0x94a3b8, skyNight: 0x1e293b, lightColor: 0xffffff },
  86: { label: 'Averses de neige fortes', type: 'snow', icon: '❄️🌨️', skyDay: 0xe2e8f0, skyNight: 0x334155, lightColor: 0xffffff },
  95: { label: 'Orage', type: 'thunderstorm', icon: '⚡', skyDay: 0x1e1e2e, skyNight: 0x05050d, lightColor: 0xa5b4fc },
  96: { label: 'Orage avec grêle légère', type: 'thunderstorm', icon: '⛈️⚡', skyDay: 0x181825, skyNight: 0x040409, lightColor: 0xc4b5fd },
  99: { label: 'Orage avec forte grêle', type: 'thunderstorm', icon: '⛈️⚡🚨', skyDay: 0x11111b, skyNight: 0x020205, lightColor: 0xa855f7 }
};

export function getWeatherInfo(code) {
  return WMO_CODES[code] || {
    label: `Météo (${code})`,
    type: 'partly_cloudy',
    icon: '🌤️',
    skyDay: 0x7dd3fc,
    skyNight: 0x0f172a,
    lightColor: 0xfff7ed
  };
}

