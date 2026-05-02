export function matchRoute(pattern: string, url: string) {
    const patternParts = pattern.split('/');
    const urlParts = url.split('/');

    if (patternParts.length !== urlParts.length) return null;

    const params = {};

    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            const paramName = patternParts[i].substring(1);
            params[paramName] = urlParts[i];
        } else if (patternParts[i] !== urlParts[i]) {
            return null;
        }
    }

    return params;
}