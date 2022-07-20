import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
   title: string;
}

export function Button({ title, ...res }: Props) {
   return (
      <ButtonNativeBase 
         bg="green.700"
         h={14}
         fontSize="sm"
         rounded="sm"
         _pressed={{
            bg: "green.500"
         }}
         {...res}
      >
         <Heading
            color="white"
            fontSize="sm"
         >
            {title}
         </Heading>
      </ButtonNativeBase>
   )
}