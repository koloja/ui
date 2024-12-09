const darken = (hex: string, percentage: number): string => {
    hex = hex.replace('#', '');
    let rgb = ['r', 'g', 'b'].map((_, i) => Math.max(0, parseInt(hex.slice(i * 2, i * 2 + 2), 16) - (parseInt(hex.slice(i * 2, i * 2 + 2), 16) * (percentage / 100))));
    return `#${rgb.map(c => Math.round(c).toString(16).padStart(2, '0')).join('')}`;
}

export default darken;