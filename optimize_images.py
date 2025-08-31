#!/usr/bin/env python3
"""
Image optimization script for Bikurim project.
Compresses large product images to improve website performance.
"""

import os
from PIL import Image
import shutil

def optimize_image(input_path, output_path, max_width=800, quality=85):
    """
    Optimize an image by resizing and compressing it.
    
    Args:
        input_path: Path to the input image
        output_path: Path to save the optimized image
        max_width: Maximum width in pixels
        quality: JPEG quality (1-100)
    """
    try:
        # Open the image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for JPEG)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Calculate new dimensions
            width, height = img.size
            if width > max_width:
                ratio = max_width / width
                new_width = max_width
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.LANCZOS)
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path) / 1024 / 1024  # MB
            new_size = os.path.getsize(output_path) / 1024 / 1024  # MB
            
            print(f"✅ {os.path.basename(input_path)}: {original_size:.2f}MB → {new_size:.2f}MB ({new_size/original_size*100:.1f}%)")
            
    except Exception as e:
        print(f"❌ Error optimizing {input_path}: {e}")

def main():
    """Main function to optimize all product images."""
    images_dir = "public/images/products"
    
    if not os.path.exists(images_dir):
        print(f"❌ Directory {images_dir} not found!")
        return
    
    print("🔧 Optimizing product images...")
    print("=" * 50)
    
    # Create backup directory
    backup_dir = "public/images/products_backup"
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
        print(f"📁 Created backup directory: {backup_dir}")
    
    # Process each image
    for filename in os.listdir(images_dir):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(images_dir, filename)
            backup_path = os.path.join(backup_dir, filename)
            
            # Create backup
            shutil.copy2(input_path, backup_path)
            
            # Optimize image
            optimize_image(input_path, input_path, max_width=800, quality=85)
    
    print("=" * 50)
    print("✅ Image optimization complete!")
    print(f"📁 Original images backed up to: {backup_dir}")

if __name__ == "__main__":
    main()