# Github Org View

Get an overview of an organization's repositories all in one place. Just
issues for now, but on the roadmap are PRs, licence, Code of Conduct etc.

## React's richer features

- [Suspense](https://github.com/robphoenix/gh-org-view/blob/master/src/App.js#L56) & [Lazy](https://github.com/robphoenix/gh-org-view/blob/master/src/App.js#L16) 
- [Context](src/context/issues-context.js) 
- [Apollo React hooks](https://github.com/robphoenix/gh-org-view/blob/master/src/components/Repos.js#L15), with [context](https://github.com/robphoenix/gh-org-view/blob/master/src/context/index.js#L8)
- Form handling, validation & state managment with a custom hook & [useReducer](src/hooks/useForm.js)
- Theming with [design tokens](src/theme.js) & [CSS-in-JS](https://github.com/robphoenix/gh-org-view/blob/master/src/components/Heading.js#L17)
