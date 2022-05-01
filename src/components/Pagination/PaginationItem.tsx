import { Button, Stack, Box } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        color="white"
        backgroundColor="azul"
        disabled
        _disabled={{ bgColor: "gray.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      color="white"
      _hover={{ bgColor: "gray.500" }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
