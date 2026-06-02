Snyk integration (optional):
1. Create a Snyk account and get an API token.
2. Use Snyk CLI in CI:
   - npm install -g snyk
   - snyk auth $SNYK_TOKEN
   - snyk test --docker <image>
3. Fail pipeline on critical vulnerabilities.
