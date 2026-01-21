import React from "react";

const StepsCustome = () => {
  return (
    <div className="mx-3">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 top-0 h-full w-px bg-neutral-200"></div>

        <div className="relative pl-16 pb-16">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium">
            1
          </span>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Get pre-qualified
          </h3>
          <p className="text-neutral-600 max-w-xl">
            Share a few details to understand what you may qualify for—quickly
            and confidently.
          </p>
        </div>

        <div className="relative pl-16 pb-16">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium">
            2
          </span>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Explore loan options
          </h3>
          <p className="text-neutral-600 max-w-xl">
            Compare potential terms, monthly payments, and paths like purchase
            or refinance.
          </p>
        </div>

        <div className="relative pl-16 pb-16">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium">
            3
          </span>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Choose your best path
          </h3>
          <p className="text-neutral-600 max-w-xl">
            Select the option that fits your goals and feels comfortable for
            your budget.
          </p>
        </div>

        <div className="relative pl-16">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium">
            4
          </span>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Complete verification &amp; close
          </h3>
          <p className="text-neutral-600 max-w-xl">
            Finalize documentation and move toward closing with clear support
            along the way.
          </p>
        </div>
      </div>
    </div >
  );
};

export default StepsCustome;
