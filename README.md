# Packages For Consideration

https://www.npmjs.com/package/eslint-plugin-react-hooks

# Setup Explanation

https://www.reactnative.express/javascript

## JavaScript engines

Our JavaScript code runs in a JavaScript "engine", or interpreter, on mobile devices. On iOS, our code runs in JSC, the same open source engine used by the Safari web browser. On Android, our code can either use JSC, or a new engine from Facebook called Hermes.

Each JavaScript engine, and each version of each engine, supports slightly different JavaScript language features. The JSC used by iOS 12 may not support the exact same feature set as the one in iOS 13 or iOS 14, and it will almost certainly be a little different than Hermes.

We don't want to have to think about this complexity when writing an app - thats where Babel comes in.

## Babel

Babel is a highly configurable compiler that lets us use newer JavaScript language features (and extensions, like JSX), compiling "down" into older versions of JavaScript that are supported on a wider range of engines. This essentially smooths out any differences between JSC versions, or between JSC and Hermes, so we don't have to think about those differences when writing our app.

When we initialize a new React Native app, a Babel configuration file, babel.config.js, is generated alongside our project. This file configures Babel with a React Native preset, so our JavaScript code should "just work" regardless of which engine it runs on.

# Memo

https://www.reactnative.express/react/performance/memo

This is something we should take advantage of to limit rerenders

# UseReducer

This youtube video helped me understand useReducer. Its basically useState on steroids.
https://youtu.be/RZPAQV7JvNU

# Authentication Research

Option 1: React Navigation Authentication Flow
https://reactnavigation.org/docs/auth-flow/

Pros: We are already using React Navigation so integration is straight forward
      No external dependencies
Cons: Need to Manually build authentication on server side

Option 2: JWT?
Not sure what this is yet

Option 3: Firebase

