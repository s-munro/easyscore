import React from "react";
// import SecondaryNav from "../../navbar/SecondaryNav";

const Contact = () => {
  const handleChange = (e) => {};
  return (
    <div>
      {/* <SecondaryNav /> */}
      <div>
        <form>
          <label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="name"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
