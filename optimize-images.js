#!/usr/bin/env node
/**
 * Image optimization script for Bikurim project using Sharp
 * Compresses large product images to improve website performance.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(inputPath, outputPath, maxWidth = 800, quality = 85) {
    try {
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size / 1024 / 1024; // MB

        await sharp(inputPath)
            .resize(maxWidth, null, { 
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({ 
                quality, 
                progressive: true,
                mozjpeg: true 
            })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size / 1024 / 1024; // MB
        const reduction = ((originalSize - newSize) / originalSize * 100);

        console.log(`✅ ${path.basename(inputPath)}: ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB (-${reduction.toFixed(1)}%)`);

    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    }
}

async function main() {
    const imagesDir = path.join(__dirname, 'public', 'images', 'products');
    const backupDir = path.join(__dirname, 'public', 'images', 'products_backup');

    if (!fs.existsSync(imagesDir)) {
        console.error(`❌ Directory ${imagesDir} not found!`);
        return;
    }

    console.log('🔧 Optimizing product images with Sharp...');
    console.log('=' .repeat(60));

    // Create backup directory
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
        console.log(`📁 Created backup directory: ${backupDir}`);
    }

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    if (imageFiles.length === 0) {
        console.log('❌ No image files found to optimize');
        return;
    }

    for (const filename of imageFiles) {
        const inputPath = path.join(imagesDir, filename);
        const backupPath = path.join(backupDir, filename);
        const tempPath = path.join(imagesDir, `temp_${filename}`);

        try {
            // Create backup
            fs.copyFileSync(inputPath, backupPath);

            // Optimize to temporary file
            await optimizeImage(inputPath, tempPath, 800, 85);

            // Replace original with optimized
            fs.renameSync(tempPath, inputPath);

        } catch (error) {
            console.error(`❌ Error processing ${filename}:`, error.message);
            
            // Clean up temp file if it exists
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
        }
    }

    console.log('=' .repeat(60));
    console.log('✅ Image optimization complete!');
    console.log(`📁 Original images backed up to: ${backupDir}`);
    console.log('');
    console.log('📊 Benefits:');
    console.log('   • Faster page loading times');
    console.log('   • Reduced bandwidth usage');
    console.log('   • Better user experience');
    console.log('   • Improved mobile performance');
}

// Run the main function if this file is executed directly
main().catch(console.error);

export { optimizeImage };