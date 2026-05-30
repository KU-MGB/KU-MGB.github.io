#!/bin/bash

# ==========================================
# Terminal Colors & Formatting
# ==========================================
RED='\033[1;31m'
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;34m'
CYAN='\033[1;36m'
NC='\033[0m'

REPO="KU-MGB/KU-MGB.github.io"

echo -e "${BLUE}==========================================${NC}"
echo -e "${CYAN}  MGB Lab Website — ${REPO}${NC}"
echo -e "${BLUE}==========================================${NC}\n"

# ==========================================
# 1. Check if git initialized
# ==========================================
if [ ! -d ".git" ]; then
    echo -e "${RED}Error: Git not initialized in this directory.${NC}"
    exit 1
fi

# ==========================================
# 2. Local Build Check (Optional but recommended)
# ==========================================
echo -e "${BLUE}Running a quick production build check...${NC}"
npm run build > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo -e "\n${RED}❌ Build failed! Fix errors before pushing.${NC}"
    echo -e "${YELLOW}Run 'npm run build' manually to see errors.${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Build check passed.${NC}\n"
fi

# ==========================================
# 3. Status & Staging
# ==========================================
echo -e "${BLUE}Checking changes...${NC}"
git status -s

if git diff --quiet && git diff --cached --quiet; then
    echo -e "${GREEN}Nothing to commit. Website is up to date.${NC}"
    exit 0
fi

current_branch=$(git branch --show-current)
echo -e "\n${CYAN}Branch: ${NC}${current_branch}"

git add -A

# ==========================================
# 4. Commit Message
# ==========================================
echo -e "\n${CYAN}Enter update description:${NC}"
read -p "> " msg

if [ -z "$msg" ]; then
    echo -e "${RED}Description cannot be empty. Aborting.${NC}"
    exit 1
fi

timestamp=$(date '+%Y-%m-%d %H:%M:%S')
full_msg="[$timestamp] Update: $msg"

# ==========================================
# 5. Push to GitHub
# ==========================================
echo -e "\n${BLUE}Committing and pushing to GitHub...${NC}"
git commit -m "$full_msg" --quiet
git push origin "$current_branch"

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}🚀 Success! Your changes are live on GitHub.${NC}"
    echo -e "${YELLOW}Website update will finish in 3-5 minutes.${NC}"
else
    echo -e "\n${RED}❌ Push failed. Check your connection or GitHub permissions.${NC}"
    exit 1
fi

echo -e "${BLUE}==========================================${NC}"
