import { GetServerSidePropsContext } from "next";

export default function getPageNumber(context: GetServerSidePropsContext) {
  const page = context.query.page as string | undefined;
  return parseInt(page ?? "1");
}
