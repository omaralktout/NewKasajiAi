export function asset(path: string) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\.\//, '').replace(/^\/+/, '');

  return `${cleanBase}${cleanPath}`;
}
