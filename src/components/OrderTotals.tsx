import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalProps = {
  order: OrderItem[];
  tip: number;
};

export default function OrderTotals({ order, tip }: orderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmaunt = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmaunt = useMemo(() => subTotalAmount + tipAmaunt, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl">Totales y propina:</h2>
        <p>
          Subtotal a pagar:{""}{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{""}{" "}
          <span className="font-bold">{formatCurrency(tipAmaunt)}</span>
        </p>
        <p>
          Total a pagar:{""} <span className="font-bold">{formatCurrency(totalAmaunt)}</span>
        </p>
      </div>
      <button></button>
    </>
  );
}
