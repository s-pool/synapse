git config http.postBuffer 52428000
git remote add gitmask https://git.gitmask.com/v1/gh/s-pool/synapse
git add .
git commit -am "update"
git push gitmask master:master
