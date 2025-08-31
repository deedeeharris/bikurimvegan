# How to Edit Website Products (For Parents)

## 📝 **Simple Guide to Edit Your Website**

Your website now reads products from a simple CSV file that you can edit in Excel or Google Sheets!

### 🔍 **Where to Find the Product File**

The file is located at: `public/data/products.csv`

### 📊 **How to Edit Products**

1. **Open the file in Excel or Google Sheets**
   - Right-click on `products.csv` 
   - Choose "Open with Excel" or "Open with Google Sheets"

2. **Edit any information you want:**
   - **name_en**: Product name in English
   - **name_he**: Product name in Hebrew  
   - **description_en**: Product description in English
   - **description_he**: Product description in Hebrew
   - **image_path**: Path to product image (like `/images/products/my-photo.jpg`)
   - **category**: cheese, yogurt, spread, or butter
   - **calories, protein, fat, carbs**: Nutrition numbers
   - **ingredients_en**: English ingredients (separated by commas)
   - **ingredients_he**: Hebrew ingredients (separated by commas)

3. **Save the file**
   - Save as CSV format (not Excel format!)

4. **Refresh the website** 
   - The changes will appear immediately!

### 🖼️ **Adding New Product Images**

1. Put your image files in: `public/images/products/`
2. In the CSV, set `image_path` to: `/images/products/your-image-name.jpg`

### ➕ **Adding New Products**

1. Add a new row at the bottom
2. Fill in all the columns
3. Give it a unique `id` (like `new-cheese-2024`)
4. Save the file

### ❌ **Removing Products**

1. Delete the entire row
2. Save the file

### ⚠️ **Important Tips**

- Always save as CSV format, not Excel
- Use commas to separate ingredients
- Image paths should start with `/images/products/`
- Category must be: cheese, yogurt, spread, or butter
- Test your changes by refreshing the website

### 🆘 **If Something Goes Wrong**

If the website shows "Error loading products":
1. Check that the CSV file is saved properly
2. Make sure all rows have all columns filled
3. Check that image paths are correct
4. Contact your child for help! 😊

---

## 🎯 **Example CSV Row:**
```
almond-cheese-mild,Almond Cheese - Mild,גבינת שקדים - עדין,Our signature mild almond cheese,גבינת השקדים העדינה שלנו,/images/products/cheese.jpg,cheese,180,8,15,6,Organic Almonds, Sea Salt, Lemon Juice,שקדים אורגניים, מלח ים, מיץ לימון
```

**Happy editing!** 🎉