import sharp from 'sharp';
import { rename, unlink } from 'fs/promises';
import path from 'path';

const assetsDir = './src/assets';

const images = [
  {
    src: 'lucid-origin_A_warm_intimate_artist_studio_bathed_in_soft_golden_afternoon_light._An_open_woo-0.jpg',
    out: 'hero-architecture.webp',
    width: 1920,
    height: 1080,
  },
  {
    src: 'lucid-origin_An_original_oil_painting_of_the_Sea_of_Galilee_Kinneret_at_golden_sunset._Expres-0.jpg',
    out: 'project-1.webp',
    width: 800,
    height: 600,
  },
  {
    src: 'lucid-origin_A_delicate_watercolor_painting_of_Jerusalem_s_Old_City_stone_alleyways._Loose_fl-0.jpg',
    out: 'project-3.webp',
    width: 800,
    height: 600,
  },
  {
    src: 'lucid-origin_A_middle-aged_male_Israeli_artist_standing_thoughtfully_in_his_art_studio_slight-0.jpg',
    out: 'about-artist.webp',
    width: 800,
    height: 1000,
  },
  {
    src: 'lucid-origin_Close-up_of_an_artist_s_hands_holding_a_palette_knife_and_mixing_rich_oil_paint_-0.jpg',
    out: 'blog-oil-painting.webp',
    width: 1200,
    height: 800,
  },
  {
    src: 'lucid-origin_Minimalist_abstract_painting_on_white_canvas._A_single_bold_gestural_brushstroke-0.jpg',
    out: 'blog-minimalism.webp',
    width: 1200,
    height: 800,
  },
  {
    src: 'lucid-origin_Artist_s_hand_sketching_a_pencil_portrait_on_paper_mid-process._Visible_grid_lin-0.jpg',
    out: 'blog-portrait-process.webp',
    width: 1200,
    height: 800,
  },
];

// Old placeholder files to delete
const toDelete = [
  'hero-architecture.jpg',
  'project-1.jpg',
  'project-2.jpg',
  'project-3.jpg',
  'blog-minimalist-living.jpg',
  'blog-sustainable-architecture.jpg',
  'blog-urban-planning.jpg',
];

for (const img of images) {
  const srcPath = path.join(assetsDir, img.src);
  const outPath = path.join(assetsDir, img.out);
  await sharp(srcPath)
    .resize(img.width, img.height, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(outPath);
  await unlink(srcPath);
  console.log(`✓ ${img.out} (${img.width}x${img.height})`);
}

for (const file of toDelete) {
  try {
    await unlink(path.join(assetsDir, file));
    console.log(`🗑  deleted ${file}`);
  } catch {
    // already gone
  }
}

console.log('\nDone!');
