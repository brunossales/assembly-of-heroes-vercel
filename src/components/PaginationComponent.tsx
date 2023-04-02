import { Button, Container } from "@/styles/components/PaginationComponent";
import { ArrowBendDownLeft, ArrowBendUpRight, Prohibit } from "@phosphor-icons/react";
import { memo } from "react";

interface PaginationComponentProps {
  numHeros: number | undefined;
  offset: any;
  handleSetOffset: (page: number) => void;
}
const VISIBLE_PAGES = 4;

function PaginationComponent({
  numHeros,
  offset,
  handleSetOffset,
}: PaginationComponentProps) {
  if (!numHeros) return <></>;
  const pages = Math.ceil(numHeros / 12);
  const visiblePages = Math.min(VISIBLE_PAGES, pages);
  const current = offset > 10 ? offset / 12 + 1 : 1;
  const last = Math.min(current + visiblePages - 1, pages);
  const first = Math.max(last - visiblePages + 1, 1);

  function handleOnPageChange(page: number) {
    handleSetOffset((page - 1) * 12);
  }

  return (
    <Container>
      {
        <Button disabled={current === 1} onClick={() => handleOnPageChange(current - 1)}>
          {current > 1 ? <ArrowBendDownLeft size={20} /> : <Prohibit color="red" size={20} />}
        </Button>
      }

      <Button focus={current === 1} onClick={() => handleOnPageChange(1)}>1</Button>
      
      {current > 2 && <h3>...</h3>}

      {Array.from({ length: visiblePages })
        .map((_, index) => index + first)
        .map((page) => {
          return (
            (page !== pages && page !== 1)&& (
              <Button
                key={page}
                focus={page === current}
                onClick={() => handleOnPageChange(page)}
              >
                {page}
              </Button>
            )
          );
        })}
      {current < pages - 3 && <h3>...</h3>}
        <Button
          focus={pages === current}
          onClick={() => handleOnPageChange(pages)}
        >
          {pages}
        </Button>
      {
        <Button disabled={current === pages} onClick={() => handleOnPageChange(current + 1)}>
          {current < pages ? <ArrowBendUpRight size={20} /> : <Prohibit color="red" size={20} />}
        </Button>
      }
    </Container>
  );
}

export default memo(PaginationComponent);
