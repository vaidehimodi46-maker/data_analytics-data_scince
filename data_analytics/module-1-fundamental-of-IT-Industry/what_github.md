# What is GitHub?

    GitHub is a cloud-based platform for hosting Git repositories, collaboration, version control, and project management. It lets teams and individuals store code, track changes, review contributions, and deploy projects.

---

# Quick Git & GitHub setup (Windows / macOS / Linux)

    1. Install Git

    - Windows: download and run installer from https://git-scm.com/
    - macOS: brew install git  # or install Xcode command line tools
    - Linux (Ubuntu): sudo apt update && sudo apt install git -y

    2. Configure Git (global)

    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    git config --global core.editor "code --wait"   # optional
    git config --global init.defaultBranch main
    ```

    3. Create a GitHub account

    - Visit https://github.com and sign up.

    4. SSH key setup (recommended)

    ```bash
    # generate key (if not present)
    ssh-keygen -t ed25519 -C "you@example.com"
    # start agent and add key
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
    # copy public key to clipboard and add to GitHub > Settings > SSH and GPG keys
    cat ~/.ssh/id_ed25519.pub
    ```

    Test SSH connection:

    ```bash
    ssh -T git@github.com
    ```

    5. Create a repository on GitHub (web)

    - Click New > Repository, give name, choose public/private, add README if desired.

    6. Common local workflow examples

    - Clone an existing repo

    ```bash
    git clone git@github.com:USERNAME/REPO.git
    cd REPO
    ```

    - Initialize a new local repo and push

    ```bash
    mkdir myproject && cd myproject
    git init
    echo "# My Project" > README.md
    git add README.md
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin git@github.com:USERNAME/myproject.git
    git push -u origin main
    ```

    - Make changes and push

    ```bash
    git checkout -b feature/new-feature
    # edit files
    git add .
    git commit -m "Add new feature"
    git push -u origin feature/new-feature
    ```

    7. Pull requests (PR)

    - On GitHub web, open a Pull Request from your branch into main. Use reviewers and describe changes. After review, merge.

    8. Syncing with remote

    ```bash
    # fetch and merge main changes
    git checkout main
    git fetch origin
    git pull origin main
    # rebase feature branch onto updated main (optional)
    git checkout feature/new-feature
    git rebase main
    git push --force-with-lease
    ```

    9. Branching strategy (simple)

    - main: production-ready
    - develop or feature branches: work in progress
    - use PRs to merge into main

    10. GitHub features to explore

    - Issues and Projects (task tracking)
    - Pull Requests and code review
    - Actions (CI/CD)
    - Pages (static site hosting)
    - Packages and Releases

    ---

    References: https://docs.github.com/, https://git-scm.com/doc

    ```