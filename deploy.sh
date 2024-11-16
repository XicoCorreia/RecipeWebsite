#!/bin/bash

echo "Deleting previous dist"
rm -rf dist

# Run prerender command for the recipe-website project
echo "Running prerender..."
ng run recipe-website:prerender

# Create CNAME file inside dist/recipe-website/browser directory with "nelasrecipes.com"
echo "Creating CNAME file..."
echo "nelasrecipes.com" > dist/recipe-website/browser/CNAME

# Deploy the build to GitHub Pages
echo "Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/recipe-website/browser --repo=https://github.com/XicoCorreia/RecipeWebsite.git

echo "Deployment completed!"