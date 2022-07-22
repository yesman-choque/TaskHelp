import { HStack, Text } from 'native-base'

export type OrderProps = {
   id: string;
   name: string;
   date: string;
   status: 'open' | 'close'
}

type Props = {
   data: OrderProps
}

export function Order({ data, ...rest }: Props) {
   return (
      <HStack>
         <Text color="white" fontSize="md">
            {data.name}
         </Text>
      </HStack>
   )
}