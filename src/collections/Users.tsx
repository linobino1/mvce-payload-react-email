import { render } from "@react-email/components";
import { CollectionConfig } from "payload/types";
import React from "react";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    // UNCOMMENT THE FOLLOWING LINES
    // forgotPassword: {
    //   generateEmailHTML(args) {
    //     return render(<></>);
    //   },
    // },
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [],
};

export default Users;
