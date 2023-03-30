#!/bin/bash
git checkout master
git pull
npm run production \
  && git add -A \
  && git commit -m "Production build" \
  && git push \
  && git checkout live \
  && git merge master \
  && git push \
  && git checkout master \
  && git push \
  && echo "Deployed successfully"
