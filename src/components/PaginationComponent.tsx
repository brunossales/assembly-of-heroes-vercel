import { Button, Container } from "@/styles/components/PaginationComponent";
import { memo } from "react";

interface PaginationComponentProps {
    numHeros: number | undefined;
    offset: any;
    handleSetOffset: (page: number) => void;
}
const VISIBLE_PAGES = 6;

function PaginationComponent({ numHeros, offset, handleSetOffset }: PaginationComponentProps) {
    if (!numHeros) return <></>;
    const pages = Math.ceil(numHeros / 12);
    const visiblePages = Math.min(VISIBLE_PAGES, pages);
    const current = offset > 10 ? (offset / 12) + 1 : 1;
    const last = Math.min(current + visiblePages - 1, pages);
    const first = Math.max(last - visiblePages + 1, 1);

    function handleOnPageChange(page: number) {
        handleSetOffset((page - 1) * 12)
    }

    return (
        <Container>
            {current > 1 && (
                <Button onClick={() => handleOnPageChange(current - 1)}>
                    ⬅
                </Button>
            )}
            
            <Button onClick={() => handleOnPageChange(1)}>
                    1
            </Button>
            {
                current > 6 && <h3>...</h3>
            }
            
            {
                Array.from({ length: visiblePages })
                    .map((_, index) => index + first)
                    .map((page) => {
                        return (
                            page !== (pages && 1) &&
                                <Button
                                    key={page}
                                    focus={page === current}
                                    onClick={() => handleOnPageChange(page)}>
                                    {page}
                                </Button>
                        )
                    })
            }
            {
                current < (pages - 5) && <h3>...</h3>
            }
            {
                <Button focus={pages === current} onClick={() => handleOnPageChange((pages))}>
                    {pages}
                </Button>
            }
            {current < pages && (
                <Button onClick={() => handleOnPageChange(current + 1)}>
                    ➡
                </Button>
            )}
        </Container>
    );
}

export default memo(PaginationComponent);