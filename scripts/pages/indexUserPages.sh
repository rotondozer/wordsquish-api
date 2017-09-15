#!/bin/sh

API="http://localhost:4741"
URL_PATH="/pages"

curl "${API}${URL_PATH}/${USER_ID}/my_pages" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
