import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";

import {
  FiltersContainer,
  Input,
  DateRangeContainer,
  DateButtonsContainer,
  DateRangeButton,
} from "./styles";

export const Filters = ({ setFilters }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputDateValue, setInputDateValue] = useState("");

  const handleVendorField = (field) => {
    const value = field.target?.value;
    if (value) setFilters({ type: "vendor", payload: { vendorId: value } });
    else setFilters({ type: "remove", payload: { keys: ["vendor_id"] } });
  };

  const handleGlobalField = (field) => {
    const value = field.target?.value;
    if (value) setFilters({ type: "global", payload: { value } });
    else setFilters({ type: "remove", payload: { keys: ["global"] } });
  };

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateRange = (selection) => {
    const { startDate, endDate } = selection?.selection;
    setInputDateValue(
      `${startDate.toLocaleDateString("es-ES")} - ${endDate.toLocaleDateString(
        "es-ES"
      )}`
    );
    setRange({
      startDate,
      endDate,
      key: "selection",
    });
  };

  const applyCalendar = () => {
    const { startDate, endDate } = range;
    if (startDate && endDate)
      setFilters({ type: "date", payload: { startDate, endDate } });
    else
      setFilters({
        type: "remove",
        payload: { keys: ["start_date", "end_date"] },
      });
    setShowCalendar(false);
  };

  const clearCalendar = () => {
    setRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
    setInputDateValue("");
    setFilters({
      type: "remove",
      payload: { keys: ["start_date", "end_date"] },
    });
    setShowCalendar(false);
  };

  return (
    <FiltersContainer>
      {showCalendar ? (
        <DateRangeContainer>
          <DateRange
            ranges={[range]}
            onChange={handleDateRange}
            dragSelectionEnabled={false}
            locale={es}
          />
          <DateButtonsContainer>
            <DateRangeButton color="danger" onClick={clearCalendar}>
              Limpiar
            </DateRangeButton>
            <DateRangeButton color="primary" onClick={applyCalendar}>
              Aplicar
            </DateRangeButton>
          </DateButtonsContainer>
        </DateRangeContainer>
      ) : (
        <Input
          placeholder="Fecha de factura"
          defaultValue={inputDateValue}
          onFocus={() => setShowCalendar(true)}
        />
      )}
      <Input onChange={handleVendorField} placeholder="Vendedor" />
      <Input onChange={handleGlobalField} placeholder="Buscador global" />
    </FiltersContainer>
  );
};
