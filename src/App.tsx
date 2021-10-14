import { ChakraProvider } from '@chakra-ui/react';
import CardContext from 'context/CardContext';
import Home from 'views/Home';

const App = () => {
  return (
    <ChakraProvider>
      <CardContext>
        <Home />
      </CardContext>
    </ChakraProvider>
  )
}

export default App;
