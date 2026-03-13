import sharp from 'sharp';
import { unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');

const mappings = [
  {
    src: 'lucid-origin_Judean_desert_at_golden_hour_dramatic_limestone_cliffs_and_dry_riverbeds_warm_oc-0.jpg',
    dest: 'exhibition-desert-beauty.webp',
  },
  {
    src: 'lucid-origin_Israeli_wildflower_fields_in_spring_bloom_red_anemones_and_yellow_mustard_coveri-0.jpg',
    dest: 'exhibition-colors-of-land.webp',
  },
  {
    src: 'lucid-origin_Mediterranean_coastline_of_northern_Israel_turquoise_sea_meeting_rocky_shore_oli-0.jpg',
    dest: 'exhibition-israeli-landscape.webp',
  },
  {
    src: 'lucid-origin_Elderly_Jewish_man_in_quiet_contemplation_warm_candlelight_in_a_Jerusalem_stone_-0.jpg',
    dest: 'exhibition-inner-gaze.webp',
  },
  {
    src: 'lucid-origin_Tel_Aviv_Bauhaus_white_buildings_at_sunset_geometric_architectural_lines_long_sh-0.jpg',
    dest: 'exhibition-landscape-lines.webp',
  },
  {
    src: 'lucid-origin_Male_artist_in_Jerusalem_stone_studio_surrounded_by_canvases_and_brushes_natural-0.jpg',
    dest: 'exhibition-first-person-art.webp',
  },
];

for (const { src, dest } of mappings) {
  const srcPath = path.join(imagesDir, src);
  const destPath = path.join(imagesDir, dest);

  await sharp(srcPath)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(destPath);

  await unlink(srcPath);
  console.log(`✓ ${src} → ${dest}`);
}

console.log('\nDone! All images optimized.');
