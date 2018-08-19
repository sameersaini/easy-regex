exports.regex = class {
    constructor(pattern, flags = '', escape = false) {
        this.pattern = pattern;
        this.flags = flags;
        this.escape = escape;
        if (escape) {
            this.pattern = escapeRegExp(this.pattern);
        }
        this.regExObj = new RegExp(this.pattern, this.flags);
    }
    test(str) {
        return this.regExObj.test(str);
    }
    exec(str) {
        const match = this.regExObj.exec(str);

        if (match) {
            match.nextIndex = this.regExObj.lastIndex;
            match.source = str;
        }
        return match;
    }
};

exports.escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
