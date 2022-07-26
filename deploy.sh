REMOTE=https://git.cloudmanager.adobe.com/uoldiveo/cryptobike/
BRANCH=develop

# if there is no adobe remote, add it
if [ -z "$(git remote | grep -i adobe)" ]; then
  git remote add adobe $REMOTE
fi

# if there is no develop branch, create it
if [ -z "$(git branch | grep -i develop)" ]; then
  git branch -f develop origin/develop
fi

# checkout to the develop branch
git checkout $BRANCH
git pull
git push adobe $BRANCH --force

# go back to the last branch
git checkout -
