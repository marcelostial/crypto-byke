FILE_URL=https://raw.githubusercontent.com/ldaros/aem-cleanslate/master/generator.tar.gz
FILE_NAME=generator.tar.gz


# Download the file if it doesn't exist
if [ ! -f $FILE_NAME ]; then
  # if under gitbash, use powershell
  if [ -z "$(uname -a | grep -i MINGW64)" ]; then
    wget $FILE_URL
  else
    powershell -Command "wget "$FILE_URL" -outfile "$FILE_NAME""
  fi
fi

# if the file exists, extract it
if [ -f $FILE_NAME ]; then
  tar -xzf $FILE_NAME
fi

# clean up
rm $FILE_NAME
