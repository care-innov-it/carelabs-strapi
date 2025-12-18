import client from "@/lib/appollo-client";
import { GET_REGIONS } from "@/lib/api-Collection";

export async function getRegionsServer() {
  try {
    const res = await client.query({
      query: GET_REGIONS,
      fetchPolicy: "no-cache",
    });

    return res?.data?.regions || [];
  } catch (error) {
    console.error("Server region fetch failed:", error);
    return [];
  }
}
