import os

def generate_file_list():
    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    return files

def update_readme(file_list):
    with open('README.md', 'r') as readme_file:
        readme_content = readme_file.read()

    placeholder = '<!-- tree-placeholder -->'
    updated_list = '\n'.join(f'- {file}' for file in file_list)

    updated_content = readme_content.replace(placeholder, updated_list)

    with open('README.md', 'w') as readme_file:
        readme_file.write(updated_content)

if __name__ == "__main__":
    files = generate_file_list()
    update_readme(files)
