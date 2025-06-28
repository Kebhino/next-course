"use client";

import { useState } from "react";

export default function FancyDaisyTest() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        🎯 Test wypasionych komponentów daisyUI
      </h1>

      {/* AVATAR */}
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
        </div>
      </div>

      {/* PROGRESS BAR */}
      <progress
        className="progress progress-success w-56"
        value="70"
        max="100"
      ></progress>

      {/* TABS */}
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab tab-active">
          Tab 1
        </a>
        <a role="tab" className="tab">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>

      {/* ALERT */}
      <div className="alert alert-warning shadow-lg">
        <span>⚠️ To tylko testowy alert!</span>
      </div>

      {/* BUTTON & MODAL */}
      <button className="btn btn-accent" onClick={() => setOpen(true)}>
        Pokaż modal
      </button>

      {open && (
        <dialog id="modal-test" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">✨ Modal działa!</h3>
            <p className="py-4">
              To jest przykładowy modal z daisyUI. Piękny, prawda?
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setOpen(false)}>
                Zamknij
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
