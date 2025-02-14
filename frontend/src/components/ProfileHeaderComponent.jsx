import React from "react";

const ProfileHeaderComponent = () => {
  return (
      <header className="bg-dark py-5">
        <div className="text-center my-5">
          <img
            class="img-fluid rounded-circle mb-4"
            src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
            alt="..."
          />
          <h1 class="text-white fs-3 fw-bolder">Full Width Pics</h1>
          <p class="text-white-50 mb-0">Landing Page Template</p>
        </div>
      </header>
  );
};

export default ProfileHeaderComponent;
