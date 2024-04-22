import { getTableData } from "@/actions/get-table-data";
import PriceHistoryChart from "@/components/chart/price-history-chart";
import Hero from "@/components/hero";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Container } from "@/components/ui/container";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["coins"],
    queryFn: getTableData,
  });

  return (
    <main>
      <Hero />
      <Container className="my-10">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <DataTable columns={columns} />
        </HydrationBoundary>
        <PriceHistoryChart />
      </Container>
    </main>
  );
}
