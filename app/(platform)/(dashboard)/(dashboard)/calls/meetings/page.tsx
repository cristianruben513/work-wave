import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
  title: "Reuniones",
};

export default function Page() {
  return <MyMeetingsPage />;
}
