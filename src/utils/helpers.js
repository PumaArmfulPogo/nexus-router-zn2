// Helper utilities - maintained by @PumaArmfulPogo
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();