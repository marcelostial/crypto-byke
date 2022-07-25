REMOTE=https://git.cloudmanager.adobe.com/uoldiveo/cryptobike/
BRANCH=develop

# if there is no adobe remote, add it
if [ -z "$(git remote | grep -i adobe)" ]; then
  git remote add adobe $REMOTE
fi

# checkout to the develop branch
git checkout origin/$BRANCH
git pull
git push adobe $BRANCH

# go back to the last branch
git checkout -