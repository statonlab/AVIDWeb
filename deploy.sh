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
  && curl https://forge.laravel.com/servers/369492/sites/1026800/deploy/http?token=1WDJChriPvKWxriAhhwg3OU1hFIs5w47UhKg2GG7 \
  && git push \
  && echo "Deployed successfully"
