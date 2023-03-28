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
  && curl https://forge.laravel.com/servers/369492/sites/1026800/deploy/http?token=JRuNDy3xyuOtcyt7x2gVlwX9xuKsyZJJ44owXjhV \
  && git push \
  && echo "Deployed successfully"
