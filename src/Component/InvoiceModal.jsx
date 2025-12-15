import React from "react";

const InvoiceModal = ({onClose }) => {
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoBox title="Bill To">
            <p className="font-semibold">Jean Paul Trujillo</p>
            <p className="text-sm">Miami, FL</p>
          </InfoBox>

          <InfoBox title="Application">
            <Row label="App ID" value="985170" />
            <Row label="Status" value="Active" />
          </InfoBox>

          <InfoBox title="Business">
            <Row label="Gross Income" value="$120,000" />
            <Row label="Pay Frequency" value="Monthly" />
          </InfoBox>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="border px-4 py-2 rounded">Download PDF</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Print
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default InvoiceModal;
