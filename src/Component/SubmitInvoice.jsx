import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import "../App.css"

const SubmitInvoice = ({ onClose, setAddInvoice }) => {
  const [invoiceType, setInvoiceType] = useState("upload");

  const [file, setFile] = useState();

  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
          <h1 className="!text-xl font-bold text-gray-900 mb-4">
            Submit Your Invoice
          </h1>

          <div className="flex gap-6 mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="upload"
                checked={invoiceType === "upload"}
                onChange={(e) => setInvoiceType(e.target.value)}
                className="mr-1 w-3 h-3 text-blue-600"
              />
              <span className="text-gray-700 font-medium text-sm">
                Upload Your Invoice
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="scan"
                checked={invoiceType === "scan"}
                onChange={(e) => setInvoiceType(e.target.value)}
                className="mr-1 w-3 h-3 text-blue-600"
              />
              <span className="text-gray-700 font-medium text-sm">
                Scan Your Invoice
              </span>
            </label>
          </div>

          {invoiceType === "upload" && (
            <div id="uploadMode" className="space-y-4 ">
              <div
                id="dropZone"
                className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
              >
                <svg
                  className="md:w-12 w-10 md:h-12 h-10 mx-auto text-blue-400 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-gray-700 font-medium sm:text-base text-sm">
                  Drag & drop files or{" "}
                  <span
                    id="browseLink"
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    Browse
                  </span>
                </p>
                <input
                  type="file"
                  id="fileInput"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="absolute opacity-0 cursor-pointer w-full h-full inset-0 "
                  accept=".jpeg,.jpg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.docx,.ppt,.pptx"
                />
              </div>

              <p className="sm:text-sm text-xs text-gray-500 text-center">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>

              {file && (
                <div id="filePreview" className=" bg-gray-50 p-0 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Selected file:</span>
                    <span id="fileName">{file?.name}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {invoiceType === "scan" && (
            <div id="scanMode" className=" space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 text-center">
                Scan Your QR Code
              </h2>

              <div className="relative w-60 h-60 mx-auto bg-gray-50 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-500"></div>

                <div className="scan-line absolute w-full h-1 bg-linear-to-b from-transparent via-green-500 to-transparent"></div>

                <p className="absolute text-gray-500 text-sm text-center">
                  Position QR code here
                </p>
              </div>

              <div className="text-center flex items-center justify-between">
                <p className="text-xs text-gray-600">
                  Or upload a QR code image
                </p>
                <label className="inline-block px-2 py-1 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition text-xs font-medium">
                  Choose File
                  <input
                    type="file"
                    id="qrFileInput"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
                <div
                  id="qrFilePreview"
                  className="hidden mt-3 text-sm text-gray-600"
                >
                  <span id="qrFileName"></span>
                </div>
              </div>
            </div>
          )}

          <button
            id="invoiceSubmitBtn"
            onClick={() => setAddInvoice(false)}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 text-sm px-6 rounded-full mt-4 transition"
          >
            Submit
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default SubmitInvoice;
