# React Native Boilerplate

## Structure
* **Navigation** - React Navigation
* **State Management** - Redux
* **Side Effect Handling** - Redux Saga
* **Offline Support** - Redux Persist
* **Internet Connectivity Status** - React Native Offline
* **Network Call** - Axios
* **Styling** - React Native Responsive Screen
* **Multi Language** - React Native Localize


## Style Guide

### Core Ideology
WRITE SMALL, REUSABLE AND COMPOSABLE FUNCTIONS

### Code Structure
* No Code Duplication
* Put all export statements at the end of file
* Early exit instead of a long if block.
* Only arrow functions
* Prefer const. Requires that variable declarations use const instead of let and var if possible
* Document your code and use //TODO
* Make your names search‑able with meaningful distinctions avoid shortened names. For functions use long, descriptive names. A function name should be a verb or a verb phrase, and it needs to communicate its intention.

### Naming convention
#### Components
* Location - src/components/
* Naming - **ComponentName**.component.js

#### Utility functions 
* Location - src/Utils/
* Naming - **UtilityName**.util.js
* ***pure functions only***

#### Constants
* Location - src/Constants/
* Naming - **ConstantName**.constant.js

#### Configs
* Location - src/Configs/
* Naming - **ConfigName**.config.js

#### Scene
* Location - src/Scenes
* Naming - **SceneName**.scene.js

#### Services
* Location - src/Services
* Naming - **ServiceName**.service.js

#### Api
* Location - src/Api
* Private Apis - private.api.js `auth required`
* Public Apis - public.api.js `auth not required`

### Technical decisions
