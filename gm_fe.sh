#!/usr/bin/env bash
#
# giant_markdown.sh
#
# Usage:
#   sh giant_markdown.sh . 
#   sh giant_markdown.sh path/to/codebase
#
# Description:
#   Creates a single Markdown file (GiantCodebase.md) that contains the contents of all
#   frontend code files in the provided directory (which should be a Git repository).
#   Only includes .ts, .tsx, .js, .jsx, .css, and .html files.

# Use the first argument as the target directory, default to current directory if not provided.
TARGET_DIR="${1:-.}"

# Check if the directory exists.
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' does not exist."
    exit 1
fi

# Change to the target directory.
cd "$TARGET_DIR" || { echo "Error: Unable to change directory to '$TARGET_DIR'."; exit 1; }

# Ensure the directory is a git repository.
if [ ! -d ".git" ]; then
    echo "Error: '$TARGET_DIR' is not a git repository."
    exit 1
fi

OUTPUT_FILE="GiantCodebase.md"

# Start fresh: create/overwrite the output file.
echo "# Giant Codebase" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Use git ls-files to list tracked files (respects .gitignore).
for FILE in $(git ls-files "*.ts" "*.tsx" "*.js" "*.jsx" "*.css" "*.html"); do
    # Skip files with 'venv', '.env' or 'nohup.out' anywhere in their path.
    if [[ "$FILE" == *"venv"* ]] || [[ "$FILE" == *".env"* ]] || [[ "$FILE" == *"nohup.out"* ]] || [[ "$FILE" == *"package.json"* ]] || [[ "$FILE" == *"package-lock.json"* ]]; then
        continue
    fi
    
    # Add the file name as a section heading.
    echo "## $FILE" >> "$OUTPUT_FILE"
    echo '```' >> "$OUTPUT_FILE"
    
    # Append the file contents.
    cat "$FILE" >> "$OUTPUT_FILE"
    
    echo '```' >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
done

echo "Done! Created $OUTPUT_FILE containing frontend code in $(pwd)."
