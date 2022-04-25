
export const filtersReducer = (filters, action) => {
  switch (action.type) {
    case 'page':
      return { ...filters, page: action.payload.page };
    case 'page_size':
      return { ...filters, page: 1, pageSize: action.payload.page_size };
    case 'vendor':
      return { ...filters, page: 1, vendor_id: action.payload.vendorId };
    case 'global':
      return { ...filters, page: 1, global: action.payload.value };
    case 'date':
      return { ...filters, page: 1, start_date: action.payload.startDate, end_date: action.payload.endDate };
    case 'remove':
      action.payload.keys && action.payload.keys.map((key) => (delete filters[key]));
      return { ...filters };
    default:
      return filters;
  }
}