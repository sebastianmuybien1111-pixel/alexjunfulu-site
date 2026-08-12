"use client";

export default function PrintButton() {
  return (
    <button className="button button--secondary print-control" onClick={() => window.print()} type="button">
      Print or save as PDF
    </button>
  );
}
