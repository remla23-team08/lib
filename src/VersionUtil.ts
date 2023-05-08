// VersionUtil class used to ask for the version of the current project
// and used within an action workflow to update the version of the project
// based on the current version and the type of release (major, minor, patch)

export class VersionUtil {
    private major: number;
    private minor: number;
    private patch: number;
    private version: string;

    constructor(version: string) {
       const [major, minor, patch] = version.split('.').map(str => parseInt(str));
       this.major = major;
       this.minor = minor;
       this.patch = patch;
       this.version = version;
    }

    // Optional to use other constructor
    // constructor(major: number, minor: number, patch: number) {
    //     this.major = major;
    //     this.minor = minor;
    //     this.patch = patch;
    //     this.version = `${major}.${minor}.${patch}`;
    // }

    public getMajorVersion(): number {
        return this.major;
    }

    public getMinorVersion(): number {
        return this.minor;
    }

    public getPatchVersion(): number {
        return this.patch;
    }

    public getVersion(): string {
        return this.version;
    }

    public bumpMajor(): void {
        this.major++;
        this.minor = 0;
        this.patch = 0;
        this.version = `${this.major}.${this.minor}.${this.patch}`;
    }

    public bumpMinor(): void {
        this.minor++;
        this.patch = 0;
        this.version = `${this.major}.${this.minor}.${this.patch}`;
    }

    public bumpPatch(): void {
        this.patch++;
        this.version = `${this.major}.${this.minor}.${this.patch}`;
    }
}