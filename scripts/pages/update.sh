#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pages"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "page": {
      "title": "'"${TITLE}"'",
      "sections": {
        "heading": "'"${HEADING}"'",
        "body": "'"${BODY}"'",
        "footer": "'"${FOOTER}"'"
      }
    }
  }'

echo


# update will 'update' whatever field is not included with empty value
