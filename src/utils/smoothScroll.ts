export const initSmoothScroll = () => {
  if (typeof window !== 'undefined') {
    return {
      create: () => {
        // Fallback smooth scroll implementation
        return {
          destroy: () => {},
          update: () => {},
          start: () => {},
          stop: () => {},
        };
      }
    };
  }
  return null;
};