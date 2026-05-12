// SetData.jsx
"use client";

import { useContext, useEffect } from "react";
import { context } from "@/app/context/authContext";

export default function SetData({ data }) {
  const { settingName } = useContext(context);

  useEffect(() => {
    settingName(data.user);
  }, [data]);

  return null;
}