import React, { useState, useContext, useEffect, useReducer } from "react";

import { PageContainer } from "styles/theme";
import { TableContainer, Table } from "./styles";
import { Context } from "context/Context";
import { request } from "api/axiosRequest";
import { Empty } from "./Empty";
import { Filters } from "./Filters";
import { filtersReducer } from "./Filters/filtersReducer";
import { initialFilters } from "./Filters/initialFilters";
import { PageSizeDropdown } from "layout/PageSizeDropdown";
import { Paginator } from "layout/Paginator";
export const InvoicesPage = () => {
  const { token } = useContext(Context);
  const [filters, setFilters] = useReducer(filtersReducer, initialFilters);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    setError(false);
    const getInvoices = async () => {
      setLoading(true);
      const response = await request({
        method: "GET",
        url: "/invoices",
        params: { ...filters },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.error) setError(response.error);
      if (response.data) {
        setInvoices(response.data?.result);
        setPagination(response.data?.pagination);
      }
    };
    if (!loading) getInvoices();
    setLoading(false);
  }, [token, loading, filters]);

  const handlePageSize = (page_size) => {
    setFilters({ type: "page_size", payload: { page_size } });
  };

  const handlePagination = (page) => {
    setFilters({ type: "page", payload: { page } });
  };

  return (
    <PageContainer>
      <TableContainer>
        <Filters setFilters={setFilters} />
        {invoices.length === 0 || error ? (
          <Empty />
        ) : (
          <>
            <PageSizeDropdown
              pagination={pagination}
              handlePageSize={handlePageSize}
            />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Vendedor</th>
                  <th>Fecha</th>
                  <th>Total</th>
                  <th>Pago total</th>
                  <th>Credito total</th>
                  <th>Banco</th>
                  <th>Fecha de vencimiento</th>
                  <th>Fecha de pago</th>
                  <th>Moneda</th>
                </tr>
              </thead>
              <tbody>
                {invoices.length > 0 &&
                  invoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <th scope="row">{invoice.invoiceNumber}</th>
                      <td>{invoice.originId}</td>
                      <td>{invoice.vendorId}</td>
                      <td>{invoice.invoiceDate}</td>
                      <td>{invoice.invoiceTotal}</td>
                      <td>{invoice.paymentTotal}</td>
                      <td>{invoice.creditTotal}</td>
                      <td>{invoice.bankId}</td>
                      <td>{invoice.invoiceDueDate}</td>
                      <td>{invoice.paymentDate}</td>
                      <td>{invoice.currency}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <Paginator
              pagination={pagination}
              handlePagination={handlePagination}
            />
          </>
        )}
      </TableContainer>
    </PageContainer>
  );
};
