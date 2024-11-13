#!/bin/bash

# Run prerender command for the recipe-website project
echo "Running prerender..."
ng run recipe-website:prerender

# Deploy the build to GitHub Pages
echo "Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/recipe-website/browser --repo=https://github.com/XicoCorreia/RecipeWebsite.git

echo "Deployment completed!"