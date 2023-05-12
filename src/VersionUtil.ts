import lib from '../package.json'

// VersionUtil class used to ask for the version of the current project
// and can/may be used within an action workflow to update the version of the project
// based on the current version and the type of release (major, minor, patch)

export class VersionUtil {
    public static getMajorVersion(): string {
        return lib.version.split('.')[0];
    }

    public static getMinorVersion(): string {
        return lib.version.split('.')[1];
    }

    public static getPatchVersion(): string {
        return lib.version.split('.')[2];
    }

    public static getVersion(): string {
        return lib.version;
    }
}
