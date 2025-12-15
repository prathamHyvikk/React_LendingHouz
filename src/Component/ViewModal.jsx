import React from "react";

const ViewModal = ({onClose }) => {
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <h2 className="text-xl font-bold mb-4">Application Information</h2>

        <Section title="Customer Info">
          <Row label="Name" value="Jean Paul Trujillo" />
          <Row label="Phone" value="3055053389" />
          <Row label="Email" value="jeanpaultru@gmail.com" />
        </Section>

        <Section title="Application Details">
          <Row label="Application ID" value="985170" />
          <Row label="Product" value="Electronics" />
        </Section>
      </ModalWrapper>
    </>
  );
};

export default ViewModal;
