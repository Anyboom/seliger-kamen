export function matchRoute(pattern: string, url: string): Record<string, string> | null {
    const patternParts = pattern.split('/');
    const urlParts = url.split('/');

    if (patternParts.length !== urlParts.length) return null;

    const params: Record<string, string> = {};

    for (let i = 0; i < patternParts.length; i++) {
        const patternPart = patternParts[i];
        const urlPart = urlParts[i];

        if (patternPart == undefined || urlPart == undefined) {
            return null;
        }

        if (patternPart.startsWith(':')) {
            const paramName = patternPart.slice(1);
            params[paramName] = urlPart;
        } else if (patternPart !== urlPart) {
            return null;
        }
    }

    return params;
}