export const convertSecToFormatedStringWithUnit = (timeMs: number): string => {
    if (!Number.isFinite(timeMs)) return '';
    let time = convertSecToFormatedTimeString(timeMs);
    if (time.length < 3) time += 's';
    console.log(timeMs, time);
    return time;
};

/** time in micro seconds*/
export const convertSecToFormatedTimeString = (timeMs: number, fullVersion = false): string => {
    if (!Number.isFinite(timeMs)) return '';
    const sec = timeMs / 1000;
    const min = Math.floor(sec / 60);
    const hour = Math.floor(min / 60);
    let m = (min % 60) + '';
    let s = (Math.round(sec) % 60) + '';
    if (s.length < 2 && (min > 0 || fullVersion)) s = '0' + s;
    if (fullVersion) return (hour > 0 ? hour + ':' : '00:') + (min > 0 ? m + ':' : '00:') + s;
    else return (hour > 0 ? hour + ':' : '') + (min > 0 ? m + ':' : '') + s;
};
