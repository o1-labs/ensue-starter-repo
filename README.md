# PU Hello World

Hello world starter for PU Agents using Saffron DB.

## Setup

### Prerequisites

- Node.js 18+
- Docker
- GitHub Personal Access Token with `read:packages` scope

### Authentication Setup

#### 1. Create GitHub Personal Access Token

1. Go to GitHub Settings ’ Developer settings ’ Personal access tokens ’ Tokens (classic)
2. Generate new token with `read:packages` scope
3. Copy the token

#### 2. Local NPM Authentication

Set up your local `.npmrc` (already configured in this repo):

```bash
export NPM_TOKEN=your_github_token_here
```

#### 3. Docker Authentication

Login to GitHub Container Registry:

```bash
echo your_github_token_here | docker login ghcr.io -u your_github_username --password-stdin
```

## Development

- `npm run dev` - Run in development mode with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run the built application

#### 4. CI/CD Setup

The CI workflow will automatically run tests on push/PR to main branch.

Add `SAFFRON_TOKEN` as a repository secret in GitHub:

1. Go to repository Settings ’ Secrets and variables ’ Actions
2. Click "New repository secret"
3. Name: `SAFFRON_TOKEN`
4. Value: your GitHub Personal Access Token
5. Click "Add secret"
