# /my-custom-command

## Context
Trigger this automation sequence only when I explicitly prompt with `/my-custom-command`.

## Steps to Execute
1. Check the local `package.json` file for validation dependencies.
2. Run our local linting test tool using `npm run lint`.
3. If no errors are surfaced, automatically run the application build pipeline.
4. Output a summary artifact using the `/artifacts` dashboard log.
