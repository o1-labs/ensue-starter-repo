# PU Hello World

Hello world starter for PU Agents using Saffron DB.

## Setup

### Prerequisites

- Node.js 22
- Docker
- GitHub Personal Access Token with `read:packages` scope
- A `project-untitled` token (issued by o1 Labs) for the docker image.

### Clone
```bash
git clone git@github.com:o1-labs/pu-starter-repo.git
cd pu-starter-repo
```

### Authentication Setup

#### 1. Use a GitHub Personal Access Token

##### Use the Issued Token
1. If you have a `project-untitled` token issued by o1 labs you can just set it to the `PROJECT_UNTITLED_NPM` env var
```bash
# project untitled token issued by o1 labs
export PROJECT_UNTITLED_NPM=ghp_************
```

##### [Create Your Own](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-tokens-classic)
1. Go to GitHub Settings � Developer settings � Personal access tokens � Tokens (classic)
2. Generate new token with `read:packages` scope
3. Copy the token
4. Set the token under the env var `PROJECT_UNTITLED_NPM`.
```bash
# classic gh token with package:read set
export PROJECT_UNTITLED_NPM=ghp_************
```

#### 2. NPM Authentication

Assuming you have set the `PROJECT_UNTITLED_NPM` env var, the stock .npmrc file should allow you to download the npm packages
from the gh npm registry.

```bash
npm install
```

#### 3. Docker Authentication

Assuming you have been issued a token for `project-untitled` from o1-labs, set this uner the env var `PROJECT_UNTITLED_DOCKER`.
This will allow you to set up the gh container registry config

```bash
export PROJECT_UNTITLED_DOCKER=ghp_************ # o1 issued access token for docker registry access
echo $PROJECT_UNTITLED_DOCKER | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
```

#### 4 Pull the image and start the server

```bash
docker pull ghcr.io/o1-labs/project-untitled:<version>
docker run --rm -it \
  -p 8000:8000 \
  -v $(pwd)/data:/data \
  -v $(pwd)/srs:/srs \
  ghcr.io/o1-labs/project-untitled:6246650 \
  saffron-db \
  --db-path /data/db
```

#### 5 Development

- `npm run dev` - Run in development mode with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run the built application

#### 6. CI/CD Setup

The CI workflow will automatically run tests on push/PR to main branch.

Add `PROJECT_UNTITLED_NPM` and `PROJECT_UNTITLED_DOCKER` as repository secrets in GitHub.
For example, to add the `PROJECT_UNTITLED_NPM` secret:

1. Go to repository Settings � Secrets and variables � Actions
2. Click "New repository secret"
3. Name: `PROJECT_UNTITLED_NPM`
4. Value: your GitHub Personal Access Token
5. Click "Add secret"
