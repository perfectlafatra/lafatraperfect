#!/usr/bin/env python3
"""Prepare a public manifest for a PREEXISTING, verified intermediate-frame set.

Run at the frontend root:
    python tools/build_turntable_manifest.py

This program does NOT invent new viewing angles, interpolate faces, remove the
background or alter images. It only checks files and lists them in natural order.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

FRAMES_DIR = Path('public/media/hero/turntable')
FRAMES_EXTENSIONS = {'.webp', '.png', '.avif', '.jpg', '.jpeg'}
ALLOWED_PREFIXES = ('frame_',)


def natural_key(path: Path):
    return [int(part) if part.isdigit() else part.lower() for part in re.split(r'(\d+)', path.name)]


def main() -> None:
    if not FRAMES_DIR.is_dir():
        raise SystemExit(f'Frame folder missing: {FRAMES_DIR}')
    frames = sorted(
        (path for path in FRAMES_DIR.iterdir()
         if path.is_file()
         and path.suffix.lower() in FRAMES_EXTENSIONS
         and path.name.startswith(ALLOWED_PREFIXES)),
        key=natural_key,
    )
    if len(frames) < 2:
        raise SystemExit('At least two already-generated images named frame_* are needed.')
    if len(frames) > 600:
        raise SystemExit('Too many frames for the current player (maximum 600).')

    try:
        from PIL import Image
    except ImportError:
        Image = None
    if Image is not None:
        sizes = set()
        for path in frames:
            with Image.open(path) as image:
                sizes.add(image.size)
        if len(sizes) > 1:
            raise SystemExit(f'Image canvases have different sizes: {sorted(sizes)}. Align them before playback.')

    manifest_path = FRAMES_DIR / 'manifest.json'
    if manifest_path.exists():
        raise SystemExit(f'Existing manifest not overwritten: {manifest_path}')
    manifest = {
        'version': 1,
        'verifiedFull360': False,
        'loopMode': 'pingpong',
        'cycleSeconds': 17,
        'transitionFraction': 0.4 if len(frames) >= 32 else 0.075,
        'scrollCycles': 0.12,
        'frames': [f'/media/hero/turntable/{path.name}' for path in frames],
    }
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'{len(frames)} images listed in {manifest_path}.')
    print('Default pingpong avoids a false 360° seam. Only set verifiedFull360=true')
    print('and loopMode="wrap" after inspecting the full set, rear views and seam.')
    print('Enable manifestUrl in src/config/portraitSequence.ts to use this sequence.')


if __name__ == '__main__':
    main()
