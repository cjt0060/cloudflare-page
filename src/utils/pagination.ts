export const DEFAULT_PAGE_SIZE = 10;

// Paginate an array of items
export interface PaginationResult<T> {
  data: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function paginate<T>(items: T[], page: number = 1, pageSize: number = 10): PaginationResult<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    data: items.slice(start, end),
    currentPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

// Generate static paths for pagination
export function getPaginationPaths<T>(
  items: T[],
  pageSize: number = 10,
  baseUrl: string = "",
): Array<{ params: { page?: string }; props: { page: number } }> {
  const totalPages = Math.ceil(items.length / pageSize);
  const paths = [];

  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: { page: i === 1 ? undefined : String(i) },
      props: { page: i },
    });
  }

  return paths;
}
