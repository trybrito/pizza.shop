import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-20" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-[164px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Telefone</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-[140px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>E-mail</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-[200px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Realiza há</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-[148px]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="ml-auto h-5 w-[140px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="ml-auto h-5 w-3" />
                </TableCell>
                <TableCell>
                  <Skeleton className="ml-auto h-5 w-12" />
                </TableCell>
                <TableCell>
                  <Skeleton className="ml-auto h-5 w-12" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell>
              <Skeleton className="ml-auto h-5 w-20" />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
