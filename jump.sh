function jump {
  local JUMP_URL=${JUMP_URL:-"http://localhost:8000"}
  xdg-open "$JUMP_URL"?$(python -c "import sys, urllib as ul; print ul.quote_plus(sys.argv[1])" "$*")
}

