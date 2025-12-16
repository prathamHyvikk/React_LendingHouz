import React from "react";

const ConfirmEmailPopup = ({ setShowConfirmPopup }) => {
  return (
    <>
      <div
        id="reset-password-popup"
        class="fixed inset-0 bg-black/50  flex items-center justify-center z-70"
      >
        <div class="sm:w-98 w-72 flex gap-2 justify-center items-center flex-col bg-white p-3 sm:p-4 sm:pb-4 rounded-xl shadow-2xl">
          <div class="flex gap-2 items-center text-sm sm:text-2xl mt-2">
            <h4 class="sm:text-[28px] text-[22px] text-black sora-bold text-center mb-4">
              Reset Your Password
            </h4>
          </div>
          <p class="text-center sm:text-[14px] text-[12px] pb-2 px-2 sm:px-6">
            We’ve sent an email with reset password instructions to
            jane@gmail.com.
          </p>
          <div class="flex flex-col items-center gap-1">
            <span class="text-[12px] sm:text-[14px]">
              Didn’t receive an email?
            </span>
            <p class=" sora-semibold text-[12px] sm:text-sm">
              Contact at:{" "}
              <span class="underline sora-medium">Info@LendingHouz.com</span>
            </p>
          </div>

          <div class="text-center mt-4">
            <button
              onClick={() => setShowConfirmPopup(false)}
              id="cancel-reset-popup"
              class="sm:px-12 px-8 py-2 bg-(--primary-color) hover:bg-blue-900 transition-colors duration-300 text-white cursor-pointer text-sm rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmailPopup;
