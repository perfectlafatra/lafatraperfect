/**
 * Configuration de l'asset du Hero — visage 3D ou image 2.5D.
 *
 * Cette configuration est la source unique de vérité côté Frontend.
 * Elle sera remplacée plus tard par les données publiées depuis le
 * backoffice (« Identité visuelle / Médias du Hero »), sans toucher
 * au code des composants.
 */
import type { Locale } from '../routes/publicRoutes';

export type HeroAssetMode = '3D' | 'IMAGE';

export interface HeroAssetConfig {
  mode: HeroAssetMode;
  /** URL du modèle GLB/GLTF (mode 3D). Doit être sous licence compatible. */
  model3d?: { url: string; license: string };
  /** URL de l'image 2D (mode IMAGE) avec parallax 2.5D. */
  image?: { url: string; alt: Record<Locale, string>; frontUrl?: string };
  /** Échelle, position et rotation XYZ du modèle. */
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** Intensité du mouvement lié au pointeur (0 = statique). */
  pointerIntensity?: number;
  /** Vitesse de rotation automatique (0 = statique). */
  rotationSpeed?: number;
}

/** URL publique vérifiée (HTTP 200) — modèle de tête humaine animée, licence CC0. */
const SAMPLE_MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BrainStem/glTF-Binary/BrainStem.glb';

/**
 * Configuration active. MODE_3D par défaut, avec un rendu procédural
 * de secours intégré (aucune dépendance réseau obligatoire).
 */
export const heroAsset: HeroAssetConfig = {
  /* Portrait réel (photo originale) affiché immédiatement.
     Le mode '3D' sera réactivé dès qu'un GLB facial exploitable existera. */
  mode: 'IMAGE',
  image: {
    url: `${import.meta.env.BASE_URL}media/hero/portraits/R2.png`,
    /* Photo frontale affichée en crossfade quand le visage revient de face. */
    frontUrl: `${import.meta.env.BASE_URL}media/hero/portraits/R.png`,
    alt: {
      fr: 'Portrait de LAFATRAPERFECT, développeur Full-Stack',
      en: 'Portrait of LAFATRAPERFECT, Full-Stack Developer'
    }
  },
  /* Configuration 3D préservée pour la future reconstruction. */
  model3d: { url: SAMPLE_MODEL_URL, license: 'CC0 — Khronos glTF Sample Assets' },
  scale: 1,
  position: [0, -0.1, 0],
  rotation: [0, 0, 0],
  pointerIntensity: 0.35,
  rotationSpeed: 0.15
};
