"use client";
export const dynamic = "force-dynamic";

import Dialog from "@/components/ui/dialog";
import Layout from "@/components/ui/layout";
import { increment, selectCount } from "@/features";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/store";
import { cn } from "@/libs";
import { onec } from "@/libs/onejir";
import { dialog } from "motion/react-client";
import React, { useEffect } from "react";

export default function Home() {
  const store = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  function dialog2() {
    onec.notification.dialog([
      {
        text: "Delete",
        hasSub: true,
        onClick() {
          dialog3(); // masuk step 3
        },
      },
      { text: "3223423", onClick: () => alert("Clicked: Share") },
      { text: "Do4324324wnload", onClick: () => alert("Clicked: Download") },
      { text: "Pr234324ofile", onClick: () => alert("Clicked: Profile") },
      { text: "Se324324ttings", onClick: () => alert("Clicked: Settings") },
      { text: "He3234324lp", onClick: () => alert("Clicked: Help") },
      { text: "Log3242342out", onClick: () => alert("Clicked: Logout") },
    ]);
  }

  function dialog3() {
    onec.notification.dialog([
      { text: "Set2tin234324gs", onClick: () => alert("Clicked: Settings") },
      { text: "H23el234324p", onClick: () => alert("Clicked: Help") },
      { text: "Log3243243242out", onClick: () => alert("Clicked: Logout") },
    ]);
  }

  function login() {
    onec.notification.dialog([
      {
        hasSub: true,
        text: "Silahkan login guys",
        isDanger: true,
        onClick() {
          dialog2(); // masuk step 2
        },
      },
      {
        text: "Report",
        isDanger: true,
        onClick: () => alert("Clicked: Report"),
      },
      { text: "Edit", onClick: () => alert("Clicked: Edit") },
      { text: "Delete", onClick: () => alert("Clicked: Delete") },
      { text: "Share", onClick: () => alert("Clicked: Share") },
      { text: "Download", onClick: () => alert("Clicked: Download") },
      { text: "Profile", onClick: () => alert("Clicked: Profile") },
      { text: "Settings", onClick: () => alert("Clicked: Settings") },
      { text: "Help", onClick: () => alert("Clicked: Help") },
      { text: "Logout", onClick: () => alert("Clicked: Logout") },
    ]);
  }

  return (
    <Layout>
      <Layout.Main>
        <button onClick={login}>Login</button>
        <button onClick={dialog2}>Login</button>
      </Layout.Main>
    </Layout>
  );
}
