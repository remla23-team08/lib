# lib

This repository contains the required library code that can be used to fetch the current version number of the project.

## Usage

```ts
// To get the full semver version number of the library.
VersionUtil.getVersion()

// To get the major version number
VersionUtil.getMajorVersion()

// To get the minor version number
VersionUtil.getMinorVersion()

// To get the patch version number
VersionUtil.getPatchVersion()
```

Naturally, there are also functions to upgrade each of the corresponding version components in the same class.