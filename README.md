# Packages For Consideration

https://www.npmjs.com/package/eslint-plugin-react-hooks

# Tech Debt

Decide on authentication, email and password should not be it.
implement linter, eslint?
move screens in folder
2 tab instead of 4, no semi-colin, single quotes
re-authentication if auth has expired. User should not have to log back in
next message should probably be pulled from async storage when main page is opened -> useEffect with []
Splash Screen? https://docs.expo.dev/versions/latest/sdk/splash-screen/
Asset Caching https://docs.expo.dev/archive/classic-updates/preloading-and-caching-assets/#pre-loading-and-caching-assets
Fading text needs some help
Error handling for async storage. Somehow display pop-up telling user to restart app or try again later.

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

Option 3: Firebase by Google
Pros: Somewhat plug and play

Option 4: Auth0
Pros: 

# Authentication Decision

I went with firebase. It is made by google and has a good free tier. There are lots of tutorials on how to set it up and the docs are decent. They also have options to connect just about any 3rd party auth. For now I went with username and email but we should setup something else. Maybe phone number (BeReal uses phone # and no password, just 2FA). 

I followed these guides https://docs.expo.dev/guides/using-firebase/, https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/
used "npx expo install firebase"
added the following packages: 
"firebase": "^9.17.1"

# Showing 1 message a day

Option 1: Async storage
On render async storage is checked for the last time a message was accessed. If it was accessed in the last 24 hours a request is made for the top message in the users 'revealed' stack and displays that. If not a 'show message' button is displayed.
When show message is pressed an api call for the users next message in the message que is sent. The message is shown and the time is put into async storage.
Pros: fast
Cons: less secure

Options 2: Keep everything server-side in a database
Pro: Don't have to deal with local storage
Con: Slower unless loaded on boot

ON ASYNC-STORAGE BRANCH
npx expo install @react-native-async-storage/async-storage